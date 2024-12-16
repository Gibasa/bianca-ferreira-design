import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GobalStyles";
import { theme } from "./theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookie from "./components/Cookie";
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next"; // Importando o useTranslation

const Home = React.lazy(() => import("@/pages/Home"));
const PoliticaPrivacidade = React.lazy(() =>
  import("./components/PoliticaPrivacidade")
);
const Form = React.lazy(() => import("./components/Form"));
const FormEn = React.lazy(() => import("./components/FormEn"));

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Suspense>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>{t("home.title")}</title>
                    <meta name="description" content={t("home.description")} />
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
