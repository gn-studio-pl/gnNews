import { apiSlice } from './api/api';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { viewSlice } from './slices/view';
import { articleSlice } from './slices/article';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    article: articleSlice.reducer,
    view: viewSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = () => useSelector((state: RootState) => state);
