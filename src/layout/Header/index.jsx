import styled, { keyframes, css } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useLanguage } from "../../context/TranslationContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// const slideOut = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// const slideIn = keyframes`
//   0% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

const expandModal1 = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 25vw;
    height: 20vw;
  }
`;

const collapseModal1 = keyframes`
  from {
    width: 25vw;
    height: 20vw;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModal2 = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 30vw;
    height: 37vh;
  }
`;

const collapseModal2 = keyframes`
  from {
    width: 30vw;
    height: 37vh;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModal3 = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 40vw;
    height: 35vw
  }
`;

const collapseModal3 = keyframes`
  from {
    width: 40vw;
    height: 35vw;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModal4 = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 38vw;
    height: 40vw
  }
`;

const collapseModal4 = keyframes`
  from {
    width: 38vw;
    height: 40vw;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModal5 = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 45vw;
    height: 50vw
  }
`;

const collapseModal5 = keyframes`
  from {
    width: 45vw;
    height: 50vw;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModal6 = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 62vw;
    height: 67vw
  }
`;

const collapseModal6 = keyframes`
  from {
    width: 38vw;
    height: 50vw;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const LogoContainer = styled(Box)`
  position: relative;
  height: 70px;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 899px) {
    height: 60px;
  }

  @media (max-width: 600px) {
    height: 8vw;
  }
`;

const AnimatedLogo = styled.img`
  position: absolute;
  height: 100%;
  width: auto;
  cursor: pointer;

  ${({ $animation }) =>
    $animation &&
    css`
      animation: ${$animation} 0.5s ease;
    `}
`;

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
  transition: background-color 0.5s ease-in-out;

  @media (max-width: 899px) {
    height: 100px;
  }

  @media (max-width: 600px) {
    height: 70px;
  }
`;

const StyledToolbar = styled(Toolbar)`
  height: 120px !important;
  margin: 0 5vw !important;
`;

const StyledHamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.white : theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  position: relative;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  div {
    height: 5px;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      background-color: ${({ isOpen, theme }) =>
        isOpen ? theme.colors.black : theme.colors.blue};
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(48deg) translate(9px, 8px)" : "none"};
    }

    &:nth-child(2) {
      background-color: ${({ theme }) => theme.colors.red};
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      background-color: ${({ isOpen, theme }) =>
        isOpen ? theme.colors.black : theme.colors.green};
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-48deg) translate(10px, -9px)" : "none"};
    }
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1.8vw 4vw;
  display: flex;
  padding: 2vw 2vw 2vw;
  align-items: start;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  animation: ${({ isClosing }) => (isClosing ? collapseModal1 : expandModal1)}
    0.5s ease-out forwards;
  z-index: 5;
  @media (max-width: 1300px) {
    padding: 2vw 2vw 2vw;
  }
  @media (max-width: 1080px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal2 : expandModal2}
      0.5s ease-out forwards;
  }

  @media (max-width: 899px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal2 : expandModal2}
      0.5s ease-out forwards;
    padding: 2vw 2vw 2vw;
  }

  @media (max-width: 700px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal3 : expandModal3}
      0.5s ease-out forwards;
    padding: 5vw 5vw 2vw;
  }
  @media (max-width: 625px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal4 : expandModal4}
      0.5s ease-out forwards;
    padding: 5vw 5vw 2vw;
  }
  @media (max-width: 500px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal5 : expandModal5}
      0.5s ease-out forwards;
    padding: 5vw 5vw 2vw;
  }

  @media (max-width: 400px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal6 : expandModal6}
      0.5s ease-out forwards;
    padding: 9vw 5vw 2vw;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100%;
  animation: ${({ isClosing }) =>
    isClosing ? "fadeOut 0.1s ease-in forwards" : "fadeIn 1s 0.5s forwards"};

  a {
    display: block;
    margin: 10px 0;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;

    &:hover {
      color: gray;
    }
  }

  button {
    margin-top: 20px;
    width: 100%;
    font-size: 1.8rem;
    line-height: 25px;
    @media (max-width: 1300px) {
      font-size: 1.2rem;
    }
    @media (max-width: 899px) {
    }
    @media (max-width: 700px) {
      font-size: 1.5rem;
      line-height: 20px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const LanguageText = styled.span`
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

function Header() {
  // const [logoState, setLogoState] = useState({
  //   currentLogo: "/images/logoBiancaFerreira.png",
  //   animation: null,
  // });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  // const location = useLocation();

  const sectionIds = {
    PROJETOS: "projetos",
    PROJECTS: "projetos",
    CONTATO: "contato",
    CONTACT: "contato",
    SERVIÇOS: "serviços",
    SERVICES: "serviços",
  };

  // useEffect(() => {
  //   const updateLogoBasedOnRoute = () => {
  //     const smallLogoRoutes = ["/form", "/politica-de-privacidade"];

  //     if (smallLogoRoutes.includes(location.pathname)) {
  //       setLogoState({
  //         currentLogo: "/images/logoBiancaFerreiraSmall.png",
  //         animation: null,
  //       });
  //     } else {
  //       const handleScroll = () => {
  //         const videoElement = document.getElementById("video");
  //         if (!videoElement) return;

  //         const videoRect = videoElement.getBoundingClientRect();
  //         const isInView =
  //           videoRect.top < window.innerHeight && videoRect.bottom >= 0;

  //         setLogoState((prev) => {
  //           if (
  //             isInView &&
  //             prev.currentLogo !== "/images/logoBiancaFerreira.png"
  //           ) {
  //             return {
  //               currentLogo: "/images/logoBiancaFerreira.png",
  //               animation: slideIn,
  //             };
  //           } else if (
  //             !isInView &&
  //             prev.currentLogo !== "/images/logoBiancaFerreiraSmall.png"
  //           ) {
  //             return {
  //               currentLogo: "/images/logoBiancaFerreiraSmall.png",
  //               animation: slideOut,
  //             };
  //           }
  //           return prev;
  //         });
  //       };

  //       window.addEventListener("scroll", handleScroll);
  //       handleScroll();
  //       return () => window.removeEventListener("scroll", handleScroll);
  //     }
  //   };

  //   updateLogoBasedOnRoute();
  // }, [location.pathname]);

  const pages =
    language === "pt" ? ["PROJETOS", "CONTATO"] : ["PROJECTS", "CONTACT"];

  const handleToggleModal = () => {
    if (isModalOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsModalOpen(true);
      setIsClosing(false);
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <LogoContainer>
          <AnimatedLogo
            src="/images/LOGO BF PRETO.png"
            alt="Logo"
            // $animation={logoState.animation}
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </LogoContainer>

        <Box sx={{ flexGrow: 1 }} />

        <LanguageButton onClick={toggleLanguage}>
          <LanguageText isSelected={language === "pt"}>PT</LanguageText>|
          <LanguageText isSelected={language === "en"}>EN</LanguageText>
        </LanguageButton>

        <StyledHamburger onClick={handleToggleModal} isOpen={isModalOpen}>
          <div />
          <div />
          <div />
        </StyledHamburger>

        {isModalOpen && (
          <StyledModal isClosing={isClosing}>
            <ModalContent isClosing={isClosing}>
              {pages.map((page) => (
                <a
                  key={page}
                  href={`#${sectionIds[page]}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = sectionIds[page];
                    document
                      .getElementById(targetId)
                      ?.scrollIntoView({ behavior: "smooth" });
                    handleToggleModal();
                  }}
                >
                  {t(page)}
                </a>
              ))}
              <button
                onClick={() => {
                  navigate(i18n.language === "en" ? "/form-en" : "/form");
                  handleToggleModal();
                }}
              >
                {t("header.button")}
              </button>{" "}
            </ModalContent>
          </StyledModal>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
