import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Fade } from "react-awesome-reveal";
import UseCart from "../../hooks/UseCart";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import PageHeader from "../../components/PageHeader";
import Swal from "sweetalert2";

const AllClasses = () => {
	const [classes, setClasses] = useState([]);
	const { user } = useContext(AuthContext);
	const [, refetch] = UseCart();
	const navigate = useNavigate();
	const location = useLocation();
	const [cartClasses, setCartClasses] = useState([]);
	const [hoveredItem, setHoveredItem] = useState(null);

	useEffect(() => {
		fetch("http://127.0.0.1:5000/classes")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);

	const handleAddCart = (item) => {
		console.log(item);
		if (user && user.email) {
			if (cartClasses.some((cartItem) => cartItem.itemId === item._id)) {
				Swal.fire({
					position: "top-end",
					icon: "info",
					title: `${item.className} is already added`,
					showConfirmButton: false,
					timer: 1500,
				});
				return;
			}

			const cartItem = {
				itemId: item._id,
				className: item.className,
				instructorName: item.instructorName,
				availableSeats: item.availableSeats,
				image: item.image,
				price: item.price,
				email: user.email,
			};
			fetch("http://127.0.0.1:5000/carts", {
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
						setCartClasses([...cartClasses, cartItem]);
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: `${item.className} Added to the Cart`,
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

			<PageHeader title="Our Classes">
				<li className="font-bold">
					<Link to="/">Home</Link>
				</li>
				<li className="font-bold">Classes</li>
			</PageHeader>
			<div className="md:px-20 my-24">
				<SectionHeading
					title="Popular Classes & Informations"
					center={true}
				/>
			</div>
			<Fade direction="up" triggerOnce>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl lg:w-full mx-auto mb-20">
					{classes.map((item) => (
						<div
							className="card w-full h-full p-4 shadow-xl border rounded-xl relative group transition-transform transform-gpu hover:scale-105"
							key={item._id}
							onMouseEnter={() => setHoveredItem(item._id)}
							onMouseLeave={() => setHoveredItem(null)}
						>
							<figure className="relative">
								<img
									className="h-72 object-cover rounded-lg w-full mx-auto mb-6"
									src={item.image}
									alt="ClassImg"
								/>
								{hoveredItem === item._id && (
									<div className="absolute inset-0 flex flex-col justify-center h-72 items-center bg-base-200/70 z-10 duration-300 text-center">
										<div className="w-fit py-2 px-4 rounded-lg mb-4">
											<p className="font-semibold text-lg text-neutral">
												{item.availableSeats
													? `Available Seats: ${item.availableSeats}`
													: "No seats available"}
											</p>
										</div>
										<button
											onClick={() => handleAddCart(item)}
											className="px-6 py-3 rounded-md btn btn-outline border-0 bg-lime-600 border-b-4 border-lime-700 text-white hover:bg-lime-600"
										>
											Enroll Now
										</button>
									</div>
								)}
							</figure>
							<div className="py-2 px-5">
								<h2 className="text-neutral text-xl font-bold mb-2">
									{item.className}
								</h2>
								<p className="font-bold text-lime-700">
									Instructor: {item.instructorName}
								</p>
							</div>
						</div>
					))}
				</div>
			</Fade>
		</>
	);
};

export default AllClasses;
