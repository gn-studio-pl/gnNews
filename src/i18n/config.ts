import { initReactI18next } from 'react-i18next';
import * as i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pl from './pl.json';
import en from './en.json';

const i18n = i18next.createInstance();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      pl,
    },
  });

export default i18n;
