import en from '../languages/en-US.json';
import fr from '../languages/fr-FR.json';

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
