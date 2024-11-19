import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GobalStyles";
import { theme } from "./theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Home from "@/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
