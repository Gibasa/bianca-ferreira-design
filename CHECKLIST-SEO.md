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

## 3. Servidor (`.htaccess`)
- [ ] Escolher domínio oficial (com ou sem `www`) e redirecionar 301 o outro
- [ ] Forçar HTTPS (http responde 200 hoje)
- [ ] Retornar 404 real para URLs inexistentes (hoje tudo responde 200)
- [ ] `Cache-Control` longo para `/assets/*` (arquivos com hash)

## 4. SEO on-page
- [ ] Sitemap atualizado (`/pt`, `/en`, `/pt/cases`, `/en/cases`, política) com hreflang; tirar `/form`
- [ ] Menu e "ver todos os cases" como `<a href>` / `<Link>` em vez de `<button>`
- [ ] `alt` descritivo no carrossel, logo e foto do Sobre
- [ ] Corrigir link da política no aviso de cookies (`#/politica-de-privacidade`)
- [ ] Dados estruturados: unificar e-mail (gmail × contato@), incluir TikTok, remover telefone vazio *(telefone 71 mantido por enquanto — ela mora em Campinas, número é de Salvador)*
- [ ] Favicon com `type="image/png"`
- [ ] CTA do modal de case traduzido na versão EN

## 5. Medição e presença (sem código ou pouco código)
- [ ] Corrigir pageview contado em dobro no GA4
- [ ] Confirmar as duas contas de Google Ads (AW-11495402064 e AW-11536947477)
- [ ] Consent Mode v2 ligado ao aviso de cookies (LGPD)
- [ ] Google Search Console + Bing Webmaster Tools, enviar sitemap
- [ ] Google Business Profile (Campinas)

## 6. Conteúdo para crescer
- [ ] Página própria para cada case (`/pt/cases/copartners-bank` …)
- [ ] Páginas de serviço (identidade visual, social media, sites)
- [ ] Rotear ou remover `src/pages/Servicos` (existe mas não tem rota)

## 7. Limpeza de performance
- [ ] Remover Bootstrap (231 KB de CSS), MUI/Emotion, react-lottie e slick
- [ ] Carrossel com animação CSS em vez de loop JS
- [ ] Reduzir pesos da Open Sans / preconnect do Typekit
- [ ] Não publicar `public/images/Backup` (17 MB)
- [ ] CI: `npm ci` e `actions/checkout@v4`
