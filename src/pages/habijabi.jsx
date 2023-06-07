import React from 'react';

const habijabi = () => {
    return (
        <div>
            className={`px-8 md:px-20 bg-[url('https://img.freepik.com/premium-vector/round-gradient-mandala-white-isolated-background-vector-boho-mandala-pastel-colors-mandala-with-floral-patterns-yoga-template_317038-216.jpg')] object-cover bg-top bg-no-repeat relative h-[500px] z-10`}
				style={{backgroundSize: 'cover'}}
                const navOptions = (
		<>
			<li>
				<Link
					to="/"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Home
				</Link>
			</li>

			<li>
				<Link
					to="/menu"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Our Menu
				</Link>
			</li>
			<li>
				<Link
					to="/order/salad"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Order Food
				</Link>
			</li>
			<li>
				<Link
					to="/secret"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Secret
				</Link>
			</li>
		
			
			<li>
				<Link
					to="/dashboard/mycart"
					className="text-black lg:text-white font-semibold text-lg"
				>
					<button className="btn gap-2">
						<HiOutlineShoppingCart className="text-2xl" />
						<div className="badge badge-secondary">
							{/* +{cart?.length || 0} */}
						</div>
					</button>
				</Link>
			</li>

			{user ? (
				<>
					<span>{user?.displayName}</span>
					<button
						onClick={handleLogOut}
						className="btn btn-active btn-ghost"
					>
						LogOut
					</button>
				</>
			) : (
				<>
					<li>
						<Link
							to="/login"
							className="text-black lg:text-white font-semibold text-lg"
						>
							Login
						</Link>
					</li>
				</>
			)}
		</>
	);
        </div>
    );
};

export default habijabi;