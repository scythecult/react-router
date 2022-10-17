import { configureStore } from "@reduxjs/toolkit";
import { commentReducer } from "../features/comments-slice";
import { quotesReducer } from "../features/quotes-slice";

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    comments: commentReducer,
  },
});

export { store };
