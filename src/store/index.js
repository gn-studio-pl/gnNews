import { configureStore } from "@reduxjs/toolkit";
import { viewIconReducer, changeIcon } from "./slices/viewIconSlice";
import {
  articlesAsListReducer,
  changeToList,
} from "./slices/articlesAsListSlice";
import { viewChange } from "./actions";

const store = configureStore({
  reducer: {
    list: articlesAsListReducer,
    icon: viewIconReducer,
  },
});

export { store, viewChange, changeToList, changeIcon };
