import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API } from "../constants";

const useRestaurant = (id) => {
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
	return restaurant;
};

export default useRestaurant;
