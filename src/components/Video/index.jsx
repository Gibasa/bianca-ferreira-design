import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";


const VideoStyled = styled.video`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  margin-top: 0;
`;

function Video() {
  const { i18n } = useTranslation();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const language = i18n.language;
    const newVideoSrc = language.startsWith("pt")
      ? "./images/video-intro-bf.mp4"
      : "./images/video-intro-bf-en.mp4";

    setVideoSrc(newVideoSrc);
  }, [i18n.language]);

  return (
    <VideoStyled id="video" muted autoPlay loop playsInline key={videoSrc}>
      <source src={videoSrc} type="video/mp4" />
    </VideoStyled>
  );
}

export default Video;
