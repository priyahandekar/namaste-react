const Title = () => (
	<a href="/">
		<img
			className="logo"
			alt="logo"
			src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
		/>
	</a>
);

const Header = () => {
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
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
		</div>
	);
};

export default Header;
