import React from "react";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
	return (
		<>
            <Helmet>
				<title>JazzYogaCamp | Home</title>
			</Helmet>
			<div
				className="blog-banner pt-24 px-20 bg-[url('https://zenergyyoga.ie/wp-content/uploads/2017/01/o-KIDS-DOING-YOGA-facebook.jpeg')] bg-opacity-70  h-[65vh] relative z-80 flex justify-center items-center"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					objectFit: "cover",
				}}
			>
				<div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-[1] "></div>
			</div>
			<div className="md:px-20 my-24">
				<h2 className="text-center text-4xl text-lime-700 font-bold ">
					{" "}
					Popular Classes & Informations
				</h2>
			</div>
		</>
	);
};

export default AllClasses;
