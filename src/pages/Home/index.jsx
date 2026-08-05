import BannerTop from "@/components/BannerTop";
import Carousel from "@/components/Carousel";
import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
// import Spec from "@/components/Spec";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PortfolioSection = styled.section`
  width: 100%;
  padding: 80px 0;
`;

const PortfolioHead = styled.div`
  padding: 0 5vw;
  margin-bottom: 40px;
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    flex-shrink: 0;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
`;

const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const AllCasesBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: none;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 60px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.hash]);

  return (
    <HomeStyled id="home">
      <SEO
        title={t("home.title")}
        description={t("home.description")}
        keywords={t("home.keywords")}
      />
      <StructuredData />

      {/* Hero */}
      <BannerTop />

      {/* Carousel de portfólio */}
      <Carousel />

      {/* Manifesto */}
      <Manifesto />

      {/* Como pensamos sua marca */}
      {/* <Spec /> */}

      {/* Serviços (Três formas de dar forma à sua marca) */}
      <Services />

      {/* Como Funciona (Processo) */}
      <Process />

      {/* Sobre */}
      <About />

      {/* Portfólio (4 destaques) */}
      <PortfolioSection>
        <PortfolioHead>
          <Eyebrow>{t("portfolio.eyebrow")}</Eyebrow>
          <PortfolioTitle>{t("portfolio.title")}</PortfolioTitle>
        </PortfolioHead>
        <Portfolio limit={4} />
        <CenterRow>
          <AllCasesBtn onClick={() => navigate(`/${i18n.language}/cases`)}>
            {t("portfolio.allCases")} →
          </AllCasesBtn>
        </CenterRow>
      </PortfolioSection>

      {/* Depoimentos */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />
    </HomeStyled>
  );
}

export default Home;
