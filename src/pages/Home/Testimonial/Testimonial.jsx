import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from "swiper";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import required modules
import { Keyboard, Autoplay, Pagination } from "swiper";

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:5000/reviews")
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
				slidesPerView={1}
				spaceBetween={30}
				keyboard={{
					enabled: true,
				}}
				pagination={{
					clickable: true,
				}}
				centeredSlides={true}
				autoplay={{
					delay: 2200,
					disableOnInteraction: false,
				}}
				modules={[Keyboard, Autoplay, Pagination]}
				className="mySwiper"
			>
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="card w-[95%] md:w-[60%] shadow-xl border md:max-w-3xl mt-10 mx-auto h-[300px] lg:h-[250px] my-10">
							<div className="card-body">
								<p className="my-1 text-sm md:text-base">
									{review.testimonial.length > 300
										? review.testimonial.substr(0, 420) +
										  "..."
										: review.testimonial}
								</p>
								<div className="flex align-middle gap-3 items-center">
									<figure>
										<img
											src={review.image}
											className="w-10"
											alt="img"
										/>
									</figure>
									<div>
										<h3 className="text-base font-bold text-lime-700">
											{review.name}
										</h3>
										<Rating
											style={{ maxWidth: 80 }}
											value={review.rating}
											readOnly
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonial;
