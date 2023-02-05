import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as ar from './src/assets/locale/ar';
import * as en from './src/assets/locale/en';
import { getSystemLanguage } from './src/utils/getLanguage';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: getSystemLanguage(),
    // lng: 'en',
    fallbackLng: 'en',
    // ns: ['common'],
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
