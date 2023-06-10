import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();

	// Use Axios Secure with react Query
	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user?.email}`);
			console.log("Is Admin Resonse", res);
			return res.data.admin;
		},
	});
	return [isAdmin, isAdminLoading];
    
};
export default useAdmin;