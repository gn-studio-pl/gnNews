import { createSlice } from '@reduxjs/toolkit'

const newsViewSlice = createSlice({
	name: 'newsView',
	initialState: {
		view: 'tiles',
	},
	reducers: {
		switchToTileView: (state) => {
      state.view = 'tiles'
    },
    switchToListView: (state) => {
      state.view = 'list'
    },
	},
});

export default newsViewSlice.reducer;
export const { switchToTileView, switchToListView } = newsViewSlice.actions;