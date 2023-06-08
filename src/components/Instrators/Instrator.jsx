import React from "react";
import { Link } from "react-router-dom";

const Instrator = ({instrator}) => {
    const {  name, numClasses, classes } = instrator;
	return (
		<div className="card w-full h-full bg-base-100 p-7 shadow-xl border rounded-xl">
			<figure>
				{/* <img className="h-52 object-contain mx-auto mb-6" src={image} alt="img" /> */}
			</figure>
			<button className="absolute right-0 mr-4 mt-4 btn gap-2">
				{name}
			</button>
			<div className="card-body flex flex-col items-center">
				<h2 className="card-title font-bold">{classes}</h2>
				<p>{numClasses}</p>
				<div className="card-actions flex justify-end">
					<Link
						to=''
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
