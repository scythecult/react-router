import { createSlice } from "@reduxjs/toolkit";
import { createQuote } from "../utils/utils";

const QUOTES_MOCK = [
  { id: 1, author: "Check", text: "Privet" },
  { id: 2, author: "Zalupa", text: "Zdarove brat" },
];

const initialState = {
  quotes: QUOTES_MOCK,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote(state, action) {
      state.quotes.push(createQuote(action.payload));
    },
  },
});

const { addQuote } = quotesSlice.actions;
const quotesReducer = quotesSlice.reducer;

export { quotesReducer, addQuote };
