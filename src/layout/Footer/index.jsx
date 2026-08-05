import { useTranslation } from "react-i18next";
import styled from "styled-components";

const WA_NUMBER = "5571993703427";
const openWA = (msg) =>
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 64px 5vw 32px;
`;

const CtaSection = styled.div`
  text-align: center;
  margin-bottom: 64px;

  h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 32px;
  }
`;

const WaBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 18px 36px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-3px);
    background: #fff;
    color: ${({ theme }) => theme.colors.blue};
  }

  svg { width: 18px; height: 18px; flex-shrink: 0; }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 40px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
  }

  a, p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &:hover { color: rgba(255,255,255,0.75); background: none; }
  }
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  text-align: center;
  margin-top: 48px;
`;

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterStyled id="contato">
      <CtaSection>
        <h2>
          {t("footer.title.part1")}
          <br />
          {t("footer.title.part2")}
        </h2>
        <WaBtn
          onClick={() =>
            openWA("Olá Bia! Quero criar algo incrível para minha marca.")
          }
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
          </svg>
          {t("footer.ctaButton")}
        </WaBtn>
      </CtaSection>

      <Divider />

      <InfoRow>
        <InfoCol>
          <h4>{t("footer.contact")}</h4>
          <a href="mailto:contato@biancaferreiradesign.com">
            contato@biancaferreiradesign.com
          </a>
        </InfoCol>

        <InfoCol>
          <h4>{t("footer.instagram")}</h4>
          <a
            href="https://www.instagram.com/biancaferreiradesign/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @biancaferreiradesign
          </a>
        </InfoCol>

        <InfoCol>
          <h4>{t("footer.tiktok")}</h4>
          <a
            href="https://www.tiktok.com/@biancaferreiradesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            @biancaferreiradesign
          </a>
        </InfoCol>
      </InfoRow>

      <Copyright>
        {year} © Bianca Ferreira Design. {t("footer.copyright")}.
      </Copyright>
    </FooterStyled>
  );
}

export default Footer;
