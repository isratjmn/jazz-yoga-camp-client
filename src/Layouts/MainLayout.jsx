import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useState } from "react";
import { useEffect } from "react";

const MainLayout = () => {
	return (
		<div>
			<NavBar>
				<Outlet />

				<Footer />
			</NavBar>
		</div>
	);
};

export default MainLayout;
