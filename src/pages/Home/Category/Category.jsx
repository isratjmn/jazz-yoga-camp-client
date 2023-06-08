import React, { useState, useEffect } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Posture from "../../../components/Category/Posture";

const Category = () => {
	const [postures, setPostures] = useState([]);

	useEffect(() => {
		fetch("postures.json")
			.then((res) => res.json())
			.then((data) => setPostures(data));
	}, []);
	return (
		<section>
			<SectionHeading
				title="Dive In The World Of Health & Fitness"
				heading="Every style offers unique benefits, so it's worth exploring different types to find the one that resonates with you and your goals."
				center={true}
			/>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto mt-14">
				{postures.map((posture) => (
					<Posture key={posture.id} posture={posture}></Posture>
				))}
			</div>
		</section>
	);
};

export default Category;
