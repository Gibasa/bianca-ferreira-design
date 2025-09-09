import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import Lottie from "react-lottie";
// import animationData from "../../assets/circle.json";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";

// Componentes estilizados
const BannerTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 8vw 5vw;
  margin-top: 5vw;
`;
const TextContainer = styled.div`
  display: flex;
  @media (max-width: 899px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 80%;
    margin-top: 5vw;
  }
`;

const Title = styled.h1`
  width: 100%;
  display: block;
  line-height: 1;
  text-align: left;
  white-space: pre-wrap;
  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 0;
  }
`;

// const Highlight = styled.span`
//   position: relative;
//   display: inline-block;
//   font-family: ${({ theme }) => theme.fonts.terciary};
//   font-size: 3rem;
//   font-style: italic;
//   @media (max-width: 899px) {
//     font-size: 3.2rem;
//   }
//   @media (max-width: 600px) {
//     font-size: 3rem;
//   }
// `;

// const AnimationContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%) scale(1.2);
//   z-index: 1;
//   width: ${({ animationWidth }) => animationWidth};
//   height: ${({ animationHeight }) => animationHeight};
//   pointer-events: none;
//   opacity: ${({ animationTriggered }) => (animationTriggered ? 1 : 0)};
//   transition: opacity 0.5s ease-in-out;
// `;

const ParagraphsContainer = styled.div`
  flex: 1;
  width: 50%;
  text-align: left;
  white-space: pre-wrap;
  @media (max-width: 899px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

// const StyledButton = styled.button`
//   background-color: ${({ theme }) => theme.colors.green};
//   margin-top: 4vw;
//   font-size: 1.8rem;
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.white};
//     color: ${({ theme }) => theme.colors.green};
//   }
//   @media (max-width: 600px) {
//     margin: 5vw 0;
//   }
// `;

// Componente funcional
function BannerTop() {
  const sectionRef = useRef(null);
  // const navigate = useNavigate();
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { t, i18n } = useTranslation();
  // const [animationDimensions, setAnimationDimensions] = useState({
  //   width: "11rem",
  //   height: "6rem",
  // });

  // Função para calcular as dimensões da animação de acordo com o idioma
  // const getAnimationDimensions = (language) => {
  //   if (language === "en") {
  //     return { width: "14rem", height: "6rem" }; // Dimensões para o idioma inglês
  //   } else if (language === "pt") {
  //     return { width: "11rem", height: "6rem" }; // Dimensões para o idioma português
  //   } else {
  //     return { width: "11rem", height: "6rem" }; // Valores padrão
  //   }
  // };

  // Atualiza as dimensões quando o idioma mudar
  useEffect(() => {
    // setAnimationDimensions(getAnimationDimensions(i18n.language));
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

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [animationTriggered]);

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: animationTriggered,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "none",
  //   },
  // };

  return (
    <BannerTopContainer ref={sectionRef}>
      <TextContainer>
        <TitleContainer>
          <Title>
            {t("bannerTop.title.part1")} <br />
            {/* <Highlight>
            {t("bannerTop.title.highlight")}
            <AnimationContainer
              animationTriggered={animationTriggered}
              animationWidth={animationDimensions.width}
              animationHeight={animationDimensions.height}
            >
              <Lottie
                options={defaultOptions}
                isStopped={!animationTriggered}
              />
            </AnimationContainer>
          </Highlight> */}
            {t("bannerTop.title.part2")}
          </Title>
        </TitleContainer>
        <ParagraphsContainer>
          <p>{t("bannerTop.description.part1")}</p>
          <p>{t("bannerTop.description.part2")}</p>
          <p>{t("bannerTop.description.part3")}</p>
        </ParagraphsContainer>
      </TextContainer>
      {/* <StyledButton
        onClick={() => navigate(i18n.language === "en" ? "/form-en" : "/form")}
      >
        {t("bannerTop.button")}
      </StyledButton> */}
    </BannerTopContainer>
  );
}

export default BannerTop;
