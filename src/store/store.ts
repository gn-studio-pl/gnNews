import { configureStore } from '@reduxjs/toolkit'
import {newsApi} from './newsApi'
import newsViewSlice from './newsView';
import popupViewSlice from './popupView';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    newsView: newsViewSlice,
    popupView: popupViewSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch