import styled from "styled-components";

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
  return (
    <PageWrapper>
      <h2>Política de Privacidade</h2>
      <Index>
        <h2>Índice</h2>
        <IndexItem href="#informacoes-coletadas">Informações que Coletamos</IndexItem>
        <IndexItem href="#uso-das-informacoes">Como Utilizamos as Informações</IndexItem>
        <IndexItem href="#compartilhamento-dados">Compartilhamento de Dados</IndexItem>
        <IndexItem href="#cookies">Cookies e Tecnologias de Rastreamento</IndexItem>
        <IndexItem href="#seguranca">Segurança das Informações</IndexItem>
        <IndexItem href="#seus-direitos">Seus Direitos</IndexItem>
        <IndexItem href="#contato">Como Entrar em Contato</IndexItem>
        <IndexItem href="#alteracoes">Alterações a Esta Política</IndexItem>
      </Index>

      <Section id="informacoes-coletadas">
        <Title>Informações que Coletamos</Title>
        <Paragraph>
          Coletamos dados automaticamente, como endereço IP, tipo de navegador e
          páginas visitadas, além de informações fornecidas voluntariamente
          através do formulário do Google.
        </Paragraph>
      </Section>

      <Section id="uso-das-informacoes">
        <Title>Como Utilizamos as Informações</Title>
        <Paragraph>
          Utilizamos suas informações para melhorar sua experiência no site,
          responder às solicitações enviadas e analisar dados de tráfego para
          fins estatísticos.
        </Paragraph>
      </Section>

      <Section id="compartilhamento-dados">
        <Title>Compartilhamento de Dados</Title>
        <Paragraph>
          Não compartilhamos informações pessoais com terceiros, exceto para o
          Google Analytics e Google Forms. Consulte as políticas do Google para
          mais informações.
        </Paragraph>
      </Section>

      <Section id="cookies">
        <Title>Cookies e Tecnologias de Rastreamento</Title>
        <Paragraph>
          Utilizamos cookies para melhorar a experiência no site e coletar dados
          de tráfego. Você pode desativar os cookies nas configurações do
          navegador.
        </Paragraph>
      </Section>

      <Section id="seguranca">
        <Title>Segurança das Informações</Title>
        <Paragraph>
          Adotamos medidas para proteger suas informações, mas nenhum método de
          transmissão eletrônica é completamente seguro.
        </Paragraph>
      </Section>

      <Section id="seus-direitos">
        <Title>Seus Direitos</Title>
        <Paragraph>
          Você tem direitos sobre seus dados pessoais, como solicitar acesso,
          correção ou exclusão. Entre em contato conosco para mais informações.
        </Paragraph>
      </Section>

      <Section id="contato">
        <Title>Como Entrar em Contato</Title>
        <Paragraph>
          Se você tiver dúvidas, envie um e-mail para
          <a href="mailto:biancafdesign@gmail.com"> biancafdesign@gmail.com</a>.
        </Paragraph>
      </Section>

      <Section id="alteracoes">
        <Title>Alterações a Esta Política</Title>
        <Paragraph>
          Podemos atualizar esta política periodicamente. Recomendamos que você
          revise esta página regularmente.
        </Paragraph>
      </Section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
