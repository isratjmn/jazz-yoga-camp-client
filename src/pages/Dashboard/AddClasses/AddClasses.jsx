import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const AddClasses = () => {
	const [axiosSecure] = useAxios();
	const { register, handleSubmit, reset } = useForm();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

	const onSubmit = (data) => {
		console.log(data);
		const formData = new FormData();
		formData.append("image", data.image[0]);
		fetch(img_hosting_url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgResponse) => {
				console.log(imgResponse);
				if (imgResponse.success) {
					const imageURL = imgResponse.data.display_url;
					const {
						className,
						price,
						email,
						instructorName,
						availableSeats,
						
					} = data;
					const newItem = {
						className,
						price: parseFloat(price),
						email,
						instructorName,
						availableSeats: parseFloat(availableSeats),
						image: imageURL,
						
					};
					console.log(newItem);
					axiosSecure.post("/carts", newItem).then((data) => {
						console.log("after posting new Class items", data.data);
						if (data.data.insertedId) {
							reset();
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Class Added Successfully",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
				}
			});
	};

	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Add a Class</title>
			</Helmet>

			<div className="mt-10">
				<SectionHeading title="Add Classes" center={true} />
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-2xl mb-52 mt-14 mx-auto p-10 bg-[#edf3f3] shadow-xl rounded-md"
				>
					<div className="mb-4">
						<label
							htmlFor="recipeName"
							className="block font-medium mb-1"
						>
							Class Name
						</label>
						<input
							type="text"
							name="className"
							placeholder="Class Name"
							{...register("className", {
								required: true,
								maxLength: 120,
							})}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="file"
							className="block font-medium mb-1"
						>
							Class Image
						</label>

						<input
							type="file"
							{...register("image", {
								required: true,
							})}
							class="file-input file-input-bordered w-full max-w-xs"
						/>
					</div>

					<div className="mb-4">
						<label className="block font-medium mb-1">
							Instructor Name
						</label>
						<input
							type="text"
							name="instructorName"
							placeholder="Instructor Name"
							
							{...register("instructorName", {
								required: true,
								maxLength: 120,
							})}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block font-medium mb-1">
							Instructor email
						</label>
						<input
							type="email"
							name="email"
							placeholder="Instructor Email"
							{...register("email", {
								required: true,
								maxLength: 120,
							})}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block font-medium mb-1">
							Available seats
						</label>
						<input
							type="number"
							name="availableSeats"
							placeholder="Available Seats"
							{...register("availableSeats", {
								required: true,
								maxLength: 120,
							})}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block font-medium mb-1">Price</label>
						<input
							type="number"
							name="price"
							placeholder="Price"
							{...register("price", {
								required: true,
								maxLength: 120,
							})}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<input
						type="submit"
						className="w-[25%] bg-[#79a84a] rounded-lg text-white py-3 text-base font-semibold px-4 rounded-0 hover:bg-lime-700"
						value="Add Class"
					/>
				</form>
			</div>
		</div>
	);
};

export default AddClasses;
