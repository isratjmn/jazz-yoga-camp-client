import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiMail } from "react-icons/fi";

const Instrator = ({ instrator }) => {
	const { image, name, email, numClasses } = instrator;
	return (
		<Fade direction="up" triggerOnce>
			<div className="w-full relative mt-16 bg-base-200 rounded-xl pt-16 text-center p-6">
				<div className="bg-base-200 w-32 h-32 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<img
						src={image}
						alt="avatar"
						className="w-full aspect-square object-cover rounded-full object-center"
					/>
				</div>
				<h1 className="text-2xl md:text-3xl font-bold text-neutral mb-4">
					{name}
				</h1>

				<div className="menu menu-horizontal gap-3 text-lg">
					<a
						href={`mailto:${email}`}
						className="inline-flex gap-2 items-center"
					>
						<FiMail />
						<span className="text-sm">{email}</span>
					</a>
				</div>
			</div>
		</Fade>
	);
};

export default Instrator;
