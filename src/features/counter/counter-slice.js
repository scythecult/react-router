import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseBy: (state, action) => {
      state.value += action.payload;
    },
  },
});

const { increment, decrement, increaseBy } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export { counterSlice, counterReducer, increment, decrement, increaseBy };
