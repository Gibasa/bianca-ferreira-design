import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";
import { FaArrowCircleRight } from "react-icons/fa";
import { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const moveArrow = keyframes`
  0% {
    transform: translateX(-30px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-30px);
  }
`;

const BannerMidStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -17px;
  gap: 50px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;

    h2 {
      position: relative;
      text-align: center;
      z-index: 2;
      line-height: 3rem;
    }

    .highlight {
      position: relative;
      display: inline-block;
      font-family: ${({ theme }) => theme.fonts.terciary};
      font-size: 3rem;
      font-style: italic;
      @media (max-width: 899px) {
        font-size: 3.2rem;
      }
      @media (max-width: 600px) {
        font-size: 3rem;
      }

      .animation {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 13rem;
        height: 7rem;
        pointer-events: none;
      }
    }
  }

  .brandingSite {
    flex: 1;
    display: flex;
    gap: 50px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .branding,
    .site {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      border: 3px solid ${({ theme }) => theme.colors.white};
      border-radius: 20px;
      padding: 2vw 5vw 5vw 5vw;
      width: 30vw;
      text-align: center;
      gap: 2vw;
      h2 {
        margin: 10px 0;
      }
      button {
        width: 130%;
        line-height: 20px;
        letter-spacing: 1px;
        border-radius: 0;
        cursor: default;
        font-family: ${({ theme }) => theme.fonts.primary};
        &:nth-child(2) {
          background-color: ${({ theme }) => theme.colors.blue};
        }
        &:nth-child(3) {
          background-color: ${({ theme }) => theme.colors.red};
        }
        &:nth-child(4) {
          background-color: ${({ theme }) => theme.colors.green};
        }
      }
      @media (max-width: 899px) {
        width: 50vw;
        button {
          width: 120%;
        }
      }
      @media (max-width: 600px) {
        width: 60vw;
        button {
          width: 110%;
        }
      }
    }
  }
  .btn-bottom {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    width: 30vw;
    font-size: 1.8rem;
    padding: 5px 5px 5px 10px;
    margin: 0 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3 {
      font-size: 1.8rem;
      margin: 0 20px 0 5px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
    .arrow {
      font-size: 2rem;
      animation: ${moveArrow} 1.5s infinite;
    }
    @media (max-width: 899px) {
      width: 50vw;
    }
    @media (max-width: 600px) {
      width: 50vw;
      h3 {
        font-size: 1.5rem;
        line-height: 20px;
      }
    }
  }
`;

function BannerMid() {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setTimeout(() => setAnimationTriggered(true), 1000); // Delay de 2 segundos
        }
      },
      { threshold: 0.5 } // Ativa quando 50% do elemento está visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationTriggered]);

  const defaultOptions = {
    loop: false, // A animação para no final
    autoplay: animationTriggered, // Só inicia se ativada
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };

  return (
    <BannerMidStyled id="serviços" ref={sectionRef}>
      <div className="title">
        <h2>
          {t("bannerMid.title.part1")}
          <br /> {t("bannerMid.title.part2")}{" "}
          <span className="highlight">
            {t("bannerMid.title.highlight")}
            <div className="animation">
              <Lottie
                options={defaultOptions}
                isStopped={!animationTriggered}
              />
            </div>
          </span>{" "}
          <br />
          {t("bannerMid.title.part3")}
        </h2>
      </div>
      <div className="brandingSite">
        <div className="branding">
          <h2>{t("bannerMid.brandingSite.branding.h2")}</h2>
          <button>{t("bannerMid.brandingSite.branding.buttons.0")}</button>
          <button>{t("bannerMid.brandingSite.branding.buttons.1")}</button>
          <button>{t("bannerMid.brandingSite.branding.buttons.2")}</button>
        </div>
        <div className="site">
          <h2>{t("bannerMid.brandingSite.site.h2")}</h2>
          <button>{t("bannerMid.brandingSite.site.buttons.0")}</button>
          <button>{t("bannerMid.brandingSite.site.buttons.1")}</button>
        </div>
      </div>
      <button className="btn-bottom" onClick={() => navigate(i18n.language === "en" ? "/form-en" : "/form")}>
        <h3>{t("bannerMid.bottomButton")}</h3>{" "}
        <FaArrowCircleRight className="arrow" />
      </button>
    </BannerMidStyled>
  );
}

export default BannerMid;
