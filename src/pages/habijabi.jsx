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





import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../../assets/images/heading-img/avatar.png";
import logo2 from "../../../assets/images/logo2.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";

const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [cart] = UseCart();

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};

	const navItems = (
		<>
			<li>
				<Link
					to="/"
					className="text-black lg:text-black font-bold text-lg"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					to="/classes"
					className="text-black lg:text-black font-bold text-lg"
				>
					Classes
				</Link>
			</li>
			<li>
				<Link
					to="/instrators"
					className="text-black lg:text-black font-bold text-lg"
				>
					Instructors
				</Link>
			</li>

			<li>
				<Link
					to="/dashboard"
					className="text-black lg:text-black font-bold text-lg"
				>
					Dashboard
				</Link>
			</li>
			<li>
				<Link
					to="/dashboard/selectedclass"
					className="text-black lg:text-black font-bold text-lg"
				>
					<button className="btn ">
						<FaShoppingBag className="text-xl text-lime-700" />

						<div className="badge bg-lime-700 text-white p-3 rounded-lg">
							+{cart?.length || 0}
						</div>
					</button>
				</Link>
			</li>

			{user ? (
				<>
					<div className="flex gap-2">
						<div className="flex items-center">
							{user.photoURL ? (
								<img
									src={user?.photoURL}
									alt={user?.displayName}
									className="h-10 w-10 rounded-full ml-4 md:mr-2"
								/>
							) : (
								<img
									src={
										user &&
										(<FaUserCircle className="fs-1" />)
											?.photoURL
									}
									alt="avatar"
									className="h-10 w-10 rounded-full mr-2"
								/>
							)}
						</div>
						<button
							onClick={handleLogOut}
							className="btn btn-main text-white bg-lime-700 hover:bg-lime-600"
						>
							LogOut
						</button>
					</div>
				</>
			) : (
				<>
					<li>
						<Link
							to="/login"
							className=" btn btn-login font-semibold text-sm"
						>
							Login
						</Link>
					</li>
				</>
			)}
		</>
	);

	return (
		<div>
			<div className="navbar fixed z-10 bg-[#edf3f3] text-white md:px-20 w-full font-popins shadow-md">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden text-black"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-7 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navItems}
						</ul>
					</div>
					<Link
						to="/"
						className="font-extrabold text-lg text-emerald-700"
					>
						<img
							className="mx-auto"
							src={logo2}
							width="80"
							alt="logo"
						/>
						<p className="-mt-3">
							JazzYoga
							<span className="text-black">Camp</span>
						</p>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-8 gap-4 items-center">
						{navItems}
					</ul>
				</div>
				{/* <div className="navbar-end">
					<Link to="/login" className="btn btn-main">
						Login
					</Link>
				</div> */}
			</div>
		</div>
	);
};

export default NavBar;




