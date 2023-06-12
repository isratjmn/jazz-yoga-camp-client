import { Helmet } from "react-helmet-async";
import { FcApproval } from "react-icons/fc";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyClasses = () => {
	const [classes, setClasses] = useState([]);

	const fetchClasses = async () => {
		try {
			const response = await axios.get("/classes");
			setClasses(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	// Retrieve classes on component mount
	useEffect(() => {
		fetchClasses();
	}, []);
	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | My Classes</title>
			</Helmet>
			<SectionHeading title="My Classes" center={true} />
			<div className="overflow-x-auto w-[88%] mt-6 mx-auto rounded-md">
				<table className="table">
					{/* head */}
					<thead>
						<tr className="bg-gray-200 font-semibold text-base">
							<th>SL</th>
							<th>Image</th>
							<th>Class Name</th>
							<th>Enrolled</th>
							<th>Ava. Seats</th>
							<th>Feedback</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{/* row */}
						{classes.map((classItem) => (
							<tr key={classItem.id}>
								<td>1</td>
								<td>
									<div className="avatar flex items-center space-x-3">
										<div className="mask mask-squircle w-12 h-12">
											<img alt="Avatar" />
										</div>
									</div>
								</td>
								<td className="text-base font-semibold">
								{classItem.className}
								</td>
								<td className="text-base font-semibold">{classItem.status}</td>
								<td className="text-base font-semibold">{classItem.totalEnrolledStudents}</td>
								<td className="text-base font-semibold">
								{classItem.feedback}
								</td>
								<td className="text-base font-semibold">
									<td>
										<button className="btn btn-ghost btn-md bg-slate-100">
											<FcApproval className="text-3xl text-white" />
										</button>
									</td>
								</td>
								
							</tr>
						))}
					</tbody>
					{/* footer */}
					<tfoot>
						<tr className="bg-gray-200 font-semibold text-base">
							<th>SL</th>
							<th>Image</th>
							<th>Class Name</th>
							<th>Enrolled</th>
							<th>Ava. Seats</th>
							<th>Feedback</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className="font-bold w-[90%] mx-auto mb-12 flex justify-around items-center text-lg h-[70px]">
				<h2 className="text-lime-700"></h2>
				<h2 className="text-lime-700"></h2>
			</div>
		</div>
	);
};

export default MyClasses;
