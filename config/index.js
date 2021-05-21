import fr from '../languages/fr-FR.json';
import en from '../languages/en-US.json';

export const I18N = {
  strategy: 'prefix',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    onlyOnRoot: true,
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
    },
  ],
  defaultLocale: 'fr',
  vueI18n: {
    fallbackLocale: 'fr',
    messages: { en, fr },
  },
};
