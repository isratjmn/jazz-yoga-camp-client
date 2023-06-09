import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructors from "../Instructors/Instructors";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Home</title>
			</Helmet>
			<Banner />
			<Category />
			<PopularClasses />
			<Instructors />
			<Testimonial />
		</div>
	);
};

export default Home;
