/* -disable max-len */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { messages } from './languages';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: messages,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.changeLanguage('en');

export default i18n;
