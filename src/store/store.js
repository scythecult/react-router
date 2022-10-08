import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/user-auth";
import { productReducer } from "../features/products/product-slice";
import { recentReducer } from "../features/recent/recent-slice";
import { renderReducer } from "../features/render/render.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    render: renderReducer,
    recent: recentReducer,
  },
});

export { store };
