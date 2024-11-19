import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 8vw 5vw 4vw;
`;

function Footer() {
  return (
    <FooterStyled id="contato">
      <div className="title">
        <h2>
          VAMOS CRIAR <br />
          JUNTOS?
        </h2>
      </div>
      <div className="contact">
        <p>contato@biancaferreiradesign.com</p>
        <p>@biancaferreiradesign</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
