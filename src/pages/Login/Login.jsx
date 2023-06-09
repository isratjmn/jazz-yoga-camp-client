import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login_1.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import LoginSociial from "../../components/Shared/LoginSociial/LoginSociial";
import { Helmet } from "react-helmet-async";

const Login = () => {
	const [disabled, setDisabled] = useState(true);

	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		signIn(data.email, data.password).then((result) => {
			const user = result.user;
			console.log(user);
			Swal.fire({
				title: "User Login Successful",
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			});
			navigate(from, { replace: true });
		});
	};

	return (
		<>
			<Helmet>
				<title>JazzYogaCamp | Login</title>
			</Helmet>
			<div className="flex justify-center flex-wrap items-center min-h-screen bg-[#f5f1eb]">
				<div className="text-center sm:w-full md:w-1/2 lg:text-left">
					<img className="w-[85%] " src={loginImg} alt="login" />
				</div>
				<div className="card sm:w-full md:w-1/2 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#edf3f3] border text-gray-900">
					<div className="mb-8 text-center">
						<h1 className="my-3 text-4xl font-bold">Log In</h1>
						<p className="text-sm text-gray-400">
							Sign in to Access the Account
						</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6 ng-untouched ng-pristine ng-valid"
					>
						<div className="space-y-4">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm"
								>
									Email Address
								</label>
								<input
									type="email"
									name="email"
									{...register("email")}
									required
									placeholder="Enter Your Email Here"
									className="w-full px-3 py-2 border rounded-md border-gray-30 bg-gray-200 text-gray-900"
									data-temp-mail-org="0"
								/>
							</div>
							<div>
								<div className="flex justify-between">
									<label
										htmlFor="password"
										className="text-sm mb-2"
									>
										Password
									</label>
								</div>
								<input
									type="password"
									name="password"
									{...register("password")}
									required
									placeholder="*******"
									className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
								/>
							</div>
							{/* <div>
								<label>
									<input
										type="checkbox"
										{...register("showPassword")}
									/>
									Show Password
								</label>
							</div> */}
						</div>

						<div>
							<input
								disabled={false}
								type="submit"
								value="Login"
								className="bg-lime-600 w-full rounded-md py-3 text-white font-semibold"
							/>
						</div>
						<LoginSociial />
					</form>
					<p className="px-6 text-sm text-center text-gray-400 font-semibold">
						Don't Have an Account Yet?{" "}
						<Link
							to="/signup"
							className="hover:underline hover:text-rose-500 text-gray-600 font-bold"
						>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
