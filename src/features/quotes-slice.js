import { createSlice } from "@reduxjs/toolkit";

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
    sortAscending(state) {
      state.quotes.sort((a, b) =>
        b.author.toLowerCase().localeCompare(a.author.toLowerCase())
      );
    },
    sortDescending(state) {
      state.quotes.sort((a, b) =>
        a.author.toLowerCase().localeCompare(b.author.toLowerCase())
      );
    },
  },
});

const { addQuotes, sortAscending, sortDescending } = quotesSlice.actions;
const quotesReducer = quotesSlice.reducer;

export { quotesReducer, addQuotes, sortAscending, sortDescending };
