import styled, { keyframes, css } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useLanguage } from "../../context/TranslationContext";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";


const expandModal1 = keyframes`
  from {
    width: 60px;
    max-height: 50px;
  }
  to {
    width: 280px;
    max-height: 550px;
  }
`;

const collapseModal1 = keyframes`
  from {
    width: 280px;
    max-height: 550px;
  }
  to {
    width: 60px;
    max-height: 50px;
  }
`;

const expandModal2 = keyframes`
  from {
    width: 60px;
    max-height: 50px;
  }
  to {
    width: 300px;
    max-height: 580px;
  }
`;

const collapseModal2 = keyframes`
  from {
    width: 300px;
    max-height: 580px;
  }
  to {
    width: 60px;
    max-height: 50px;
  }
`;

const expandModal3 = keyframes`
  from {
    width: 60px;
    max-height: 50px;
  }
  to {
    width: 320px;
    max-height: 600px;
  }
`;

const collapseModal3 = keyframes`
  from {
    width: 320px;
    max-height: 600px;
  }
  to {
    width: 60px;
    max-height: 50px;
  }
`;

const expandModal4 = keyframes`
  from {
    width: 60px;
    max-height: 50px;
  }
  to {
    width: 320px;
    max-height: 600px;
  }
`;

const collapseModal4 = keyframes`
  from {
    width: 320px;
    max-height: 600px;
  }
  to {
    width: 60px;
    max-height: 50px;
  }
`;

const expandModal5 = keyframes`
  from {
    width: 60px;
    max-height: 50px;
  }
  to {
    width: 80vw;
    max-height: 620px;
  }
`;

const collapseModal5 = keyframes`
  from {
    width: 80vw;
    max-height: 620px;
  }
  to {
    width: 60px;
    max-height: 50px;
  }
`;

const expandModal6 = keyframes`
  from {
    width: 60px;
    max-height: 50px;
  }
  to {
    width: 85vw;
    max-height: 650px;
  }
`;

const collapseModal6 = keyframes`
  from {
    width: 85vw;
    max-height: 650px;
  }
  to {
    width: 60px;
    max-height: 50px;
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
    height: 10vw;
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
  background-color: white !important;
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
  flex-direction: column;
  padding: 30px 24px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  animation: ${({ isClosing }) => (isClosing ? collapseModal1 : expandModal1)}
    0.5s ease-out forwards;
  z-index: 5;
  height: auto;
  max-height: 50px;
  overflow: hidden;

  @media (max-width: 1300px) {
    padding: 30px 24px;
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
    padding: 30px 24px;
  }

  @media (max-width: 700px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal3 : expandModal3}
      0.5s ease-out forwards;
    padding: 40px 24px;
  }
  @media (max-width: 625px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal4 : expandModal4}
      0.5s ease-out forwards;
    padding: 40px 24px;
  }
  @media (max-width: 500px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal5 : expandModal5}
      0.5s ease-out forwards;
    padding: 40px 24px 30px;
  }

  @media (max-width: 400px) {
    animation: ${({ isClosing }) =>
        isClosing ? collapseModal6 : expandModal6}
      0.5s ease-out forwards;
    padding: 40px 20px 30px;
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

    @media (max-width: 600px) {
      margin: 6px 0;
      font-size: 1.3rem;
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
    @media (max-width: 700px) {
      font-size: 1.2rem;
      line-height: 20px;
      margin-top: 12px;
      padding: 10px 20px;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { key: "home", target: "home", type: "scroll" },
    { key: "services", target: "serviços", type: "scroll" },
    { key: "about", target: "sobre", type: "scroll" },
    { key: "cases", target: "cases", type: "page" },
    { key: "testimonials", target: "depoimentos", type: "scroll" },
    { key: "contact", target: "contato", type: "scroll" },
  ];

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

  const handleNavItemClick = (e, item) => {
    e.preventDefault();
    
    // Anima fechamento do modal primeiro
    handleToggleModal();

    if (item.type === "page") {
      navigate(`/${i18n.language}/${item.target}`);
    } else {
      const isCasesPage = location.pathname.endsWith("/cases");
      if (isCasesPage) {
        navigate(`/${i18n.language}#${item.target}`);
      } else {
        if (item.target === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <LogoContainer>
          <AnimatedLogo
            src="/images/LOGO BF PRETO.png"
            alt="Logo"
            onClick={() => {
              navigate(`/${i18n.language}`);
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
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.target}`}
                  onClick={(e) => handleNavItemClick(e, item)}
                >
                  {t(`header.nav.${item.key}`)}
                </a>
              ))}
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/5571993703427?text=${encodeURIComponent(t("header.button"))}`,
                    "_blank"
                  );
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
