import React, { useEffect, useState } from "react";

const Profile = (props) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("Functional Component Timer");
		}, 1000);
		return () => {
			clearInterval(timer);
			console.log("useEffect Return"); // This is called after you leave your page : UNMOUNTING
		};
		// console.log("useEffect"); // After initial render and then after update
	});
	// console.log("render"); // first called
	return (
		<div>
			<h1>This is a Function based component</h1>
			<h3>Name: {props.name}</h3>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(1)}>Click</button>
		</div>
	);
};

export default Profile;
