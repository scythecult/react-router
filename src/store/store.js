import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/auth-slice";
import { counterReducer } from "../features/counter/counter-slice";
import { usersReducer } from "../features/users/users-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export { store };
