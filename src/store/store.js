import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counter-slice";
import { usersReducer } from "../features/users/users-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export { store };
