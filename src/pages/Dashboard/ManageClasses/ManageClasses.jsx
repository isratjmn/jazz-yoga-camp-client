import React from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ManageClasses = () => {
	const [axiosSecure] = useAxios();
	const { data: classes = [], refetch } = useQuery(["classes"], async () => {
		const res = await axiosSecure.get("/classes");
		return res.data;
	});

	const handleUpdateStatus = (item, status) => {
		console.log(item._id);
		fetch(
			`http://127.0.0.1:5000/classes/status/${item._id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ status: status }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				console.log(item);

				if (data.modifiedCount) {
					refetch();
					let message;
					if (status === "denied") {
						message = `${item.className} is Rejected`;
					} else if (status === "approved") {
						message = `${item.className} is Approved`;
					}
					Swal.fire({
						position: "center-center",
						icon: "success",
						title: message,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div>
			<SectionHeading title="Manage Classes" center={true} />
			<Fade direction="up" cascade damping={0.3} triggerOnce>
				<div className="overflow-x-auto h-[600px] mt-10 w-[88%] mx-auto mb-52 md:mb-28 rounded-md">
					<table className="table">
						{/* head */}
						<thead>
							
							<tr className="text-base text-neutral text-center">
								<th className="bg-neutral/10 rounded-tl-lg">
									##
								</th>
								<th className="bg-neutral/10">Image</th>
								<th className="bg-neutral/10">Class Name</th>
								<th className="bg-neutral/10">
									Instructor Name
								</th>
								<th className="bg-neutral/10">
									Available Seats
								</th>
								<th className="bg-neutral/10">Price</th>
								<th className="bg-neutral/10 rounded-tr-lg">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{classes.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>
										<img
											className="w-24"
											src={item.image}
											alt="img"
										/>
									</td>
									<td className="text-xl font-bold">
										{item.className}
									</td>
									<td className="text-base font-semibold">
										{item.instructorName}
									</td>
									<td className="text-base font-semibold">
										{item.availableSeats}
									</td>
									<td className="text-base font-semibold">
										$ {item.price}
									</td>

									<td>
										<div className="flex flex-col gap-2 items-center">
											<>
												{item.status === "denied" ? (
													<div className="flex">
														<button className="btn btn-disabled btn-link font-extrabold text-lime-700">
															<FaTimesCircle className="text-xl text-red-700" />
														</button>
													</div>
												) : (
													<button
														disabled={
															item.status ===
															"approved"
														}
														onClick={() =>
															handleUpdateStatus(
																item,
																"denied"
															)
														}
														className="bg-red-100 py-3 px-6 text-black rounded-lg font-bold"
													>
														Deny
													</button>
												)}
											</>
											<>
												{item.status === "approved" ? (
													<div className="flex">
														<button className="btn btn-disabled btn-link font-extrabold text-green-600">
															<FaCheckCircle className="text-4xl text-green-700" />
														</button>
													</div>
												) : (
													<button
														disabled={
															item.status ===
															"denied"
														}
														onClick={() =>
															handleUpdateStatus(
																item,
																"approved"
															)
														}
														className="bg-lime-600 py-3 px-3 text-white rounded-lg font-bold"
													>
														Approve
													</button>
												)}
											</>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Fade>
		</div>
	);
};

export default ManageClasses;
