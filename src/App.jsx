import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, Route, BrowserRouter as Router, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Cookie from "./components/Cookie";
import GlobalStyle from "./GobalStyles";
import { theme } from "./theme";

const Home = React.lazy(() => import("@/pages/Home"));
const PoliticaPrivacidade = React.lazy(() =>
  import("./components/PoliticaPrivacidade")
);
const Form = React.lazy(() => import("./components/Form"));
const FormEn = React.lazy(() => import("./components/FormEn"));

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
}

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Suspense>
          <Header />
          <Analytics />
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<Home />} />
              <Route
                path="politica-de-privacidade"
                element={<PoliticaPrivacidade />}
              />
              <Route path="form" element={<Form />} />
              <Route path="form-en" element={<FormEn />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </Router>
      <Cookie />
    </ThemeProvider>
  );
}

export default App;
