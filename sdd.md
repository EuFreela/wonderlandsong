# SDD — Wonderland Song Parallax Portfolio

**Metodologia:** SDD — **Spec-Driven Development** (desenvolvimento orientado por especificação)  
**Versão do produto:** `0.0.3` (alinhada a `package.json` / tag `v0.0.3`)  
**Status da spec:** viva (atualizado em 2026-07-22)  
**Repositório:** `wonderlandsong2`  
**Fase atual:** front-end rico com dados locais tipados (sem backend)  
**Publicação:** em deploy (sem domínio `.com` próprio; URL pública via hospedagem / `VITE_SITE_URL`)

Este arquivo é a **especificação viva** do produto no fluxo Spec-Driven Development. Ele descreve a visão, o que já foi implementado e o que permanece em backlog. O código deve seguir a spec; mudanças de escopo atualizam a spec junto.

### Histórico de versões (produto)

| Versão | Data | Destaque |
| --- | --- | --- |
| **0.0.3** | 2026-07-22 | **Heretic's Fork** + **AEVUM** na home; álbum *Levels of Consciousness* (demo, letra, clip YouTube); textos de projeto/álbum mais concretos; justificação tipográfica; scroll-to-top global |
| **0.0.2** | 2026-07-19 | **Resonance** na home + detalhe + álbum *Echoes of Redemption* (14 faixas EN/PT, preview `.webm`, clip YouTube); separação de conteúdo projeto vs. álbum; Lighthouse mobile 98 / desktop 100 (performance) |
| 0.0.1 | — | Tag anterior no repositório |
| 0.0.0 | — | Scaffold / baseline |

---

## 1. Identificação do projeto

| Campo | Valor |
| --- | --- |
| **Nome** | Wonderland Song |
| **Tipo** | Site musical, artístico e portfólio narrativo |
| **Referência estrutural** | POFO Portfolio Parallax (ideia de layout, não cópia) |
| **Stack principal** | React 18, TypeScript, Vite 5, Tailwind CSS 3, React Router 6, React Helmet Async |
| **Idioma** | Português (pt-BR) |
| **Possibilidade futura** | Português e inglês |
| **URL pública (SEO)** | URL do **deploy** (definir com `VITE_SITE_URL` no build). Não há domínio `.com` próprio documentado. |

---

## 2. Visão do produto

Criar um site artístico para a Wonderland Song baseado no conceito visual de um portfólio parallax em tela cheia.

A home apresenta os projetos musicais como grandes cenas verticais. Cada projeto ocupa grande parte da viewport e inclui:

* imagem (ou vídeo) de fundo em grande escala;
* conteúdo textual sobreposto (categoria, título, mensagem opcional);
* botões de ação (abrir projeto, Spotify, YouTube);
* movimento de profundidade durante a rolagem (efeito “janela” com mídia fixa);
* transição suave para o próximo painel.

O site **não copia** o POFO. Reproduz apenas a lógica geral:

* menu discreto;
* projetos em painéis verticais;
* grandes imagens;
* tipografia sobreposta;
* navegação por rolagem;
* efeito parallax;
* páginas individuais de projeto e de álbum;
* rodapé minimalista.

A identidade visual, o conteúdo, os textos e as imagens pertencem à Wonderland Song.

---

## 3. Regra sobre os arquivos do POFO

Os arquivos visuais e o código-fonte do template POFO somente poderão ser utilizados quando o proprietário do projeto possuir uma licença válida do produto.

### 3.1 Quando houver licença

Se os arquivos licenciados forem colocados no repositório, é permitido:

* analisar a estrutura;
* reutilizar imagens permitidas pela licença;
* converter o layout para React / Tailwind;
* substituir jQuery e Bootstrap;
* documentar quais arquivos vieram do pacote licenciado.

### 3.2 Quando não houver licença (estado atual)

* não baixar imagens da demonstração pública;
* não copiar HTML, CSS ou JavaScript da demo;
* não fazer hotlink das imagens;
* usar imagens próprias da Wonderland Song;
* reproduzir apenas a ideia geral do layout;
* manter implementação original.

### 3.3 Pasta para arquivos licenciados

```text
reference/
└── pofo-licensed/
```

Essa pasta não deve ser publicada no site. Serve apenas como referência de desenvolvimento. **No repositório atual ela não existe.**

---

## 4. Objetivo principal

Apresentar a Wonderland Song como um universo musical composto por vários projetos artísticos.

A home funciona como uma galeria vertical e cinematográfica. Cada rolagem revela um projeto diferente.

O visitante deve perceber: profundidade, movimento, continuidade, elegância, mistério, identidade musical e transição entre universos.

---

## 5. Objetivos específicos

