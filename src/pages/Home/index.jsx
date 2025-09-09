import styled from "styled-components";
// import Video from "@/components/Video";
import BannerTop from "@/components/BannerTop";
// import BannerMid from "@/components/BannerMid";
// import Staff from "@/components/Staff";
import Portfolio from "../../components/Portfolio";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  margin: 4vw 0;
  font-size: 1.8rem;
  width: 28vw;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: 600px) {
    margin: 5vw 0;
    width: 80vw;
  }
`;

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <HomeStyled id="home">
      {/* <Video/> */}
      <BannerTop />
      {/* <BannerMid/> */}
      <Portfolio />
      <StyledButton
        onClick={() => navigate(i18n.language === "en" ? "/form-en" : "/form")}
      >
        {t("bannerTop.button")}
      </StyledButton>
      {/* <Staff/> */}
    </HomeStyled>
  );
}

export default Home;
