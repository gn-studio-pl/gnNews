import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutView, LayoutViewState } from "../../types/types";

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
