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
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import logo from "../logo.png";
import userIcon from "../userIcon.png";
import { FaSearch } from "react-icons/fa";
import "./App.css";

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
			<Body />
			<Footer />
		</React.Fragment>
	);
};

// DOM manipulation, telling react where to render the h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside the root.
// root.render(HeaderComponent());
root.render(<AppLayout />);
