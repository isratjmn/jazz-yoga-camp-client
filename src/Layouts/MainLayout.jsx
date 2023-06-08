import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const MainLayout = () => {
	/* const location = useLocation();
	const missingHeaderFooter =
		location.pathname.includes("login") ||
		location.pathname.includes("signup"); */

	return (
		<div>
			{/* {missingHeaderFooter || <NavBar />} */}
			<NavBar />
			<Outlet />
			{/* {missingHeaderFooter || <Footer />} */}
			<Footer />
		</div>
	);
};

export default MainLayout;
