import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LoginSociial = () => {
	const { googleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const handleGoogleSignIn = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			const saveUser = {
				name: loggedInUser.displayName,
				email: loggedInUser.email,
			};

			fetch("https://jazz-yoga-camp-server.vercel.app/users", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(saveUser),
			})
				.then((res) => res.json())
				.then(() => {
					navigate(from, { replace: true });
				});
		});
	};
	return (
		<div>

			<div className="flex items-center pt-1 space-x-1">
				<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				<p className="px-3 text-sm dark:text-gray-400">
					Login With Social Accounts
				</p>
				<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
			</div>
			<div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
				<FcGoogle size={32} />
				<p>Continue with Google</p>
			</div>
		</div>
	);
};

export default LoginSociial;
