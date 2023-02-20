// named import
import { useState } from "react";
import { restaurantList } from "../constants";

// default import
import RestaurantCard from "./RestaurantCard";

// What is state?
// What is Hooks? -> functions
const Body = () => {
	// searchText is a local state variable
	// To create state variables, return [variable name, function to update the variable]

	const [restaurants, setRestaurants] = useState(restaurantList);
	const [searchInput, setSearchInput] = useState("");

	const filterData = () => {
		const data = restaurantList.filter((restaurant, index) => {
			return restaurantList[index].data.name
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		});
		setRestaurants(data);
	};
	return (
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
				{restaurants.map((restaurant) => (
					<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
				))}
			</div>
		</>
	);
};

export default Body;
