// named import
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../constants";

// default import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
// What is state?
// What is Hooks? -> functions
const Body = () => {
	// searchText is a local state variable
	// To create state variables, return [variable name, function to update the variable]

	const [filteredRestaurants, setfilteredRestaurants] = useState([]);
	console.log(useState());
	const [searchInput, setSearchInput] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const { user, setUser } = useContext(UserContext);
	// empty dependency array => once after render
	// dep array[searchText] => once after initial render + everytime after re-render (my searchText changes)
	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		try {
			const data = await fetch(API_ENDPOINT);
			const json = await data.json();

			// Optional Chaining
			setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
			setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		} catch (error) {
			console.log(error);
		}
	}
	const isOnline = useOnline();
	if (!isOnline) {
		return <h1> 🔴 Please check your internet connection</h1>;
	}

	// Early return
	if (!allRestaurants) return null;

	// if (filteredRestaurants && filteredRestaurants.length === 0)
	// 	return <h3>No Restaurants found</h3>;

	return allRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search-container p-5 my-10 bg-yellow-100 ">
				<input
					type="text"
					className="search-input focus:bg-gray-200 p-2 m-2"
					value={searchInput}
					placeholder="search"
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button
					className="m-2 p-2 bg-violet-500 text-white rounded-xl hover:bg-violet-700"
					onClick={() => {
						const data = filterData(searchInput, allRestaurants);
						setfilteredRestaurants(data);
					}}
				>
					Search
				</button>
				<input
					onChange={(e) =>
						setUser({
							...user,
							name: e.target.value,
						})
					}
					value={user.name}
				/>
				<input
					onChange={(e) =>
						setUser({
							...user,
							email: e.target.value,
						})
					}
					value={user.email}
				/>
			</div>
			<div className="flex flex-wrap">
				{filteredRestaurants && filteredRestaurants.length === 0 ? (
					<h3>No Restaurants found</h3>
				) : (
					filteredRestaurants.map((restaurant) => (
						<Link
							to={`/restaurant/${restaurant.data.id}`}
							key={restaurant.data.id}
						>
							<RestaurantCard {...restaurant.data} />
						</Link>
					))
				)}
			</div>
		</>
	);
};

export default Body;
