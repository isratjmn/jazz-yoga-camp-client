import React, { useEffect, useState } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Instrator from "../../../components/Instrators/Instrator";

const Instructors = () => {
	const [instractors, setInstractors] = useState([]);
	const [showMore, setShowMore] = useState(false);
	const handleShowMore = () => {
		setShowMore(true);
	};

	useEffect(() => {
		fetch("instrator.json")
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
            <div className=" mt-20">
            {!showMore && (
				<span
					onClick={handleShowMore}
					className="flex mr-auto justify-center mb-10"
				>
					<button className="btn btn-main">Show More</button>
				</span>
			)}
            </div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto">
				{instractors.slice(0, showMore ? 9 : 6).map((instrator) => (
					<Instrator key={instrator.id} instrator={instrator}></Instrator>
				))}
			</div>

			
		</section>
	);
};

export default Instructors;
