export function filterData(searchInput, allRestaurants) {
	const data = allRestaurants.filter((restaurant, index) => {
		return allRestaurants[index].data.name
			.toLowerCase()
			.includes(searchInput.toLowerCase());
	});
	return data;
}
