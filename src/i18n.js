// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Importa tus JSON de traducción (ejemplo)
import translationES from './locales/es.json';
import translationEN from './locales/en.json';

// Configuración
i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN }
    },
    lng: 'en',            // idioma por defecto
    fallbackLng: 'en',    // si no encuentra 'es', usa 'en'
    interpolation: { escapeValue: false }
  });

export default i18n;
