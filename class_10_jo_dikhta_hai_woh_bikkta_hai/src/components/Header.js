import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Title = () => (
	<a href="/">
		<img className="h-28 p-2" alt="logo" src={Logo} />
	</a>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	// const [isLoggedIn, setIsLoggedIn] = useState(true); //Make custom hook
	// const [getLocalVariables, setLocalVariables] = useLocalStorage();
	const { user } = useContext(UserContext);
	const isOnline = useOnline();
	return (
		<div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-100 md:bg-orange-200">
			<Title />
			<div className="nav-items">
				<ul className="flex py-10">
					<li className="px-2">
						<Link to="/">Home</Link>
					</li>
					<li className="px-2">
						<Link to="/about">About</Link>
					</li>
					<li className="px-2">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="px-2">
						<Link to="/instamart">Instamart</Link>
					</li>
					<li className="px-2">Cart</li>
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
			<h1>{isOnline ? "✅" : "🔴"}</h1>
			<span className="p-10 font-bold text-red-900">{user.name}</span>
			{isLoggedIn ? (
				<button onClick={() => setIsLoggedIn(false)}>Logout</button>
			) : (
				<button onClick={() => setIsLoggedIn(true)}>Login</button>
			)}
		</div>
	);
};

export default Header;
