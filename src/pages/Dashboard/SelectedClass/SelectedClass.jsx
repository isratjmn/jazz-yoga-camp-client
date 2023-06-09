import React from "react";
import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { HiTrash } from "react-icons/hi2";
import { BiWallet } from "react-icons/bi";
import Swal from "sweetalert2";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const SelectedClass = () => {
	const [cart, refetch] = UseCart();
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
				fetch(`https://jazz-yoga-camp-server.vercel.app/carts/${item._id}`, {
					method: "DELETE",
				})
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

	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Selected Class</title>
			</Helmet>
			<SectionHeading title="Selected Classes" center={true} />

			<div>
				<div className="overflow-x-auto w-[88%] mt-4 mx-auto rounded-md">
					<table className="table">
						{/* head */}
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
						{cart.length === 0 ? (
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
								{/* row */}
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
											<button class="btn btn-main">
												Pay{" "}
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
						{/* footer */}
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
				<div className="font-bold w-[90%] mx-auto mb-12 flex justify-around items-center text-lg h-[70px]">
					<h2 className="text-lime-700">
						Total Selected Classes: {cart.length}
					</h2>
					<h2 className="text-lime-700">Total Price: ${total}</h2>
				</div>
			</div>
		</div>
	);
};

export default SelectedClass;
