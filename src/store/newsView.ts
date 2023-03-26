import { createSlice } from '@reduxjs/toolkit';
import { TILES_VIEW } from 'constants/index';

const newsViewSlice = createSlice({
  name: 'newsView',
  initialState: {
    view: TILES_VIEW,
  },
  reducers: {
    changeView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { changeView } = newsViewSlice.actions;
export default newsViewSlice.reducer;
//export const lastUsedView = (state: any) => state.viewStyle.view;
