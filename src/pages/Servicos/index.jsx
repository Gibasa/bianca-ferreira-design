import styled from "styled-components";
import Marquee from "react-fast-marquee";

const ServicosStyled = styled.section``;

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Word = styled.div`
  margin: 0 2rem; /* Ajuste o espaçamento entre palavras */
  font-size: 30px; /* Definindo o tamanho da fonte aqui */
  color: ${({ theme }) => theme.colors.white};
`;

function Servicos() {
  const words = ["DESIGN", "BRANDING", "FOTOGRAFIA", "SITE"];

  return (
    <ServicosStyled id="serviços">
      <BannerContainer>
        <Marquee gradient={false} speed={50} autoFill>
          {/* Duplicando as palavras para garantir a continuidade */}
          {words.concat(words).map((word, index) => (
            <Word key={`word-${index}`}>{word}</Word>
          ))}
        </Marquee>
      </BannerContainer>
    </ServicosStyled>
  );
}

export default Servicos;
