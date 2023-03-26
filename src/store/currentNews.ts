import { createSlice } from '@reduxjs/toolkit';
import { News } from 'models/news';

const currentNewsSlice = createSlice({
  name: 'currentNews',
  initialState: {
    news: {} as News,
  },
  reducers: {
    setCurrentNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { setCurrentNews } = currentNewsSlice.actions;
export default currentNewsSlice.reducer;