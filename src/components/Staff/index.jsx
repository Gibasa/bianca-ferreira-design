import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";

const StaffStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw;

  .title,
  .portraits {
    flex: 1;
  }

  .portraits {
    display: flex;
    gap: 150px;

    img {
      width: 20vw;
    }
  }

  .title h2 {
    .highlight {
      position: relative;
      display: inline-block;

      .animation {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 6rem;
        height: 5rem;
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
          QUEM{" "}
          <span className="highlight">
            FAZ
            <div className="animation">
              <Lottie options={defaultOptions} isStopped={!animationTriggered} />
            </div>
          </span>
          <br /> ACONTECER.
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
