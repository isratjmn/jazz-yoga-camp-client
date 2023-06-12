import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
	const { user, loading } = useAuth;
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <SyncLoader className="text-center" color="#79a84a" size={10} />;
	}
	if (user && isAdmin) {
		return children;
	}
	return (
		<div>
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		</div>
	);
};

export default AdminRoute;
