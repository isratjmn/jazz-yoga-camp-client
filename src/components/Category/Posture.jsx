import React from "react";

const Posture = ({posture}) => {
	const { image, name, healthBenefit } = posture;
	return (
		<>
			<div className="w-[90%] lg:w-full">
				<div className="flex flex-col p-4 rounded-lg">
					<img className="w-24 mx-auto" src={image} alt="image" />
					<h2 className="text-2xl font-bold mb-2 mx-auto">{name}</h2>
					<p className="text-gray-700 mb-2 mx-auto text-center">{healthBenefit}</p>
				</div>
			</div>
		</>
	);
};

export default Posture;
