import { useState } from "react";
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

const AccordionList = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AccordionItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line || "#E7E7E4"};
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &.active {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Icon = styled.span`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};
  transition: transform 0.35s ease;
  user-select: none;
`;

const ContentPanel = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.2, 1, 0.3, 1);
`;

const BodyText = styled.div`
  padding: 0 28px 24px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.grey || "#6B6B6B"};
  font-size: 0.95rem;
  line-height: 1.7;
`;

function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <Head>
        <Eyebrow>{t("faq.eyebrow")}</Eyebrow>
        <SectionTitle>{t("faq.title")}</SectionTitle>
      </Head>

      <AccordionList>
        {items.map((item, i) => {
          const isOpen = activeIndex === i;
          return (
            <AccordionItem key={i} className={isOpen ? "active" : ""}>
              <Trigger onClick={() => toggleItem(i)} aria-expanded={isOpen}>
                <span>{item.question}</span>
                <Icon style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>+</Icon>
              </Trigger>
              <ContentPanel $isOpen={isOpen}>
                <BodyText>{item.answer}</BodyText>
              </ContentPanel>
            </AccordionItem>
          );
        })}
      </AccordionList>
    </Section>
  );
}

export default FAQ;
