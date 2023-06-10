import React from "react";
import { Link } from "react-router-dom";


const SingleClass = ({ singleClass }) => {
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
		<div className="card w-full h-full bg-base-100 p-4 shadow-xl border rounded-xl">
			<figure>
				<img
					className="h-72 object-cover w-full mx-auto mb-6"
					src={image}
					alt="ClassImg"
				/>
			</figure>

			<div className="card-body flex flex-col">
				<h2 className="card-title font-bold">{className}</h2>
				<h2 className="font-bold"></h2>
				<p className="font-semibold text-lime-600">Instructor Name: {instructorName}</p>
				<p className="font-semibold text-lime-600">Enrolled Students: {enrolledStudents} nos</p>
				<p className="font-semibold text-lime-600">Available Seats: {availableSeats} nos</p>
				<p className="font-bold ">Price: {price} nos</p>
				<div className="card-actions flex justify-end mt-3">
					<Link
						to=""
						className="bg-lime-700 py-3 px-7 text-white rounded-lg"
					>
						Enroll
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleClass;
