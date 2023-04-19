import React from "react";
import { useSelector } from "react-redux";
import RestaurantItemCategory from "./RestaurantItemCategory.js";

const RestaurantMenuList = ({ menu }) => {
	// get cart items from redux store
	const cartItems = useSelector((store) => store.cart.items);
	// get total price for cart items

	return (
		<div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
			<div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
				{menu.map((item, index) => (
					<div key={index}>
						{item.categories ? (
							<div />
						) : (
							<RestaurantItemCategory itemCategory={item} />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenuList;
