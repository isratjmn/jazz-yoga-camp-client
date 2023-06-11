import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { HiTrash } from "react-icons/hi2";
import Swal from "sweetalert2";

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await fetch("http://localhost:5000/users");
		return res.json();
	});


	const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
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
			});
		// console.log(`Make admin - User ID: ${user}`);
	};

    

	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Manage Users</title>
			</Helmet>

			<div className="font-bold w-[90%] mx-auto mb-12 flex justify-around items-center text-lg h-[70px]">
				<h2 className="text-lime-700">
					Total Selected Classes: {users.length}
				</h2>
				<h2 className="text-lime-700">Total Price: $123</h2>
			</div>
			<div className="overflow-x-auto w-[88%] mt-6 mx-auto border rounded-md">
				<table className="table">
					{/* head */}
					<thead>
						<tr className="bg-gray-200 font-semibold text-base">
							<th>##</th>
							<th>Name</th>
							<th>Email</th>
							<th>Current Role</th>
							<th className="">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<td>{index + 1}</td>
								<td className="text-base font-semibold">
									{user.name}
								</td>
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
										onClick={() =>
											handleMakeAdmin(user)
										}
										disabled={user.role === "admin"} // Disable the button if user is already an admin
									>
										{user.role === "admin"
											? "Admin"
											: "Make Admin"}
									</button>
									{/* <button
										className="btn btn-ghost btn-md text-[12px] bg-lime-700 text-white capitalize"
										onClick={() =>
											handleMakeInstructor(user._id)
										}
										disabled={user.role === "instructor"} // Disable the button if user is already an instructor
									>
										{user.role === "instructor"
											? "Instructor"
											: "Make Instructor"}
									</button> */}
								</td>
							</tr>
						))}
					</tbody>
					{/* footer */}
					<tfoot>
						<tr className="bg-gray-200 font-semibold text-base">
							<th>##</th>
							<th>Name</th>
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












<div>
			<Helmet>
				<title>JazzYogaCamp | Manage Users</title>
			</Helmet>

			<div className="font-bold w-[90%] mx-auto mb-12 flex justify-around items-center text-lg h-[70px]">
				<h2 className="text-lime-700">
					Total Selected Classes: {users.length}
				</h2>
				<h2 className="text-lime-700">Total Price: $123</h2>
			</div>

			<div className="overflow-x-auto w-[88%] mt-6 mx-auto border rounded-md">
				{/* head */}
				<thead>
					<tr className="bg-gray-200 font-semibold text-base">
						<th>##</th>
						<th>Name</th>
						<th>Email</th>
						<th>Current Role</th>
						<th className="">Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user._id}>
							<td>{index + 1}</td>
							<td className="text-base font-semibold">
								{user.name}
							</td>
							<td className="text-base font-semibold">
								{user.email}
							</td>
							<td className="text-base font-semibold">
								{user.role}
							</td>
							<td className="flex gap-4">
								<button
									className="btn btn-ghost btn-md text-[12px] bg-lime-700 text-white capitalize"
									onClick={() => handleMakeAdmin(user)}
									disabled={user.role === "admin"}
								>
									{user.role === "admin"
										? "Admin"
										: "Make Admin"}
								</button>
								<button
									className="btn btn-ghost btn-md text-[12px] bg-lime-700 text-white capitalize"
									onClick={() => handleMakeInstructor(user)}
									disabled={user.role === "instructor"}
								>
									{user.role === "instructor"
										? "Instructor"
										: "Make Instructor"}
								</button>
							</td>
						</tr>
					))}
				</tbody>
				{/* footer */}
				<tfoot>
					<tr className="bg-gray-200 font-semibold text-base">
						<th>##</th>
						<th>Name</th>
						<th>Email</th>
						<th>Current Role</th>
						<th>Action</th>
					</tr>
				</tfoot>
			</div>

			
		</div>












useCart.jsx 


queryFn: async () => {
	const res = await fetch(
		`http://localhost:5000/carts?email=${user?.email}`
		/* {
			headers: {
				authorization: `bearer ${token}`,
			},
		} */
	);
	return res.json();
},






