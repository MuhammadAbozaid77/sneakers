import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEn from "../public/locale/en.json";
import translationAr from "../public/locale/ar.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({ debug: true, fallbackLng: "en", returnObjects: true, resources });

export default i18n;
