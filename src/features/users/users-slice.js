import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["Sanya", "Chert", "Pirojek"],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      const deleteIndex = state.value.findIndex(
        (user) => user.toLowerCase() === action.payload
      );

      if (deleteIndex !== -1) {
        state.value.splice(deleteIndex, 1);
      }
    },
  },
});

const { addUser, removeUser } = usersSlice.actions;
const usersReducer = usersSlice.reducer;

export { addUser, removeUser, usersReducer };
