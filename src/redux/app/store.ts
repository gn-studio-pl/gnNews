import { configureStore } from "@reduxjs/toolkit";
import newsLayoutReducer from "../features/newsLayout";
import sidebarStateReducer from "../features/sidebarState";
import articlesReducer from "../features/articles";

export const store = configureStore({
  reducer: {
    newsLayout: newsLayoutReducer,
    sidebar: sidebarStateReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
