import React from "react";
import { Link } from "react-router-dom";

const Instrator = ({ instrator }) => {
	const { image, name, email, numClasses, classes } = instrator;
	return (
		<>
			<div className="card w-full bg-base-100 p-0 shadow-xl border rounded-xl">
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
		</>
	);
};

export default Instrator;
