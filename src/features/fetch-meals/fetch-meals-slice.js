import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    fetchMeals(state, action) {
      state.value = action.payload;
    },
  },
});

const { fetchMeals } = mealsSlice.actions;
const mealsReducer = mealsSlice.reducer;

export { fetchMeals, mealsReducer };
