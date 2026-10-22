import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n/i18n';
import { TranslationProvider } from "./context/TranslationContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </HelmetProvider>
  </StrictMode>,
)
