import styled from "styled-components";
import { useTranslation } from "react-i18next";

const PageWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 120px auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Index = styled.div`
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
`;

const IndexItem = styled.a`
  display: block;
  margin: 5px 0;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #333;
  margin-top: 40px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #555;
`;

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <h2>{t("privacyPolicy.title")}</h2>
      <Index>
        <h2>{t("privacyPolicy.index.title")}</h2>
        <IndexItem href="#informacoes-coletadas">
          {t("privacyPolicy.index.items.1")}
        </IndexItem>
        <IndexItem href="#uso-das-informacoes">
          {t("privacyPolicy.index.items.2")}
        </IndexItem>
        <IndexItem href="#compartilhamento-dados">
          {t("privacyPolicy.index.items.3")}
        </IndexItem>
        <IndexItem href="#cookies">
          {t("privacyPolicy.index.items.4")}
        </IndexItem>
        <IndexItem href="#seguranca">
          {t("privacyPolicy.index.items.5")}
        </IndexItem>
        <IndexItem href="#seus-direitos">
          {t("privacyPolicy.index.items.6")}
        </IndexItem>
        <IndexItem href="#contato">
          {t("privacyPolicy.index.items.7")}
        </IndexItem>
        <IndexItem href="#alteracoes">
          {t("privacyPolicy.index.items.8")}
        </IndexItem>
      </Index>

      <Section id="informacoes-coletadas">
        <Title>{t("privacyPolicy.sections.informacoesColetadas.title")}</Title>
        <Paragraph>
          {t("privacyPolicy.sections.informacoesColetadas.text")}
        </Paragraph>
      </Section>

      <Section id="uso-das-informacoes">
        <Title>{t("privacyPolicy.sections.usoDasInformacoes.title")}</Title>
        <Paragraph>
          {t("privacyPolicy.sections.usoDasInformacoes.text")}
        </Paragraph>
      </Section>

      <Section id="compartilhamento-dados">
        <Title>{t("privacyPolicy.sections.compartilhamentoDados.title")}</Title>
        <Paragraph>
          {t("privacyPolicy.sections.compartilhamentoDados.text")}
        </Paragraph>
      </Section>

      <Section id="cookies">
        <Title>{t("privacyPolicy.sections.cookies.title")}</Title>
        <Paragraph>{t("privacyPolicy.sections.cookies.text")}</Paragraph>
      </Section>

      <Section id="seguranca">
        <Title>{t("privacyPolicy.sections.seguranca.title")}</Title>
        <Paragraph>{t("privacyPolicy.sections.seguranca.text")}</Paragraph>
      </Section>

      <Section id="seus-direitos">
        <Title>{t("privacyPolicy.sections.seusDireitos.title")}</Title>
        <Paragraph>{t("privacyPolicy.sections.seusDireitos.text")}</Paragraph>
      </Section>

      <Section id="contato">
        <Title>{t("privacyPolicy.sections.contato.title")}</Title>
        <Paragraph>
        {t("privacyPolicy.sections.contato.text")}
          <a href="mailto:biancafdesign@gmail.com">
          {t("privacyPolicy.sections.contato.email")}
          </a>
        </Paragraph>
      </Section>

      <Section id="alteracoes">
        <Title>{t("privacyPolicy.sections.alteracoes.title")}</Title>
        <Paragraph>{t("privacyPolicy.sections.alteracoes.text")}</Paragraph>
      </Section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
