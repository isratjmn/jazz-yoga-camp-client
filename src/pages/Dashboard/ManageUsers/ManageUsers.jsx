import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaUserShield, FaUsersCog } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxios from "../../../hooks/useAxios";
import { Fade } from "react-awesome-reveal";

const ManageUsers = () => {
	const [axiosSecure] = useAxios();
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		return res.data;
	});

	const handleMakeAdmin = (user) => {
		const updatedUser = { ...user, role: "admin" };
		fetch(
			`https://jazz-yoga-camp-server.vercel.app/users/admin/${user._id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedUser),
			}
		)
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
		fetch(
			`https://jazz-yoga-camp-server.vercel.app/users/instructor/${user._id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedUser),
			}
		)
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
			<Fade direction="up" cascade damping={0.3} triggerOnce>
				<SectionHeading title="Manage Users" center={true} />
				<div className="overflow-x-auto h-[600px] w-[88%] mt-8 mx-auto mb-52 md:mb-28 rounded-md">
					<table className="table table-pin-rows">
						{/* Head */}
						<thead>
							<tr className="text-base text-neutral text-center h-16">
								<th className="bg-neutral/10 rounded-tl-lg">
									##
								</th>
								<th className="bg-neutral/10">Name</th>
								<th className="bg-neutral/10">Email</th>
								<th className="bg-neutral/10">Current Role</th>
								<th className="bg-neutral/10 rounded-tr-lg">
									Action
								</th>
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
									<td>
										<div className="flex flex-col gap-4">
											<button
												className="btn btn-ghost btn-md text-[12px] bg-lime-700  text-white capitalize"
												onClick={() =>
													handleMakeAdmin(user)
												}
												disabled={user.role === "admin"}
											>
												{user.role === "admin" ? (
													<FaUsersCog className="text-2xl text-lime-700" />
												) : (
													"Make Admin"
												)}
											</button>
											<button
												className="btn btn-ghost btn-md text-[12px] bg-lime-700  text-white capitalize"
												onClick={() =>
													handleMakeInstructor(user)
												}
												disabled={
													user.role === "instructor"
												}
											>
												{user.role === "instructor" ? (
													<FaUserShield className="text-2xl text-lime-700" />
												) : (
													"Make Instructor"
												)}
											</button>
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

export default ManageUsers;
