import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerImg2 from "../../../assets/images/banner/banner-3.jpg";
import bannerImg3 from "../../../assets/images/banner/banner-4-1.jpg";
import bannerImg4 from "../../../assets/images/banner/banner-10.jpg";
import bannerImg6 from "../../../assets/images/banner/banner-12.jpg";
import bannerImg7 from "../../../assets/images/banner/banner-9.jpg";

const Banner = () => {
	return (
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={true}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard]}
			className="mySwiper"
		>
			<SwiperSlide>
				<div id="slide1" className="carousel-item relative w-full">
					{/* <img
						className="w-full h-screen object-cover"
						src={bannerImg2}
						alt="img1"
					/>
					<div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-[1] "></div>
					<div className="absolute rounded-xl h-full flex flex- items-center transform -translate-y-1/2 top-1/2">
						<h2 className="font-poppins mb-10 w-full font-extrabold text-center text-6xl md:text-5xl text-emerald-700">
							JazzYogaCamp Childrens Training
						</h2>

						<p className="text-xl leading-8 font-normal text-center w-full">
							Ensure that the yoga and meditation sessions are led
							by certified instructors who have experience working
							with children
						</p>
					</div> */}

					<img
						src={bannerImg2}
						className="rounded-xl w-full h-screen object-cover object-top"
					/>
					<div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, )]">
						<div className=" text-white pl-44 space-y-7 w-[70%]">
							<h2 className="mb-10 w-full font-extrabold text-7xl md:text-5xl text-emerald-700">
								JazzYogaCamp Childrens SummerCamp institute
							</h2>
							<p className="text-xl leading-8 font-normal w-[80%]">
								Ensure that the yoga and meditation sessions are
								led by certified instructors who have experience
								working with children.
							</p>
							<button className="btn btn-main mr-5 rounded-md border-0">
								Class Schedule
							</button>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<img
					className="w-full h-screen object-cover rounded-xl object-top"
					src={bannerImg3}
					alt="img2"
				/>
				<div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, )]">
						<div className=" text-white pl-44 space-y-7 w-[100%]">
							<h2 className="mb-10 w-full font-extrabold text-7xl md:text-5xl text-emerald-700">
							Save on Summer 12 Packs
							</h2>
							<p className="text-xl leading-8 font-normal w-[100%]">
							Get a 12-pack of classes for the price of 10! Offer ends 6/14.
							</p>
							<button className="btn btn-main mr-5 rounded-md border-0">
								Class Schedule
							</button>
						</div>
					</div>
				{/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-[1] "></div> */}
			</SwiperSlide>
			<SwiperSlide>
				<img
					className="w-full h-screen object-cover rounded-xl object-top"
					src={bannerImg4}
					alt=""
				/>
				<div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, )]">
						<div className=" text-white pl-44 space-y-7 w-[70%]">
							<h2 className="mb-10 w-full font-extrabold text-7xl md:text-5xl text-emerald-700">
							Try a Free Week!
							</h2>
							<p className="text-xl leading-8 font-normal w-[80%]">
							Encourage early registrations by offering a discounted rate for families who sign up before a specific date.
							</p>
							<button className="btn btn-main mr-5 rounded-md border-0">
								Class Schedule
							</button>
						</div>
					</div>
				{/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-[1] "></div> */}
			</SwiperSlide>
			<SwiperSlide>
				<img
					className="rounded-xl w-full h-screen object-cover object-top"
					src={bannerImg6}
					alt=""
				/>
				<div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, )]">
						<div className=" text-white pl-44 space-y-7 w-[70%]">
							<h2 className="mb-10 w-full font-extrabold text-7xl md:text-5xl text-emerald-700">
							Shining Like the Sun
							</h2>
							<p className="text-xl leading-8 font-normal w-[80%]">
							Join our Summer Journey! We’re sharing “Power Moves” every Monday on our IG Stories to encourage you to live your power — in studio and beyond.
							</p>
							<button className="btn btn-main mr-5 rounded-md border-0">
								Class Schedule
							</button>
						</div>
					</div>
				{/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-[1] "></div> */}
			</SwiperSlide>
			<SwiperSlide>
				<img
					className="w-full h-screen object-cover rounded-xl object-top"
					src={bannerImg7}
					alt=""
				/>
				<div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, )]">
						<div className=" text-white pl-44 space-y-7 w-[70%]">
							<h2 className="mb-10 w-full font-extrabold text-7xl md:text-5xl text-emerald-700">
							Limited-Time Promotions for Children and their Siblings
							</h2>
							<p className="text-xl leading-8 font-normal w-[65%]">
							Introduce limited-time promotions, such as a flash sale or a specific discount valid only for a short period.
							</p>
							<button className="btn btn-main mr-5 rounded-md border-0">
								Class Schedule
							</button>
						</div>
					</div>
				{/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-[1] "></div> */}
			</SwiperSlide>
		</Swiper>
	);
};

export default Banner;
