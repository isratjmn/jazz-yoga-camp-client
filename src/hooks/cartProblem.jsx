import React, { useContext } from "react";
// import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const UseCart = () => {
	const { user, loading } = useAuth();
	const token = localStorage.getItem("access-token");
	const [axiosSecure] = useAxios();

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["carts", user?.email],
		enabled: !loading,

		queryFn: async () => {
			const res = await fetch(
				`http://localhost:5000/carts?email=${user?.email}`,
				{
					headers: {
						authorization: `bearer ${token}`,
					},
				}
			);
			return res.json();
		},
		/* queryFn: async () => {
			const res = await axiosSecure(`/carts?email=${user?.email}`);
			console.log("res From Axios", res);
			return res.data;
		}, */
	});
	return [cart, refetch];
};

export default UseCart;
