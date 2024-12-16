import styled from "styled-components";
import { useEffect } from "react";

const FormStyled = styled.div`
  margin-top: 100px;
`;
const IframeStyled = styled.iframe`
  width: 100%;
  height: 3400px;
  border: none;
  display: flex;
  @media (max-width: 899px) {
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 3800px;
  }
`;

function FormEn() {
  useEffect(() => {
    // Faz a página rolar para o topo ao carregar
    window.scrollTo(0, 0);
  }, []);
  return (
    <FormStyled>
      <IframeStyled
        src="https://docs.google.com/forms/d/e/1FAIpQLSdmSkBhV4FYt7pWLB8i8jzTpR0MPHK9OzM7O5wNribXPzP1Pg/viewform?embedded=true"
        title="Google Form"
      />
    </FormStyled>
  );
}

export default FormEn;
