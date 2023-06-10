import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaUserShield, FaUsersCog } from "react-icons/fa";

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await fetch("http://localhost:5000/users");
		return res.json();
	});

	const handleMakeAdmin = (user) => {
		const updatedUser = { ...user, role: "admin" };

		fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedUser),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${user.name} is an Admin Now`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleMakeInstructor = (user) => {
		const updatedUser = { ...user, role: "instructor" };

		fetch(`http://localhost:5000/users/instructor/${user._id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedUser),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${user.name} is an Instructor Now`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Manage Users</title>
			</Helmet>

			<div className="font-bold w-[90%] mx-auto mt-10 flex justify-around items-center text-lg h-[70px]">
				<h2 className="text-lime-700">
					Total Selected Classes: {users.length}
				</h2>
				<h2 className="text-lime-700">Total Price: $123</h2>
			</div>
			<div className="overflow-x-auto w-[88%] mt-2 mx-auto mb-28 border rounded-md">
				<table className="table">
					{/* head */}
					<thead>
						<tr className="bg-gray-200 font-semibold text-base">
							<th>##</th>
							{/* <th>Name</th> */}
							<th>Email</th>
							<th>Current Role</th>
							<th className="">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<td>{index + 1}</td>
								{/* <td className="text-base font-semibold">
									{user.name}
								</td> */}
								<td className="text-base font-semibold">
									{user.email}
								</td>
								<td className="text-base font-semibold">
									{user.role}{" "}
									{/* Display the current user role */}
								</td>
								<td className="flex gap-4">
									<button
										className="btn btn-ghost btn-md text-[12px] bg-lime-700 text-white capitalize"
										onClick={() => handleMakeAdmin(user)}
										disabled={user.role === "admin"}
									>
										{user.role === "admin" ? (
											<FaUsersCog className="text-3xl" />
										) : (
											"Make Admin"
										)}
									</button>
									<button
										className="btn btn-ghost btn-md text-[12px] bg-lime-700 text-white capitalize"
										onClick={() =>
											handleMakeInstructor(user)
										}
										disabled={user.role === "instructor"}
									>
										{user.role === "instructor" ? (
											<FaUserShield className="text-3xl" />
										) : (
											"Make Instructor"
										)}
									</button>
								</td>
							</tr>
						))}
					</tbody>
					{/* footer */}
					<tfoot>
						<tr className="bg-gray-200 font-semibold text-base">
							<th>##</th>
							{/* <th>Name</th> */}
							<th>Email</th>
							<th>Current Role</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
