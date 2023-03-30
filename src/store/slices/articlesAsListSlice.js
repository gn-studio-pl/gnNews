import { createSlice } from "@reduxjs/toolkit";
import { viewChange } from '../actions';

const articlesAsListSlice = createSlice({
    name: 'list',
    initialState: true,
    reducers: {
        changeToList(state) {
            return !state
        }
    },
    extraReducers(builder) {
        builder.addCase(viewChange, (state) => {
            return !state;
        })
    }
})

export const {changeToList} = articlesAsListSlice.actions;
export const articlesAsListReducer = articlesAsListSlice.reducer;