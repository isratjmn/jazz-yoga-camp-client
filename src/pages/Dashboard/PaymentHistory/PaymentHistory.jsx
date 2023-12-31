import React, { useEffect } from "react";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Fade } from "react-awesome-reveal";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const PaymentHistory = () => {
	// const { enrolledClasses, isLoading } = useEnrolledClasses();
	const [secureAxios] = useAxios();
	const { user } = useAuth();
	const [paymentHistories, setPaymentHistories] = useState([]);
	useEffect(() => {
		secureAxios
			.get(`/payment-history?email=${user?.email}`)
			.then(({ data }) => {
				setPaymentHistories(data);
			});
	}, []);
	return (
		<Fade direction="up" cascade damping={0.3} triggerOnce>
			<Helmet>
				<title>JazzYogaCamp | Payment History</title>
			</Helmet>
			<SectionHeading title="Payment History" center={true} />

			<div className="w-full overflow-x-auto mt-10">
				<table className="table border">
					{/* head */}
					<thead>
						<tr className="text-base text-neutral text-center">
							<th className="bg-neutral/10 rounded-tl-lg">SL</th>
							<th className="bg-neutral/10 w-[60%]">
								Class Name
							</th>
							<th className="bg-neutral/10">
								Payment
								<br />
								Amount
							</th>
							<th className="bg-neutral/10">
								Transaction
								<br />
								ID
							</th>
							<th className="bg-neutral/10 rounded-tr-lg">
								Payment
								<br />
								Date
							</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{paymentHistories.map((payments, index) => (
							<tr key={payments?._id}>
								<th>{index + 1}</th>
								<td className="">
									<div className="w-[70%] flex items-center space-x-3">
										<div className="font-bold text-base">
											{payments?.classes}
										</div>
									</div>
								</td>
								<td className="text-lg font-semibold">
									$ {payments?.paymentAmount}
								</td>
								<td>{payments?.transactionId}</td>
								<th className="space-x-3">
									{moment(payments?.date).format(
										"YYYY-MM-DD"
									)}
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Fade>
	);
};

export default PaymentHistory;
