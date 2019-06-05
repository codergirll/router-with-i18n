import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './locales/en.json';
import fa from './locales/fa.json';
import de from './locales/de.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fa,
    de,
  },
});
