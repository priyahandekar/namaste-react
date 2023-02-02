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
	"Namaste Everyone from React!"
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
