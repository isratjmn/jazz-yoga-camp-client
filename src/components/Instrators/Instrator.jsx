import React from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Instrator = ({ instrator }) => {
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
	const { image, name, email, numClasses, classes } = instrator;
	return (
		<motion.div style={{ opacity, scale }}>
			<div className="card mx-auto w-full bg-base-100 p-0 shadow-xl border rounded-xl">
				<figure>
					<img
						className="h-72 object-cover w-full mx-auto mb-6"
						src={image}
						alt="img"
					/>
				</figure>
				<div className="card-body flex flex-col">
					<h2 className="card-title font-bold"> Name: {name}</h2>
					<h2 className="font-bold"></h2>
					<p className="font-semibold text-lime-600"> {email}</p>
					
					<p className="font-semibold">
						No of Classes: {numClasses} nos
					</p>
					
				</div>
			</div>
		</motion.div>
	)
}

export default Instrator;
