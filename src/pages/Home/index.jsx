import styled from "styled-components";
import Carousel from "@/components/Carousel";
import Video from "@/components/Video";
import BannerTop from "@/components/BannerTop";
import BannerMid from "@/components/BannerMid";
import Staff from "@/components/Staff";

const HomeStyled = styled.section`
`;

function Home() {
  return (
    <HomeStyled id="home">
      <Video/>
      <BannerTop/>
      <Carousel />
      <BannerMid/>
      <Staff/>
    </HomeStyled>
  );
}

export default Home;
