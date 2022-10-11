import { configureStore } from "@reduxjs/toolkit";
import { quotesReducer } from "../features/quotes-slice";

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export { store };
