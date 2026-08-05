import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

/* ── styled ───────────────────────────────────────────────── */
const Section = styled.section`
  width: 100%;
  padding: 80px 5vw;
  background: ${({ theme }) => theme.colors.offwhite || "#F7F7F5"};
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
  margin-bottom: 20px;

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    flex-shrink: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  margin-bottom: 48px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
`;

const QuoteMark = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 5rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.blue};
  opacity: 0.12;
  position: absolute;
  top: 16px;
  left: 24px;
  pointer-events: none;
  font-weight: 800;
`;

const Quote = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.ink || "#0E0E0E"};
  font-style: italic;
  flex: 1;
  position: relative;
  z-index: 1;
  padding-top: 24px;
`;

const Author = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

/* ── component ──────────────────────────────────────────── */
function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true });

  return (
    <Section id="depoimentos">
      <Eyebrow>{t("testimonials.eyebrow")}</Eyebrow>
      <SectionTitle>{t("testimonials.title")}</SectionTitle>

      <Grid>
        {items.map((item, i) => (
          <Card key={i}>
            <QuoteMark aria-hidden="true">"</QuoteMark>
            <Quote>"{item.text}"</Quote>
            <Author>{item.name}</Author>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Testimonials;
