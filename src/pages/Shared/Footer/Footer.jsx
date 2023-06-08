import React from "react";
import logo2 from "../../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaDribbble,
	FaPhoneAlt, FaLocationArrow, FaRegEnvelope
	
} from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<section className="bg-[#edf3f3]">
				{/* {<div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] z-[1] "></div>} */}
				<footer className="section px-4 text-black sm:mt-10 md:mt-0 pt-14 lg:pt-8">
					<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 mb-8 mx-auto w-full max-w-screen-2xl pt-16">
						<div className="mb-6 md:mb-0">
							<div>
								<Link
									to="/"
									className="font-extrabold text-lg text-emerald-700"
								>
									<img src={logo2} width="120" alt="" />
									JazzYoga
									<span className="text-black">Camp</span>
								</Link>
							</div>
							<p className="text-base my-4 dark:text-gray-400 font-medium">
								The program is tailored specifically for
								children, considering their age, developmental
								stages, and interests. It focuses on creating a
								positive and inclusive atmosphere where children
								can build strength, flexibility.
							</p>
						</div>

						<div>
							<h2 className="font-bold text-[1.3rem] mb-8 lg:mt-12">
								Useful Links
							</h2>
							<ul className="mb-6 text-base font-semibold dark:text-white">
								<li className="mb-4">Home</li>
								<li className="mb-4">Instructors Profile</li>
								<li className="mb-4">Classes & Scedule</li>
								<li className="mb-4">Dashboard</li>
							</ul>
						</div>
						<div>
							<h2 className="font-bold text-[1.3rem] mb-8 lg:mt-12">
								Contact Us
							</h2>
							<ul className="mb-6 text-base font-semibold dark:text-white">
								<li className="mb-4 flex gap-2 items-center text-base">
									{" "}
									<FaLocationArrow className="text-[#79A84A] text-xl" />
									3373 Runnymede Place Northwest, Washington
									AR 20015
								</li>
								<li className="mb-4 flex gap-2 items-center text-base">
									{" "}
									<FaPhoneAlt className="text-[#79A84A]" />
									+38 056 23 15 7851
								</li>
								<li className="mb-4 flex gap-2 items-center text-base">
									<FaPhoneAlt className="text-[#79A84A]" />
									+1 219-661-0219
								</li>
								<li className="mb-4 flex gap-2 items-center text-base">
									{" "}
									<FaRegEnvelope className="text-[#79A84A]" />
									jazzyoza.info@mail.com
								</li>
							</ul>
						</div>

						<div className="lg:ms-20">
							<h2 className="font-bold text-[1.3rem] mb-8 lg:mt-12">
								Services
							</h2>
							<ul className="dark:text-gray-400 font-medium text-base">
								<li className="mb-4">About JazzYogaCamp</li>
								<li className="mb-4">Career</li>
								<li className="mb-4">Payment</li>
								<li className="mb-4">Privacy Policy</li>
							</ul>
                            <div className="flex pb-4 pt-4 space-x-6 sm:justify-start sm:mt-2">
							<Link
								to="#"
								target="_blank"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<FaFacebook className="text-[#79A84A] text-2xl" />
								<span className="sr-only">Facebook page</span>
							</Link>
							<a
								to="https://www.instagram.com/"
								target="_blank"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<FaInstagram className="text-[#79A84A] text-2xl" />
								<span className="sr-only">Instagram page</span>
							</a>
							<Link
								to="https://www.twitter.com/"
								target="_blank"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<FaTwitter className="text-[#79A84A] text-2xl" />
								<span className="sr-only">Twitter page</span>
							</Link>
							<Link
								to="https://github.com/isratjmn"
								target="_blank"
								className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
							>
								<FaGithub className="text-[#79A84A] text-2xl" />
								<span className="sr-only">GitHub account</span>
							</Link>
							<Link
								to="https://www.dribble.com/"
								target="_blank"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<FaDribbble className="text-[#79A84A] text-2xl" />
								<span className="sr-only">
									Dribbble account
								</span>
							</Link>
						</div>
						</div>
					</div>

					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
					<div className="sm:flex sm:items-center sm:justify-center">
						<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
							<div className="pb-4">
								Copyright &#169;{" "}
								<span className="font-bold">IzmTechz</span>. All
								rights deserved.
							</div>
						</span>
						<div className="flex flex-wrap justify-between gap-4 ">
							<div className="flex gap-2"></div>
						</div>
						
					</div>
				</footer>
				{/* <div
					className={`px-8 md:px-20 bg-[url('./assets/images/footer-bg.jpg')] object-cover bg-top bg-no-repeat relative top-0  h-[500px] z-10`}
					style={{ backgroundSize: "cover" }}
				></div> */}
			</section>
		</>
	);
};

export default Footer;
