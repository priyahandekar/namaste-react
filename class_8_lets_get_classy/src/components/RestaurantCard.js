import { IMG_CDN_URL } from "../constants";

// Config Driven UI
const RestaurantCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	avgRating,
	lastMileTravel,
}) => {
	return (
		<div className="card">
			<img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
			<h2>{name}</h2>
			{/* <h2>{cuisines.join(",")}</h2> */}
			<h3>{lastMileTravel}</h3>
			<h4>{avgRating} minutes</h4>
		</div>
	);
};

export default RestaurantCard;
