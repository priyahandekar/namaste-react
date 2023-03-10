import React from "react";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: "",
			},
		};
		console.log("child - Constructor" + this.props.name); //first constructor called
	}

	async componentDidMount() {
		// API calls
		const data = await fetch("https://api.github.com/users/akshaymarch7");
		const json = await data.json();
		console.log(json);
		this.setState({});
		console.log("child - componentDidMount" + this.props.name);
	}

	componentDidUpdate(prevProps, prevState) {
		this.timer = setInterval(() => {
			console.log("Functional Component Timer");
		}, 1000);

		if (
			this.state.count !== prevState.count ||
			this.state.count2 !== prevState.count2
		) {
			// code
		}
		console.log("Child componetDidUpdate");
	}
	componentWillUnmount() {
		clearInterval(this.timer);
		console.log("child componentWillUnMount");
	}
	render() {
		const { count } = this.state;
		console.log("child - Render" + this.props.name); //2nd Render
		return (
			<div>
				<h1>This is a Class based component</h1>
				<h3>Name: {this.props.name}</h3>
				<h2>Count: {count}</h2>
				<button onClick={() => (this.state.count = 1)}>Click</button>
			</div>
		);
	}
}

export default Profile;

/*
* Render phase
 *  Parent Constructor
	* Parent Render
		*  child constructor
		*  child render

* Commit phase
    DOM is updated

    * Parent componentDidMount 
    * json logged in console
    * child componentDidMount
    * child render
 */

/* IF we put console.log("child componentDidmount") before making API call)
* Render phase
 *  Parent Constructor
	* Parent Render
		*  child constructor
		*  child render

* Commit phase
    DOM is updated

    * child componentDidMount
    * Parent componentDidMount 
    * json logged in console
    * child render
 */

/* Child Lifecycle
* Render phase
    * child constructor
    * child render
    * child componentDidMount
    
    * Api Call
    * set state
    
    * <Update Cyles>
    * render child again
    * componentDidUpdate 
 */
