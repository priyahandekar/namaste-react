import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API } from "../constants";

const useRestaurant = (id) => {
	const [restaurant, setRestaurantDetails] = useState(null);

	useEffect(() => {
		getRestaurantDetails();
	}, []);

	const getRestaurantDetails = async () => {
		try {
			const response = await fetch(RESTAURANT_DETAILS_API + id);
			const res_data = await response.json();
			const menuItemsList =
				res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
			const itemCategory =
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
			const NestedItemCategory =
				"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

			/* Mock Data */
			//const res_data =  restaurantMenu;

			const menu = menuItemsList.map((item) => {
				if (
					item.card.card["@type"] === itemCategory ||
					item.card.card["@type"] === NestedItemCategory
				) {
					return item.card.card;
				}
			});

			const modifiedData = {
				info: res_data.data.cards[0].card.card.info,
				menu: menu.filter((value) => value !== undefined),
			};

			setRestaurantDetails(modifiedData);
		} catch (err) {
			console.log(err);
		}
	};
	return restaurant;
};

export default useRestaurant;
