import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckoutForm.css";
import { BiWallet } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const { user } = useContext(AuthContext);
	const [clientSecret, setclientSecret] = useState('')
	
	useEffect(()=> {
		// Generate Client Secret and Save in State

	}, [])

	const handleSubmit = async (event) => {
		
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}
		// Use your card Element with other Stripe.js APIs
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
		// Confirm Payment

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
			.then(function (result) {
				// Handle result.error or result.paymentIntent
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>

				<button
					class="btn btn-main mx-auto"
					type="submit"
					disabled={!stripe}
				>
					Pay <BiWallet className="text-2xl" />
				</button>
			</form>
			{cardError && <p className="text-red-600">{cardError}</p>}
		</>
	);
};
export default CheckoutForm;
