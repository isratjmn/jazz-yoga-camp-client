import React from "react";
import { Helmet } from "react-helmet-async";

const InstratorGallery = () => {
	return (
		<>
			<Helmet>
				<title>JazzYogaCamp | Instrator</title>
			</Helmet>
			<div
				className="blog-banner pt-24 px-20 bg-[url('https://img.freepik.com/free-photo/woman-practising-yoga-gym-with-trainer_1303-14820.jpg?w=1060&t=st=1686312835~exp=1686313435~hmac=ec6176d4088ac588295c2c860db60484fa813c61a8b352532ef751fc54eac9dc')] bg-opacity-70  h-[65vh] relative z-80 flex justify-center items-center"
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
					Popular Instructors & Informations
				</h2>
			</div>
		</>
	);
};

export default InstratorGallery;
