/*
 * PARCEL FUNTIONS
 * HMR - Hot Module Replacement/Reloding
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * CLEANING OUR CODE
 * Dev and production build
 * Super Fast
 * Image Optimization
 * Caching while development
 * Compression (Compresses the files)
 * Compatible with older version of browser
 * HTTPS on dev
 * Port Number
 * Consistent Hashing Algorithm
 * Zero Config Bundler
 * Tree Shaking - Removing unwanted code
 
 To get Tailwind class suggestion - fn+space
 */

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

import "../index.css";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";

const Instamart = lazy(() => import("./components/Instamart"));
// import("./components/Instamart")This is a promise

/**
 * Chunking
 * Code Splitting
 * Dynamic Loading
 * Dynamic Imports
 * Dynamic bundling
 * On Demand loading
 */
// JSX => React.createElement => Object => HTML (DOM)
// no key (not acceptable) <<<<<<<<<< index key (last option) <<<<<< unique key (best practice)

const AppLayout = () => {
	const [user, setUser] = useState({
		name: "Priya",
		email: "priya@gmail.com",
	});
	return (
		<React.Fragment>
			<UserContext.Provider value={{ user: user, setUser }}>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</React.Fragment>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about", // parentPath/{path} => localhost:1234/profile
				element: <About />,
				children: [
					{
						path: "profile", // parentPath/{path} => localhost:1234/about/profile
						element: <Profile />,
					},
				],
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
			{
				path: "/instamart",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Instamart />
					</Suspense>
				),
			},
		],
	},
]);

// DOM manipulation, telling react where to render the h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside the root.
// root.render(HeaderComponent());
root.render(<RouterProvider router={appRouter} />);
