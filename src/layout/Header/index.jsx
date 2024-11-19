import styled, { keyframes } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";

const pages = ["projetos", "serviços", "contato"];

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.white} !important;
  position: fixed !important;
  top: 0;
  z-index: 5 !important;
  .css-hhdjsd-MuiContainer-root {
    padding: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`
  height: 120px !important;
  margin: 0 5vw !important;
`;

const growLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  position: relative !important;
  color: ${({ theme }) => theme.colors.black} !important;
  font-family: ${({ theme }) => theme.fonts.primary} !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-size: 1.8rem !important;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    height: 8px;
    background-color: ${({ underlineColor }) => underlineColor};
    width: ${({ isActive }) => (isActive ? "90%" : "0")};
    animation: ${({ isActive }) => (isActive ? growLine : "none")} 0.4s ease-out;
    transition: width 0.4s ease-out;
  }
  &:hover {
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.black} !important;
`;

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Scroll suave ao clicar no link
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Atualizar seção ativa com base no scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = pages.map((page) => document.getElementById(page));
      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition + 120 &&
          section.offsetTop + section.offsetHeight > scrollPosition + 120
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cores para a linha
  const underlineColors = {
    projetos: "red",
    serviços: "green",
    contato: "blue",
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Box
            component="img"
            src="/images/logoBiancaFerreira.png"
            alt="Logo"
            href="/#"
            sx={{
              height: 70,
              display: { xs: "flex", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <StyledButton
                key={page}
                underlineColor={underlineColors[page]}
                isActive={activeSection === page}
                onClick={() => handleClick(page)}
              >
                {page}
              </StyledButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: "auto" }}
            >
              <StyledMenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleClick(page);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
