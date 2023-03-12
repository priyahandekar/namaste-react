import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../constants";

const useGetRestaurants = () => {
	const [filteredRestaurants, setfilteredRestaurants] = useState([]);
	const [, setAllRestaurants] = useState([]);
	useEffect(() => {
		getRestaurants();
	}, []);

	const getRestaurants = async () => {
		try {
			const data = await fetch(API_ENDPOINT);
			const json = await data.json();

			// Optional Chaining
			setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
			setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
			return json?.data?.cards[2]?.data?.data?.cards;
		} catch (error) {
			console.log(error);
		}
	};
	return filteredRestaurants;
};

export default useGetRestaurants;
