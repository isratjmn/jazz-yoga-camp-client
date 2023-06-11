import React from "react";
import headingBgImg from "../../assets/images/heading-img/headingbg.png";

const SectionHeading = ({ title, heading, center }) => {
	return (
		<div className={center ? "text-center" : "text-start"}>
			<img
				className="w-40 mx-auto mt-20"
				src={headingBgImg}
				alt="bgImg"
			/>
			<div className="text-4xl text-lime-700 font-bold">{title}</div>
			<div className="text-neutral-500 mt-2 text-xl leading-8 font-normal w-[90%] md:w-1/2 mx-auto">
				{heading}
			</div>
		</div>
	);
};

export default SectionHeading;
