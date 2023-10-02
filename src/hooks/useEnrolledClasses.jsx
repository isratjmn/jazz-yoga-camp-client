import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useEnrolledClasses = () => {
	const [secureAxios] = useAxios();
	const { user } = useAuth();

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
