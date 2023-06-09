/* // Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div>
			<SectionHeading
				title="Client Testimonials"
				heading="Practicing yoga and meditation through this website has truly transformed my life."
				center={true}
			/>
			<Swiper
				effect={"flip"}
				grabCursor={true}
				pagination={true}
				navigation={true}
				modules={[EffectFlip, Pagination, Navigation]}
				className="mySwiper"
			>
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="flex flex-col items-center mx-auto px-4 py-8">
							<Rating
								className="max-w-2xl mb-4"
								value={review.rating}
								readOnly
							/>
							<p className="text-base">{review.testimonial}</p>
							<h3 className="text-2xl text-orange-700 mt-4">
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonial; */

import React from "react";
import { useForm } from "react-hook-form";

const PasswordForm = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const password = watch("password");
	const confirmPassword = watch("confirmPassword");

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Password:</label>
				<input
					type="password"
					name="password"
					ref={register({ required: true, minLength: 8 })}
				/>
				{errors.password && errors.password.type === "required" && (
					<p>Password is required</p>
				)}
				{errors.password && errors.password.type === "minLength" && (
					<p>Password must be at least 8 characters long</p>
				)}
			</div>
			<div>
				<label>Confirm Password:</label>
				<input
					type="password"
					name="confirmPassword"
					ref={register({
						required: true,
						validate: (value) =>
							value === password || "Passwords do not match",
					})}
				/>
				{errors.confirmPassword && (
					<p>{errors.confirmPassword.message}</p>
				)}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default PasswordForm;
