import { useTranslation } from "react-i18next";
import styled from "styled-components";

const WA_NUMBER = "5571993703427";
const openWA = (msg) =>
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

/* ── styled components ──────────────────────────────────────── */
const Section = styled.section`
  width: 100%;
  padding: 110px 5vw;
  background: ${({ theme }) => theme.colors.offwhite || "#F7F7F5"};
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3.6vw, 2.8rem);
  margin-bottom: 56px;
  line-height: 1.12;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 48px 36px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  color: ${({ theme }) => theme.colors.white};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;

  /* Cores tricolores do mockup */
  &.card-0 {
    background: linear-gradient(145deg, #1B1B8F, #131368);
  }
  &.card-1 {
    background: linear-gradient(145deg, #2FAE44, #1F7E31);
  }
  &.card-2 {
    background: linear-gradient(145deg, #E5342A, #B5241C);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 45px -15px rgba(0, 0, 0, 0.4);
  }
`;

const CardLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 500;
  opacity: 0.85;
  letter-spacing: 0.04em;
  margin-bottom: auto;
`;

const CardTitle = styled.h3`
  font-size: clamp(1.3rem, 2.2vw, 1.6rem);
  margin: 28px 0 16px;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  text-transform: uppercase;
`;

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 28px;
  font-weight: 300;
  flex: 1;
`;

const CardLink = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: auto;
  transition: gap 0.3s ease;

  ${Card}:hover & {
    gap: 12px;
  }
`;

const CtaWrap = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: center;
`;

const BtnPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 18px 36px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.2, 1, 0.3, 1), background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #1B1B8F;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 35px -10px rgba(27, 27, 143, 0.35);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

/* ── component ──────────────────────────────────────────────── */
function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <Section id="serviços">
      <SectionTitle>{t("services.eyebrow")}</SectionTitle>

      <Grid>
        {items.map((item, i) => (
          <Card
            key={i}
            className={`card-${i}`}
            onClick={() =>
              openWA(`Olá Bia! Tenho interesse em ${item.title}.`)
            }
          >
            <CardLabel>
              0{i + 1} — {item.label}
            </CardLabel>
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.description}</CardDesc>
            <CardLink>
              {item.link} &nbsp;▸
            </CardLink>
          </Card>
        ))}
      </Grid>

      <CtaWrap>
        <BtnPrimary
          onClick={() =>
            openWA("Olá Bia! Quero saber mais sobre os serviços do estúdio.")
          }
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
          </svg>
          {t("services.button")}
        </BtnPrimary>
      </CtaWrap>
    </Section>
  );
}

export default Services;
