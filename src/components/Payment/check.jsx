import { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTheme from "../hooks/useTheme"; // Assuming this hook is defined elsewhere

const PaymentForm = ({
	classDetails,
	user,
	secureAxios,
	_id,
	classId,
	price,
}) => {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const { theme } = useTheme();

	const [clientSecret, setClientSecret] = useState("");
	const [cardError, setCardError] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (classDetails?.price > 0) {
			secureAxios
				.post("/create-payment-intent", { price: classDetails.price })
				.then((res) => {
					setClientSecret(res.data.clientSecret);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [classDetails, secureAxios]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		if (!stripe || !elements) {
			setError("Stripe has not loaded properly");
			setLoading(false);
			return;
		}

		const card = elements.getElement(CardElement);
		if (card == null) {
			setError("Card details not found");
			setLoading(false);
			return;
		}

		try {
			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: "card",
				card,
			});

			if (error) {
				console.log("[error]", error);
				setCardError(error.message);
				setLoading(false);
				return;
			} else {
				console.log("[PaymentMethod]", paymentMethod);
			}

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
				setLoading(false);
				return;
			}

			console.log("payment intent", paymentIntent);

			if (paymentIntent && paymentIntent.status === "succeeded") {
				const res = await secureAxios.post("save-payment-info", {
					_id,
					classId,
					email: user.email,
					paymentAmount: price,
					transactionId: paymentIntent.id,
				});

				if (res.data?.result.insertedId) {
					Swal.fire({
						icon: "success",
						title: "Success!",
						text: "Payment successful",
						timer: 2000,
						showConfirmButton: false,
					});
					navigate("/dashboard/my-enrolled-classes");
				} else {
					throw new Error("Failed to save payment info");
				}
			} else {
				throw new Error("Payment not succeeded");
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			{cardError && <p>{cardError}</p>}
			{error && <p>{error}</p>}
			<button type="submit" disabled={!stripe || loading}>
				{loading ? "Processing..." : "Pay"}
			</button>
		</form>
	);
};

export default PaymentForm;
