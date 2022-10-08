import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentProducts: [],
};

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    addRecentProducts(state, action) {
      state.recentProducts = action.payload;
    },
    removeRecentProduct(state, action) {
      const targetProductIndex = state.recentProducts.findIndex(
        (recentProduct) => recentProduct.id === action.payload.id
      );

      state.recentProducts.splice(targetProductIndex, 1);
    },
    clearRecentProducts(state) {
      state.recentProducts = [];
    },
  },
});

const { addRecentProducts, removeRecentProduct, clearRecentProducts } =
  recentSlice.actions;
const recentReducer = recentSlice.reducer;

export { addRecentProducts, removeRecentProduct, clearRecentProducts, recentReducer };
