import { useTranslation } from "react-i18next";
import styled from "styled-components";

const WA_NUMBER = "5571993703427";
const openWA = (msg) =>
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
  );

/* ── styled components ──────────────────────────────────────── */
const Section = styled.section`
  width: 100%;
  padding: 120px 5vw 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 899px) {
    padding: 100px 5vw 60px;
  }
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
  font-size: clamp(2.4rem, 5.5vw, 5rem);
  line-height: 1.05;
  max-width: 900px;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.grey};
  max-width: 580px;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const BtnPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.colors.ink || theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 18px 32px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    transform: translateY(-3px);
    box-shadow: 0 16px 32px -8px rgba(9, 30, 183, 0.3);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

/* ── component ──────────────────────────────────────────────── */
function BannerTop() {
  const { t } = useTranslation();

  return (
    <Section>
      <Eyebrow>{t("bannerTop.eyebrow")}</Eyebrow>

      <Title>
        {t("bannerTop.title.part1")}
        <br />
        {t("bannerTop.title.part2")}
        <br />
        {t("bannerTop.title.part3")}
        <br />
        {t("bannerTop.title.part4")}
      </Title>

      <Subtitle>{t("bannerTop.description")}</Subtitle>

      <CtaRow>
        <BtnPrimary onClick={() => openWA(t("bannerTop.button"))}>
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.1h-.01a8.19 8.19 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.55-3.7 8.2-8.26 8.2Z" />
          </svg>
          {t("bannerTop.button")}
        </BtnPrimary>
      </CtaRow>
    </Section>
  );
}

export default BannerTop;
