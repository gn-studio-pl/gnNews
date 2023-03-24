import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

enum newsLayout {
  list = "list",
  grid = "grid",
}

interface NewsLayoutProps {
  newsLayoutState: string;
}

const initialState: NewsLayoutProps = {
  newsLayoutState: newsLayout.list,
};

export const newsLayoutSlice = createSlice({
  name: "newsLayout",
  initialState,
  reducers: {
    toggleLayout: (state) => {
      if (state.newsLayoutState === newsLayout.list) {
        state.newsLayoutState = newsLayout.grid;
      } else {
        state.newsLayoutState = newsLayout.list;
      }
    },
  },
});

export const { toggleLayout } = newsLayoutSlice.actions;
export default newsLayoutSlice.reducer;

export const selectNewsLayout = (state: RootState) =>
  state.newsLayout.newsLayoutState;
