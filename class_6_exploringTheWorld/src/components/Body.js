// named import
import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../constants";

// default import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// What is state?
// What is Hooks? -> functions
const Body = () => {
	// searchText is a local state variable
	// To create state variables, return [variable name, function to update the variable]

	const [filteredRestaurants, setfilteredRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);

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
	const filterData = () => {
		const data = allRestaurants.filter((restaurant, index) => {
			return allRestaurants[index].data.name
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		});
		setfilteredRestaurants(data);
	};

	// Early return
	if (!allRestaurants) return null;

	// if (filteredRestaurants && filteredRestaurants.length === 0)
	// 	return <h3>No Restaurants found</h3>;

	return allRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					value={searchInput}
					placeholder="search"
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button className="search-btn" onClick={() => filterData()}>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filteredRestaurants && filteredRestaurants.length === 0 ? (
					<h3>No Restaurants found</h3>
				) : (
					filteredRestaurants.map((restaurant) => (
						<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
					))
				)}
			</div>
		</>
	);
};

export default Body;
