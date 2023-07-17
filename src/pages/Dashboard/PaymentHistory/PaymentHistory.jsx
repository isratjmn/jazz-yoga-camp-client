import React from "react";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Fade } from "react-awesome-reveal";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";

const PaymentHistory = () => {
	const { enrolledClasses, isLoading } = useEnrolledClasses();
	return (
		<Fade direction="up" cascade damping={0.3} triggerOnce>
			<Helmet>
				<title>JazzYogaCamp | Payment History</title>
			</Helmet>
			<SectionHeading title="Payment History" center={true} />

			<div className="w-full overflow-x-auto">
				<table className="table border">
					{/* head */}
					<thead>
						<tr className="text-base text-neutral text-center">
							<th className="bg-neutral/10 rounded-tl-lg"></th>
							<th className="bg-neutral/10">Class</th>
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
						{enrolledClasses.map((item, index) => (
							<tr key={item._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-16 h-16">
												<img
													src={
														item.classDetails.image
													}
													alt=""
												/>
											</div>
										</div>
										<div>
											<div className="font-bold text-base">
												{item.classDetails.name}
											</div>
										</div>
									</div>
								</td>
								<td className="text-lg font-semibold">
									$ {item.paymentAmount}
								</td>
								<td>{item.transactionId}</td>
								<th className="space-x-3">
									{moment(item.date).format(
										"MMMM DD YYYY, h:mm:ss a"
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
