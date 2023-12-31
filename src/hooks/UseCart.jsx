import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
const UseCart = () => {
	const { user, loading } = useAuth();
	const token = localStorage.getItem("access-token");
	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["carts", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await fetch(
				`http://127.0.0.1:5000/carts?email=${user?.email}`,
				{
					headers: {
						authorization: `bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});
	return [cart, refetch];
};
export default UseCart;


