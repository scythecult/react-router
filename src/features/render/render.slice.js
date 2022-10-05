import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
  isAuthVisible: false,
};

const renderSlice = createSlice({
  name: "renderComponent",
  initialState,
  reducers: {
    setIsCartVisible(state, action) {
      state.isCartVisible = action.payload;
    },
    setIsAuthVisible(state, action) {
      state.isAuthVisible = action.payload;
    },
  },
});

const { setIsAuthVisible, setIsCartVisible } = renderSlice.actions;
const renderReducer = renderSlice.reducer;

export { renderReducer, setIsAuthVisible, setIsCartVisible };
