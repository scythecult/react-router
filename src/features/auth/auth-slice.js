import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginUser(state) {
      state.isLoggedIn = true;
    },

    logoutUser(state) {
      state.isLoggedIn = false;
    },
  },
});

const { loginUser, logoutUser } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, loginUser, logoutUser };
