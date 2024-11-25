import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";

const BannerTopStyled = styled.div`
  display: flex;
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
      width: 70%;
      display: block;
      line-height: 1;
      text-align: justify;
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

      .animation {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 14rem;
        height: 5rem;
        pointer-events: none;
        opacity: ${({ animationTriggered }) => (animationTriggered ? 1 : 0)};
        transition: opacity 0.5s ease-in-out;
      }
    }
  }

  .paragrafs {
    flex: 1;
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
          A SUA MARCA PRECISA{" "}
          <span className="highlight">
            MARCAR
            <div className="animation">
              <Lottie options={defaultOptions} isStopped={!animationTriggered} />
            </div>
          </span>
          , SEJA A DIFERENÇA.
        </h1>
      </div>
      <div className="paragrafs">
        <p>
          Acreditamos que a marca é muito mais do que um logotipo ou um slogan,
          é a expressão da essência de um negócio.
        </p>
        <p>
          Nosso trabalho é te guiar para tornar a sua marca forte, memorável e
          criativa.
        </p>
      </div>
    </BannerTopStyled>
  );
}

export default BannerTop;
