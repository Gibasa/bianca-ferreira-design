import styled, { keyframes, css } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

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

// Animações de entrada e saída para o crescimento do menu
const expandModal = keyframes`
  from {
    width: 60px;
    height: 50px;
  }
  to {
    width: 30vw;
    height: 60vh;
  }
`;

const collapseModal = keyframes`
  from {
    width: 30vw;
    height: 60vh;
  }
  to {
    width: 60px;
    height: 50px;
  }
`;

// Contêiner para o logo
const LogoContainer = styled(Box)`
  position: relative;
  height: 70px;
  width: 35vw;
  overflow: hidden;
`;

// Estilo do logo com animações diferentes
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

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
  transition: background-color 0.5s ease-in-out;
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

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px 55px;
  display: flex;
  padding: 50px;
  align-items: start;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(255, 255, 255);
  animation: ${({ isClosing }) =>
    isClosing ? collapseModal : expandModal} 0.5s ease-out forwards;
  z-index: 5;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0;
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
    margin-top: 50px;
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

function Header() {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [logoState, setLogoState] = useState({
    currentLogo: "/images/logoBiancaFerreira.png",
    animation: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const pages = ["projetos", "serviços", "contato"];

  // Observa a interseção do elemento
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

  // Troca o logo com animação
  useEffect(() => {
    const newLogo = isIntersecting
      ? "/images/logoBiancaFerreira.png"
      : "/images/logoBiancaFerreiraSmall.png";

    if (logoState.currentLogo === newLogo) return;

    // Determina a direção da animação com base no estado atual
    const exitAnimation = slideOut;
    const entryAnimation = slideIn;

    // Inicia a transição
    setLogoState((prevState) => ({
      ...prevState,
      animation: exitAnimation,
    }));

    const timeout = setTimeout(() => {
      setLogoState({
        currentLogo: newLogo,
        animation: entryAnimation,
      });
    }, 300); // Tempo da animação de saída

    return () => clearTimeout(timeout);
  }, [isIntersecting, logoState.currentLogo]);

  const handleToggleModal = () => {
    if (isModalOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsClosing(false);
      }, 300); // Aguarda o fadeOut e o fechamento do modal
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </LogoContainer>

        <Box sx={{ flexGrow: 1 }} />

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
                  {page}
                </a>
              ))}
              <button>Faça seu orçamento</button>
            </ModalContent>
          </StyledModal>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
