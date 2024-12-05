import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GobalStyles";
import { theme } from "./theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Home from "@/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookie from "./components/Cookie";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidade />}
          />
        </Routes>
        <Footer />
      </Router>
      <Cookie />
    </ThemeProvider>
  );
}

export default App;
