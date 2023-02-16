import React from "react";
import ReactDOM from "react-dom/client";
// Q1 : Create a Nested header Element using React.createElement (h1,h2, h3 inside a div with class "title")

const heading1 = React.createElement(
	"h1",
	{ style: { backgroundColor: "black" }, key: "h1" },
	"heading one"
);
const heading2 = React.createElement("h2", { key: "h2" }, "heading two");
const heading3 = React.createElement("h3", { key: "h3" }, "heading three");

const container = React.createElement(
	"div",
	{ id: "container", className: "Title", key: "title" },
	[heading1, heading2, heading3]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

//Create the same using JSX

const jsxHeading1 = <h1 key="h1">Heading One JSX</h1>;
const jsxHeading2 = <h2 key="h2">Heading Two</h2>;
const jsxHeading3 = <h3 key="h3">Heading Three</h3>;

const divContainer = (
	<div>
		{jsxHeading1}
		{jsxHeading2}
		{jsxHeading3}
	</div>
);
// root.render(divContainer);

// Create a functional component of the same with JSX

const FuncHeading1 = () => <h1 key="h1">Heading One</h1>;
const FuncHeading2 = () => <h2 key="h2">Heading Two</h2>;
const FuncHeading3 = () => <h3 key="h3">Heading Three</h3>;

const DivFuncContainer = () => (
	<div>
		<FuncHeading1 />
		<FuncHeading2 />
		<FuncHeading3 />
		{jsxHeading1}
	</div>
);
root.render(<DivFuncContainer />);
