import { configureStore } from "@reduxjs/toolkit";
import { commentReducer } from "../features/comments-slice";
import { quotesReducer } from "../features/quotes-slice";
import { themeReducer } from "../features/theme-slice";

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    comments: commentReducer,
    theme: themeReducer,
  },
});

export { store };
