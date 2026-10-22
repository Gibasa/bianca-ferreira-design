import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

// Escolha salva em localStorage.cookieConsent ("granted" | "denied").
// O index.html lê o mesmo valor ao carregar e aplica no Consent Mode do Google.
const STORAGE_KEY = "cookieConsent";
const LEGACY_KEY = "cookiesAccepted";
export const OPEN_COOKIE_BANNER = "open-cookie-banner";

const readConsent = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value) return value;
    return localStorage.getItem(LEGACY_KEY) ? "granted" : null;
  } catch {
    return null;
  }
};

const saveConsent = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
    localStorage.removeItem(LEGACY_KEY);
  } catch {
    // sem localStorage (navegação privada): vale só para esta visita
  }
  const state = value === "granted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
};

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #333;
  color: #fff;
  padding: 15px;
  text-align: center;
  z-index: 1000;

  p {
    margin: 0;
  }
`;

const Actions = styled.span`
  display: inline-flex;
  gap: 10px;
  margin-left: 10px;
  vertical-align: middle;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin: 12px 0 0;
  }
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;

  &:hover {
    background: #45a049;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 1px solid #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!readConsent()) {
      setIsVisible(true);
    }
    // Reabre o aviso a partir da Política de Privacidade ("alterar preferências")
    const open = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_BANNER, open);
    return () => window.removeEventListener(OPEN_COOKIE_BANNER, open);
  }, []);

  const handleChoice = (value) => {
    saveConsent(value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Banner role="region" aria-label={t("cookiesBanner.ariaLabel")}>
      <p>
      {t("cookiesBanner.text")}{" "}
        <Link
          to={`/${i18n.language === "en" ? "en" : "pt"}/politica-de-privacidade`}
          style={{ color: "#4caf50" }}
        >
        {t("cookiesBanner.linkText")}
        </Link>.
        <Actions>
          <SecondaryButton onClick={() => handleChoice("denied")}>
            {t("cookiesBanner.rejectButton")}
          </SecondaryButton>
          <Button onClick={() => handleChoice("granted")}>{t("cookiesBanner.acceptButton")}</Button>
        </Actions>
      </p>
    </Banner>
  );
};

export default Cookie;
