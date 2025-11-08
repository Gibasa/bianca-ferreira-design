import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ServicesStyled = styled.section`
  display: flex;
  gap: 2rem;
  padding: 0 5vw;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 6vw;
  }
`;

const Service = styled.div`
  flex: 1;
  max-width: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.green};
  }
  &:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.red};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.2;

    @media (max-width: 1024px) {
       text-align: center;
    }
  }

  p {
    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

function Services() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <ServicesStyled>
      {services.map((service, index) => (
        <Service key={index}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </Service>
      ))}
    </ServicesStyled>
  );
}

export default Services;
