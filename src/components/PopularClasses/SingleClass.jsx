import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import useTheme from "../../hooks/useTheme";

import { useLocation, useNavigate } from "react-router-dom";

const SingleClass = ({ singleClass }) => {
	const { theme } = useTheme();
	const { user } = useAuth();
	const [hovered, setHovered] = useState(false);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
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
			<Fade direction="up" triggerOnce>
				<div
					className={`w-full rounded-md overflow-hidden ${
						availableSeats
							? "bg-base-200"
							: theme === "dark"
							? "bg-red-950"
							: "bg-red-100"
					}`}
					onMouseOver={() => setHovered(true)}
					onMouseOut={() => setHovered(false)}
				>
					<div className="relative w-full aspect-[1.4/1] overflow-hidden">
						<img
							src={image}
							alt="img"
							className={`w-full h-full object-cover object-center duration-700 ${
								hovered ? "scale-125" : "scale-100"
							}`}
						/>
						<div className="py-3 px-5 bg-base-200/90 rounded-s-2xl absolute top-3 right-0 z-20">
							<h3 className="font-bold gradient-text ">
								$ {price}
							</h3>
						</div>
						<div
							className={`absolute bottom-0 left-0 w-full bg-base-200/70 z-10 duration-300 text-center grid place-content-center overflow-hidden ${
								hovered ? "h-[100%]" : "h-[0%]"
							}`}
						>
							<div
								className={`duration-200 delay-100 ease-in-out ${
									hovered
										? "translate-x-0"
										: "-translate-x-full"
								}`}
							>
								<div
									className={`w-fit py-2 px-4 rounded-full mb-4 ${
										availableSeats
											? "bg-base-200/90"
											: "bg-red-500"
									}`}
								>
									<p className="font-semibold text-lg text-neutral">
										{availableSeats
											? `Available Seats: ${availableSeats}`
											: "No seats available"}
									</p>
								</div>
							</div>
							
						</div>
					</div>
					<div className="py-10 px-5">
						<h2 className="text-neutral text-xl font-bold mb-2">
							{className}
						</h2>
						<p className="font-bold text-lime-700">
							Instructor: {instructorName}
						</p>
					</div>
				</div>
			</Fade>
		</>
	);
};

export default SingleClass;
