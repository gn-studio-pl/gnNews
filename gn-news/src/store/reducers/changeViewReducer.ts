import { createReducer} from "@reduxjs/toolkit"
import { initialState } from "../initialState";
import { changeViewAction } from "../actions/changeViewAction";
import { updateNewsAction } from "../actions/updateNewsAction";

//const changeViewAction = createAction<{value: string}>('changeView');

export const changeViewReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeViewAction, (state, action) => {
        state.view = action.payload.value;
        console.log(state.view);
    });
})