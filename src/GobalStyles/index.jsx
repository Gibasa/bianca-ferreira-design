import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* ── Base herdada do Bootstrap (reboot) ─────────────────────
     O site importava o CSS inteiro do Bootstrap (231 KB) só por
     estas regras de base. Mantidas aqui para o layout não mudar. */
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 { font-size: calc(1.375rem + 1.5vw); }
  h2 { font-size: calc(1.325rem + 0.9vw); }
  h3 { font-size: calc(1.3rem + 0.6vw); }
  h4 { font-size: calc(1.275rem + 0.3vw); }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }

  @media (min-width: 1200px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    h4 { font-size: 1.5rem; }
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    opacity: 0.25;
  }

  img, svg {
    vertical-align: middle;
  }

  iframe {
    border: 0;
  }

  /* ── Base do site ───────────────────────────────────────── */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── TÍTULOS: forma-djr-display ─────────────────────────────
     O selector "h1 *, h2 *, h3 *" garante que qualquer span/em
     dentro de um heading também receba a fonte primária.         */
  h1, h1 *,
  h2, h2 *,
  h3, h3 * {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 700;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.65;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 1.8rem;
    border: none;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    line-height: 1.4;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Responsividade */
  @media (max-width: 1300px) {
    button {
      padding: 0.7rem 1.2rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 899px) {
    html { font-size: 14px; }
    h1, h1 *, h2, h2 *, h3, h3 * { font-size: 2.5rem; }
    button { font-size: 1rem; padding: 0.7rem 1.2rem; }
  }

  @media (max-width: 600px) {
    html { font-size: 13px; }
    h1, h1 *, h2, h2 *, h3, h3 * { font-size: 2rem; line-height: 1.1; }
    button { font-size: 1rem; padding: 0.6rem 1rem; }
  }
`;

export default GlobalStyle;
