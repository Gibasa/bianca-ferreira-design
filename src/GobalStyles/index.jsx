import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html {
    font-size: 16px;
  }

  body {
    font-size: 1rem; 
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.black};
  }

  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary}; 
    margin: 0;
    font-size: 2.8rem;
    font-weight: 600;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.secondary}; 
    font-size: 1.2rem;
    font-weight: 500;
  }

  button {
    font-size: 1.2rem; 
    font-family: ${({ theme }) => theme.fonts.secondary}; 
    font-weight: 600;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.blue };
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Responsividade */
  @media (max-width: 899px) {
    html {
      font-size: 14px; /* 1rem = 14px, ajusta o tamanho base */
    }

    h1 {
      font-size: 2.2rem; /* Aproximadamente 31px */
    }

    h2 {
      font-size: 1.8rem; /* Aproximadamente 25px */
    }

    p {
      font-size: 0.9rem; /* Aproximadamente 14px */
    }

    button {
      font-size: 0.9rem; /* Aproximadamente 14px */
      padding: 0.7rem 1.2rem;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 12px; /* 1rem = 12px */
    }

    h1 {
      font-size: 2rem; /* Aproximadamente 24px */
    }

    h2 {
      font-size: 1.6rem; /* Aproximadamente 19px */
    }

    p {
      font-size: 0.8rem; /* Aproximadamente 12px */
    }

    button {
      font-size: 0.8rem; /* Aproximadamente 12px */
      padding: 0.6rem 1rem;
    }
  }
`;

export default GlobalStyle;
