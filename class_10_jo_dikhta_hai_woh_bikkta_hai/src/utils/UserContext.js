import { createContext } from "react";

const UserContext = createContext({
	user: {
		name: "demo",
		email: "demo@gmail.com",
	},
});

export default UserContext;
