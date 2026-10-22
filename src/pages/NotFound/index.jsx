import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.main`
  width: 100%;
  min-height: 80vh;
  padding: 160px 5vw 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
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

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    flex-shrink: 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.grey};
  max-width: 580px;
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 60px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

// O servidor responde 404 para estas URLs (.htaccess + dist/404.html); aqui só o conteúdo.
function NotFound() {
  const { t, i18n } = useTranslation();

  return (
    <PageWrapper>
      <Helmet defer={false}>
        <title>{t("seo.notFound.title")}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Eyebrow>404</Eyebrow>
      <Title>{t("notFound.title")}</Title>
      <Text>{t("notFound.text")}</Text>
      <HomeLink to={`/${i18n.language === "en" ? "en" : "pt"}`}>{t("notFound.button")} →</HomeLink>
    </PageWrapper>
  );
}

export default NotFound;
