import { createSlice } from "@reduxjs/toolkit";
import { transformCartData } from "../../utils/utils";

const initialState = {
  cartData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const transformed = transformCartData(action.payload);
      state.cartData = transformed;
    },
    increase(state, action) {
      state.cartData = state.cartData.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += action.payload.quantity;
        }

        return item;
      });
    },
    decrease(state, action) {
      const itemIndex = state.cartData.findIndex((item) => item.id === action.payload.id);
      const cartItem = state.cartData[itemIndex];

      cartItem.quantity -= 1;

      if (cartItem.quantity < 1) {
        state.cartData.splice(itemIndex, 1);
      }
    },
  },
});

const { addItems, increase, decrease } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartReducer, addItems, increase, decrease };
