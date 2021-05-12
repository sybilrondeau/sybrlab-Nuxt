import en from '../languages/en-US.js';
import fr from '../languages/fr-FR.js';

export const API_ROOT = 'https://jsonplaceholder.typicode.com/';

export const I18N = {
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
