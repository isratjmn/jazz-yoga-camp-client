import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/images/error/error.png";

const ErrorPage = () => {
	const { error, status } = useRouteError();
	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Error</title>
			</Helmet>
			<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
					<figure>
						<img src={errorImg} alt="errorImg" />
					</figure>

					<div className="max-w-md text-center">
						<h2 className="mb-8 font-extrabold text-9xl text-lime-700">
							<span className="sr-only text-lime-700">Error</span>
							{status || 404}
						</h2>
						<p className="text-2xl md:text-3xl text-lime-700 mb-8 font-bold">
							{error?.message}
						</p>
						<Link
							to="/"
							className="btn font-bold text-lg outline-double py-2 px-4"
						>
							Back to Home
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ErrorPage;
