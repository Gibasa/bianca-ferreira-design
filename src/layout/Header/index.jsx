import styled, { keyframes } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";

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

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
`;

const StyledToolbar = styled(Toolbar)`
  height: 120px !important;
  margin: 0 5vw !important;
`;

const StyledLogo = styled(Box)`
  height: 70px;
  mix-blend-mode: difference !important;
  cursor: pointer;
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
  margin: 35px 74px;
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
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBlue};
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

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const pages = ["projetos", "serviços", "contato"];

  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <StyledLogo
          component="img"
          src="/images/logoBiancaFerreira.png"
          alt="Logo"
        />

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
              <button>faça seu orçamento</button>
            </ModalContent>
          </StyledModal>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
