import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './dataa/en.json';
import fr from './dataa/fr.json';

// Récupérer la langue sauvegardée dans localStorage ou utiliser 'en' par défaut
const savedLanguage = localStorage.getItem('language') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources: { 
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: savedLanguage, // Langue par défaut ou celle sauvegardée
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