| Objetivo | Status |
| --- | --- |
| Home parallax em painéis de tela cheia | **Feito** |
| Exibir projetos / selos artísticos | **Feito** (10 painéis, incl. Heretic's Fork e AEVUM) |
| Páginas individuais de projeto (história + discografia) | **Feito** |
| Páginas de álbum (faixas, letras, clips, easter eggs, preview de vídeo) | **Feito** |
| Integração Spotify e YouTube | **Feito** (links + ícones + galeria de clips) |
| Menu responsivo + menu mobile overlay | **Feito** |
| Parallax adaptado a mobile | **Feito** |
| Reduced motion | **Feito** (vídeo desligado; parallax mobile desligado) |
| SEO (title, OG, Twitter, canonical, JSON-LD, sitemap, robots) | **Feito** |
| Lazy loading de rotas + code splitting | **Feito** |
| Página “em construção” para rotas inexistentes | **Feito** |
| Botão scroll-to-top | **Feito** |
| Letras e explicações em modal por faixa | **Feito** (BLM, AGM, HS, USS, RNH, Resonance / Echoes) |
| Separação editorial: projeto = origem/geral; álbum = conceito/faixas | **Feito** (ex.: Resonance vs. Echoes of Redemption) |
| Página dedicada de artistas (`/artists`) | **Pendente** |
| Página de lançamentos agregada (`/releases`) | **Pendente** |
| Página de vídeos agregada (`/videos`) | **Pendente** |
| Hero intro separado da sequência de projetos | **Não feito** (1º painel = selo Wonderland Song) |
| Seção de artistas na home | **Não feito** (dados placeholder ainda existem em `content.ts`) |
| API Node.js / CMS | **Futuro** |
| i18n (PT/EN) | **Futuro** |
| Playwright e2e | **Não configurado** (apenas Vitest) |

---

## 6. Stack tecnológica

### 6.1 Front-end (implementado)

| Tecnologia | Uso |
| --- | --- |
| React 18 | UI |
| TypeScript | Tipagem estrita (sem `any`) |
| Vite 5 | Build e dev server |
| Tailwind CSS 3 | Estilos utilitários |
| React Router 6 | Rotas SPA |
| React Helmet Async | SEO / head tags |
| Ícones SVG locais | `src/components/ui/Icons.tsx`, `SpotifyIcon`, `YouTubeIcon` |
| Zod | Dependência presente; validação de API ainda não é o foco |
| Vitest + Testing Library + jsdom | Testes unitários/integração de rotas |
| Lighthouse (CLI) | Auditoria performance / a11y / BP / SEO |

**Scripts npm:** `dev`, `build`, `preview`, `lighthouse:serve`, `lighthouse:mobile`, `lighthouse:desktop`, `lint`, `typecheck`, `test`.

> **Nota:** Framer Motion e Lucide React **não** estão mais no `package.json`. Menu e reduced motion usam CSS/hooks próprios (`usePrefersReducedMotion`).

### 6.2 Parallax e animação (decisão de implementação)

Implementação **híbrida**, otimizada para performance:

* **Desktop:** CSS `position: fixed` + `clip` na mídia do painel (sem JS no scroll).
* **Mobile (≤900px):** loop `requestAnimationFrame` compartilhado (`useMobileParallax`) com `translate3d` em inteiros para simular o mesmo efeito de “janela”.
* **Reduced motion:** não usa vídeo de fundo; desliga o parallax mobile; vídeo de preview de álbum também é omitido (`usePrefersReducedMotion`).
* Menu mobile: overlay CSS + portal (sem Framer Motion).
* Não usa jQuery, Bootstrap, scroll hijacking nem timers para posição de scroll.

Hooks relacionados:

* `src/hooks/useMobileParallax.ts` — parallax mobile compartilhado;
* `src/hooks/useParallaxFixedMedia.ts` — utilitário de mídia fixa (API disponível);
* `src/hooks/useActivePanelTone.ts` — contraste do header conforme o painel ativo;
* `src/hooks/usePrefersReducedMotion.ts` — preferência de movimento reduzido;
* `src/utils/luminance.ts` — detecção de tom claro/escuro da imagem.

### 6.3 Back-end (futuro)

Planejado, **não implementado**:

* Node.js + TypeScript;
* Fastify;
* Prisma + PostgreSQL;
* Zod;
* Pino.

Na fase atual, **todos os dados vêm de arquivos TypeScript locais** em `src/data/`.

---

## 7. Estrutura real do repositório

```text
wonderlandsong2/
├── public/
│   ├── images/
│   │   ├── albums/          # capas WebP (incl. Ressonance.webp)
│   │   ├── *.webp           # artes dos painéis da home
│   │   └── bunnyatwork.webp # fallback “em construção”
│   ├── videos/
│   │   ├── wonderland2.webm           # hero/selo (painel 1)
│   │   └── ressonance-preview.webm    # preview do álbum Echoes of Redemption
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── NavigationLoading.tsx
│   │   │   ├── PageLoading.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── ScrollToTopOnNavigate.tsx
│   │   ├── parallax/
│   │   │   └── ParallaxProjectPanel.tsx
│   │   ├── project/
│   │   │   ├── AlbumClipsGallery.tsx
│   │   │   ├── AlbumCoverModal.tsx
│   │   │   ├── EasterEggsModal.tsx
│   │   │   └── TrackLyricsModal.tsx
│   │   ├── seo/
│   │   │   └── Seo.tsx
│   │   └── ui/
│   │       ├── Icons.tsx
│   │       ├── SpotifyIcon.tsx
│   │       └── YouTubeIcon.tsx
│   ├── config/
│   │   └── site.ts            # SITE_URL, nome, description, absoluteUrl()
│   ├── data/
│   │   ├── home-projects.ts   # painéis da home (sem import de lyrics)
│   │   ├── content.ts         # ProjectDetail, álbuns, registries, helpers
│   │   ├── site-routes.ts     # paths públicos (sitemap/SEO)
│   │   ├── agm-lyrics.ts
│   │   ├── blm-chapter1-lyrics.ts … blm-chapter4-lyrics.ts
│   │   ├── helena-son-lyrics.ts
│   │   ├── resonance-lyrics.ts
│   │   └── uss-1937-lyrics.ts
│   ├── hooks/
│   │   ├── useActivePanelTone.ts
│   │   ├── useMobileParallax.ts
│   │   ├── useParallaxFixedMedia.ts
│   │   └── usePrefersReducedMotion.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProjectDetailPage.tsx   # layout compartilhado + rota
│   │   ├── BunnyAlbumPage.tsx      # página de álbum genérica
│   │   ├── BunnyLandMusicPage.tsx  # @deprecated (compat)
│   │   └── ComingSoonPage.tsx
│   ├── styles/
│   │   └── index.css               # tokens + CSS do parallax
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── luminance.ts
│   ├── test/
│   │   └── setup.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   └── main.tsx
│
├── lighthouse-mobile.json   # última auditoria mobile
├── lighthouse-desktop.json  # última auditoria desktop
├── dist/                    # build de produção
├── package.json             # version 0.0.3
├── vite.config.ts           # manualChunks (react-vendor, content, helmet…)
├── vitest.config.ts
├── tailwind.config.js
├── eslint.config.js
├── sdd.md                   # este documento
└── README.md
```

---

## 8. Arquitetura da home (como está)

```text
Header (fixo, contraste dinâmico, menu desktop + mobile)
Painel 1 — Wonderland Song (selo + vídeo + YouTube)
Painel 2 — Bunny Land Music
Painel 3 — Rosa Negra de Halfeti
Painel 4 — A Grande Multidão
Painel 5 — Helena Son
Painel 6 — USS Shenandoah
Painel 7 — Lameck & Southern Birds Band
Painel 8 — Resonance
Footer minimalista (“Wonderland Song” + tagline)
ScrollToTop
```

**Observação de produto:** a home **não** tem seções separadas de Hero, Artistas, Vídeos, Sobre e Contato como no storyboard original. O primeiro painel cumpre o papel de apresentação do selo; as demais seções permanecem em backlog ou como páginas internas.

---

## 9. Header

### 9.1 Implementado

* fixo e transparente sobre os painéis;
* contraste dinâmico (`light` / `dark`) via `useActivePanelTone` + `headerTone` opcional no projeto;
* navegação desktop por âncoras dos painéis: Selo, BLM, RNH, AGM, HS, USSS, LSBB, Resonance;
* menu mobile em tela cheia (portal + fundo sólido legível);
* fechamento com `Escape`, clique no backdrop e botão fechar;
* `body` scroll lock com menu aberto.

### 9.2 Ainda não na home (backlog de navegação global)

Itens do SDD original ainda não existem como seções/rotas de menu: Artistas, Lançamentos, Vídeos, Sobre, Contato (o footer tem `id="contact"` mas sem formulário).

---

## 10. Painéis parallax

### 10.1 Componente

```text
ParallaxProjectPanel
```

Arquivo: `src/components/parallax/ParallaxProjectPanel.tsx`

### 10.2 Modelo de dados do painel (`Project`)

```ts
export type Project = {
  id: string;
  category: string;
  title: string;
  image: string;
  imagePosition?: string;
  imagePositionMobile?: string;
  video?: string;
  filterColor?: string;
  filterOpacity?: number;
  headerTone?: 'light' | 'dark';
  href: string;
  buttonLabel?: string;
  message?: string;
  spotifyUrl?: string;
  spotifyLabel?: string;
  youtubeUrl?: string;
  youtubeLabel?: string;
};
```

Fonte: `src/data/home-projects.ts` → `export const projects` (painel da home isolado de lyrics/álbuns para bundle leve).

### 10.3 Comportamento visual

* painel com `min-height` ~70–72vh (CSS em `index.css`);
* mídia full-bleed com `object-fit: cover`;
* gradiente sutil sobre a imagem para legibilidade;
* filtro de cor opcional (`filterColor` / `filterOpacity`);
* categoria + título em “labels” brancos;
* mensagem opcional sob o título;
* ações: link interno “Abrir projeto”, botões circulares Spotify / YouTube;
* vídeo de fundo no painel do selo (e só se não houver reduced motion; em desktop após idle).

### 10.4 CSS principal

Classes em `src/styles/index.css`:

* `.parallax-panel`
* `.parallax-media` / `__clip` / `__layer` / `__asset`

---

## 11. Projetos da home (estado atual)

| # | Título | Categoria | Rota principal | Links externos |
| --- | --- | --- | --- | --- |
| 1 | Wonderland Song | Record Label | `/projects/wonderland-song` (ainda sem detalhe → Coming Soon) | YouTube canal |
| 2 | Bunny Land Music | Dark EDM + Pop | `/projects/bunny-land-music` | Spotify + YouTube |
| 3 | Rosa Negra de Halfeti | MPB · Experimental · Atmosférico | `/projects/rosa-negra-halfeti` | YouTube / Bandcamp |
| 4 | A Grande Multidão | Gospel + TJ | `/projects/a-grande-multidao` | Spotify |
| 5 | Helena Son | Grunge | `/projects/helena-son` | Spotify |
| 6 | USS Shenandoah | Hard Rock · 60/70 | `/projects/uss-shenandoah` | Spotify · YouTube covers |
| 7 | Lameck & Southern Birds Band | Blues | `/projects/lameck-southern-birds-band` | Spotify |
| 8 | Resonance | Post-Grunge / Alternative Rock | `/projects/resonance` | Bandcamp (no álbum) + YouTube clip |

### 11.1 Evolução em relação ao SDD original

* **Caution! Audio Gateway** deixou de ser painel isolado na home e passou a ser **Chapter 1** de Bunny Land Music.
* **Wonderland Song TV** não é painel separado; o canal YouTube está ligado ao painel do selo.
* **Compositores / artistas** não formam painel na home; conteúdo de artistas reais está nas histórias dos projetos (Lameck, Adriano, Rodrigo, etc.).
* Entraram projetos: **A Grande Multidão**, **Helena Son**, **USS Shenandoah**, **LSBB**, **Resonance** (v0.0.2), **Heretic's Fork**, **AEVUM** (v0.0.3).

---

## 12. Rotas

### 12.1 Implementadas

```text
/                                              Home parallax
/projects/:projectSlug                         Detalhe do projeto
/projects/:projectSlug/albums/:albumSlug       Detalhe do álbum
*                                              ComingSoonPage (bunny at work)
```

Code splitting: `React.lazy` + `Suspense` em `App.tsx` para Home, ProjectDetail, BunnyAlbum e ComingSoon.

### 12.2 Navegação e fallbacks

* projeto desconhecido na rota de detalhe → `ComingSoonPage`;
* álbum desconhecido → redirect para a página do projeto;
* `ScrollToTopOnNavigate` reseta scroll em mudança de rota.

### 12.3 Planejadas (não implementadas)

```text
/projects                 índice de projetos
/artists
/artists/:slug
/releases
/releases/:slug
/videos
```

---

## 13. Página de projeto (`ProjectDetailPage`)

Layout compartilhado (`ProjectDetailView`) para todos os projetos com detalhe cadastrado:

* header sticky com link à home (“Voltar”);
* hero com imagem, categoria, título, tagline;
* galeria de álbuns (“Álbuns lançados”) com cards e CTA “Ver álbum”;
* bloco de história “Sobre …” (lead, pull quote, seções numeradas, closing, fonte opcional);
* aside “Ouça e assista” (Spotify / YouTube do projeto quando existirem) + nav “Nesta página”;
* footer do projeto;
* SEO + JSON-LD `MusicGroup`.

### 13.0 Regra editorial: projeto vs. álbum

| Página | Conteúdo esperado |
| --- | --- |
| **Projeto** (`/projects/:slug`) | Origem do projeto, integrantes, contexto geral, som do **projeto** (não o detalhe de um disco específico). Discografia como galeria de cards. |
| **Álbum** (`…/albums/:albumSlug`) | Conceito do disco, temas, símbolos, faixas, letras, clips, preview de vídeo, links de streaming do álbum. |

Exemplo canônico (**Resonance**, v0.0.2):

* **Sobre Resonance** — amizade dos três integrantes, estudos de teoria, garagem, pausa e nascimento do projeto (WhatsApp + *In The Forest*).
* **Echoes of Redemption** — identidade post-grunge, referências Creed/Alter Bridge, Drop-D, jornada emocional, 14 faixas, preview `ressonance-preview.webm`.

### 13.1 Modelo `ProjectDetail`

```ts
export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imagePosition?: string;
  imagePositionMobile?: string;
  tagline: string;
  historyTitle: string;
  historyLead: string;
  pullQuote?: string;
  historySections: ProjectHistorySection[];
  historyClosing?: string;
  historySourceUrl?: string;
  historySourceLabel?: string;
  spotifyUrl?: string;
  spotifyLabel?: string;
  youtubeUrl?: string;
  youtubeLabel?: string;
  footerNote?: string;
  albumsEmptyMessage?: string;
};
```

### 13.2 Projetos com detalhe cadastrado

| Slug | Discografia |
| --- | --- |
| `bunny-land-music` | 4 chapters (Caution, In The Forest, In Time With Your Heart, Listen To Daddy) |
| `rosa-negra-halfeti` | 1 demo: Simplesmente eu… |
| `a-grande-multidao` | 1 álbum: A Verdade Ainda Chama |
| `helena-son` | 4 álbuns Genesis: Plastic Grace, New Day, The Computer, Unplugged |
| `uss-shenandoah` | 1 álbum: 1937 |
| `lameck-southern-birds-band` | 2 álbuns: Passalacqua, Instinct in Minor Key |
| `resonance` | 1 demo: Echoes of Redemption (14 faixas + preview + clip Breaking Point) |

Registro: `projectDetailsBySlug` e `projectAlbumsBySlug` em `content.ts`.

Helpers:

* `getProjectDetailBySlug`
* `getProjectAlbums`
* `getProjectAlbum`
* `getBunnyAlbumBySlug` (deprecated)

### 13.3 Resonance (detalhe de produto)

| Campo | Valor |
| --- | --- |
| Slug | `resonance` |
| Categoria | Post-Grunge / Alternative Rock |
| Integrantes | Lameck Silva Fernandes, Adriano Lima, Rodrigo Alves |
| Origem | Alpinópolis-MG · Wonderland Song |
| Capa / painel | `/images/albums/Ressonance.webp` |
| Álbum | `echoes-of-redemption` (Demo, 2026) |
| Letras | `src/data/resonance-lyrics.ts` (EN + tradução PT-BR no modal) |
| Preview de vídeo | `/videos/ressonance-preview.webm` (`ProjectAlbum.previewVideo`) |
| Clip | Breaking Point (YouTube) |

---

## 14. Página de álbum (`BunnyAlbumPage`)

Rota: `/projects/:projectSlug/albums/:albumSlug`

Conteúdo típico:

* breadcrumb / voltar ao projeto;
* capa (modal de capa opcional), capítulo, ano, tipo, resumo;
* links: Spotify, Bandcamp, YouTube, Genius (quando existirem);
* botão **Easter Eggs** (modal) quando `easterEgg` está definido;
* bloco **Sobre o álbum** (`description[]`);
* **preview de vídeo** opcional (`previewVideo`) — muted, loop, autoplay, `object-contain` (sem crop), omitido com reduced motion;
* lista de faixas com abertura de **modal de letras** (`TrackLyricsModal`);
* faixas extras (`extraTracks`) quando existirem;
* galeria de **clips musicais** (`AlbumClipsGallery`) — iframe YouTube só após interação;
* navegação álbum anterior / próximo;
* SEO + JSON-LD `MusicAlbum`.

### 14.1 Modelo `ProjectAlbum`

```ts
export type ProjectAlbum = {
  slug: string;
  title: string;
  chapter?: string;
  year: string;
  type: 'Album' | 'EP' | 'Single' | 'Demo';
  cover: string;
  summary: string;
  description: string[];
  /** Teaser local (ex. /videos/….webm) na seção Sobre o álbum. */
  previewVideo?: string;
  warning?: string;
  duration?: string;
  trackCount?: number;
  spotifyUrl?: string;
  bandcampUrl?: string;
  bandcampLabel?: string;
  youtubeUrl?: string;
  lyricsUrl?: string;
  lyricsLabel?: string;
  easterEgg?: { title: string; subtitle?: string; intro: string; note?: string };
  tracks: BunnyAlbumTrack[];
  extraTracks?: BunnyAlbumTrack[];
  extraTracksLabel?: string;
  clips: BunnyAlbumClip[];
};
```

### 14.2 Letras

Arquivos dedicados em `src/data/*-lyrics.ts` com faixas, letras e `lyricsExplanation` (seções, versículos, mensagens, traduções).

Inclui: `blm-chapter*-lyrics.ts`, `agm-lyrics.ts`, `helena-son-lyrics.ts`, `uss-1937-lyrics.ts`, **`resonance-lyrics.ts`**.

Modais:

* `TrackLyricsModal` — letra + explicação / tradução;
* `EasterEggsModal` — mapa de revelações (ex.: Chapter 3 BLM com dedicatórias por faixa);
* `AlbumCoverModal` — capa em destaque.

---

## 15. SEO

### 15.1 Implementado

* componente `Seo` (`react-helmet-async`): title, description, robots, canonical, Open Graph, Twitter Cards, JSON-LD;
* `src/config/site.ts`: `SITE_URL` (via `VITE_SITE_URL`), `SITE_NAME`, `SITE_DEFAULT_DESCRIPTION`, `absoluteUrl()`;
* `public/robots.txt` e `public/sitemap.xml` (URLs absolutas devem refletir a **URL real do deploy**, não um domínio `.com` inventado);
* `getPublicSitePaths()` em `site-routes.ts` para manter a lista de paths alinhada ao conteúdo;
* `noIndex` na página Coming Soon;
* tipos JSON-LD em uso: `Organization`, `WebSite`, `MusicGroup`, `MusicAlbum`.

### 15.2 Backlog SEO

* alinhar fallback de `SITE_URL`, `sitemap.xml`, `robots.txt` e `index.html` à URL estável do deploy (ou gerar no build);
* JSON-LD `Person`, `MusicRecording`, `VideoObject` de forma mais completa;
* geração automática do sitemap no build a partir de `getPublicSitePaths()` (hoje o XML é estático em `public/`);
* domínio próprio, quando for adquirido.

---

## 16. Performance

### 16.1 Já aplicado

* code splitting por rota (`React.lazy`);
* `manualChunks` no Vite: `react-vendor`, `content`, `react-helmet`, páginas;
* home sem puxar lyrics (`home-projects.ts` separado);
* imagens WebP nas capas e painéis (quando disponível);
* vídeo de fundo no painel 1 (desktop, após idle), muted/loop/playsInline, desligado com reduced motion;
* preview de álbum (`previewVideo`) só na página do álbum, com reduced motion;
* YouTube embed sob demanda na galeria de clips;
* parallax desktop sem listener de scroll;
* parallax mobile com rAF compartilhado e transform em inteiros;
* `decoding="async"` nas imagens dos painéis.

### 16.2 Metas e última medição (home `/`, build preview, 2026-07-19)

**Metas**

```text
Lighthouse Performance desktop: > 90
Lighthouse Performance mobile:  > 80
Accessibility:                  > 90
SEO:                            > 90
CLS:                            < 0.1
```

**Última corrida** (`npm run lighthouse:mobile` / `lighthouse:desktop` → JSON no root):

| | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| **Mobile** | **98** | **100** | **96** | **100** | ~2.3 s | 0 |
| **Desktop** | **100** | **100** | **100** | **100** | ~0.5 s | 0 |

Observações mobile: render-blocking residual (~150 ms), sizing de imagens, legibilidade de font-size em trechos pequenos.

### 16.3 Regras

* preferir animar `transform` e `opacity`;
* não bloquear a home esperando todas as imagens;
* não guardar posição de scroll em estado React.

---

## 17. Acessibilidade

Implementado em grande parte:

* HTML semântico em seções e headings;
* foco visível em botões/links (`focus-visible:outline`);
* menu mobile com `role="dialog"`, `aria-modal`, Escape;
* modais de letras / easter eggs / player de clip com dialog + Escape + lock de scroll;
* alt em imagens de conteúdo (mídia decorativa de parallax com `alt=""` + `aria-label` no painel);
* `prefers-reduced-motion` respeitado;
* targets de toque ≥ ~44px em CTAs principais.

Melhorias futuras: focus trap completo em todos os modais, hierarquia de `h1` auditada por página, testes a11y automatizados.

---

## 18. Identidade visual

### 18.1 Cores de referência

```css
--color-background: #05030a;   /* páginas internas */
--color-surface: #0e0915;
--color-text: #f7f5fa;
--color-muted: #aaa3b4;
--color-accent-purple: #8b3dff;
--color-accent-pink: #ff4d9d;
--color-accent-blue: #4a7dff;
--color-accent-gold: #d6b36a;
```

Home usa fundo claro (`#ffffff` / texto `#171717`) nos painéis; páginas de projeto/álbum usam o tema escuro `#05030a`.

### 18.2 Tipografia (estado atual)

* stack do sistema / Arial-Helvetica no CSS base (fonte editorial dedicada — Cormorant/Cinzel/Inter — ainda **não** foi amarrada via `@font-face` ou Google Fonts no build).

### 18.3 Regras

* espaço negativo generoso;
* não sobrecarregar as imagens;
* categorias em caixa alta com tracking amplo;
* botões discretos (ou brand colors Spotify/YouTube);
* atmosfera artística, não visual corporativo genérico.

---

## 19. Imagens e mídia

### 19.1 Organização atual

```text
public/images/           painéis da home + bunnyatwork
public/images/albums/    capas dos álbuns (WebP), incl. Ressonance.webp
public/videos/           wonderland2.webm, ressonance-preview.webm
```

### 19.2 Regras

* preferir WebP/AVIF; PNG para transparência quando necessário;
* sem hotlink de demos de terceiros;
* assets locais ou storage autorizado;
* comprimir antes da publicação;
* ponto focal preservado com `object-fit: cover`.

### 19.3 Placeholder legado

`artists` e `releases` em `content.ts` ainda apontam para SVGs placeholder (`/images/artists/*`, `/images/releases/*`) **não usados na UI atual**. Podem ser substituídos quando as páginas `/artists` e `/releases` forem construídas.

---

## 20. Página Coming Soon

`ComingSoonPage`:

* imagem `bunnyatwork.webp`;
* mensagem “Estamos trabalhando nesta página”;
* link “Voltar ao site”;
* `noIndex` no SEO.

Usada para:

* rotas `*` desconhecidas;
* projetos sem detalhe (ex.: `/projects/wonderland-song` se ainda não houver entry em `projectDetailsBySlug`).

---

## 21. Testes

Arquivo principal: `src/App.test.tsx` (Vitest + Testing Library + MemoryRouter + HelmetProvider).

Cobre, entre outros:

* shell da home parallax (títulos dos projetos);
* fallback bunny-at-work;
* páginas BLM, RNH, AGM, **Resonance**;
* álbum **Echoes of Redemption** (link de volta + letras EN/PT de Breaking Point);
* galeria e página de álbum (Chapter 3, Easter Eggs, clips Chapter 1);
* redirect de álbum inexistente.

Comando: `npm run test`.

---

## 22. Critérios de aceitação — Fase 1 (home + base)

A base da fase 1 está **atendida**:

* [x] home com múltiplos painéis parallax em tela cheia;
* [x] mídia fixa com efeito de profundidade (desktop CSS / mobile rAF);
* [x] identidade Wonderland Song (sem marca POFO);
* [x] menu desktop e mobile;
* [x] rotas internas de projeto e álbum;
* [x] reduced motion;
* [x] lint / typecheck / test / build scripts;
* [x] imagens otimizadas (WebP) nos assets principais.

---

## 23. O que já foi feito (changelog consolidado)

Ordem aproximada do histórico + marcos de versão:

1. **Scaffold inicial** — Vite + React + TS + Tailwind + home parallax + header + menu mobile.
2. **Scroll to top** e ajustes de menu mobile com fundo legível.
3. **Links Spotify e YouTube** nos painéis e nas páginas.
4. **Página de manutenção / Coming Soon** (bunny at work).
5. **Novos projetos** na home e páginas de detalhe (AGM, HS, USSS, LSBB, etc.).
6. **Parallax mobile** e correções desktop/mobile.
7. **Conteúdo rico de Bunny Land Music** (história, 4 chapters, clips, easter eggs).
8. **Letras em modal** + arquivos de lyrics (BLM chapters, AGM, Helena Son, USS 1937).
9. **Discografias** de Helena Son, USS Shenandoah, LSBB, AGM, RNH.
10. **SEO** (Helmet, config de site, sitemap, robots, JSON-LD).
11. **Performance** (lazy routes, manualChunks, WebP, home-projects separado, limpeza de assets).
12. **Capas e artes** atualizadas (incl. álbum USS 1937).
13. **v0.0.2 — Resonance** (2026-07-19):
    * painel 8 na home (`home-projects.ts`);
    * `ProjectDetail` com história de origem (três amigos, teoria, garagem, pausa, nascimento);
    * álbum **Echoes of Redemption**: descrição conceitual, 14 faixas, `resonance-lyrics.ts` (EN + PT), Bandcamp, clip Breaking Point;
    * campo `ProjectAlbum.previewVideo` + UI em `BunnyAlbumPage` (sem crop; respeita reduced motion);
    * asset `/videos/ressonance-preview.webm` e capa `Ressonance.webp`;
    * testes de rota projeto/álbum Resonance;
    * Lighthouse re-medido (mobile Perf 98 / desktop 100);
    * regra editorial documentada: projeto geral vs. detalhes no álbum.
14. **v0.0.3 — Heretic's Fork + AEVUM** (2026-07-22):
    * painéis 9–10 na home (`heretics-fork`, `aevum`) + nav no Header;
    * **Heretic's Fork**: projeto + álbum demo, letras EN/PT, clip YouTube;
    * **AEVUM**: projeto (estilo Tool, conceito filosófico/espiritual) + álbum **Levels of Consciousness** (demo *The Unanswered Geometry*, letra, clip YouTube);
    * tipografia justificada em “Sobre” e páginas de álbum;
    * `ScrollToTop` global (seta flutuante à direita após scroll);
    * sitemap com rotas AEVUM; testes smoke atualizados.

---

## 24. Backlog priorizado

### 24.1 Conteúdo e produto

1. Página de detalhe do selo `/projects/wonderland-song` (hoje cai em Coming Soon).
2. Completar discografia / letras onde ainda faltam (algumas faixas só com título; novos álbuns Resonance quando existirem).
3. Substituir placeholders de `artists` / `releases` por dados reais e expor UI.
4. Página agregada de vídeos (com lazy embed, reutilizando padrões de `AlbumClipsGallery`).
5. Hero editorial ou seção “Sobre / Contato” se ainda forem desejados na home.

### 24.2 Técnico

1. Alinhar SEO absoluto à URL real do deploy (`VITE_SITE_URL`, sitemap, robots, fallback em `site.ts`).
2. Gerar `sitemap.xml` no build a partir de `getPublicSitePaths()`.
3. Fontes editoriais (Cormorant/Cinzel + Inter/Manrope) se a direção de arte exigir.
4. `srcSet` / imagens responsivas por breakpoint (hoje uma URL por painel).
5. Playwright e2e smoke (home → projeto → álbum → letra).
6. API Node.js + migração gradual de `content.ts` (fase 2).
7. i18n PT/EN.
8. Domínio próprio, quando houver.

### 24.3 Não fazer nesta fase

* banco de dados / painel admin;
* copiar POFO;
* WebGL;
* autoplay de vídeo com som;
* scroll hijacking.

---

## 25. Conteúdo dinâmico futuro (fase 2)

API Node.js para gerenciar:

* projetos, artistas, lançamentos, músicas, vídeos, imagens, configurações do site.

Até lá: **dados locais tipados** em `src/data/content.ts` e `*-lyrics.ts`.

---

## 26. Instruções para agentes de código (Spec-Driven Development)

1. Ler este `sdd.md` (spec) e o estado do repositório antes de alterar arquivos.
2. Executar a spec **fase a fase** — uma fase por vez; não pular etapas.
3. Ao concluir a fase: validar (lint/typecheck/test/build quando couber), resumir o entregue e **parar**.
4. **Só avançar** para a próxima fase quando o autor revisar e pedir explicitamente para prosseguir.
5. Não copiar código, textos ou imagens da demo pública do POFO.
6. Não usar Bootstrap nem jQuery.
7. Não usar `any`.
8. Preferir componentes reutilizáveis e dados tipados.
9. Respeitar reduced motion e acessibilidade básica dos modais.
10. Ao adicionar projeto/álbum: atualizar `home-projects.ts` (painel), `content.ts` (detalhe + álbuns), letras se houver, capa em `public/images/albums/`, vídeo opcional em `public/videos/`, `site-routes`/sitemap se aplicável, e testes relevantes.
11. Respeitar a regra editorial: **página do projeto = origem/geral**; **página do álbum = conceito, faixas, mídia do disco**.
12. Não avançar para backend sem pedido explícito.
13. Não inventar domínio `.com` próprio — SEO absoluto usa `VITE_SITE_URL` / URL do deploy.
14. Manter esta spec alinhada à realidade do código; ao fechar marco de produto, **atualizar versão** em `package.json` + tabela de versões deste SDD.

---

## 27. Prompt de execução (atualizado)

```text
Leia integralmente o arquivo sdd.md (Spec-Driven Development) e use-o como fonte principal dos requisitos.

Execute a spec fase a fase — uma fase por vez. Não avance sozinho.
Ao terminar a fase, pare e aguarde o autor revisar e pedir para prosseguir.

O site Wonderland Song já possui home parallax com 10 painéis (incl. Heretic's Fork e AEVUM),
páginas de projeto, páginas de álbum (letras, easter eggs, clips, previewVideo),
SEO, Lighthouse scripts e fallback Coming Soon. Versão de produto em package.json / sdd.md.
Está em deploy; não há domínio .com próprio — use VITE_SITE_URL / URL do ambiente.

Não copie o código, os textos, a marca ou as imagens da demonstração pública do POFO.

Antes de implementar a fase atual:
1. analise o estado atual do repositório;
2. confirme o que já existe em src/data/content.ts e nas rotas de App.tsx;
3. declare qual fase vai executar e o delta necessário;
4. implemente somente essa fase.

Não use Bootstrap, jQuery ou any.
Não implemente backend ou painel admin sem solicitação explícita.

Ao finalizar a fase:
- npm run lint
- npm run typecheck
- npm run test
- npm run build
- atualize sdd.md se a arquitetura ou o escopo mudarem
- resuma o que foi feito e aguarde o OK do autor para a próxima fase
```

---

## 28. Mapa rápido de arquivos críticos

| Necessidade | Arquivo |
| --- | --- |
| Painéis da home | `src/data/home-projects.ts` → `projects` |
| Detalhe / história | `src/data/content.ts` → `*Detail` + `projectDetailsBySlug` |
| Discografia | `src/data/content.ts` → `*Albums` + `projectAlbumsBySlug` |
| Letras | `src/data/*-lyrics.ts` (incl. `resonance-lyrics.ts`) |
| Tipos | `src/types/index.ts` (`previewVideo` em `ProjectAlbum`) |
| Rotas | `src/App.tsx` |
| Parallax CSS | `src/styles/index.css` |
| Parallax mobile | `src/hooks/useMobileParallax.ts` |
| Reduced motion | `src/hooks/usePrefersReducedMotion.ts` |
| SEO head | `src/components/seo/Seo.tsx` + `src/config/site.ts` (`VITE_SITE_URL`) |
| Sitemap | `public/sitemap.xml` + `src/data/site-routes.ts` (URLs = deploy) |
| Lighthouse | `npm run lighthouse:*` → `lighthouse-*.json` |
| Testes de smoke | `src/App.test.tsx` |
| Versão | `package.json` + tabela no topo deste SDD |
| Spec (SDD) | `sdd.md` — Spec-Driven Development |
