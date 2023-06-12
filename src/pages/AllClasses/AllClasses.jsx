import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import UseCart from "../../hooks/UseCart";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const AllClasses = () => {
	const [classes, setClasses] = useState([]);
	const { user } = useContext(AuthContext);
	const [, refetch] = UseCart();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		fetch("https://jazz-yoga-camp-server.vercel.app/classes")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);

	const handleAddCart = (item) => {
		console.log(item);
		if (user && user.email) {
			const cartItem = {
				itemId: item._id,
				className: item.className,
				instructorName: item.instructorName,
				availableSeats: item.availableSeats,
				image: item.image,
				price: item.price,
				email: user.email,
			};
			fetch("https://jazz-yoga-camp-server.vercel.app/carts", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(cartItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						refetch();
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: "Classes Added On the Cart",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		} else {
			Swal.fire({
				title: "Please Login To Enroll The Classes..",

				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
				}
			});
		}
	};

	return (
		<>
			<Helmet>
				<title>JazzYogaCamp | Classes</title>
			</Helmet>
			<div
				className="blog-banner pt-24 px-20 bg-[url('https://zenergyyoga.ie/wp-content/uploads/2017/01/o-KIDS-DOING-YOGA-facebook.jpeg')] bg-opacity-70  h-[65vh] relative z-80 flex justify-center items-center"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					objectFit: "cover",
				}}
			>
				<div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-[1] "></div>
			</div>
			<div className="md:px-20 my-24">
				<SectionHeading
					title="Popular Classes & Informations"
					center={true}
				/>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl lg:w-full mx-auto">
				{classes.map((item) => (
					<div className="card w-full h-full bg-base-100 p-4 shadow-xl border rounded-xl">
						<figure>
							<img
								className="h-72 object-cover w-full mx-auto mb-6"
								src={item.image}
								alt="ClassImg"
							/>
						</figure>

						<div className="card-body flex flex-col">
							<h2 className="card-title font-bold">
								{item.className}
							</h2>
							<h2 className="font-bold"></h2>
							<p className="font-semibold text-lime-600">
								Instructor Name: {item.instructorName}
							</p>
							<p className="font-semibold text-lime-600">
								Enrolled Students: {item.enrolledStudents} nos
							</p>
							<p className="font-semibold text-lime-600">
								Available Seats: {item.availableSeats} nos
							</p>
							<p className="font-bold ">
								Price: ${item.price} nos
							</p>
						</div>
						<div className="card-actions flex justify-center">
							<button
								onClick={() => handleAddCart(item)}
								className="px-8 py-3 rounded-md btn btn-outline border-0 bg-lime-600 border-b-4 border-lime-700 mt-4 text-white hover:bg-lime-600"
							>
								Enroll Now
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default AllClasses;
