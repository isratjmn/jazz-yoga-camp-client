import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../../assets/images/heading-img/avatar.png";
import logo2 from "../../../assets/images/logo2.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";

const NavBar = ({ children }) => {
	const { user, logOut } = useContext(AuthContext);
	const [cart] = UseCart();
	const [dark, setDark] = useState(false);

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
					<button className="btn">
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
							className="btn btn-login font-semibold text-sm"
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
			</div>
			{children}
		</div>
	);
};

export default NavBar;
