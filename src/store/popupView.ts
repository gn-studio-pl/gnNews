import { createSlice } from '@reduxjs/toolkit';

const popupViewSlice = createSlice({
  name: 'popupView',
  initialState: {
    isOpen: false,
  },
  reducers: {
    popupView: (state, action) => {
      state.isOpen= action.payload;
    },
  },
});

export const { popupView } = popupViewSlice.actions;
export default popupViewSlice.reducer;