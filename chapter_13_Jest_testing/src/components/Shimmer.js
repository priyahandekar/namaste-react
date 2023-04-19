// const Shimmer = () => {
// 	return <h1>Shimmer UI loading....</h1>;
// };

// export default Shimmer;

// Shimmer card to display with animation
const CardShimmer = () => {
	return (
		<div className="shimmer-card">
			<div className="shimmer-img stroke animate"></div>
			<div className="shimmer-title stroke animate"></div>
			<div className="shimmer-tags stroke animate "></div>
			<div className="shimmer-details stroke animate "></div>
		</div>
	);
};

const Shimmer = () => {
	return (
		<div className="shimmer-container" data-testid="shimmer">
			{new Array(12).fill(0).map((element, index) => {
				return <CardShimmer key={index} />;
			})}
		</div>
	);
};
export default Shimmer;
