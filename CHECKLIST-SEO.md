# Checklist — SEO, performance e crescimento

Baseado na auditoria de 22/10/2026 em https://biancaferreiradesign.com/pt.
Marque `[x]` conforme cada item for concluído e publicado.

## 1. Meta tags e prévias de link (crítico) — feito, aguardando deploy
- [x] Trocar `react-helmet` (descontinuado, avisos no React 18) por `react-helmet-async`
- [x] Corrigir título duplicado ("… | Bianca Ferreira Design | Bianca Ferreira Design")
- [x] Gerar no build um HTML por rota com title, description, canonical, hreflang, Open Graph e JSON-LD já no `<head>` (prévia no WhatsApp/Instagram/LinkedIn e indexação imediata) — `scripts/vite-plugin-seo-pages.js` + regra no `.htaccess`
- [x] Imagem Open Graph 1200×630 leve (`public/images/og-image.jpg`, 78 KB, no lugar de `bia.png` de 756 KB e vertical)
- [x] `noindex` nas páginas de formulário
- [ ] Depois do deploy: testar a prévia em https://www.opengraph.xyz e no Facebook Sharing Debugger

## 2. Imagens pesadas (home baixava ~19,5 MB) — feito: agora ~1,6 MB
- [x] Carrossel: 29 PNGs → WebP 1000px (26,5 MB → 1,4 MB)
- [x] Cases: 43 PNGs → WebP 1600px (27,2 MB → 3,0 MB); vídeos Copartners (13,7 → 1,1 MB), 3P (9,9 → 2,1 MB) e Diva (1,8 → 0,45 MB); `poster` + `playsInline` nos vídeos
- [x] Foto do "Sobre" com `width`/`height` e `alt` (PT/EN)
- [x] Corrigido vídeo cortado no modal dos cases (bug anterior: blocos encolhiam com `max-height`)
- [x] `generate.js` aceita `.webp` para cases novos

## 3. Servidor (`.htaccess`) — feito
- [x] Domínio oficial `https://www.biancaferreiradesign.com`; sem-www redireciona 301
- [x] Forçar HTTPS (301)
- [x] 404 real para URLs inexistentes + página "não encontrada" (PT/EN, `noindex`)
- [x] URLs antigas sem idioma (`/cases`, `/politica-de-privacidade`, `/form`, `/form-en`) → 301 para `/pt/...`
- [x] `Cache-Control`: arquivos com hash 1 ano, imagens/vídeos 7 dias, HTML `no-cache`

## 4. SEO on-page — feito
- [x] Sitemap gerado no build (`/pt`, `/en`, `/pt/cases`, `/en/cases`, política) com hreflang; sem `/form`
- [x] "Ver mais cases", "Voltar" e logo como `<Link>`; menu com `href` reais
- [x] Botão PT | EN troca a URL (`/pt/...` ⇄ `/en/...`), não só o texto
- [x] `alt` descritivo no carrossel (PT/EN), logo e foto do Sobre
- [x] Link da política no aviso de cookies (aviso movido para dentro do Router)
- [x] Dados estruturados: e-mail `contato@biancaferreiradesign.com`, TikTok, sem telefone vazio *(telefone 71 mantido fora por enquanto — ela mora em Campinas, número é de Salvador)*
- [x] Favicon com `type="image/png"`
- [x] CTA do modal de case traduzido na versão EN

## 5. Medição e presença (sem código ou pouco código)
- [x] Corrigir pageview contado em dobro no GA4 (agora 1 por página, com título correto)
- [ ] Confirmar as duas contas de Google Ads — `AW-11495402064` está no `index.html`; `AW-11536947477` vem ligada à tag do GA4 (`G-BD8ZPNF0Q9`)
- [x] Consent Mode v2 ligado ao aviso de cookies (LGPD): botão "Recusar", texto com finalidade, política atualizada (Google Ads, e-mail oficial, "alterar preferências")
- [x] Google Search Console: propriedade de domínio já existia
- [ ] Reenviar `sitemap.xml` no Search Console (forçar nova leitura)
- [ ] Bing Webmaster Tools (pode importar do Search Console)
- [ ] Google Business Profile (Campinas)

## 6. Conteúdo para crescer
- [x] Página própria para cada case (`/pt/cases/copartners-bank` …): 12 páginas (6 × PT/EN), prévia JPG 1200×630, JSON-LD CreativeWork + Breadcrumb, "outros cases"; sitemap com 18 URLs
- [ ] Páginas de serviço (identidade visual, social media, sites) — precisa de texto novo aprovado pela Bia
- [x] Removida `src/pages/Servicos` (não era usada)

## 7. Limpeza de performance
- [ ] Remover Bootstrap (231 KB de CSS), MUI/Emotion, react-lottie e slick
- [ ] Carrossel com animação CSS em vez de loop JS
- [ ] Reduzir pesos da Open Sans / preconnect do Typekit
- [ ] Não publicar `public/images/Backup` (17 MB)
- [ ] CI: `npm ci` e `actions/checkout@v4`
