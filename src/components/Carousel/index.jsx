import { useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: 24px 0;

  .slick-track {
    display: flex;
    align-items: center;
    will-change: transform;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center;
    outline: none;
    padding: 0 8px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 899px) {
    height: 200px;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

const images = import.meta.glob("/src/images/carousel/*.{webp,png,jpg,jpeg,svg}", {
  eager: true,
});
const imageArray = Object.values(images).map((img) => img.default);
const doubledImages = [...imageArray, ...imageArray];

function Carousel() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const offsetRef = useRef(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1.2 },
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      trackRef.current = document.querySelector(".slick-track");
      if (trackRef.current) startAnimation();
    }, 200);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const animate = () => {
    if (!trackRef.current) return;
    // Velocidade reduzida: 1.5px por frame (~70s para percorrer tudo)
    offsetRef.current -= 1.5;
    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;

    const trackWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(offsetRef.current) >= trackWidth) {
      offsetRef.current = 0;
      trackRef.current.style.transform = `translateX(0px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => cancelAnimationFrame(animationRef.current);

  return (
    <CarouselWrapper onMouseEnter={stopAnimation} onMouseLeave={startAnimation}>
      <Slider {...settings}>
        {doubledImages.map((image, index) => (
          <div key={index}>
            <ImageContainer>
              <ImageStyled src={image} alt={`Portfolio ${index + 1}`} loading="lazy" />
            </ImageContainer>
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

export default Carousel;
