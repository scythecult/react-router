import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/user-auth";
import { cartReducer } from "../features/cart/cart-slice";
import { mealsReducer } from "../features/fetch-meals/fetch-meals-slice";
import { renderReducer } from "../features/render/render.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealsReducer,
    render: renderReducer,
    cart: cartReducer,
  },
});

export { store };
