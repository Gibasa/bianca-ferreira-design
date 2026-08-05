import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Section = styled.section`
  padding: 120px 5vw;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  @media (max-width: 899px) {
    padding: 80px 5vw;
  }
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8E8EE8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    background: #8E8EE8;
    flex-shrink: 0;
  }
`;

const Quote = styled.h3`
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  line-height: 1.15;
  margin: 0 auto 32px;
  max-width: 820px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Desc = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
  font-weight: 300;
`;

function Manifesto() {
  const { t } = useTranslation();

  const quoteText = t("manifesto.quote");
  const highlightWord = "inconfundível";
  const parts = quoteText.split(highlightWord);

  return (
    <Section>
      <Eyebrow>{t("manifesto.eyebrow")}</Eyebrow>
      <Quote>
        "{parts[0]}
        {quoteText.includes(highlightWord) && <span>{highlightWord}</span>}
        {parts[1]}"
      </Quote>
      <Desc>{t("manifesto.description")}</Desc>
    </Section>
  );
}

export default Manifesto;
