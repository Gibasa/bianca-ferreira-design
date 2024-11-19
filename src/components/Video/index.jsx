import styled from "styled-components";

const VideoStyled = styled.video`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  margin-top: 100px;
`;

function Video() {
  return (
    <VideoStyled muted autoPlay loop playsInline>
      <source src={`./images/video-intro.mp4`} type="video/mp4" />
    </VideoStyled>
  );
}

export default Video;
