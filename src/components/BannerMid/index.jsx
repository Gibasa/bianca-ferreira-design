import styled from "styled-components";
import Lottie from 'react-lottie';
import animationData from '../../assets/circle.json'; 

const BannerMidStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw;
  display: flex;
  justify-content: space-between;
  margin-top: -17px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    h2 {
      position: relative;
      text-align: justify;
      z-index: 2; 
      line-height: 3rem;
    }

    .highlight {
      position: relative;
      display: inline-block;

      .animation {
        position: absolute;
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%) scale(1.2); 
        z-index: 1;
        width: 16rem; 
        height: 7rem; 
        pointer-events: none;
      }
    }
  }

  .brandingSite {
    flex: 1;
    display: flex;
    gap: 100px;

    .branding,
    .site {
      display: flex;
      flex-direction: column;
    }
  }
`;

function BannerMid() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };

  return (
    <BannerMidStyled id="serviços">
      <div className="title">
        <h2>
          COMO PODEMOS<br/> FAZER A{" "}
          <span className="highlight">
            DIFERENÇA
            <div className="animation">
              <Lottie options={defaultOptions} />
            </div>
          </span>{" "}<br/>
          NA SUA MARCA.
        </h2>
      </div>
      <div className="brandingSite">
        <div className="branding">
          <h2>BRANDING</h2>
          <p>Identidade Visual</p>
          <p>
            Design de papelaria <br />
            e apresentações
          </p>
          <p>
            Design de social
            <br /> media para instagram
          </p>
        </div>
        <div className="site">
          <h2>SITE</h2>
          <p>Institucional</p>
          <p>Landing page</p>
        </div>
      </div>
    </BannerMidStyled>
  );
}

export default BannerMid;