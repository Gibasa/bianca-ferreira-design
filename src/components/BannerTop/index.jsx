import { useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BannerTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 8vw 5vw 8rem;
  margin-top: 5vw;
  @media (max-width: 899px) {
    padding-bottom: 4rem;
  }
`;
const TextContainer = styled.div`
  display: flex;
  @media (max-width: 899px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 80%;
    margin-top: 5vw;
  }
`;

const Title = styled.h1`
  width: 100%;
  display: block;
  line-height: 1;
  text-align: left;
  white-space: pre-wrap;
  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 0;
  }
`;

const ParagraphsContainer = styled.div`
  flex: 1;
  width: 50%;
  text-align: left;
  white-space: pre-wrap;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

function BannerTop() {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  return (
    <BannerTopContainer ref={sectionRef}>
      <TextContainer>
        <TitleContainer>
          <Title>
            {t("bannerTop.title.part1")} <br />
            {t("bannerTop.title.part2")}
          </Title>
        </TitleContainer>
        <ParagraphsContainer>
          <p>{t("bannerTop.description.part1")}</p>
          <p>{t("bannerTop.description.part2")}</p>
          <p>{t("bannerTop.description.part3")}</p>
        </ParagraphsContainer>
      </TextContainer>
    </BannerTopContainer>
  );
}

export default BannerTop;
