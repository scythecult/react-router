import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state) {
      state.isDark = !state.isDark;
    },
  },
});

const { switchTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export { themeReducer, switchTheme };
