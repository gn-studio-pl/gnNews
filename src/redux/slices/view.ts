import { createSlice } from '@reduxjs/toolkit';

type View = 'grid' | 'list';

interface ViewState {
  view: View;
}

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    view: 'list',
  } as ViewState,
  reducers: {
    changeView: (state) => {
      state.view = state.view === 'list' ? 'grid' : 'list';
    },
  },
});

export const { changeView } = viewSlice.actions;
