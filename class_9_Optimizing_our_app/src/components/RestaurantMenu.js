import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_API, IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
	const { id } = useParams();

	const restaurant = useRestaurant(id);

	return !restaurant ? (
		<Shimmer />
	) : (
		<div className="restaurant-details">
			<div>
				<h1>Restaurant ID: {id}</h1>
				<h2>{restaurant?.name}</h2>
				<img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
				<h3>{restaurant?.area}</h3>
				<h3>{restaurant?.city}</h3>
				<h3>{restaurant?.avgRating}</h3>
				<h3>{restaurant?.costFortwoMsg}</h3>
			</div>
			<div>
				<h1>Menu</h1>
				<ul>
					{Object.values(restaurant?.menu?.items).map((item) => (
						<li key={item.id}>{item?.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
