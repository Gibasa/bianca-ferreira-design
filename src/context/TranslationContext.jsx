import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Para validação de props
import i18n from "../i18n/i18n";

// Criação do contexto
const TranslationContext = createContext();

// Provedor de contexto
const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || "pt");

  // Função para mudar o idioma explicitamente
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  // Função para alternar entre "pt" e "en"
  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    changeLanguage(newLang);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
const useLanguage = () => useContext(TranslationContext);

// Validação de PropTypes
TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exportações
export { TranslationContext, TranslationProvider, useLanguage };
