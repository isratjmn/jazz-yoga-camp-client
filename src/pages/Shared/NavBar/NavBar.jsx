import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo2 from "../../../assets/images/logo2.png";

const NavBar = () => {
	const navItems = (
		<>
			<li>
				<Link
					to="/"
					className="text-black lg:text-black font-semibold text-lg"
				>
					Home
				</Link>
			</li>

			<li>
				<Link
					to="/instructor"
					className="text-black lg:text-black font-semibold text-lg"
				>
					Instructors
				</Link>
			</li>
			<li>
				<Link
					to="/classes"
					className="text-black lg:text-black font-semibold text-lg"
				>
					Classes
				</Link>
			</li>
			<li>
				<Link
					to="/dashboard"
					className="text-black lg:text-black font-semibold text-lg"
				>
					Dashboard
				</Link>
			</li>


			{/* {user ? (
				<>
					<span>{user?.displayName}</span>
					<button
						onClick={handleLogOut}
						className="btn btn-active btn-ghost"
					>
						LogOut
					</button>
				</>
			) : (
				<>
					<li>
						<Link
							to="/login"
							className="text-black lg:text-white font-semibold text-lg"
						>
							Login
						</Link>
					</li>
				</>
			)} */}
		</>
	);

	return (
		<div>
			<div className="navbar fixed z-10 bg-[#edf3f3] text-white md:px-20 w-full font-popins">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
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
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
							alt=""
						/>
						<p className="-mt-3">
							JazzYoga
							<span className="text-black">Camp</span>
						</p>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navItems}</ul>
				</div>
				<div className="navbar-end">
					<Link to ='/login' className="btn btn-main">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
