import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  article: { title: "", author: "", url: "" },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    CHANGE_IS_OPEN: (state) => {
      state.isOpen = !state.isOpen;

      console.log(state.article);
    },
    ADD_ARTICLE: (state, action) => {
      state.article = action.payload;

      console.log(state.article);
    },
  },
});

export const { CHANGE_IS_OPEN, ADD_ARTICLE } = modalSlice.actions;

export default modalSlice.reducer;
