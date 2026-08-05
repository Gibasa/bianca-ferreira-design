import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Section = styled.section`
  padding: 110px 5vw;
  background: ${({ theme }) => theme.colors.white};
`;

const Head = styled.div`
  max-width: 620px;
  margin-bottom: 60px;
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.red};
    flex-shrink: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3.6vw, 2.8rem);
  line-height: 1.15;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  padding: 36px 28px;
  background: ${({ theme }) => theme.colors.offwhite || "#F7F7F5"};
  border: 1px solid ${({ theme }) => theme.colors.line || "#E7E7E4"};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

const StepNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 42px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue};
  line-height: 1;
  font-style: italic;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
`;

const StepDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.95rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.grey || "#6B6B6B"};
`;

function Process() {
  const { t } = useTranslation();
  const items = t("process.items", { returnObjects: true });

  return (
    <Section id="processo">
      <Head>
        <Eyebrow>{t("process.eyebrow")}</Eyebrow>
        <SectionTitle>{t("process.title")}</SectionTitle>
      </Head>

      <Grid>
        {items.map((item, i) => (
          <StepCard key={i}>
            <StepNumber>0{i + 1}</StepNumber>
            <StepTitle>{item.title}</StepTitle>
            <StepDesc>{item.description}</StepDesc>
          </StepCard>
        ))}
      </Grid>
    </Section>
  );
}

export default Process;
