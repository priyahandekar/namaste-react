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
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
	"h1",
	{
		id: "h1",
		key: "1",
	},
	"Namaste Everyone from Javascript!"
);
const heading2 = React.createElement(
	"h2",
	{
		id: "h2",
		key: "2",
	},
	"Namaste Everyone from React - Parcel!"
);

//Passing multiple children
const container = React.createElement(
	"div",
	{
		id: "container",
	},
	[heading1, heading2]
);
console.log(container); //object
// DOM manipulation, telling react where to render the h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside the root.
root.render(container);
