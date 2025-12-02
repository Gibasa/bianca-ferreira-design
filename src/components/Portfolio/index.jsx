import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import portfolioData from "/src/assets/portfolio.json";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import loadingAnimation from "../../assets/loading.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0vw 5vw;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding-top: 2vw;
`;

const PortfolioItem = styled.div`
  width: calc(50% - 20px);
  margin: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  max-width: 100%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const GroupName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const ViewMore = styled.a`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 90vw;
  height: 90vh;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
`;

const ModalHeader = styled.h2`
  text-transform: capitalize;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 15px;
  width: 90%;
`;

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  flex-shrink: 0;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 8px;
  display: ${({ isVideoLoaded }) => (isVideoLoaded ? "block" : "none")};
`;

const LottieWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isVideoLoaded }) => (isVideoLoaded ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 90%;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

const Modal = ({ groupData, onClose }) => {
  const { t, i18n } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  if (!groupData) return null;

  const { group, text, text_en, video, images } = groupData;
  const paragraphs = i18n.language === "en" ? text_en : text;

  const otherImages = Object.entries(images)
    .filter(([key]) => key !== "cover")
    .map(([, value]) => value);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoIosCloseCircle />
        </CloseButton>
        <ModalHeader>{t(group)}</ModalHeader>
        {video && (
          <VideoContainer>
            <LottieWrapper isVideoLoaded={isVideoLoaded}>
              <Lottie
                options={{
                  animationData: loadingAnimation,
                  loop: true,
                  autoplay: true,
                }}
                height={200}
                width={200}
              />
            </LottieWrapper>
            <Video
              src={video}
              autoPlay
              loop
              muted
              isVideoLoaded={isVideoLoaded}
              onLoadedData={() => setIsVideoLoaded(true)}
            />
          </VideoContainer>
        )}
        <ParagraphContainer>
          {paragraphs.map((para, index) => (
            <Paragraph key={index}>{para}</Paragraph>
          ))}
        </ParagraphContainer>        
        {otherImages.map((img, index) => (
          <ModalImage key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  groupData: PropTypes.shape({
    group: PropTypes.string.isRequired,
    text: PropTypes.objectOf(PropTypes.string),
    text_en: PropTypes.objectOf(PropTypes.string),
    video: PropTypes.string,
    images: PropTypes.shape({
      cover: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

const Portfolio = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { t } = useTranslation();

  const openModal = (groupData) => setSelectedGroup(groupData);
  const closeModal = () => setSelectedGroup(null);

  return (
    <Container id="projetos">
      {portfolioData.map((data, index) => (
        <PortfolioItem key={index}>
          <CoverImage
            src={data.images.cover}
            alt={`${data.group} Cover`}
            onClick={() => openModal(data)}
          />
          <TitleContainer>
            <GroupName>{data.group}</GroupName>
            <ViewMore onClick={() => openModal(data)}>
              {t("portfolio.viewMore")} <FaArrowCircleRight className="arrow" />
            </ViewMore>
          </TitleContainer>
        </PortfolioItem>
      ))}

      {selectedGroup && (
        <Modal groupData={selectedGroup} onClose={closeModal} />
      )}
    </Container>
  );
};

export default Portfolio;
