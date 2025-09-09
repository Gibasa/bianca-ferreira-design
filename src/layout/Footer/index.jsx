import styled from "styled-components";
// import Lottie from "react-lottie";
// import animationData from "../../assets/circle.json";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 2vw 5vw 0;

  .footerContainer {
    display: flex;
    justify-content: center;
    align-items: center;

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
          width: ${({ animationWidth }) => animationWidth};
          height: ${({ animationHeight }) => animationHeight};
          pointer-events: none;
          opacity: ${({ animationTriggered }) => (animationTriggered ? 1 : 0)};
          transition: opacity 0.5s ease-in-out;
        }
      }
    }
  }

  .contact {
    display: flex;
    justify-content: space-between;
    gap: 30vw;
    h2 {
      font-size: 1.2rem;
    }
    .email,
    .instagram {
      display: flex;
      flex-direction: column;
    }
    p a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      &:hover {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
  .copyright {
    margin-top: 10px;
    font-size: 1rem;
  }
  @media (max-width: 899px) {
    .footerContainer {
      flex-direction: column;
      gap: 8vw;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      .title,
      .contact {
        text-align: center;
        line-height: 20px;
        gap: 2vw;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

function Footer() {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  // const [animationDimensions, setAnimationDimensions] = useState({
  //   width: "7rem",
  //   height: "6rem",
  // });
  const { t, i18n } = useTranslation();

  // Função para definir as dimensões da animação conforme o idioma
  // const getAnimationDimensions = (language) => {
  //   if (language === "en") {
  //     return { width: "8.6rem", height: "6rem" }; // Dimensões para o idioma inglês
  //   } else if (language === "pt") {
  //     return { width: "7rem", height: "6rem" }; // Dimensões para o idioma português
  //   } else {
  //     return { width: "7rem", height: "6rem" }; // Valores padrão, caso precise adicionar mais idiomas
  //   }
  // };

  useEffect(() => {
    // Atualiza as dimensões da animação ao mudar o idioma
    // setAnimationDimensions(getAnimationDimensions(i18n.language));
  }, [i18n.language]);

  const yearnow = () => {
    const date = new Date();
    return date.getFullYear();
  };

  useEffect(() => {
    const handleScroll = () => {
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

  // const defaultOptions = {
  //   loop: false, // A animação para no final
  //   autoplay: animationTriggered, // Só inicia se ativada
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "none",
  //   },
  // };

  return (
    <FooterStyled
      // animationTriggered={animationTriggered}
      // animationWidth={animationDimensions.width}
      // animationHeight={animationDimensions.height}
      id="contato"
    >
      <div className="footerContainer">
        {/* <div className="title">
          <h2>
            {t("footer.title.part1")}{" "}
            <span className="highlight">
              {t("footer.title.highlight")}
              <div className="animation">
                <Lottie
                  options={defaultOptions}
                  isStopped={!animationTriggered} // Pausa a animação até ativada
                />
              </div>
            </span>{" "}
            <br />
            {t("footer.title.part2")}
          </h2>
        </div> */}
        <div className="contact">
          <div className="email">
            <h2>{t("footer.contact")}</h2>
            <p>contato@biancaferreiradesign.com</p>
          </div>
          <div className="instagram">
            <h2>{t("footer.instagram")}</h2>
            <p>
              <a
                href="https://www.instagram.com/biancaferreiradesign/"
                target="blank"
              >
                @biancaferreiradesign
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">
        {yearnow()} © {t("footer.copyright")}
      </p>
    </FooterStyled>
  );
}

export default Footer;
