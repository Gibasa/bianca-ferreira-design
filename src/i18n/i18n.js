import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Importando o detector de idioma
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pt from "./pt.json";



i18n
  .use(LanguageDetector) // Usar o detector de idioma
  .use(initReactI18next) // Integrar com o React
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },

    fallbackLng: "pt", // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já trata a segurança
    },
    detection: {
      // Configurações do detector de idioma
      order: ["path", "navigator", "htmlTag", "querystring", "localStorage", "cookie"],
      lookupFromPathIndex: 0,
      caches: ["localStorage", "cookie"], // Onde armazenar o idioma detectado
    },
  });

export default i18n;
