import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: { color: "black" } },

  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

//using payload change the action
//reducres is used to define a list of actions
//first we set a state in gloabally so we use store then using slice
//we create a slice and set a reducer for the intialstate actions
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
