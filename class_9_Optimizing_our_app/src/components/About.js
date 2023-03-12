import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends Component {
	constructor(props) {
		super(props);
		console.log("Constructor About"); //first constructor called
	}
	componentDidMount() {
		// Best place to make an Api call because its after render.
		console.log("Compoenent Did Mount About");
	}
	render() {
		console.log("Render About"); //2nd constructor called
		return (
			<div>
				<h1>About</h1>
				<p>This is About us Page</p>
				{/* Children will go inside Outlet */}
				{/* <Outlet name="Priya" /> */}

				{/* If you do not want to use Outlet */}
				{/* <ProfileClass name="child one" /> */}
				<Profile />
				{/* <ProfileClass name="child two" /> */}
			</div>
		);
	}
}

export default About;

/*
	* Parent Constructor
	* Parent Render
		* first child constructor
		* first child render
		* second child constructor
		* second child render

*        DOM UPDATED FOR CHILDREN
		* first child componentDidMount
		* second child componentDidMount
	* Parent componentDidMount

*/
