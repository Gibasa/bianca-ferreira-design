import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";
import { useEffect, useState } from "react";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw 4vw;
  .title h2 {
    text-align: center;
    .highlight {
      position: relative;
      display: inline-block;
      font-family: ${({ theme }) => theme.fonts.terciary};
      font-size: 3rem;
      font-style: italic;

      .animation {
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 7rem;
        height: 6rem;
        pointer-events: none;
        opacity: ${({ animationTriggered }) => (animationTriggered ? 1 : 0)};
        transition: opacity 0.5s ease-in-out;
      }
    }
  }
`;

function Footer() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se o usuário está no final da página
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isBottom && !animationTriggered) {
        setAnimationTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <FooterStyled id="contato" animationTriggered={animationTriggered}>
      <div className="title">
        <h2>
          Vamos{" "}
          <span className="highlight">
            criar
            <div className="animation">
              <Lottie
                options={defaultOptions}
                isStopped={!animationTriggered} // Pausa a animação até ativada
              />
            </div>
          </span>{" "}
          <br />
          juntos?
        </h2>
      </div>
      <div className="contact">
        <p>contato@biancaferreiradesign.com</p>
        <p>@biancaferreiradesign</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
