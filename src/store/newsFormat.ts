import { createSlice } from '@reduxjs/toolkit';

const newsFormatSlice = createSlice({
  name: 'newsFormat',
  initialState: {
    isTileFormat: true,
  },
  reducers: {
    toggle(state) {
      state.isTileFormat = !state.isTileFormat;
    },
  },
});

export const newsFormatSliceActions = newsFormatSlice.actions;
export default newsFormatSlice;
