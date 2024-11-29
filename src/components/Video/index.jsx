import styled from "styled-components";

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
  return (
    <VideoStyled id="video" muted autoPlay loop playsInline>
      <source src={`./images/video-intro-bf.mp4`} type="video/mp4" />
    </VideoStyled>
  );
}

export default Video;
