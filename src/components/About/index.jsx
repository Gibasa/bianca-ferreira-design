import styled from "styled-components";
import { useTranslation } from "react-i18next";


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
    width: 60vw;
    max-width: 720px;
    margin-bottom: 1.5rem;
    order: 1;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

function About() {
    const { t } = useTranslation();
  
  return (
    <AboutStyled>
      <AboutImage src="/images/bianca-about.png" />
      <AboutText>
        <h2>{t("about.title")}</h2>
        <p>{t("about.paragraphs.p1")}</p>
        <p>{t("about.paragraphs.p2")}</p>
        <p>{t("about.paragraphs.p3")}</p>
        <p>{t("about.paragraphs.p4")}</p>
      </AboutText>
    </AboutStyled>
  );
}

export default About;
