import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import signUp1 from "../../assets/images/signup_1.png";
import Swal from "sweetalert2";
import LoginSociial from "../../components/Shared/LoginSociial/LoginSociial";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm();

	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		createUser(data.email, data.password).then((result) => {
			const loggedUser = result.user;
			console.log(loggedUser);

			updateUserProfile(data.name, data.photoURL)
				.then(() => {
					const saveUser = { name: data.name, email: data.email };
					fetch("http://localhost:5000/users", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(saveUser),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "User Created Successfully",
									showConfirmButton: false,
									timer: 1500,
								});
								navigate("/");
							}
						});
				})
				.catch((error) => console.log(error));
		});
	};
	const password = watch("password");

	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | SignUp</title>
			</Helmet>
			<div className=" min-h-screen bg-[#f5f1eb] pb-24 md:py-14 flex-wrap">
				<div className="flex flex-wrap justify-center items-center">
					<div className="text-center w-full mt-12 md:w-1/2 lg:text-left">
						<img
							className="w-[100%] md:w-[85%]  mx-auto"
							src={signUp1}
							alt="signUp"
						/>
					</div>
					<div className="flex flex-col  w-full max-w-lg md:mt-32 mb-8 md:w-1/2 p-6 rounded-md sm:p-10 bg-[#edf3f3] border shadow-lg text-gray-900">
						<div className="mb-8 text-center">
							<h1 className="mb-3 text-4xl font-bold text-lime-700">
								Sign Up
							</h1>
							<p className="text-sm text-gray-400">
								Welcome to JazzYogaCamp
							</p>
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-6 ng-untouched ng-pristine ng-valid"
						>
							<div className="space-y-4">
								<div>
									<label className="block mb-2 text-sm">
										Name
									</label>
									<input
										type="text"
										name="name"
										{...register("name", {
											required: true,
										})}
										placeholder="Name"
										className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
									/>
									{errors.name && (
										<small className="text-red-700 font-semibold mt-2">
											Name is Required
										</small>
									)}
								</div>
								<div>
									<label className="block mb-2 text-sm">
										Photo URL
									</label>
									<input
										type="text"
										{...register("photoURL", {
											required: true,
										})}
										placeholder="photo URL"
										className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
									/>
									{errors.photoURL && (
										<small className="text-red-700 font-semibold mt-2">
											Photo URL is Required
										</small>
									)}
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm"
									>
										Email address
									</label>
									<input
										type="email"
										name="email"
										{...register("email", {
											required: true,
										})}
										placeholder="Enter Your Email Here"
										className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
									/>
									{errors.email && (
										<small className="text-red-700 font-semibold mt-2">
											Email is Required
										</small>
									)}
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
										{...register("password", {
											required: true,
											minLength: 8,
											maxLength: 20,
											pattern:
												/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
										})}
										placeholder="*******"
										className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
									/>
									{errors.password &&
										errors.password.type === "required" && (
											<small className="text-red-700 font-semibold mt-2">
												Password is required
											</small>
										)}
									{errors.password &&
										errors.password.type ===
											"minLength" && (
											<small className="text-red-700 font-semibold mt-2">
												Password must be at least 8
												characters long
											</small>
										)}
								</div>
								<div>
									<div className="flex justify-between">
										<label
											htmlFor="password"
											className="text-sm mb-2"
										>
											Confirm Password
										</label>
									</div>
									<input
										type="password"
										name="confirmPassword"
										{...register("confirmPassword", {
											required: true,
											validate: (value) =>
												value === password ||
												"Passwords do not match",
										})}
										placeholder="*******"
										className="w-full px-3 py-2 border rounded-md border-gray-300  bg-gray-200 text-gray-900"
									/>
									{errors.confirmPassword && (
										<small className="text-red-700 font-semibold mt-2">
											{errors.confirmPassword.message}
										</small>
									)}
								</div>
							</div>

							<div>
								<div className="form-control mt-6">
									<input
										className="bg-lime-600 w-full rounded-md py-3 text-white"
										type="submit"
										value="Sign Up"
									/>
								</div>
							</div>
							<LoginSociial />
						</form>
						<p className="px-6 text-sm text-center text-gray-400 font-semibold">
							Already Have an Account?{" "}
							<Link
								to="/login"
								className="hover:underline hover:text-rose-500 font-bold text-gray-600"
							>
								Login
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
