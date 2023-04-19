import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_API, IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const restaurant = useRestaurant(id);
	console.log(restaurant);
	const handleAddItem = () => {
		dispatch(addItem());
	};
	return !restaurant ? (
		<Shimmer />
	) : (
		<div className="restaurant-details">
			<div data-testid="menu">
				<RestaurantInfo {...restaurant.info} />
				<RestaurantMenuList menu={restaurant.menu} />
				{/* <h1>Restaurant ID: {id}</h1>
				<h2>{restaurant?.name}</h2>
				<img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
				<h3>{restaurant?.area}</h3>
				<h3>{restaurant?.city}</h3>
				<h3>{restaurant?.avgRating}</h3>
				<h3>{restaurant?.costFortwoMsg}</h3> */}
			</div>
		</div>
	);
};

export default RestaurantMenu;
