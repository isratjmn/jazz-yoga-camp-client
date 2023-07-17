import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BiWallet } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import "./CheckoutForm.css";

const CheckoutForm = ({ classDetails }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const { user } = useContext(AuthContext);
	const [clientSecret, setclientSecret] = useState("");
	const [loading, setLoading] = useState(false);
	const { theme } = useTheme();
	const { _id, price, classId } = classDetails;
	const navigate = useNavigate();

	useEffect(() => {}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("[error]", error);
			setCardError(error.message);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
		}

		const { paymentIntent, error: confirmError } = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || "unknown",
						eamil: user?.eamil || "anonymous",
					},
				},
			})
			.then(function (result) {});
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
				{/* <button
					class="btn btn-main mx-auto"
					type="submit"
					disabled={!stripe}
				>
					Pay <BiWallet className="text-2xl" />
				</button> */}
				{cardError && <p className="text-red-600">{cardError}</p>}
				<div className="text-center mt-4">
					<button
						type="submit"
						disabled={!stripe || loading}
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
		</>
	);
};
export default CheckoutForm;
