import { createI18n } from 'vue-i18n';
import getBrowserLocale from '../utils/getBrowserLocale';

const messages = {
  en: {
    app_title: 'Pristo',
    test: 'Test',
    hello_forms: 'Hello Forms',
    change_language: 'Change Language',
    change_theme: 'Change Theme'
  },
  he: {
    app_title: 'פריסטו',
    test: 'בדיקה',
    hello_forms: 'שלום טפסים',
    change_language: 'שינוי שפה',
    change_theme: 'שינוי ערכת נושא'
  }
};

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: getBrowserLocale({ countryCodeOnly: true }) || 'en', // set fallback locale
  messages // set locale messages
});

export default i18n;
