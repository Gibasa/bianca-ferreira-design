import styled from "styled-components";
import Video from "@/components/Video";
import BannerTop from "@/components/BannerTop";
import BannerMid from "@/components/BannerMid";
import Staff from "@/components/Staff";
import Portfolio from "../../components/Portfolio";

const HomeStyled = styled.section`
`;

function Home() {
  return (
    <HomeStyled id="home">
      <Video/>
      <BannerTop/>
      <Portfolio />
      <BannerMid/>
      <Staff/>
    </HomeStyled>
  );
}

export default Home;
