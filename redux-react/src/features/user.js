import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "lakshmi", age: 0, email: "gmail.com" } },

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

//using payload change the action
//reducres is used to define a list of actions
//first we set a state in gloabally so we use store then using slice
//we create a slice and set a reducer for the intialstate actions
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
