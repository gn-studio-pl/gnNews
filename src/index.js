import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { store } from "./store";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'pl'],
    fallbackLng: "pl",
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  });

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)