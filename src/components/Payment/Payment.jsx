import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_PK}`);
const Payment = () => {
	return (
		<div>
			<SectionHeading title="Payment" center={true}></SectionHeading>

			<div className="">
				<Elements stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
