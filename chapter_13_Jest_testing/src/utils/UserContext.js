import { createContext } from "react";

const UserContext = createContext({
	user: {
		name: "demo",
		email: "demo@gmail.com",
	},
});

UserContext.displayName = "UserContext"; // for debugging in dev tool components

export default UserContext;
