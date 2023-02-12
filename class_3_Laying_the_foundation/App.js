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

// JSX => React.createElement => Object => HTML (DOM)

const jsxHeading = (
	<h1 id="title" key="h2">
		Namaste React Element
	</h1>
);
var xyz = 10;
const HeaderComponent = () => {
	return (
		<div>
			{jsxHeading}
			{xyz} {console.log(xyz)} {1 + 2}
			<HeaderComponent2 />
			{HeaderComponent2()}
			<h1>Namaste React functional component</h1>
			<h2>This is heading 2</h2>
		</div>
	);
};

//same as above
const HeaderComponent2 = () => (
	<div>
		<h1>Namaste React</h1>
	</div>
);
// DOM manipulation, telling react where to render the h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside the root.
// root.render(HeaderComponent());
root.render(<HeaderComponent />);
