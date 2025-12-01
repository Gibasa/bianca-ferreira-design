import styled from "styled-components";
import BannerTop from "@/components/BannerTop";
import Portfolio from "../../components/Portfolio";
import Services from "../../components/Services";
import Carousel from "../../components/Carousel";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import About from "../../components/About";

const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
h2{
  margin-bottom: 10px;
  @media (max-width: 600px) {
    margin-top: 4rem;
  }
}
`;


const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  margin: 5vw 0;
  font-size: 1.8rem;
  padding: 0.5rem 3rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: 600px) {
    margin: 9vw 0;
    width: 70vw;
  }
`;

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <HomeStyled id="home">
      <BannerTop />
      <Carousel />
      <Services />
      <StyledButton
        onClick={() => navigate(i18n.language === "en" ? "/form-en" : "/form")}
      >
        {t("services.button")}
      </StyledButton>
      <About />
      <h2>{t("portfolio.title")}</h2>
      <Portfolio />
      <StyledButton
        onClick={() => navigate(i18n.language === "en" ? "/form-en" : "/form")}
      >
        {t("bannerTop.button")}
      </StyledButton>
    </HomeStyled>
  );
}

export default Home;
