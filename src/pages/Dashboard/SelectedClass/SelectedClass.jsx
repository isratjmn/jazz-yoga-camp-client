import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { HiTrash } from "react-icons/hi2";
import { BiWallet } from "react-icons/bi";
import Swal from "sweetalert2";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useNavigate } from "react-router-dom";

const SelectedClass = () => {
	const [cart, refetch] = UseCart();
	const navigate = useNavigate();
	const total = cart.reduce((sum, item) => item.price + sum, 0);
	const handleDelete = (item) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Delete It!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://jazz-yoga-camp-server.vercel.app/carts/${item._id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								"Deleted!",
								"Your Class Has Been Deleted.",
								"success"
							);
						}
					});
			}
		});
	};

	const handlePurchase = (item) => {
		navigate("/dashboard/payment", {
			state: item,
		});
	};

	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Selected Class</title>
			</Helmet>
			<SectionHeading title="Selected Classes" center={true} />

			<Fade direction="up" cascade damping={0.3} triggerOnce>
				<div className="overflow-x-auto w-[88%] mt-4 mx-auto rounded-md">
					<table className="table">
						{/* Head */}
						<thead>
							<tr className="bg-gray-200 font-semibold text-base">
								<th>SL</th>
								<th>Image</th>
								<th>Class Name</th>
								<th>Price</th>
								<th>Payment</th>
								<th>Action</th>
							</tr>
						</thead>
						{cart?.length === 0 ? (
							<tbody>
								<tr>
									<td
										colSpan="10"
										className="text-red-600 font-semibold text-lg mx-auto text-center"
									>
										Not Selected Any Classes Yet
									</td>
								</tr>
							</tbody>
						) : (
							<tbody>
								{/* Row */}
								{cart.map((item, index) => (
									<tr key={item._id}>
										<td>{index + 1}</td>
										<td>
											<div className="avatar flex items-center space-x-3">
												<div className="mask mask-squircle w-12 h-12">
													<img
														src={item.image}
														alt="Avatar Tailwind CSS Component"
													/>
												</div>
											</div>
										</td>
										<td className="text-base font-semibold">
											{item.className}
										</td>
										<td className="text-base font-semibold">
											${item.price}
										</td>
										<td className="text-base font-semibold">
											<button
												className="btn btn-main"
												disabled={!item.availableSeats}
												onClick={() =>
													handlePurchase(item)
												}
											>
												<BiWallet className="text-2xl" />
											</button>
										</td>
										<td>
											<button
												onClick={() =>
													handleDelete(item)
												}
												className="btn btn-ghost btn-md bg-red-600"
											>
												<HiTrash className="text-2xl text-white" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						)}
						{/* Footer */}
						<tfoot>
							<tr className="bg-gray-200 font-semibold text-base">
								<th>SL</th>
								<th>Image</th>
								<th>Class Name</th>
								<th>Price</th>
								<th>Payment</th>
								<th>Action</th>
							</tr>
						</tfoot>
					</table>
				</div>
			</Fade>
		</div>
	);
};

export default SelectedClass;
