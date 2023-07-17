import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { FiMail } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const InstratorGallery = () => {
	const [instructor, setInstructor] = useState([]);
	useEffect(() => {
		fetch("https://jazz-yoga-camp-server.vercel.app/instructor")
			.then((res) => res.json())
			.then((data) => setInstructor(data));
	}, []);
	return (
		<>
			<Helmet>
				<title>JazzYogaCamp | Popular Instructors</title>
			</Helmet>
			{/* <div
				className="blog-banner pt-24 px-20 bg-[url('https://img.freepik.com/free-photo/woman-practising-yoga-gym-with-trainer_1303-14820.jpg?w=1060&t=st=1686312835~exp=1686313435~hmac=ec6176d4088ac588295c2c860db60484fa813c61a8b352532ef751fc54eac9dc')] bg-opacity-70  h-[65vh] relative z-80 flex justify-center items-center"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					objectFit: "cover",
				}}
			>
				<div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-[1] "></div>
			</div> */}
			<PageHeader title="Our Instructors">
				<li className="font-bold">
					<Link to="/">Home</Link>
				</li>
				<li className="font-bold">Instructors</li>
			</PageHeader>

			<div className="md:px-20 my-24">
				<SectionHeading
					title="Popular Instructors & Informations"
					center={true}
				/>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto mt-20">
					{instructor.map((item) => (
						<Fade direction="up" triggerOnce>
							<div className="w-full relative mt-20 bg-base-200 rounded-xl pt-16 text-center p-6">
								<div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
									<img
										src={item.image}
										alt="avatar"
										className="w-full aspect-square object-cover rounded-full object-center"
									/>
								</div>
								<h1 className="text-2xl md:text-3xl font-bold text-neutral mb-4">
									{item.name}
								</h1>
								<p className="font-semibold">
									Total Classes: {item.numClasses} nos
								</p>

								<div className="menu menu-horizontal gap-3 text-lg">
									<a
										href={`mailto:${item.email}`}
										className="inline-flex gap-2 items-center"
									>
										<FiMail />
										<span className="text-sm">
											{item.email}
										</span>
									</a>
								</div>

								<button className="px-8 py-3 rounded-md btn btn-outline border-0 bg-lime-600 border-b-4 border-lime-700 mt-4 text-white hover:bg-lime-600">
									Watch Classes
								</button>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</>
	);
};

export default InstratorGallery;
