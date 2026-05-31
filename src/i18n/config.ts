import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import jaTranslation from './locales/ja.json';
import zhTwTranslation from './locales/zh-TW.json';

const resources = {
  ja: {
    translation: jaTranslation
  },
  'zh-TW': {
    translation: zhTwTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('appLang') || 'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
