import React from "react";
import { motion } from "framer-motion";

const Posture = ({ posture }) => {
	const { image, name, healthBenefit } = posture;
	return (
		<>
			<motion.div
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 10,
					duration: 0.3,
				}}
			>
				<div className="w-[90%] lg:w-full mx-auto">
					<div className="flex flex-col p-4 rounded-lg">
						<img className="w-24 mx-auto" src={image} alt="image" />
						<h2 className="text-2xl font-bold mb-2 mx-auto">
							{name}
						</h2>
						<p className="text-lg mb-2 mx-auto text-center">
							{healthBenefit}
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Posture;
