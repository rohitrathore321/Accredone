import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './En.json';
import hi from './Hi.json';

const resources = {
  en: {translation: en},
  hi: {translation: hi},
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // 👈 Default language
  fallbackLng: 'en', // 👈 If key missing, use this
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
