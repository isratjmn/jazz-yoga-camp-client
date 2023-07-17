import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div
				className="text-center"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<RiseLoader color="#79a84a" size={15} />
			</div>
		);
	}
	if (user) {
		return children;
	}
	return (
		<div>
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		</div>
	);
};

export default PrivateRoutes;
