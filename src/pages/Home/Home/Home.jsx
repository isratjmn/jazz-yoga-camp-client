import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructors from "../Instructors/Instructors";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Home</title>
			</Helmet>
			<div>
				<Banner />
				<Category />
				<PopularClasses />
				<Instructors />
				<Testimonial />
			</div>
		</div>
	);
};

export default Home;
