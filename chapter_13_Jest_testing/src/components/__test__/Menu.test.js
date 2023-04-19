import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTAURANT_MENU } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(RESTAURANT_MENU),
	});
});

test("Add items to Cart", async () => {
	const menuDetails = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
				<RestaurantMenu />
				{/* <Cart />  Check for cart also*/}
			</Provider>
		</StaticRouter>
	);
	await waitFor(() => expect(menuDetails.getByTestId("menu")));
	const addBtn = menuDetails.getAllByTestId("addBtn");
	fireEvent.click(addBtn[0]);
	const cart = menuDetails.getByTestId("cart");
	expect(cart.innerHTML).toBe("Cart = 1");
});
