import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PopularClasses from "../pages/Home/PopularClasses/PopularClasses";
import PrivateRoutes from "./PrivateRoutes";
import AllClassesLayout from "../Layouts/AllClassesLayout";
import AllClasses from "../pages/AllClasses/AllClasses";
import InstratosLayout from "../Layouts/InstratosLayout";
import InstratorGallery from "../pages/InstratorGallery/InstratorGallery";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
		],
	},
	{
		path: "/classes",
		element: <AllClassesLayout />,
		children: [
			{
				path: "/classes",
				element: <AllClasses />,
			},
		],
	},
	{
		path: "/instrators",
		element: <InstratosLayout />,
		children: [
			{
				path: "/instrators",
				element: <InstratorGallery />,
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoutes>
				<DashBoardLayout />
			</PrivateRoutes>
		),
		children: [
			{
				path: "selectedclass",
				element: <SelectedClass />,
			},
			{
				path: "myclasses",
				element: <MyClasses />,
			},

			{
				path: "addaclass",
				element: <AddClasses />,
			},
			{
				path: "manageclass",
				element: <ManageClasses />,
			},
			{
				path: "manageusers",
				element: <ManageUsers />,
			},
		],
	},
]);
