import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";
import Header from "../Header";
import store from "../../utils/store";

test("Logo should load on rendering Header", () => {
	// Load header
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	// check if logo is loaded
	const logo = header.getAllByTestId("logo");
	expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green", () => {
	// Load header
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	//Check for online
	const onlineStatus = header.getByTestId("online-status");
	expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have zero items", () => {
	// Load header
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	//Check for cart
	const cart = header.getByTestId("cart");
	expect(cart.innerHTML).toBe("Cart = 0");
});
