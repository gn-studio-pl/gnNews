import Polish from "../assets/languages/pl-PL.json";
import English from "../assets/languages/en-US.json";

export const LOCALES = {
  POLISH: "pl-PL",
  ENGLISH: "en-US",
};

export const messages = {
  [LOCALES.POLISH]: Polish,
  [LOCALES.ENGLISH]: English,
};

export let locale: string;

let navigatorLocale: string | undefined =
  localStorage.getItem("locale") ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.language;

function categorizeLocale(navigatorLocale: string) {
  if (navigatorLocale.toLowerCase().includes("en")) {
    return "en";
  }
  if (navigatorLocale.toLowerCase().includes("pl")) {
    return "pl";
  }
}

navigatorLocale = categorizeLocale(navigatorLocale);

switch (navigatorLocale) {
  case "pl":
    locale = LOCALES.POLISH;
    break;
  case "en":
    locale = LOCALES.ENGLISH;
    break;
  default:
    locale = LOCALES.ENGLISH;
    break;
}
