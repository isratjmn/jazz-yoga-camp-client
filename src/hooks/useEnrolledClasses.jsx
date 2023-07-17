import React from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useEnrolledClasses = () => {
	const { user } = useAuth();
	const secureAxios = useAxios();

	const { data: enrolledClasses = [], isLoading } = useQuery({
		queryKey: ["enrolled-classes", user?.email],
		queryFn: async () => {
			const res = await secureAxios.get(
				`enrolled-classes/${user?.email}`
			);
			return res.data;
		},
	});
	return { enrolledClasses, isLoading };
};

export default useEnrolledClasses;
