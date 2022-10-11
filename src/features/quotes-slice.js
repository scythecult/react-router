import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote(state, action) {
      console.log("done");
    },
  },
});

const { addQuote } = quotesSlice.actions;
const quotesReducer = quotesSlice.reducer;

export { quotesReducer, addQuote };
