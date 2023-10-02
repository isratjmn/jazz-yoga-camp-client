import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BiWallet } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import "./CheckoutForm.css";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, classDetails }) => {
	const { user } = useAuth();
	const stripe = useStripe();
	const elements = useElements();
	const { theme } = useTheme();
	const [CardError, setCardError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [secureAxios] = useAxios();
	const [processing, setProcessing] = useState(false);
	const [clientSecret, setClientSecret] = useState("");
	const [transactionId, setTransactionId] = useState("");

	// 1. Get ClientSecret From Backend
	useEffect(() => {
		if (classDetails?.price > 0) {
			console.log(classDetails?.price);
			secureAxios
				.post("/create-payment-intent", { price: classDetails?.price })
				.then((res) => {
					setClientSecret(res.data.clientSecret);
				});
		}
	}, [classDetails?.price, secureAxios]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}
		console.log("card", card);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("[error]", error);
			setCardError(error.message);
		} else {
			setCardError("");
			console.log("[PaymentMethod]", paymentMethod);
		}
		setProcessing(true);

		// Confirm Payment
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || "anonymous",
						email: user?.email || "unknown",
					},
				},
			});
		if (confirmError) {
			console.log(confirmError);
			setCardError(confirmError.message);
		}
		console.log("payment intent", paymentIntent);
		setProcessing(false);

		if (paymentIntent && paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);

			// Save Payment Information to the Server
			const payment = {
				transactionId: paymentIntent.id,
				userEmail: user?.email,
				date: new Date(),
				quantity: cart.length,
				paymentAmount: classDetails?.price,
				cartItems: cart.map((item) => item._id),
				enrollItems: cart.map((item) => item.itemId),
				classesNames: cart.map((item) => item.className),

			
			};
			secureAxios.post("/payments", payment).then((res) => {
				console.log(res.data);
				if (res.data && res.data.insertResult.insertedId) {
					Swal.fire({
						icon: "success",
						title: "Success!",
						text: "Payment successful",
						timer: 2000,
						showConfirmButton: false,
					});
					console.log("payment-success");
					navigate("/dashboard/enrollclass");
				}
			});
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-14">
				<div className="form-control mb-4">
					<label className="label">
						<span className="label-text">Name</span>
					</label>
					<input
						type="text"
						placeholder="name"
						className="input input-bordered focus:outline-none"
						defaultValue={user?.displayName}
						readOnly
					/>
				</div>
				<div className="form-control mb-4">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="email"
						className="input input-bordered focus:outline-none"
						defaultValue={user?.email}
						readOnly
					/>
				</div>
				<div className="form-control">
					<label className="label pb-0">
						<span className="label-text">Card Information</span>
					</label>
				</div>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",

								color: theme === "dark" ? "#eee" : "999999",
								"::placeholder": {
									color:
										theme === "dark"
											? "lightgray"
											: "darkgray",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<div className="text-center mt-4">
					<button
						type="submit"
						disabled={
							!stripe || !clientSecret || loading || processing
						}
						className="btn btn-gradient w-full disabled:text-white"
					>
						{loading ? (
							<span className="loading font-bold loading-spinner"></span>
						) : (
							"Payment"
						)}
					</button>
				</div>
			</form>
			{CardError && (
				<p className="text-red-600 mx-auto mt-4 font-bold">
					{CardError}
				</p>
			)}
			{transactionId && (
				<p className="text-lime-700 mx-auto mt-4 font-bold">
					Transaction Complete with TransactionId: {transactionId}
				</p>
			)}
		</>
	);
};

export default CheckoutForm;
