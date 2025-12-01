import { useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselStyled = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 8rem;
   @media (max-width: 899px) {
  margin-bottom: 3rem;
   }

  .slick-track {
    display: flex;
    align-items: center;
    will-change: transform;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center;
    outline: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
`;

const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const images = import.meta.glob("/src/images/carousel/*.{png,jpg,jpeg,svg}", {
  eager: true,
});
const imageArray = Object.values(images).map((img) => img.default);

// 🔥 DUPLICA PARA LOOP INFINITO REAL
const doubledImages = [...imageArray, ...imageArray];

function Carousel() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const offsetRef = useRef(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      trackRef.current = document.querySelector(".slick-track");
      if (trackRef.current) {
        startAnimation();
      }
    }, 200);
  }, []);

  const animate = () => {
    if (!trackRef.current) return;

    offsetRef.current -= 4;
    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;

    const trackWidth = trackRef.current.scrollWidth / 2;

    // 🔥 quando a metade (primeira lista) acaba → reset para loop perfeito
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

  const stopAnimation = () => {
    cancelAnimationFrame(animationRef.current);
  };

  return (
    <CarouselStyled
      onMouseEnter={stopAnimation}
      onMouseLeave={startAnimation}
    >
      <Slider {...settings}>
        {doubledImages.map((image, index) => (
          <div key={index}>
            <ImageContainer>
              <ImageStyled src={image} alt={`Slide ${index}`} />
            </ImageContainer>
          </div>
        ))}
      </Slider>
    </CarouselStyled>
  );
}

export default Carousel;
