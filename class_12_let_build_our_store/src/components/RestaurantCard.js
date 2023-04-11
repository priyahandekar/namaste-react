import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/userContext";

// Config Driven UI
const RestaurantCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	avgRating,
	lastMileTravel,
}) => {
	const { user } = useContext(UserContext);
	return (
		<div className="w-52 p-2 m-2 shadow-md bg-yellow-50">
			<img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
			<h2 className="font-bold text-xl">{name}</h2>
			{/* <h2>{cuisines.join(",")}</h2> */}
			<h3>{lastMileTravel}</h3>
			<h4>{avgRating}</h4>
			<h5 className="font-bold">
				{user.name}-{user.email}
			</h5>
		</div>
	);
};

export default RestaurantCard;
