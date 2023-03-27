import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

enum sidebarState {
  open = "open",
  closed = "closed",
}

interface sidebarStateProps {
  sidebarState: string;
}

const initialState: sidebarStateProps = {
  sidebarState: sidebarState.closed,
};

export const sidebarStateSlice = createSlice({
  name: "sidebarState",
  initialState,
  reducers: {
    toggleSidebarState: (state) => {
      if (state.sidebarState === sidebarState.closed) {
        state.sidebarState = sidebarState.open;
      } else {
        state.sidebarState = sidebarState.closed;
      }
    },
  },
});

export const { toggleSidebarState } = sidebarStateSlice.actions;
export default sidebarStateSlice.reducer;

export const selectNewsLayout = (state: RootState) =>
  state.sidebar.sidebarState;
