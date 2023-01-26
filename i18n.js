import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ar, en} from './src/assets/locale';
import {getSystemLanguage} from './src/utils/getLanguage';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getSystemLanguage(),
  // lng: 'ar',
  fallbackLng: 'ar',
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
