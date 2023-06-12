import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const InstratorGallery = () => {
	const [instructor, setInstructor] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/instructor")
			.then((res) => res.json())
			.then((data) => setInstructor(data));
	}, []);
	return (
		<>
			<Helmet>
				<title>JazzYogaCamp | Popular Instructors</title>
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
				<SectionHeading
					title="Popular Instructors & Informations"
					center={true}
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto mt-20">
					{instructor.map((item) => (
						<div className="card w-full h-full bg-base-100 p-4 shadow-xl border rounded-xl">
							<figure>
								<img
									className="h-72  object-cover w-full mx-auto mb-6"
									src={item.image}
									alt="InstructorImg"
								/>
							</figure>

							<div className="card-body text-2xl flex flex-col">
								<h2 className="card-title text-lime-600 font-[700] text-[26px]">
									{item.classes}
								</h2>
								<h2 className="card-title text-base font-[600]">
								Instructor Name: {item.name}
								</h2>
								
								<p className="font-semibold text-base">
									No of Classes: {item.numClasses}
								</p>
								
								
							
							</div>
							<div className="card-actions flex justify-center">
								<button className="px-8 py-3 rounded-md btn btn-outline border-0 bg-lime-600 border-b-4 border-lime-700 mt-4 text-white hover:bg-lime-600">
									Watch Classes
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default InstratorGallery;
