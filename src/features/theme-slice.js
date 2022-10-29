import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLight: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state) {
      state.isLight = !state.isLight;
    },
  },
});

const { switchTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export { themeReducer, switchTheme };
