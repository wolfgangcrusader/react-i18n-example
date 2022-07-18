import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_MAO } from "./translations/mao/translation.js";
import { TRANSLATIONS_EN } from "./translations/en/translation.js";
 
i18n
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     mao: {
       translation: TRANSLATIONS_MAO
     },
   }
 });
 
i18n.changeLanguage("en");