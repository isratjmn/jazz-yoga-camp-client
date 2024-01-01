import React, { useEffect, useState } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Instrator from "../../../components/Instrators/Instrator";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const Instructors = () => {
	const [instractors, setInstractors] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		fetch("https://jazz-yoga-camp-server.vercel.app/instructor")
			.then((res) => res.json())
			.then((data) => setInstractors(data));
	}, []);
	return (
		<section>
			<SectionHeading
				title="Meet Your Mindful Movement Experts"
				heading="Get to know our Teachers outside the Studio as they share their thoughts on all things about Yoga and Meditation."
				center={true}
			/>

			<div className="grid md:grid-cols-2 mt-12 mb-20 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto">
				{instractors.slice(0, showMore ? 9 : 6).map((instrator) => (
					<Instrator
						key={instrator._id}
						instrator={instrator}
					></Instrator>
				))}
			</div>

			<Fade direction="down" cascade damping={0.3} triggerOnce>
				{!showMore && (
					<div className="text-center mt-6">
						<Link to="/instrators" className="btn btn-gradient">
							See All Instructors
							<HiArrowRight />
						</Link>
					</div>
				)}
			</Fade>
		</section>
	);
};

export default Instructors;
