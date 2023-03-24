import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface NewsCounterProps {
  newsCounterState: number;
}

const initialState: NewsCounterProps = {
  newsCounterState: 0,
};

export const newsCounterSlice = createSlice({
  name: "newsLayout",
  initialState,
  reducers: {
    getValue: (state, action: PayloadAction<number>) => {
      state.newsCounterState = action.payload;
    },
  },
});

export const { getValue } = newsCounterSlice.actions;
export default newsCounterSlice.reducer;

export const selectNewsLayout = (state: RootState) =>
  state.newsCounter.newsCounterState;
