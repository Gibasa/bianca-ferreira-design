import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";

const BannerTopStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw;

  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      width: 50%;
      display: block;
      line-height: 1;
      text-align: center;
      &::after {
        content: "";
        display: inline-block;
        width: 100%;
        height: 0;
      }
    }
    .highlight {
      position: relative;
      display: inline-block;
      font-family: ${({ theme }) => theme.fonts.terciary};
      font-size: 3rem;
      font-style: italic;

      .animation {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 11rem;
        height: 6rem;
        pointer-events: none;
        opacity: ${({ animationTriggered }) => (animationTriggered ? 1 : 0)};
        transition: opacity 0.5s ease-in-out;
      }
    }
  }

  .paragrafs {
    flex: 1;
    width: 50%;
    text-align: center;
  }
  button {
    background-color: ${({ theme }) => theme.colors.green};
    margin-top: 50px;
    padding: 5px 15px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

function BannerTop() {
  const sectionRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

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
    loop: false,
    autoplay: animationTriggered,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };

  return (
    <BannerTopStyled ref={sectionRef} animationTriggered={animationTriggered}>
      <div className="title">
        <h1>
          A sua marca precisa{" "}
          <span className="highlight">
            marcar
            <div className="animation">
              <Lottie
                options={defaultOptions}
                isStopped={!animationTriggered}
              />
            </div>
          </span>
          , seja a diferença.
        </h1>
      </div>
      <div className="paragrafs">
        <p>
          Acreditamos que a marca é muito mais do que um logotipo ou um slogan,
          é a maneira como a sua empresa se coloca no mundo.
        </p>
        <p>
          Construir uma marca é narrar uma história, onde cada palavra e imagem
          se unem para criar uma identidade única.{" "}
        </p>
        <p>Vamos começar a contar a sua história hoje?</p>
      </div>
      <button>Vamos criar juntos?</button>
    </BannerTopStyled>
  );
}

export default BannerTop;
