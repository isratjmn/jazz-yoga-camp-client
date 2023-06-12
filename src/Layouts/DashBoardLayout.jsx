import React from "react";
import Drawer from "react-modern-drawer";
import { Outlet, NavLink, Link } from "react-router-dom";
import "react-modern-drawer/dist/index.css";
import { FaShoppingBag, FaIdCardAlt, FaUsers } from "react-icons/fa";
import logo2 from "../assets/images/banner/logo2.png";
import { BiUserPin } from "react-icons/bi";
import { RiFileUserFill, RiFolderUserFill } from "react-icons/ri";
import { HiHome, HiBars3CenterLeft, HiShoppingBag } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import { FaCalendarAlt, FaWallet, FaRestroom } from "react-icons/fa";
import UseCart from "../hooks/UseCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashBoardLayout = () => {
	const [cart] = UseCart();

	// const isAdmin = true;

	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();

	const [isOpen, setIsOpen] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const toggleDrawer = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsOpen((prevState) => !prevState);
			setIsLoading(false);
		}, 500);
	};
	const navLinks = (
		<>
			<Link to="/" className="font-extrabold text-lg text-emerald-700">
				<img className="ml-2" src={logo2} width="120" alt="" />
				<p className="-mt-3">
					JazzYoga
					<span className="text-black">Camp</span>
				</p>
			</Link>
			{isAdmin ? (
				<>
					<ul className="mt-10">
						<h2 className="font-bold text-xl mt-4 ">
							Admin Dashboard
						</h2>
						<li>
							<NavLink
								className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
								to="/dashboard/manageclass"
							>
								<FaIdCardAlt className="text-xl text-lime-700" />{" "}
								Manage Classes
							</NavLink>
						</li>
						<li>
							<NavLink
								className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
								to="/dashboard/manageusers"
							>
								<FaUsers className="text-xl text-lime-700" />{" "}
								Manage Users(All Users)
							</NavLink>
						</li>
					</ul>
				</>
			) : isInstructor ? (
				<>
					<ul>
						<h2 className="font-bold mt-4 text-xl">
							Student Dashboard
						</h2>
						<li>
							<NavLink
								to="/dashboard/selectedclass"
								className="text-black pt-8 lg:text-black text-semibold text-base flex gap-3 items-center"
							>
								<BiUserPin className="text-xl text-lime-700" />
								Selected Classes{" "}
								<div className="badge bg-lime-700 text-white p-3 rounded-lg">
									+{cart?.length || 0}
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/enrollclass"
							
								className="text-black pt-8 lg:text-black text-semibold text-base flex gap-3 items-center"
							>
								<FaCalendarAlt className="text-xl text-lime-700"></FaCalendarAlt>{" "}
								Enrolled Class
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/history"
								className="text-black pt-8 lg:text-black text-semibold text-base flex gap-3 items-center"
							>
								<FaWallet className="text-xl text-lime-700"></FaWallet>{" "}
								Payment History
							</NavLink>
						</li>
					</ul>
				</>
			) : (
				<>
					<ul>
						<h2 className="font-bold text-xl mt-4">
							Instructor Dashboard
						</h2>
						<li>
							<NavLink
								className="text-black pt-8 lg:text-black text-semibold text-base flex gap-3 items-center"
								to="/dashboard/addaclass"
							>
								<HiBars3CenterLeft className="text-xl text-lime-700" />{" "}
								Add Classes
							</NavLink>
						</li>
						<li>
							<NavLink
								className="text-black pt-8 lg:text-black text-semibold text-base flex gap-3 items-center"
								to="/dashboard/myclasses"
							>
								<SiGoogleclassroom className="text-xl text-lime-700" />{" "}
								My Classes
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
						<HiHome className="text-xl text-lime-700" /> Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/classes"
						className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
					>
						<FaRestroom className="text-xl text-lime-700" />{" "}
						Classes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/instrators"
						className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
					>
						<RiFileUserFill className="text-xl text-lime-700" />{" "}
						Instractors
					</NavLink>
				</li>
			</ul>
		</>
	);

	return (
		<div className="flex">
			{/* Sidebar - Fixed for desktop */}
			<div className="hidden md:block w-72 h-screen drawer bg-[#edf3f3]">
				<div className="p-6">{navLinks}</div>
			</div>

			{/* Content */}
			<div className="flex-grow">
				<Outlet />
			</div>

			{/* Toggle Button - Visible for mobile */}
			<button
				className="md:hidden btn btn-outline btn-sm btn-error fixed bottom-50 font-bold left-60 transform -translateX(-50%) transition duration-300 text-xs"
				onClick={toggleDrawer}
			>
				{isLoading ? "Loading..." : "Show"}
			</button>

			{/* Drawer - Visible for mobile */}
			<Drawer
				open={isOpen}
				onClose={toggleDrawer}
				direction="left"
				className="drawer-content md:hidden"
			>
				<div className="p-4">{navLinks}</div>
			</Drawer>
		</div>
	);
};

export default DashBoardLayout;
