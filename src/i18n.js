// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Archivos de traducción (puedes almacenarlos en un folder "locales")
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
