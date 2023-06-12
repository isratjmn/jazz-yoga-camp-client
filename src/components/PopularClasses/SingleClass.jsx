import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const SingleClass = ({ singleClass }) => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scale = 0.5 + scrollY / 5500;
	const opacity = scrollY / 1000;
	const {
		_id,
		image,
		className,
		instructorName,
		availableSeats,
		price,
		enrolledStudents,
	} = singleClass;
	return (
		<>
			<div className="card w-full h-full bg-base-100 p-4 shadow-xl border rounded-xl">
				<motion.div
					style={{
						scale,
						opacity,
					}}
				>
					<figure>
						<img
							className="h-72 object-cover w-full mx-auto mb-6"
							src={image}
							alt="ClassImg"
						/>
					</figure>
				</motion.div>
				<div className="card-body flex flex-col">
					<h2 className="card-title font-bold">{className}</h2>
					<h2 className="font-bold"></h2>
					<p className="font-semibold text-lime-600">
						Instructor Name: {instructorName}
					</p>
					<p className="font-semibold text-lime-600">
						Enrolled Students: {enrolledStudents} nos
					</p>
					<p className="font-semibold text-lime-600">
						Available Seats: {availableSeats} nos
					</p>
					<p className="font-bold ">Price: {price} nos</p>
				</div>
			</div>
		</>
	);
};

export default SingleClass;
