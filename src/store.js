import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import moduleReducer from "./features/module/moduleSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        module: moduleReducer,
    }
})