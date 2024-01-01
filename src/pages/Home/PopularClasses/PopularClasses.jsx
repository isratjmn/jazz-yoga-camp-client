import React, { useEffect, useState } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import SingleClass from "../../../components/PopularClasses/SingleClass";

const PopularClasses = () => {
	const [classes, setClasses] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const handleShowMore = () => {
		setShowAll(true);
	};

	useEffect(() => {
		fetch("https://jazz-yoga-camp-server.vercel.app/classes")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);

	return (
		<section>
			<SectionHeading
				title="Popular Classes"
				heading="Classes provide opportunities to integrate both yoga and meditation practices, allowing participants to experience the physical benefits of yoga asanas and mental benefits."
				center={true}
			/>

			<div className="mt-20">
				{!showAll && (
					<span
						onClick={handleShowMore}
						className="flex mr-auto justify-center mb-10"
					>
						<button className="btn btn-main">
							Show All Classes
						</button>
					</span>
				)}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto">
				{classes.slice(0, showAll ? 12 : 6).map((singleClass) => (
					<SingleClass
						key={singleClass._id}
						singleClass={singleClass}
					></SingleClass>
				))}
			</div>
		</section>
	);
};

export default PopularClasses;
