import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
	const { user } = useContext(UserContext);
	return <h4>This site id developed by {user.name}</h4>;
};

export default Footer;
