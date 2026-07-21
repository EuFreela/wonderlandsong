# Wonderland Song

Site musical, artístico e portfólio narrativo do selo **Wonderland Song**.

A home é uma galeria vertical cinematográfica: cada rolagem revela um projeto em painel de tela cheia, com mídia de fundo, tipografia sobreposta e efeito parallax — **implementação original**.

**Versão:** `0.0.2`  
**Idioma:** português (pt-BR)  
**Fase atual:** front-end com dados locais tipados (sem backend)  
**Agente de IA:** [Grok](https://x.ai) (xAI), no fluxo **SDD (Spec-Driven Development)**

Especificação viva do produto: [`sdd.md`](./sdd.md).

---

## Visão

Apresentar a Wonderland Song como um **universo musical** de vários projetos. Cada painel da home pode ter imagem/vídeo de fundo, categoria, título, mensagem e links (projeto, Spotify, YouTube), com parallax na rolagem.

Páginas internas cobrem história, discografia, letras, clips e easter eggs.

### Projetos na home

| # | Projeto | Foco |
| --- | --- | --- |
| 1 | Wonderland Song | Record Label (selo + vídeo) |
| 2 | Bunny Land Music | Dark EDM + Pop |
| 3 | Rosa Negra de Halfeti | MPB · Experimental · Atmosférico |
| 4 | A Grande Multidão | Gospel + TJ |
| 5 | Helena Son | Grunge |
| 6 | USS Shenandoah | Hard Rock · 60/70 |
| 7 | Lameck & Southern Birds Band | Blues |
| 8 | Resonance | Post-Grunge / Alternative Rock · *Echoes of Redemption* |

Rotas: `/projects/:slug` e `/projects/:slug/albums/:albumSlug`. Rotas desconhecidas → **Coming Soon**.

**Editorial:** página do projeto = origem/geral; página do álbum = conceito, faixas e mídia do disco.

---

## Stack

| Tecnologia | Uso |
| --- | --- |
| React 18 + TypeScript | UI tipada |
| Vite 5 | Dev e build |
| Tailwind CSS 3 | Estilos |
| React Router 6 | Rotas SPA |
| React Helmet Async | SEO (meta, OG, Twitter, JSON-LD) |
| Zod | Preparado para validação (fase API) |
| ESLint / Vitest + Testing Library | Lint e testes |
| Lighthouse CLI | Auditoria (`lighthouse:mobile` / `desktop`) |

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

Lighthouse (preview local na porta 4173): `npm run lighthouse:serve` em um terminal; depois `npm run lighthouse:mobile` e `npm run lighthouse:desktop`.

SEO absoluto no build: `VITE_SITE_URL` (URL do deploy).

---

## Arquitetura

```text
/                                              Home parallax
/projects/:projectSlug                         Projeto
/projects/:projectSlug/albums/:albumSlug       Álbum
*                                              Coming Soon
```

- **Parallax:** desktop = CSS `fixed` + `clip`; mobile = `requestAnimationFrame` + `translate3d`; reduced motion desliga vídeo e parallax mobile.
- **Dados:** `src/data/home-projects.ts`, `content.ts`, `*-lyrics.ts` (incl. Resonance), `src/types/`, `src/config/site.ts`.
- **Code split:** `React.lazy` + chunks no `vite.config.ts`.
- **Preview de álbum:** `ProjectAlbum.previewVideo` (ex. Resonance / Echoes).

```text
src/components/   layout, parallax, project, seo, ui
src/data/         home-projects, content, lyrics, site-routes
src/hooks/        parallax, contraste do header, reduced motion
src/pages/        Home, ProjectDetail, Album, ComingSoon
public/           images, videos, sitemap.xml, robots.txt
sdd.md            spec (Spec-Driven Development) · v0.0.2
```

---

## Já implementado

- Home com 8 painéis e menu responsivo (incl. Resonance)
- Páginas de projeto e álbum (letras, Easter Eggs, clips, preview de vídeo)
- SEO, lazy routes, WebP, scroll-to-top, reduced motion
- Lighthouse scripts e scores recentes no SDD
- Testes smoke em `src/App.test.tsx`

Backlog e critérios: [`sdd.md`](./sdd.md).

---

## SDD + Grok

O projeto usa **Spec-Driven Development**: a spec (`sdd.md`) orienta o que construir; o código segue a spec; mudanças de escopo atualizam a spec.

**Grok** (xAI) é o agente usado para implementar, revisar e documentar a partir da spec.

### Fluxo

1. Ler `sdd.md` e o repositório.
2. Confirmar o que já existe e qual **fase** da spec executar.
3. Implementar **só essa fase** (não pular à frente).
4. Validar: `lint`, `typecheck`, `test`, `build` quando couber.
5. **Parar e aguardar revisão** do autor.
6. Só **prosseguir** para a próxima fase quando o autor pedir explicitamente.
7. Atualizar `sdd.md` / README se o produto mudar.

### Regras

- Sem Bootstrap, jQuery ou `any`.
- Sem backend/CMS sem pedido explícito.
- Componentes reutilizáveis e dados tipados.
- Acessibilidade básica (modais, teclado, reduced motion).
- Novo projeto/álbum: `content.ts`, capa em `public/images/`, letras se houver, testes; SEO com `VITE_SITE_URL`.
- **Não avançar de fase** sem OK do autor.

### Prompt-base

```text
Leia o sdd.md (Spec-Driven Development) e use-o como requisitos.
Analise o repo e execute a spec fase a fase — uma fase por vez.
Sem Bootstrap, jQuery ou any. Sem backend sem solicitação.
SEO: VITE_SITE_URL = URL do deploy.
Ao concluir a fase: lint, typecheck, test e build (quando couber);
atualize sdd.md se o escopo mudou; pare e aguarde revisão.
Só continue para a próxima fase quando o autor pedir para prosseguir.
```

Prompt completo: seção de execução do [`sdd.md`](./sdd.md).

---

## Assets e autoria

Imagens e vídeos próprios da Wonderland Song (ou uso autorizado).  
**Imagens** do site desenvolvidas com **ChatGPT** e melhoradas com **Photoshop**.

**SDD (Spec-Driven Development)** é a forma de desenvolvimento usada aqui: IA (Grok) implementa a partir da spec; um **humano** revisa cada fase, decide o que prossegue e faz a parte de **engenharia** (arquitetura, critérios de qualidade e integração).

Projeto privado — música, textos, artes e narrativa © autores e o selo.
