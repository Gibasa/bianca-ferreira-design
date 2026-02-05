import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GobalStyles";
import { theme } from "./theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookie from "./components/Cookie";
import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

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

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Suspense>
          <Header />
          <Analytics />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <title>{t("home.title")}</title>
                  <meta name="description" content={t("home.description")} />
                  <meta name="keywords" content={t("home.keywords")} />
                  <meta property="og:title" content={t("home.ogTitle")} />
                  <meta
                    property="og:description"
                    content={t("home.ogDescription")}
                  />
                </Helmet>
              <Home />
            </>
              }
            />
            <Route
              path="/politica-de-privacidade"
              element={<PoliticaPrivacidade />}
            />
            <Route path="/form" element={<Form />} />
            <Route path="/form-en" element={<FormEn />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
      <Cookie />
    </ThemeProvider>
  );
}

export default App;
