import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { locale } from "../../config/translator.config";
import { TranslatorState } from "../../types/types";

const initialState: TranslatorState = {
  locale: locale,
};

const translatorSlice = createSlice({
  name: "translator",
  initialState,
  reducers: {
    changeLng: (state, { payload }: PayloadAction<TranslatorState>) => {
      console.log(state.locale, payload);
      state.locale = payload.locale;
    },
  },
});

export default translatorSlice.reducer;

export const { changeLng } = translatorSlice.actions;
