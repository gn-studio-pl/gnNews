import { createSlice } from '@reduxjs/toolkit';

const popupViewSlice = createSlice({
  name: 'popupView',
  initialState: {
    mainPopup: false,
    newsPopup: false
  },
  reducers: {
    mainPopupView: (state, action) => {
      state.mainPopup= action.payload;
    },
    newsPopupView: (state, action) => {
      state.newsPopup= action.payload;
    },
  },
});

export const { mainPopupView, newsPopupView } = popupViewSlice.actions;
export default popupViewSlice.reducer;