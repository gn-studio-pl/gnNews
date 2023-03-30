import { createSlice } from "@reduxjs/toolkit";
import { viewChange } from '../actions';

const viewIconSlice = createSlice({
    name: 'icon',
    initialState: true,
    reducers: {
        changeIcon(state) {
            return !state
        }
    },
    extraReducers(builder) {
        builder.addCase(viewChange, (state) => {
            return !state;
        })
    }
})

export const {changeIcon} = viewIconSlice.actions;
export const viewIconReducer = viewIconSlice.reducer;