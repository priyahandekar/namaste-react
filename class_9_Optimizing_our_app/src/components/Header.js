import { useState } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
	<a href="/">
		<img className="logo" alt="logo" src={Logo} />
	</a>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	// const [isLoggedIn, setIsLoggedIn] = useState(true); //Make custom hook
	// const [getLocalVariables, setLocalVariables] = useLocalStorage();

	const isOnline = useOnline();
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/instamart">Instamart</Link>
					</li>
					<li>Cart</li>
				</ul>
			</div>
			{/* <div className="logo">
				<img
					src={logo}
					height="50px"
					width="50px"
					style={{ borderRadius: "5px" }}
				/>
			</div> */}
			{/* <div className="search">
				<input type="text" className="input"></input>
				<button type="submit" className="btn">
					<FaSearch />
				</button>
			</div> */}
			{/* <div className="user">
				<img
					src={userIcon}
					height="25px"
					width="25px"
					style={{ borderRadius: "5px" }}
				/>
			</div> */}
			{isOnline ? "✅" : "🔴"}
			{isLoggedIn ? (
				<button onClick={() => setIsLoggedIn(false)}>Logout</button>
			) : (
				<button onClick={() => setIsLoggedIn(true)}>Login</button>
			)}
		</div>
	);
};

export default Header;
