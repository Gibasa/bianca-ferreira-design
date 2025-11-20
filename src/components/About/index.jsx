import styled from "styled-components";

const AboutStyled = styled.div`
  display: flex;
  padding: 5vw;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 4vw 3vw;
  }

  @media (max-width: 600px) {
    padding: 3vw 2vw;
  }
`;
const AboutText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  h2 {
    padding-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
  }


  @media (max-width: 1200px) {
    width: 80%;
    order: 2;
    text-align: center;
  }
`;
const AboutImage = styled.img`
  width: 30vw;
  max-width: 520px;
  margin-top: 2rem;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 899px) {
    width: 50vw;
    max-width: 720px;
    margin-bottom: 1.5rem;
    order: 1;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

function About() {
  return (
    <AboutStyled>
      <AboutImage src="/images/bianca-about.png" />

      <AboutText>
        <h2>OI, SOU A BIA.</h2>
        <p>
          Sou designer e estrategista de marca. Desde 2018 trabalho de forma
          remota, atendendo clientes do Brasil e do exterior, sempre com o foco
          em desenvolver identidades visuais que unem estética, propósito e
          estratégia.
        </p>
        <p>
          Ao longo desses anos, percebi algo em comum entre todos os negócios
          que passam por aqui: existe uma história forte demais para ficar
          escondida. Uma história que precisa ser vista, sentida e reconhecida,
          e que encontra na marca o seu jeito mais poderoso de existir no mundo.
        </p>
        <p>
          Meu trabalho é justamente esse: transformar aquilo que já vive dentro
          do seu negócio em identidade. Dar forma ao que você sente, traduzir
          sua visão em símbolos, cores e escolhas que fazem as pessoas
          entenderem quem você é antes mesmo de você dizer uma palavra.
        </p>
        <p>
          Eu acredito que toda marca é, na verdade, uma narrativa. A sua. E
          quando essa narrativa é bem construída, você deixa de competir por
          atenção e passa a ocupar um lugar que ninguém mais pode tomar.
        </p>
      </AboutText>
    </AboutStyled>
  );
}

export default About;
