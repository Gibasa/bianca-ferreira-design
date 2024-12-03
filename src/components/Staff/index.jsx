import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";

const StaffStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw;
  gap: 50px;

  .title,
  .portraits {
    flex: 1;
  }

  .portraits {
    width: 100%;
    display: flex;
    justify-content: space-around;
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
        font-size: 3.4rem;
      }

      .animation {
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 5rem;
        height: 7rem;
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
    <StaffStyled ref={sectionRef} animationTriggered={animationTriggered}>
      <div className="title">
        <h2>
          Quem{" "}
          <span className="highlight">
            faz
            <div className="animation">
              <Lottie
                options={defaultOptions}
                isStopped={!animationTriggered}
              />
            </div>
          </span>
          <br /> acontecer.
        </h2>
      </div>
      <div className="portraits">
        <img src="/images/bia.png" alt="Bianca Portrait" />
        <img src="/images/giba.png" alt="Gilberto Portrait" />
      </div>
    </StaffStyled>
  );
}

export default Staff;
