import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
});

export default store;

/**
 * Create Store
 *   - configureStore({}) => @reduxjs/toolkit
 * 
 * Provide the Store to the App
 *   - <Provider store={store} /> => react-redux
 * 
 * Slice
 *   - @reduxjs/toolkit - 
 *   const cartSlice = createSlice({
 *          name: "",
 *          initialState: {},
 *          reducers: {
 *              addItem: (state, action) => {}
 *          }
 *      });
 *   
 *   export const { addItem, removeItem, clearCart } = cartSlice.actions;
 *   export default cartSlice.reducer;
 * 
 * Put that Slice into our Store
 *    - {
 *          reducer: {
		        cart: cartSlice,
                user: userSlice,
	        },
 *      }
 */
