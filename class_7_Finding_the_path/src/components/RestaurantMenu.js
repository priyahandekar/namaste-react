import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_API, IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
	const { id } = useParams();
	const [restaurant, setRestaurantDetails] = useState(null);
	useEffect(() => {
		getRestaurantDetails();
	}, []);

	const getRestaurantDetails = async () => {
		const restaurantDetails = await fetch(RESTAURANT_DETAILS_API + id);
		const data = await restaurantDetails.json();
		console.log(data?.data);
		setRestaurantDetails(data?.data);
	};
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
