import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutView } from "../../types/types";
import { LayoutViewState } from "../../types/interfaces";

const initialState: LayoutViewState = {
  layout: "tiles",
};

const layoutViewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeLayout: (state, { payload }: PayloadAction<LayoutView>) => {
      state.layout = payload;
    },
  },
});

export default layoutViewSlice.reducer;

export const { changeLayout } = layoutViewSlice.actions;
