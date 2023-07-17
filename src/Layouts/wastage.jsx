<div className="drawer">
	<input id="my-drawer" type="checkbox" className="drawer-toggle" />
	<div className="drawer-content">
		{/* Page content here */}
		<label htmlFor="my-drawer" className="btn btn-primary drawer-button">
			Open drawer
		</label>
		<Outlet />
	</div>
	<div className="drawer-side">
		<label htmlFor="my-drawer" className="drawer-overlay"></label>
		<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
			{/* Sidebar content here */}
			<li>
				<a>Sidebar Item 1</a>
			</li>
			<li>
				<a>Sidebar Item 2</a>
			</li>
		</ul>
	</div>
</div>;

// DashboardLayout.jsx

return (
	<div className="flex">
		{/* Sidebar - Fixed for desktop */}
		<div className="hidden md:block w-72 h-screen drawer bg-[#edf3f3]">
			<div className="p-6">{navLinks}</div>
		</div>
		{/* Content */}
		<div className="flex-grow">
			<Outlet />
		</div>
		{/* Toggle Button - Visible for mobile */}
		<button
			className="lg:hidden btn btn-md btn-error text-white bg-[#79a84a] fixed bottom-50 font-bold left-60 transform -translateX(-50%) transition duration-300 text-sm rounded-md"
			onClick={toggleDrawer}
		>
			{isLoading ? "Loading..." : "Show"}
		</button>

		{/* Drawer - Visible for mobile */}
		<Drawer
			open={isOpen}
			onClose={toggleDrawer}
			direction="left"
			className="drawer-content md:hidden"
		>
			<div className="p-4">{navLinks}</div>
		</Drawer>
	</div>
);


SingleClass.jsx
<div className="card w-[90%] md:w-full h-full bg-base-100 p-4 shadow-xl mx-auto border rounded-xl">
				<motion.div
					style={{
						scale,
						opacity,
					}}
				>
					<figure>
						<img
							className="h-72 object-cover w-full mx-auto mb-6"
							src={image}
							alt="ClassImg"
						/>
					</figure>
				</motion.div>
				<div className="card-body flex flex-col">
					<h2 className="card-title font-bold">{className}</h2>
					<h2 className="font-bold"></h2>
					<p className="font-semibold text-lime-600">
						Instructor Name: {instructorName}
					</p>
					<p className="font-semibold text-lime-600">
						Enrolled Students: {enrolledStudents} nos
					</p>
					<p className="font-semibold text-lime-600">
						Available Seats: {availableSeats} nos
					</p>
					<p className="font-bold ">Price: {price}</p>
				</div>
			</div>