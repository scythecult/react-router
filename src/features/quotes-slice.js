import { createSlice } from "@reduxjs/toolkit";
import { createQuote } from "../utils/utils";

const initialState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuotes(state, action) {
      state.quotes = action.payload;
    },
    addQuote(state, action) {
      state.quotes.push(createQuote(action.payload));
    },
    addComment(state, action) {
      const targetQuote = state.quotes.find(
        (quote) => quote.author.toLowerCase() === action.payload.author.toLowerCase()
      );

      targetQuote.comments.push(action.payload.comment);
    },
    sortAscending(state) {
      state.quotes.sort((a, b) => b.author.localeCompare(a.author));
    },
    sortDescending(state) {
      state.quotes.sort((a, b) => a.author.localeCompare(b.author));
    },
  },
});

const { addQuotes, addQuote, addComment, sortAscending, sortDescending } =
  quotesSlice.actions;
const quotesReducer = quotesSlice.reducer;

export { quotesReducer, addQuotes, addQuote, addComment, sortAscending, sortDescending };
