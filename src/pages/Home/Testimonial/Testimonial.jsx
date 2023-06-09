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
		fetch("http://localhost:5000/reviews")
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
						<div className="card w-[40%] shadow-xl border mt-16 mx-auto h-[300px] my-14">
							<div className="card-body">
								<p className="my-3">{review.testimonial}</p>
								<div className="flex align-middle gap-3 items-center">
									<figure>
										<img
											src={review.image}
											className="w-16"
											alt="img"
										/>
									</figure>
									<div>
										<h3 className="text-xl font-bold text-lime-700">
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
