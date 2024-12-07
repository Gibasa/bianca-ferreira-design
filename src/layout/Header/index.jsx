import styled, { keyframes, css } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/TranslationContext";
import { useTranslation } from "react-i18next";

// Animação para o logo sair da tela (da direita para a esquerda)
const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Animação para o logo entrar na tela (da esquerda para a direita)
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Animação de expansão e colapso do modal
const expandModal = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 25vw;
    height: 45vh;
  }
`;

const collapseModal = keyframes`
  from {
    width: 25vw;
    height: 50vh;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModalMedium = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 32vw;
    height: 45vh;
  }
`;

const collapseModalMedium = keyframes`
  from {
    width: 25vw;
    height: 45vh;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

const expandModalSmall = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 45vw;
    height: 38vh;
  }
`;

const collapseModalSmall = keyframes`
  from {
    width: 50vw;
    height: 50vh;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

// Contêiner do logo
const LogoContainer = styled(Box)`
  position: relative;
  height: 70px;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 899px) {
    height: 60px;
  }

  @media (max-width: 600px) {
    height: 10vw;
  }
`;

// Logo com animações
const AnimatedLogo = styled.img`
  position: absolute;
  height: 100%;
  width: auto;
  cursor: pointer;

  ${({ $animation }) =>
    $animation &&
    css`
      animation: ${$animation} 0.6s ease-in-out;
    `}
`;

// Barra de navegação estilizada
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

// Menu hambúrguer
const StyledHamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
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
        isOpen ? "rotate(48deg) translate(8px, 8px)" : "none"};
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

// Modal estilizado
const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1.8vw 4vw;
  display: flex;
  padding: 2vw 5vw;
  align-items: start;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(255, 255, 255);
  animation: ${({ isClosing }) => (isClosing ? collapseModal : expandModal)}
    0.5s ease-out forwards;
  z-index: 5;
  @media (max-width: 899px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModalMedium : expandModalMedium}
      0.5s ease-out forwards;
  }

  @media (max-width: 600px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModalSmall : expandModalSmall}
      0.5s ease-out forwards;
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
    color: black;
    font-weight: bold;

    &:hover {
      color: gray;
    }
  }

  button {
    margin-top: 20px;
    width: 120%;
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

  &:hover {
    background: none;
  }
`;

// Estilizando o texto "PT" e "EN"
const LanguageText = styled.span`
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

// Componente principal
function Header() {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [logoState, setLogoState] = useState({
    currentLogo: "/images/logoBiancaFerreira.png",
    animation: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { language, toggleLanguage } = useLanguage(); // Obtendo valores do contexto
  const { t } = useTranslation(); // Utilizando o hook useTranslation para acessar as traduções

  const pages =
    language === "pt"
      ? ["projetos", "serviços", "contato"]
      : ["projects", "services", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const target = document.getElementById("video");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const isPrivacyPolicyPage =
      window.location.pathname === "/politica-de-privacidade";
    const newLogo =
      !isIntersecting || isPrivacyPolicyPage
        ? "/images/logoBiancaFerreiraSmall.png"
        : "/images/logoBiancaFerreira.png";

    if (logoState.currentLogo === newLogo) return;

    const exitAnimation = slideOut;
    const entryAnimation = slideIn;

    setLogoState((prevState) => ({
      ...prevState,
      animation: exitAnimation,
    }));

    const timeout = setTimeout(() => {
      setLogoState({
        currentLogo: newLogo,
        animation: entryAnimation,
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [isIntersecting, logoState.currentLogo]);

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
            src={logoState.currentLogo}
            alt="Logo"
            $animation={logoState.animation}
            onClick={() => {
              window.location.href = "/";
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
                <a key={page} href={`#${page}`} onClick={handleToggleModal}>
                  {t(page)} {/* Traduzindo com o i18next */}
                </a>
              ))}
              <button>{t("Faça seu orçamento")}</button>{" "}
              {/* Traduzindo o texto */}
            </ModalContent>
          </StyledModal>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
