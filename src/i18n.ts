import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          popup: {
            popup: "POPUP",
          },
          newsLayout: {
            list: "list",
            grid: "grid",
          },
          main: {
            msg: "Click on links to check for latest news from selected countries.",
          },
          footer: {
            articles: "Articles displayed",
          },
          card: {
            source: "Source",
            published: "Published",
            readMore: "READ MORE",
            author: "Author",
            readFull: "READ FULL ARTICLE",
            close: "CLOSE",
          },
          sidebar: {
            pl: "Poland",
            ar: "Argentina",
            be: "Belgium",
            ca: "Canada",
            jp: "Japan",
            gr: "Greece",
            cz: "Czech Rp.",
            lv: "Latvia",
            se: "Sweden",
            tr: "Turkey",
          },
        },
      },
      pl: {
        translation: {
          popup: {
            popup: "POPAP",
          },
          newsLayout: {
            list: "lista",
            grid: "kafelki",
          },
          main: {
            msg: "Naciśnij na linki, aby wyświtlić najnowsze wiadomości z wybranych krajów",
          },
          footer: {
            articles: "Wyświetlone artykuły",
          },
          card: {
            source: "Źródło",
            published: "Opublikowano",
            readMore: "CZYTAJ WIĘCEJ",
            author: "Autor",
            readFull: "PEŁNY ARTYKUŁ",
            close: "ZAMKNIJ",
          },
          sidebar: {
            pl: "Polska",
            ar: "Argentyna",
            be: "Belgia",
            ca: "Kanada",
            jp: "Japonia",
            gr: "Grecja",
            cz: "Czechy",
            lv: "Łotwa",
            se: "Szwecja",
            tr: "Turcja",
          },
        },
      },
    },
  });

export default i18n;
