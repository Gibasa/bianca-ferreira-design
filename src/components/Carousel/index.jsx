import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselStyled = styled.div`
width: 100%;
overflow: hidden;
margin-top: 110px;
z-index: 1;
`;

const ImageContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
margin-top: 20px;
overflow: hidden;

`

const ImageStyled = styled.img`
max-width: 80%;
max-height: 100%;
object-fit: contain;
margin: auto;
`

const images = import.meta.glob('/src/images/projetos-slide/*.{png,jpg,jpeg,svg}', { eager: true });

// Converte as imagens em um array
const imageArray = Object.values(images).map((img) => img.default);

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <CarouselStyled>
      <Slider {...settings}>
      {imageArray.map((image, index) => (
          <ImageContainer key={index}>
            <ImageStyled
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </ImageContainer>
        ))}
      </Slider>
    </CarouselStyled>
  );
}

export default Carousel;
