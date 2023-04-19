import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
	return (
		<div className="border border-black p-2 m-2">
			<h3 className="font-bold text-xl">{title}</h3>
			<button onClick={() => setIsVisible(isVisible ? false : true)}>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible && <p>{description}</p>}
		</div>
	);
};

const Instamart = () => {
	const [visibleSection, setVisibleSection] = useState("about");
	return (
		<div>
			<h1 className="text-3xl m-2 p-2 font-bold">Instamart</h1>
			<Section
				title={"About Instamart"}
				description={
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				}
				isVisible={visibleSection === "about"}
				setIsVisible={() => setVisibleSection("about")}
			/>
			<Section
				title={"Team Instamart"}
				description={
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				}
				isVisible={visibleSection === "team"}
				setIsVisible={() => setVisibleSection("team")}
			/>
		</div>
	);
};

export default Instamart;
