import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logut(state) {
      state.isLoggedIn = false;
    },
  },
});

const { login, logut } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, login, logut };
