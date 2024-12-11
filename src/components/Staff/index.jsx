import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";
import { useTranslation } from 'react-i18next';


const StaffStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw;
  gap: 10vw;

  .title,
  .portraits {
    flex: 1;
  }

  .portraits {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10vw;
    @media (max-width: 899px) {
    }
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }

    img {
      width: 20vw;
      @media (max-width: 899px) {
        width: 30vw;
      }
      @media (max-width: 600px) {
        width: 40vw;
      }
    }
  }

  .title h2 {
    text-align: center;
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
        left: 55%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: ${({ animationWidth }) => animationWidth};
        height: ${({ animationHeight }) => animationHeight};
        pointer-events: none;
        opacity: ${({ animationTriggered }) => (animationTriggered ? 1 : 0)};
        transition: opacity 0.5s ease-in-out;
      }
    }
  }
`;

function Staff() {
  const sectionRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animationDimensions, setAnimationDimensions] = useState({ width: "5rem", height: "7rem" });
  const [biaImgSrc, setBiaImgSrc] = useState("");
  const { t, i18n } = useTranslation();
  console.log(t.language);

  

  useEffect(() => {
    const language = i18n.language;
    const biaImgSrc = language.startsWith("pt")
      ? "./images/bia.png"
      : "./images/bia-en.png";

    setBiaImgSrc(biaImgSrc);
  }, [i18n.language]);

  const getAnimationDimensions = (language) => {
    if (language === 'en') {
      return { width: "9rem", height: "8rem" };  // Dimensões para o idioma inglês
    } else if (language === 'pt') {
      return { width: "5rem", height: "7rem" };  // Dimensões para o idioma português
    } else {
      return { width: "5rem", height: "7rem" };  // Valores padrão, caso precise adicionar mais idiomas
    }
  };

  useEffect(() => {
    setAnimationDimensions(getAnimationDimensions(i18n.language));
  }, [i18n.language]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setTimeout(() => setAnimationTriggered(true), 1000); // Delay de 1 segundo
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
    <StaffStyled ref={sectionRef} animationTriggered={animationTriggered} animationWidth={animationDimensions.width} animationHeight={animationDimensions.height}>
      <div className="title">
        <h2>
        {t("staff.title.part1")}{" "}
          <span className="highlight">
          {t("staff.title.highlight")}
            <div className="animation">
              <Lottie
                options={defaultOptions}
                isStopped={!animationTriggered}
              />
            </div>
          </span>
          <br /> {t("staff.title.part2")}
        </h2>
      </div>
      <div className="portraits">
        <img src={biaImgSrc} alt="Bianca Portrait" />
        <img src="/images/giba.png" alt="Gilberto Portrait" />
      </div>
    </StaffStyled>
  );
}

export default Staff;
