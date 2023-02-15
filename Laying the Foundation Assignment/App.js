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
import logo from "./logo.png";
import userIcon from "./userIcon.png";
import { FaSearch } from "react-icons/fa";
import "./App.css";

// JSX => React.createElement => Object => HTML (DOM)

const jsxHeading = (
	<h1 id="title" key="h2">
		Namaste React Element
	</h1>
);
var xyz = 10;
const HeaderComponent = () => {
	return (
		<div className="header">
			<div className="logo">
				<img
					src={logo}
					height="50px"
					width="50px"
					style={{ borderRadius: "5px" }}
				/>
			</div>
			<div className="search">
				<input type="text" className="input"></input>
				<button type="submit" className="btn">
					<FaSearch />
				</button>
			</div>
			<div className="user">
				<img
					src={userIcon}
					height="25px"
					width="25px"
					style={{ borderRadius: "5px" }}
				/>
			</div>
		</div>
	);
};

//same as above
const HeaderComponent2 = () => (
	<div>
		{
			// Comment
			/**
			 * Multi line Comment
			 * JSX Mandatory - NOT
			 * Is ES6 Mandatory -  NOT
			 */
		}
		<h1>Namaste React</h1>
	</div>
);
// DOM manipulation, telling react where to render the h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside the root.
// root.render(HeaderComponent());
root.render(<HeaderComponent />);
