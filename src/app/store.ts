import { configureStore } from "@reduxjs/toolkit";
import newsCounterReducer from "../features/newsCounter/newsCounter";
import newsLayoutReducer from "../features/newsLayout/newsLayout";

export const store = configureStore({
  reducer: {
    newsLayout: newsLayoutReducer,
    newsCounter: newsCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
