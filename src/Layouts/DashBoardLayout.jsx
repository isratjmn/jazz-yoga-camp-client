import React from "react";
import { Outlet, NavLink, Link, ScrollRestoration } from "react-router-dom";
import "react-modern-drawer/dist/index.css";
import { FaIdCardAlt, FaUsers } from "react-icons/fa";
import logo2 from "../assets/images/banner/logo2.png";
import { BiUserPin } from "react-icons/bi";
import {
	RiFileUserFill,
	RiAccountCircleLine,
	RiAddBoxFill,
} from "react-icons/ri";
import { HiHome } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import {
	FaCalendarAlt,
	FaWallet,
	FaRestroom,
	FaUserShield,
	FaBars,
} from "react-icons/fa";
import UseCart from "../hooks/UseCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import ThemeToggler from "../components/ThemeToggler";
import useAuth from "../hooks/useAuth";

const DashBoardLayout = () => {
	const { user } = useAuth();
	const [cart] = UseCart();
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();

	return (
		<div className="drawer lg:drawer-open max-w-[100vw]">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col w-[100vw] lg:w-[65vw] xl:w-[72vw] mx-auto">
				{/* Page content here */}
				<div className="navbar bg-base-300 lg:hidden justify-between mx-auto">
					<Link to="/" className="shrink-0">
						<div className="w-10 h-10 rounded-full gradient-bg grid place-content-center">
							<div className="w-8 h-8 rounded-full bg-base-300 text-center font-bold text-2xl text-neutral">
								<img src={logo2} alt="" />
							</div>
						</div>
						<h2 className={`ml-2 text-2xl font-bold gradient-text`}>
							JazzYogaCamp
						</h2>
					</Link>
					<label
						htmlFor="my-drawer-2"
						className="btn btn-ghost hover:bg-inherit text-xl drawer-button"
					>
						<FaBars />
					</label>
				</div>

				<Outlet />
				<ScrollRestoration />
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>

				<ul className="menu p-4 w-80 h-full bg-base-300 text-base-content dashboard flex-nowrap overflow-auto">
					<div className="flex justify-between">
						<div className="flex items-center mb-6">
							<div className="w-16 h-16 rounded-full gradient-bg grid place-content-center">
								<div className="w-14 h-14 rounded-full bg-base-300 text-center font-bold text-5xl text-neutral">
									<img src={logo2} alt="" />
								</div>
							</div>
							<h2
								className={`ml-2 text-2xl font-bold gradient-text`}
							>
								JazzYogaCamp
							</h2>
						</div>

						<ThemeToggler />
					</div>
					<div className="flex gap-3 p-4 mb-2 bg-neutral/10 rounded-md items-center">
						<div className="mask mask-circle w-9 h-9">
							<img src={user?.photoURL} />
						</div>
						<div>
							<h3 className="font-bold text-lime-700 text-sm">
								{user?.displayName}
							</h3>
						</div>
					</div>
					{/* Sidebar content here */}
					{isAdmin ? (
						<>
							<ul className="">
								<h2 className="font-bold mb-4 bg-neutral/10 py-2 rounded-lg justify-center mx-20 text-sm items-center text-lime-700 flex align-middle gap-2">
									<FaUserShield className="text-xl" /> Admin
								</h2>
								<li className="mb-3">
									<NavLink
										className="dark:text-white pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
										to="/dashboard/manageclasses"
									>
										<FaIdCardAlt className="text-xl text-lime-700" />{" "}
										Manage Classes
									</NavLink>
								</li>
								<li className="mb-3">
									<NavLink
										className="dark:text-white  pt-6 text-semibold text-base flex gap-3 items-center"
										to="/dashboard/manageusers"
									>
										<FaUsers className="text-xl text-lime-700" />
										Manage Users
									</NavLink>
								</li>
							</ul>
						</>
					) : isInstructor ? (
						<>
							<ul>
								<h2 className="font-bold mb-4 bg-neutral/10 py-2 rounded-lg justify-center mx-20 text-sm items-center text-lime-700 flex align-middle gap-2">
									<RiAccountCircleLine className="text-2xl" />
									Instructor
								</h2>
								<li className="mb-4">
									<NavLink
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
										to="/dashboard/addaclass"
									>
										<RiAddBoxFill className="text-2xl text-lime-700" />{" "}
										Add Classes
									</NavLink>
								</li>
								<li className="mb-4">
									<NavLink
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
										to="/dashboard/myclasses"
									>
										<SiGoogleclassroom className="text-xl text-lime-700" />{" "}
										My Classes
									</NavLink>
								</li>
							</ul>
						</>
					) : (
						<>
							<ul>
								<h2 className="font-bold mb-4 bg-neutral/10 py-2 rounded-lg justify-center mx-20 text-sm items-center text-lime-700 flex align-middle gap-2">
									<RiAccountCircleLine className="text-2xl" />
									Student
								</h2>
								<li className="mb-4">
									<NavLink
										to="/dashboard/selectedclass"
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
									>
										<BiUserPin className="text-2xl text-lime-700" />
										Selected Classes
										<div className="badge bg-lime-700 text-white p-3 rounded-lg">
											+{cart?.length || 0}
										</div>
									</NavLink>
								</li>
								<li className="mb-4">
									<NavLink
										to="/dashboard/enrollclass"
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
									>
										<FaCalendarAlt className="text-xl text-lime-700"></FaCalendarAlt>{" "}
										Enrolled Class
									</NavLink>
								</li>
								<li className="mb-4">
									<NavLink
										to="/dashboard/history"
										className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
									>
										<FaWallet className="text-xl text-lime-700"></FaWallet>{" "}
										Payment History
									</NavLink>
								</li>
							</ul>
						</>
					)}
					<div className="flex flex-col w-full">
						<div className="divider"></div>
					</div>
					<ul>
						<li>
							<NavLink
								to="/"
								className="text-black pt-3 lg:text-black text-semibold text-base flex gap-3 items-center"
							>
								<HiHome className="text-xl text-lime-700" />
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/classes"
								className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
							>
								<FaRestroom className="text-xl text-lime-700" />
								Classes
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/instrators"
								className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
							>
								<RiFileUserFill className="text-xl text-lime-700" />
								Instractors
							</NavLink>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default DashBoardLayout;
