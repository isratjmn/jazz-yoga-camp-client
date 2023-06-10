import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <SyncLoader className="text-center" color="#79a84a" size={10} />;
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
