import styled from "styled-components";
import Carousel from "@/components/Carousel";

const HomeStyled = styled.section`
`;

function Home() {
  return (
    <HomeStyled id="home">
      <Carousel />
    </HomeStyled>
  );
}

export default Home;
