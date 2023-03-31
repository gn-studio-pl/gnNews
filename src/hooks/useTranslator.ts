import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { changeLng } from "../features/translator/translatorSlice";
import { TranslatorState } from "../types/types";

import { messages } from "../config/translator.config";
import { LOCALES } from "../config/translator.config";
import { AppDispatch } from "../store";

const useTranslator = () => {
  const { locale } = useAppSelector<TranslatorState>(
    (state) => state.translator
  );
  const dispatch: AppDispatch = useAppDispatch();

  const swapLang = (): void => {
    let newState: TranslatorState;

    if (locale.includes("en"))
      newState = {
        locale: LOCALES.POLISH,
      };
    else
      newState = {
        locale: LOCALES.ENGLISH,
      };

    setLang(newState);
  };

  const setLang = (newState: TranslatorState): void => {
    dispatch(changeLng(newState));
  };

  return { locale, messages, swapLang };
};

export default useTranslator;
