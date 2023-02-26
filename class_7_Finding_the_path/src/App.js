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
 */

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";

// JSX => React.createElement => Object => HTML (DOM)

/**
  Header
     - logo
	 - nav bar (right side)
	 - cart
  Body
	 - Search
	 - Restaurant List
	 	- Restaurant Card (many cards)
		  - Image
		  - Name
		  - Rating
		  - Cuisine
  Footer
	 - links
	 - copyright
 */

// no key (not acceptable) <<<<<<<<<< index key (last option) <<<<<< unique key (best practice)

const AppLayout = () => {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
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
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
		],
	},
]);

// DOM manipulation, telling react where to render the h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside the root.
// root.render(HeaderComponent());
root.render(<RouterProvider router={appRouter} />);
