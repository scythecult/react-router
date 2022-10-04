import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/user-auth";
import { mealsReducer } from "../features/fetch-meals/fetch-meals-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealsReducer,
  },
});

export { store };
