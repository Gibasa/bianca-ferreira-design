import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const Banner = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #333;
  color: #fff;
  padding: 15px;
  text-align: center;
  z-index: 1000;
`;

const Button = styled.button`
  margin-left: 10px;
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

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Banner>
      <p>
      {t("cookiesBanner.text")}{" "}
        <Link
          to={`/${i18n.language === "en" ? "en" : "pt"}/politica-de-privacidade`}
          style={{ color: "#4caf50" }}
        >
        {t("cookiesBanner.linkText")}
        </Link>.
        <Button onClick={handleAccept}>{t("cookiesBanner.acceptButton")}</Button>
      </p>
    </Banner>
  );
};

export default Cookie;
