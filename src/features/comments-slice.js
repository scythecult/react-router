import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments(state, action) {
      state.comments = action.payload;
    },
  },
});

const { addComments } = commentsSlice.actions;
const commentReducer = commentsSlice.reducer;

export { commentReducer, addComments };
