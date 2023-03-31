import { configureStore } from "@reduxjs/toolkit";
import translatorReducer from "./features/translator/translatorSlice";
import articlesReducer from "./features/articles/articlesSlice";
import layoutViewReducer from "./features/layout-view/layoutViewSlice";

const store = configureStore({
  reducer: {
    translator: translatorReducer,
    articles: articlesReducer,
    layoutView: layoutViewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
