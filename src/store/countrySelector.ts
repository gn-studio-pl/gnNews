import { createSlice } from '@reduxjs/toolkit';
import {ALL_COUNTRIES} from 'constants/index'

const countrySelectorSlice = createSlice({
  name: 'countrySelector',
  initialState: {
    key: ALL_COUNTRIES,
  },
  reducers: {
    changeCountry: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { changeCountry } = countrySelectorSlice.actions;
export default countrySelectorSlice.reducer;