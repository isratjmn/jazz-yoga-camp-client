import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
/* import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom"; */


const LoginSociall = () => {
	return (
		<div>
			<div className="divider"></div>
			<div className="w-full text-center my-6">
				<button
					
					className="btn btn-circle btn-outline"
				>
					<FcGoogle className="text-2xl" />
				</button>
			</div>
		</div>
	);
};

export default LoginSociall;
