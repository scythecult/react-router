import { createSlice } from "@reduxjs/toolkit";
import { createQuote } from "../utils/utils";

const QUOTES_MOCK = [
  { id: 1, author: "Check", text: "Privet", comments: ["normalno"] },
  { id: 2, author: "Zalupa", text: "Zdarove brat", comments: [] },
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
    addComment(state, action) {
      const targetQuote = state.quotes.find(
        (quote) => quote.author.toLowerCase() === action.payload.author.toLowerCase()
      );

      targetQuote.comments.push(action.payload.comment);
    },
  },
});

const { addQuote, addComment } = quotesSlice.actions;
const quotesReducer = quotesSlice.reducer;

export { quotesReducer, addQuote, addComment };
