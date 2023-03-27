import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isList: true,
  value: 0,
};

const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    changeSwitch: (state) => {
      state.isList = !state.isList;
      state.value += 1;
    },
  },
});

export const { changeSwitch } = switchSlice.actions;

export default switchSlice.reducer;
