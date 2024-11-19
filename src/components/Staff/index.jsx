import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/circle.json";

const StaffStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw;
  .title,
  .portraits {
    flex: 1;
  }
  .portraits {
    display: flex;
    gap: 150px;
    img {
      width: 20vw;
    }
  }
  .title h2 {
    .highlight {
      position: relative;
      display: inline-block;

      .animation {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 1;
        width: 6rem;
        height: 5rem;
        pointer-events: none;
      }
    }
  }
`;

function Staff() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };
  return (
    <StaffStyled>
      <div className="title">
        <h2>
          QUEM{" "}
          <span className="highlight">
            FAZ
            <div className="animation">
              <Lottie options={defaultOptions} />
            </div>
          </span>
          <br /> ACONTECER.
        </h2>
      </div>
      <div className="portraits">
        <img src="/images/bia.png" alt="Bianca Portrait" />
        <img src="/images/giba.png" alt="Gilberto Portrait" />
      </div>
    </StaffStyled>
  );
}

export default Staff;
