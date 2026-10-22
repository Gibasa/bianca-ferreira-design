import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

// Faixa infinita de imagens animada só com CSS (antes: react-slick + loop em JS).
// As imagens aparecem duas vezes e a faixa anda -50%, emendando sem salto.
// Medidas iguais às do slick: 3 por tela (>1200px), 2,5 (≤1200), 2 (≤900), 1,2 (≤600).
// Velocidade ~90px/s, como antes; a duração por faixa de largura mantém esse ritmo.

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: 24px 0;
  container-type: inline-size;

  --per-view: 3;
  --duration: 136s;

  @media (max-width: 1200px) {
    --per-view: 2.5;
    --duration: 140s;
  }

  @media (max-width: 900px) {
    --per-view: 2;
    --duration: 120s;
  }

  @media (max-width: 600px) {
    --per-view: 1.2;
    --duration: 100s;
  }
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${scroll} var(--duration) linear infinite;
  will-change: transform;

  ${CarouselWrapper}:hover & {
    animation-play-state: paused;
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: calc(100cqw / var(--per-view));
  padding: 0 8px;
`;

// inline-block como no slick: mantém a mesma altura da faixa
const SlideInner = styled.div`
  display: inline-block;
  width: 100%;
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

function Carousel() {
  const { t } = useTranslation();

  return (
    <CarouselWrapper data-carousel>
      <Track>
        {[0, 1].map((copy) =>
          imageArray.map((image, index) => (
            // a segunda cópia só emenda a animação: escondida de leitores de tela
            <Slide key={`${copy}-${index}`} aria-hidden={copy === 1 || undefined}>
              <SlideInner>
                <ImageContainer>
                  <ImageStyled
                    src={image}
                    alt={copy === 0 ? t("carousel.alt") : ""}
                    loading="lazy"
                  />
                </ImageContainer>
              </SlideInner>
            </Slide>
          ))
        )}
      </Track>
    </CarouselWrapper>
  );
}

export default Carousel;
