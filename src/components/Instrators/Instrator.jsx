import React from "react";
import { Link } from "react-router-dom";

const Instrator = ({ instrator }) => {
	const { image, name, email, numClasses, classes } = instrator;
	return (
		<div className="card w-full h-full bg-base-100 p-7 shadow-xl border rounded-xl">
			<figure>
				<img
					className="h-72 object-cover w-full mx-auto mb-6"
					src={image}
					alt="img"
				/>
			</figure>
			
			<div className="card-body flex flex-col">
				<h2 className="card-title font-bold"> Name: {name}</h2>
				<h2 className="card-title font-bold"></h2>
				<p>Specialized For: {classes[0]}, {classes[1]}</p>
				<p>No of Classes: {numClasses}</p>
				<div className="card-actions flex justify-start mt-3">
					<Link
						to=""
						className="bg-lime-700 py-3 px-4 text-white rounded-lg"
					>
						View Classes
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Instrator;
