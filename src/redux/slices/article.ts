import { createSlice } from '@reduxjs/toolkit';
import { articleApiSlice } from '../apiSlices/article';

interface ArticleState {
  quantity: number;
}

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    quantity: 0,
  } as ArticleState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      articleApiSlice.endpoints.getArticles.matchFulfilled,
      (state, action) => {
        state.quantity = action.payload.totalResults;
      },
    );
  },
});
