import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Section = styled.section`
  padding: 110px 5vw;
  background: ${({ theme }) => theme.colors.white};
`;

const Head = styled.div`
  max-width: 640px;
  margin-bottom: 56px;
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
  margin-bottom: 20px;

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
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.colors.line || "#E7E7E4"};
  border: 1px solid ${({ theme }) => theme.colors.line || "#E7E7E4"};
  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Cell = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 36px 28px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background 0.4s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.offwhite || "#F7F7F5"};
  }
`;

const Num = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  letter-spacing: 0.06em;
`;

const CellContent = styled.div`
  margin-top: 24px;
`;

const CellTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const CellDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.grey || "#6B6B6B"};
`;

function Spec() {
  const { t } = useTranslation();
  const items = t("spec.items", { returnObjects: true });

  return (
    <Section id="pilares">
      <Head>
        <Eyebrow>{t("spec.eyebrow")}</Eyebrow>
        <SectionTitle>{t("spec.title")}</SectionTitle>
      </Head>

      <Grid>
        {items.map((item, i) => (
          <Cell key={i}>
            <Num>0{i + 1}</Num>
            <CellContent>
              <CellTitle>{item.title}</CellTitle>
              <CellDesc>{item.description}</CellDesc>
            </CellContent>
          </Cell>
        ))}
      </Grid>
    </Section>
  );
}

export default Spec;
