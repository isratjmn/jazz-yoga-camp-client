import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructors from "../Instructors/Instructors";

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<PopularClasses />
			<Instructors />
		</div>
	);
};

export default Home;
