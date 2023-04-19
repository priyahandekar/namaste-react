import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state = initialState, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state = initialState, action) => {
			state.items.pop(); //write logic for specific item
		},
		clearCart: (state = initialState) => {
			state.items = [];
		},
	},
});

// exporting named the actions.
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting default the reducers, it conbine all reducers.
export default cartSlice.reducer;

// cartSlice = {
//     actions: {
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer: reducers,
// }
