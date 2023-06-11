import React from "react";
import { Helmet } from "react-helmet-async";
import { FcApproval } from "react-icons/fc";

const MyClasses = () => {
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

						<tr>
							<td>1</td>
							<td>
								<div className="avatar flex items-center space-x-3">
									<div className="mask mask-squircle w-12 h-12">
										<img alt="Avatar" />
									</div>
								</div>
							</td>
							<td className="text-base font-semibold">Yoga</td>
							<td className="text-base font-semibold">20</td>
							<td className="text-base font-semibold">20</td>
							<td className="text-base font-semibold">Update</td>
							<td className="text-base font-semibold">
								<td>
									<button className="btn btn-ghost btn-md bg-slate-100">
										<FcApproval className="text-3xl text-white" />
									</button>
								</td>
							</td>
						</tr>
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
				<h2 className="text-lime-700">Total Selected Classes:</h2>

				<h2 className="text-lime-700"></h2>
			</div>
		</div>
	);
};

export default MyClasses;
