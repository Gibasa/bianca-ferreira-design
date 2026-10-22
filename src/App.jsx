import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import React, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, Route, BrowserRouter as Router, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Cookie from "./components/Cookie";
import GlobalStyle from "./GobalStyles";
import { theme } from "./theme";

const Home = React.lazy(() => import("@/pages/Home"));
const Cases = React.lazy(() => import("@/pages/Cases"));
const Case = React.lazy(() => import("@/pages/Case"));
const PoliticaPrivacidade = React.lazy(() =>
  import("./components/PoliticaPrivacidade")
);
const Form = React.lazy(() => import("./components/Form"));
const FormEn = React.lazy(() => import("./components/FormEn"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

// Componente para redirecionar a raiz para o idioma detectado ou padrão
function RootRedirect() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Se estiver na raiz, redireciona para o idioma atual (detectado ou padrão)
    if (location.pathname === "/") {
      const formattedLang = i18n.language.split('-')[0];
      const lang = formattedLang === "pt" ? "pt" : "en";
      navigate(`/${lang}`, { replace: true });
    }
  }, [i18n.language, location, navigate]);

  return null;
}

// Layout wrapper to validate language
function LanguageLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const supportedLangs = ["pt", "en"];

    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // If lang is not supported, redirect to pt
      navigate("/pt", { replace: true });
    }
  }, [lang, i18n, navigate]);

  if (lang && !["pt", "en"].includes(lang)) {
    return null; // Avoid rendering outlet while redirecting
  }

  return <Outlet />;
}

import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProgressBar />
      <Router>
        <Suspense>
          <Header />
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<Home />} />
              <Route path="cases" element={<Cases />} />
              <Route path="cases/:slug" element={<Case />} />
              <Route
                path="politica-de-privacidade"
                element={<PoliticaPrivacidade />}
              />
              <Route path="form" element={<Form />} />
              <Route path="form-en" element={<FormEn />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
        <Cookie />
      </Router>
      <WhatsAppButton />
    </ThemeProvider>
  );
}

export default App;
