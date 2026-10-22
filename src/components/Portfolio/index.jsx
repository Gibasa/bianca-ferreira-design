import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { casePath } from "@/seo/cases";
import portfolioData from "/src/assets/portfolio.json";

/* ── Grid container ─────────────────────────────────────────── */
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 5vw;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Cada case é um link para a sua página (/:lang/cases/:slug)
const PortfolioItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  ${PortfolioItem}:hover & {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GroupName = styled.h3`
  font-size: 1rem;
`;

const ViewMore = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;

  ${PortfolioItem}:hover & {
    text-decoration: underline;
  }
`;

/* ── Portfolio component ────────────────────────────────────── */
const Portfolio = ({ limit, exclude }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "pt";

  const cases = portfolioData.filter((item) => item.group !== exclude);
  const data = limit ? cases.slice(0, limit) : cases;

  return (
    <Container id="projetos">
      {data.map((item) => (
        <PortfolioItem key={item.group} to={`/${lang}${casePath(item.group)}`}>
          <CoverImage
            src={item.images.cover}
            alt={`${item.group} — ${t("portfolio.coverAlt")}`}
            width={1600}
            height={900}
            loading="lazy"
          />
          <TitleRow>
            <GroupName>{item.group}</GroupName>
            <ViewMore>{t("portfolio.viewMore")} →</ViewMore>
          </TitleRow>
        </PortfolioItem>
      ))}
    </Container>
  );
};

Portfolio.propTypes = {
  limit: PropTypes.number,
  exclude: PropTypes.string,
};

export default Portfolio;
