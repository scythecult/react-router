import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isNewUser: false,
  currentUser: {},
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
    setIsNewUser(state, action) {
      state.isNewUser = action.payload;
    },
    updateUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

const { login, logut, setIsNewUser, updateUser, setIsLoginShown } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, login, logut, setIsNewUser, updateUser, setIsLoginShown };
