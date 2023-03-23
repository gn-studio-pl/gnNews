import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./countryNews/CountryNewsSlice";

const reducer = combineReducers({
  //   countries: countriesReducer,
  news: newsReducer,
});

export default configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
