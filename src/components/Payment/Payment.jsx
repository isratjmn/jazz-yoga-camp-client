import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { Fade } from "react-awesome-reveal";
import UseCart from "../../hooks/UseCart";
// import UseCart from "../../hooks/UseCart";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_PK}`);

const Payment = () => {
	const [cart] = UseCart();
	const { state: classDetails } = useLocation();
	return (
		<div>
			<SectionHeading
				title="Purchase Course"
				center={true}
			></SectionHeading>
			<Fade direction="up" cascade damping={0.2} triggerOnce>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<div>
						<h4 className="text-lg font-bold mb-2">
							{classDetails?.name}
						</h4>
						<h1 className="text-4xl font-bold gradient-text mb-6">
							$ {classDetails?.price}
						</h1>
						<img
							src={classDetails?.image}
							className="w-3/4 rounded-lg"
							alt="img"
						/>
					</div>
					<div>
						<Elements stripe={stripePromise}>
							<CheckoutForm
								classDetails={classDetails}
								cart={cart}
							/>
						</Elements>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Payment;
