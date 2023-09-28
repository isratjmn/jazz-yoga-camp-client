import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Fade } from "react-awesome-reveal";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";

const EnrolledClass = ({ enrollItems }) => {
	const { enrolledClasses } = useEnrolledClasses();
	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Enrolled Classes</title>
			</Helmet>
			<Fade direction="up" cascade damping={0.3} triggerOnce>
				<SectionHeading title="Enrolled Classes" center={true} />

				<div className="overflow-x-auto mt-10">
					<table className="table">
						{/* Head */}
						<thead>
							<tr className="text-xl text-neutral">
								<th className="bg-neutral/10 rounded-tl-lg"></th>
								<th className="bg-neutral/10">Image</th>
								<th className="bg-neutral/10">Name</th>
								<th className="bg-neutral/10">Instructor</th>
								<th className="bg-neutral/10 rounded-tr-lg">
									Enrolled Date
								</th>
							</tr>
						</thead>
						<tbody>
							{/* Rows */}
							{enrollItems?.map((item, i) => (
								<tr key={item._id}>
									<th>{i + 1}</th>
									<td>
										<div className="avatar">
											<div className="mask mask-squircle w-16 h-16">
												<img
													src={
														item.classDetails.image
													}
													alt="img"
												/>
											</div>
										</div>
									</td>
									<td className="text-lg font-semibold">
										{item.classDetails.name}
									</td>
									<td>
										<h2 className="text-base font-semibold">
											{item?.classDetails.instructor.name}
										</h2>
										<p>
											{
												item?.classDetails.instructor
													.email
											}
										</p>
									</td>
									<th className="space-x-3">
										{moment(item.date).format(
											"DD MMM YYYY"
										)}
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Fade>
		</div>
	);
};

export default EnrolledClass;
