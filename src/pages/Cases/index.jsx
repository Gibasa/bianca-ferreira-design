import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.main`
  width: 100%;
  padding-top: 120px;
  min-height: 100vh;
`;

const Header = styled.div`
  padding: 48px 5vw 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line || "#E7E7E4"};
  margin-bottom: 48px;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  &:hover { text-decoration: underline; background: none; color: ${({ theme }) => theme.colors.blue}; }
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

const PageTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
`;

const GridWrap = styled.div`
  padding-bottom: 80px;
`;

function Cases() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <SEO
        title={t("portfolio.allCasesPage.title")}
        description={t("portfolio.allCasesPage.description")}
      />

      <Header>
        <BackBtn onClick={() => navigate(`/${i18n.language}`)}>
          ← {i18n.language === "en" ? "Back to home" : "Voltar para o início"}
        </BackBtn>
        <Eyebrow>{t("portfolio.allCasesPage.eyebrow")}</Eyebrow>
        <PageTitle>{t("portfolio.allCasesPage.heading")}</PageTitle>
      </Header>

      <GridWrap>
        {/* Sem limit = exibe todos os projetos */}
        <Portfolio />
      </GridWrap>
    </PageWrapper>
  );
}

export default Cases;

