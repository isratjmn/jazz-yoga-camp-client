
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
	const { user } = useAuth();
	const [axiosSecure] = useAxios();

	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
		["isInstructor", user?.email],
		async () => {
			const res = await axiosSecure.get(
				`/users/instructor/${user?.email}`
			);
			console.log("Is Instructor Response", res);
			return res.data.instructor;
		}
	);

	return [isInstructor, isInstructorLoading];
};

export default useInstructor;
