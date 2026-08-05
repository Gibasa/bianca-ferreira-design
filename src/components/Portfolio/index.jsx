import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircle } from "react-icons/io";
import Lottie from "react-lottie";
import styled from "styled-components";
import loadingAnimation from "../../assets/loading.json";
import portfolioData from "/src/assets/portfolio.json";

const WA_NUMBER = "5571993703427";
const openWA = (msg) =>
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

/* ── Grid container ─────────────────────────────────────────── */
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 5vw;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CoverImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  cursor: pointer;
  border-radius: 12px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GroupName = styled.h3`
  font-size: 1rem;
`;

const ViewMoreBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover { text-decoration: underline; }
`;

/* ── Modal ──────────────────────────────────────────────────── */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 20px;
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px 32px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  @media (max-width: 600px) {
    padding: 32px 20px 24px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #666;
  font-size: 28px;
  line-height: 1;
  display: flex;

  &:hover { color: #000; background: none; }
`;

const ModalTitle = styled.h2`
  font-size: clamp(1.4rem, 3vw, 2rem);
  text-transform: uppercase;
`;

const VideoWrap = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  min-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
`;

const ModalVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  display: ${({ $loaded }) => ($loaded ? "block" : "none")};
`;

const LottieWrap = styled.div`
  position: absolute;
  display: ${({ $loaded }) => ($loaded ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;

const ParagraphsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Para = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.grey || "#6B6B6B"};
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const GalleryImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ModalCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 8px;
  border-top: 1px solid #eee;
`;

const CtaText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey || "#6B6B6B"};
  text-align: center;
`;

const WaBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 60px;
  border: none;
  cursor: pointer;

  &:hover { background: #1ebe5d; }

  svg { width: 18px; height: 18px; }
`;

/* ── Modal component ────────────────────────────────────────── */
const Modal = ({ groupData, onClose }) => {
  const { i18n } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  if (!groupData) return null;

  const { group, text, text_en, video, images } = groupData;
  const paragraphs = i18n.language === "en" ? text_en : text;
  const otherImages = Object.entries(images)
    .filter(([key]) => key !== "cover")
    .map(([, v]) => v);

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <IoIosCloseCircle />
        </CloseBtn>

        <ModalTitle>{group}</ModalTitle>

        {video && (
          <VideoWrap>
            <LottieWrap $loaded={loaded}>
              <Lottie
                options={{ animationData: loadingAnimation, loop: true, autoplay: true }}
                height={120}
                width={120}
              />
            </LottieWrap>
            <ModalVideo
              src={video}
              autoPlay
              loop
              muted
              $loaded={loaded}
              onLoadedData={() => setLoaded(true)}
            />
          </VideoWrap>
        )}

        <ParagraphsWrap>
          {paragraphs.map((p, i) => (
            <Para key={i}>{p}</Para>
          ))}
        </ParagraphsWrap>

        <Gallery>
          {otherImages.map((img, i) => (
            <GalleryImg key={i} src={img} alt={`${group} ${i + 1}`} loading="lazy" />
          ))}
        </Gallery>

        <ModalCta>
          <CtaText>Gostou desse projeto? Vamos criar algo assim para sua marca.</CtaText>
          <WaBtn
            onClick={() =>
              openWA(`Olá Bia! Vi o case ${group} e quero transformar minha marca.`)
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
            </svg>
            Quero algo assim
          </WaBtn>
        </ModalCta>
      </ModalBox>
    </Overlay>
  );
};

Modal.propTypes = {
  groupData: PropTypes.shape({
    group: PropTypes.string.isRequired,
    text: PropTypes.array,
    text_en: PropTypes.array,
    video: PropTypes.string,
    images: PropTypes.object.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

/* ── Portfolio component ────────────────────────────────────── */
const Portfolio = ({ limit }) => {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const data = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <>
      <Container id="projetos">
        {data.map((item, i) => (
          <PortfolioItem key={i}>
            <CoverImage
              src={item.images.cover}
              alt={`${item.group} Cover`}
              loading="lazy"
              onClick={() => setSelected(item)}
            />
            <TitleRow>
              <GroupName>{item.group}</GroupName>
              <ViewMoreBtn onClick={() => setSelected(item)}>
                {t("portfolio.viewMore")} →
              </ViewMoreBtn>
            </TitleRow>
          </PortfolioItem>
        ))}
      </Container>

      {selected && <Modal groupData={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

Portfolio.propTypes = {
  limit: PropTypes.number,
};

export default Portfolio;
