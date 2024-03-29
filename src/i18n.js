import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const userLang = navigator.language || navigator.userLanguage;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: userLang.includes("fr") ? "fr" : "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    },
  });


export default i18n;