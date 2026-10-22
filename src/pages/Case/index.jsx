import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { caseMeta, caseOgImage, caseParagraphs, caseSlug } from "@/seo/cases";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import portfolioData from "/src/assets/portfolio.json";

const WA_NUMBER = "5571993703427";
const openWA = (msg) =>
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

const PageWrapper = styled.main`
  width: 100%;
  padding-top: 120px;
`;

const Header = styled.div`
  padding: 48px 5vw 40px;
`;

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  &:hover { text-decoration: underline; }
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    flex-shrink: 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
`;

const Content = styled.article`
  padding: 0 5vw 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 14px;
  background: #f0f0f0;
`;

const Paragraphs = styled.div`
  max-width: 760px;
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Para = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.grey};
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 14px;
`;

const Cta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 24px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.offwhite};
  text-align: center;
`;

const CtaText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.ink};
`;

const WaBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 60px;
  border: none;
  cursor: pointer;

  &:hover { background: #1ebe5d; }

  svg { width: 18px; height: 18px; }
`;

const OthersSection = styled.section`
  padding-bottom: 80px;
`;

const OthersHead = styled.div`
  padding: 0 5vw;
  margin-bottom: 32px;
`;

const OthersTitle = styled.h2`
  font-size: clamp(1.6rem, 2.6vw, 2.4rem);
`;

function Case() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "pt";
  const item = portfolioData.find((c) => caseSlug(c.group) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) return <NotFound />;

  const meta = caseMeta(item, lang);
  const gallery = Object.entries(item.images)
    .filter(([key]) => key !== "cover")
    .map(([, src]) => src);

  return (
    <PageWrapper>
      <SEO
        title={meta.title}
        description={meta.description}
        image={caseOgImage(item)}
        jsonLd={meta.jsonLd}
        type="article"
      />

      <Header>
        <BackLink to={`/${lang}/cases`}>← {t("portfolio.casePage.back")}</BackLink>
        <Eyebrow>{t("portfolio.casePage.eyebrow")}</Eyebrow>
        <Title>{item.group}</Title>
      </Header>

      <Content>
        {item.video && (
          <Video
            src={item.video}
            poster={item.images.cover}
            width={1600}
            height={900}
            autoPlay
            loop
            muted
            playsInline
          />
        )}

        <Paragraphs>
          {caseParagraphs(item, lang).map((p, i) => (
            <Para key={i}>{p}</Para>
          ))}
        </Paragraphs>

        <Gallery>
          {gallery.map((src, i) => (
            <GalleryImg
              key={src}
              src={src}
              alt={`${item.group} — ${t("portfolio.casePage.imageAlt")} ${i + 1}`}
              width={1600}
              height={900}
              loading="lazy"
            />
          ))}
        </Gallery>

        <Cta>
          <CtaText>{t("portfolio.modalCta.text")}</CtaText>
          <WaBtn onClick={() => openWA(t("portfolio.modalCta.whatsapp", { group: item.group }))}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
            </svg>
            {t("portfolio.modalCta.button")}
          </WaBtn>
        </Cta>
      </Content>

      <OthersSection>
        <OthersHead>
          <Eyebrow>{t("portfolio.casePage.othersEyebrow")}</Eyebrow>
          <OthersTitle>{t("portfolio.casePage.othersTitle")}</OthersTitle>
        </OthersHead>
        <Portfolio limit={2} exclude={item.group} />
      </OthersSection>
    </PageWrapper>
  );
}

export default Case;
