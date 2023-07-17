import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./providers/ThemeProvider";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider>
						<RouterProvider router={router} />
						<div>
							<div className="rn-gradient-circle"></div>
							<div className="rn-gradient-circle theme-pink"></div>
						</div>
					</ThemeProvider>
				</QueryClientProvider>
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
