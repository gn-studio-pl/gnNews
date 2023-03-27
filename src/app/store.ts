import { configureStore } from "@reduxjs/toolkit";
import newsCounterReducer from "../features/newsCounter/newsCounter";
import newsLayoutReducer from "../features/newsLayout/newsLayout";
import sidebarStateReducer from "../features/sidebarState/sidebarState";

export const store = configureStore({
  reducer: {
    newsLayout: newsLayoutReducer,
    newsCounter: newsCounterReducer,
    sidebar: sidebarStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
