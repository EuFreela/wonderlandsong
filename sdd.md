# SDD — Wonderland Song Parallax Portfolio

## 1. Identificação do projeto

**Nome:** Wonderland Song
**Tipo:** Site musical, artístico e portfólio narrativo
**Referência estrutural:** POFO Portfolio Parallax
**Tecnologias principais:** React, TypeScript, Vite, Tailwind CSS, Node.js e Motion
**Idioma inicial:** Português
**Possibilidade futura:** Português e inglês

---

# 2. Visão do produto

Criar um site artístico para a Wonderland Song baseado no conceito visual de um portfólio parallax em tela cheia.

A página deverá apresentar os projetos musicais como grandes cenas verticais. Cada projeto ocupará aproximadamente uma tela inteira e será composto por:

* imagem de fundo em grande escala;
* conteúdo textual sobreposto;
* identificação do projeto;
* título;
* categoria;
* pequeno texto introdutório;
* botão para abrir o projeto;
* movimento de profundidade durante a rolagem;
* transição suave para o próximo painel.

O site não deverá copiar literalmente o POFO.

Deverá reproduzir sua lógica geral de apresentação:

* menu discreto;
* projetos em painéis verticais;
* grandes imagens;
* tipografia sobreposta;
* composição alternada;
* navegação por rolagem;
* efeito parallax;
* abertura de páginas individuais;
* rodapé minimalista.

A identidade visual, o conteúdo, os textos, os logotipos e as imagens deverão pertencer à Wonderland Song.

---

# 3. Regra sobre os arquivos do POFO

Os arquivos visuais e o código-fonte do template POFO somente poderão ser utilizados quando o proprietário do projeto possuir uma licença válida do produto.

## 3.1 Quando houver licença

Se os arquivos licenciados forem colocados no repositório, o Codex poderá:

* analisar a estrutura;
* reutilizar imagens permitidas pela licença;
* converter o layout para React;
* converter estilos para Tailwind CSS;
* substituir jQuery e Bootstrap;
* preservar apenas os elementos autorizados;
* documentar quais arquivos vieram do pacote licenciado.

## 3.2 Quando não houver licença

O Codex deverá:

* não baixar imagens diretamente da demonstração;
* não copiar o código HTML, CSS ou JavaScript da página;
* não fazer hotlink das imagens;
* utilizar placeholders;
* utilizar imagens próprias da Wonderland Song;
* reproduzir apenas a ideia geral do layout;
* criar implementação original.

## 3.3 Pasta para arquivos licenciados

Caso exista licença:

```text
reference/
└── pofo-licensed/
```

Essa pasta não deverá ser publicada automaticamente no site.

Ela servirá apenas como referência de desenvolvimento.

---

# 4. Objetivo principal

Apresentar a Wonderland Song como um universo musical composto por vários projetos artísticos.

A home deverá funcionar como uma galeria vertical e cinematográfica.

Cada rolagem revelará um projeto diferente.

O visitante deverá perceber:

* profundidade;
* movimento;
* continuidade;
* elegância;
* mistério;
* identidade musical;
* transição entre universos.

---

# 5. Objetivos específicos

* Criar uma home parallax;
* Exibir projetos em tela cheia;
* Exibir artistas e compositores;
* Exibir álbuns e singles;
* Exibir videoclipes;
* Integrar Spotify e YouTube;
* Criar páginas individuais;
* Criar menu responsivo;
* Criar experiência mobile adaptada;
* Garantir carregamento eficiente;
* Manter boa acessibilidade;
* Preparar o site para conteúdo dinâmico;
* Preparar futura integração com uma API Node.js.

---

# 6. Stack tecnológica

## 6.1 Front-end

Utilizar:

* React;
* TypeScript;
* Vite;
* Tailwind CSS;
* Motion for React;
* React Router;
* Lucide React;
* React Helmet Async;
* Zod;
* Vitest;
* React Testing Library;
* Playwright.

## 6.2 Rolagem e animação

Utilizar:

* Motion `useScroll`;
* Motion `useTransform`;
* Motion `useSpring`;
* Motion `useReducedMotion`;
* Intersection Observer quando necessário;
* CSS `position: sticky`;
* CSS transforms;
* Lenis opcional para suavização.

Não utilizar jQuery.

Não utilizar Bootstrap.

Não manipular a posição de rolagem com timers.

## 6.3 Back-end

Utilizar posteriormente:

* Node.js;
* TypeScript;
* Fastify;
* Prisma;
* PostgreSQL;
* Zod;
* Pino.

Na primeira etapa, os dados poderão vir de arquivos TypeScript locais.

---

# 7. Estrutura esperada

```text
wonderland-song/
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── projects/
│   │   ├── artists/
│   │   ├── releases/
│   │   └── backgrounds/
│   ├── videos/
│   └── favicon/
│
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── parallax/
│   │   ├── project/
│   │   └── ui/
│   ├── data/
│   ├── features/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── sections/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── docs/
│   ├── storyboard/
│   ├── architecture/
│   ├── assets/
│   └── decisions/
│
├── .env.example
├── package.json
├── README.md
├── SDD.md
└── vite.config.ts
```

---

# 8. Arquitetura da home

A home deverá possuir os seguintes blocos:

```text
Header
Hero de introdução
Projeto 1
Projeto 2
Projeto 3
Projeto 4
Artistas
Vídeos
Próximos lançamentos
Sobre
Rodapé
```

Os projetos principais deverão ser exibidos como painéis parallax.

---

# 9. Header

## 9.1 Aparência

O header deverá ser:

* transparente;
* fixo;
* discreto;
* sobreposto às imagens;
* responsivo;
* legível em fundos claros e escuros.

## 9.2 Conteúdo

Exibir:

* logotipo Wonderland Song;
* Home;
* Projetos;
* Artistas;
* Lançamentos;
* Vídeos;
* Sobre;
* Contato;
* botão do menu mobile;
* links sociais opcionais.

## 9.3 Comportamento

No topo:

* transparente;
* logotipo claro;
* menu claro.

Após rolagem:

* aplicar fundo translúcido;
* aplicar blur leve;
* reduzir a altura;
* preservar contraste.

No mobile:

* usar menu overlay em tela cheia;
* manter navegação por teclado;
* permitir fechamento com `Escape`.

---

# 10. Hero inicial

## 10.1 Objetivo

Apresentar a marca antes dos projetos.

## 10.2 Conteúdo

```text
WONDERLAND SONG

Music, stories and imagined worlds.

Explore the projects
```

## 10.3 Visual

Utilizar:

* imagem ou composição original da Wonderland Song;
* fundo em tela cheia;
* sobreposição escura;
* logotipo central;
* texto minimalista;
* indicador de rolagem;
* movimento parallax sutil.

## 10.4 Animação

Durante a primeira rolagem:

* o fundo se moverá lentamente;
* o texto subirá;
* a opacidade do texto diminuirá;
* a primeira seção de projeto surgirá;
* o header assumirá seu estado compacto.

---

# 11. Painel de projeto parallax

Criar um componente reutilizável:

```text
ParallaxProjectPanel
```

Cada painel deverá ocupar no mínimo:

```text
100vh
```

Em telas grandes, poderá usar:

```text
110vh a 130vh
```

## 11.1 Conteúdo

Cada projeto deverá possuir:

* número;
* categoria;
* título;
* subtítulo;
* imagem principal;
* imagem mobile;
* posição do conteúdo;
* cor do texto;
* sobreposição;
* descrição curta;
* botão;
* link interno;
* crédito opcional.

## 11.2 Composição

Cada painel deverá conter:

```text
camada de fundo
camada de imagem
camada de sobreposição
camada de conteúdo
camada decorativa opcional
```

## 11.3 Movimento

O fundo e o conteúdo deverão mover-se em velocidades diferentes.

Exemplo:

```text
Imagem de fundo: deslocamento vertical de -8% a 8%
Conteúdo: deslocamento vertical de 40px a -40px
Elemento decorativo: deslocamento de 15% a -15%
Escala da imagem: 1.05 a 1.12
Opacidade do conteúdo: 0 → 1 → 1 → 0
```

## 11.4 Entrada e saída

Entrada:

* imagem aparece parcialmente;
* conteúdo entra de baixo;
* categoria aparece primeiro;
* título aparece em seguida;
* botão aparece por último.

Centro:

* composição totalmente visível;
* movimento mínimo;
* interação disponível.

Saída:

* imagem continua deslocando;
* texto desaparece;
* próximo painel sobrepõe parcialmente;
* não realizar corte abrupto.

---

# 12. Alternância dos painéis

Os conteúdos deverão alternar sua posição para criar ritmo visual.

Exemplo:

```text
Projeto 1: conteúdo à esquerda
Projeto 2: conteúdo à direita
Projeto 3: conteúdo central
Projeto 4: conteúdo à esquerda
Projeto 5: conteúdo à direita
```

Em mobile:

* conteúdo sempre alinhado de forma legível;
* evitar posicionamentos extremos;
* aplicar gradiente atrás do texto.

---

# 13. Projetos iniciais

## 13.1 Bunny Land Music

Categoria:

```text
Electronic Music · Visual Storytelling
```

Título:

```text
Bunny Land Music
```

Descrição:

```text
Uma viagem entre música eletrônica, personagens, universos fantásticos e narrativas audiovisuais.
```

Direção visual:

* floresta;
* estrada;
* máscara de coelho;
* luzes coloridas;
* atmosfera surreal;
* elementos de fantasia;
* fundo escuro.

---

## 13.2 Caution! Audio Gateway

Categoria:

```text
Dark EDM · Audiovisual Project
```

Título:

```text
CAUTION! AUDIO GATEWAY
```

Descrição:

```text
Um portal sonoro construído com energia, ficção científica, suspense e música eletrônica.
```

Direção visual:

* portal;
* corredor;
* luzes de alerta;
* fumaça;
* sinais digitais;
* ambiente futurista;
* tons escuros.

---

## 13.3 Rosa Negra de Halfeti

Categoria:

```text
MPB · Jazz · Poetry
```

Título:

```text
Rosa Negra de Halfeti
```

Descrição:

```text
Poesia transformada em música por meio de atmosferas brasileiras, jazz contemporâneo e narrativas intimistas.
```

Direção visual:

* rosa negra;
* piano;
* neblina;
* reflexos;
* elegância;
* composição cinematográfica;
* tons escuros e dourados.

---

## 13.4 Wonderland Song TV

Categoria:

```text
Music Videos · Original Productions
```

Título:

```text
The Wonderland Song TV
```

Descrição:

```text
Videoclipes, lançamentos e projetos audiovisuais reunidos em um único canal.
```

Direção visual:

* estúdio;
* telas;
* cinema;
* iluminação de palco;
* elementos fantásticos;
* cenário próprio da marca.

---

## 13.5 Compositores

Categoria:

```text
Artists · Composers · Musicians
```

Título:

```text
The People Behind the Music
```

Exibir:

* Lameck S. Fernandes;
* Adriano Lima;
* Rodrigo Alves.

Direção visual:

* retratos originais;
* fundo escuro;
* iluminação lateral;
* composição editorial;
* nomes em tipografia grande.

---

# 14. Dados dos projetos

Criar inicialmente:

```ts
export type Project = {
  id: string;
  slug: string;
  order: number;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  overlay: "light" | "medium" | "dark";
  contentPosition: "left" | "center" | "right";
  textTheme: "light" | "dark";
  accentColor?: string;
  href: string;
  isPublished: boolean;
};
```

Os dados iniciais deverão ficar em:

```text
src/data/projects.ts
```

Posteriormente serão movidos para a API.

---

# 15. Componente ParallaxProjectPanel

API esperada:

```ts
type ParallaxProjectPanelProps = {
  project: Project;
  index: number;
};
```

O componente deverá:

* receber os dados do projeto;
* observar o progresso da seção;
* mover a imagem;
* mover o conteúdo;
* aplicar escala;
* aplicar opacidade;
* respeitar reduced motion;
* utilizar imagem mobile;
* apresentar link acessível;
* não conhecer regras de negócio externas.

---

# 16. Páginas individuais

Cada projeto deverá possuir uma página própria.

Rotas:

```text
/projects
/projects/:slug
```

A página individual deverá conter:

* hero;
* imagem principal;
* nome;
* categoria;
* descrição;
* conceito;
* artistas;
* lançamentos relacionados;
* vídeos;
* galeria;
* créditos;
* links externos;
* navegação para projeto anterior e próximo.

O visual poderá ser mais simples que o da home, mas deverá preservar a identidade.

---

# 17. Página de artistas

Rotas:

```text
/artists
/artists/:slug
```

Exibir:

* retrato;
* nome;
* função;
* biografia;
* instrumentos;
* projetos;
* lançamentos;
* vídeos;
* redes sociais.

---

# 18. Página de lançamentos

Rotas:

```text
/releases
/releases/:slug
```

Exibir:

* capa;
* título;
* artista;
* tipo;
* data;
* descrição;
* lista de faixas;
* créditos;
* Spotify;
* YouTube;
* projeto relacionado.

---

# 19. Página de vídeos

Rota:

```text
/videos
```

Exibir:

* vídeo em destaque;
* galeria;
* filtros;
* thumbnails;
* modal de reprodução;
* links do YouTube.

Não carregar o iframe do YouTube até ocorrer interação.

---

# 20. Identidade visual

## 20.1 Cores

```css
--color-background: #05030a;
--color-surface: #0e0915;
--color-text: #f7f5fa;
--color-muted: #aaa3b4;
--color-accent-purple: #8b3dff;
--color-accent-pink: #ff4d9d;
--color-accent-blue: #4a7dff;
--color-accent-gold: #d6b36a;
```

## 20.2 Tipografia

Utilizar:

* títulos: Cormorant Garamond, Cinzel ou equivalente;
* textos: Inter, Manrope ou equivalente;
* categorias: letras maiúsculas e espaçamento ampliado.

## 20.3 Regras

* utilizar bastante espaço negativo;
* não sobrecarregar as imagens;
* títulos grandes;
* categorias pequenas;
* botões discretos;
* manter contraste;
* não usar visual corporativo genérico;
* preservar a atmosfera artística.

---

# 21. Animações

## 21.1 Animações obrigatórias

* parallax vertical;
* escala suave da imagem;
* entrada do título;
* entrada da categoria;
* entrada da descrição;
* transição entre painéis;
* header reagindo ao scroll;
* indicador de rolagem;
* hover dos botões;
* transição de rotas.

## 21.2 Restrições

Não utilizar:

* animação excessiva em todos os elementos;
* rotação exagerada;
* scroll hijacking;
* alteração artificial da velocidade da barra;
* timers;
* animação de propriedades caras;
* WebGL na primeira versão;
* autoplay de vídeos com som.

---

# 22. Mobile

No mobile:

* utilizar imagens próprias para orientação vertical;
* reduzir intensidade do parallax;
* reduzir escala;
* manter textos dentro da área segura;
* usar gradiente atrás do conteúdo;
* evitar textos muito grandes;
* desativar movimentos complexos;
* preservar todos os links;
* garantir toque confortável.

Cada projeto deverá possuir:

```text
desktopImage
mobileImage
```

Não utilizar apenas `background-position` para adaptar imagens importantes.

---

# 23. Reduced motion

Quando o usuário preferir menos movimento:

* remover o deslocamento parallax;
* remover zoom contínuo;
* manter fades curtos;
* mostrar conteúdo completo;
* manter transições simples;
* evitar elementos flutuantes.

O site deverá continuar visualmente completo.

---

# 24. Imagens

## 24.1 Formatos

Preferir:

* AVIF;
* WebP;
* PNG apenas para transparência;
* JPEG apenas quando necessário.

## 24.2 Tamanhos sugeridos

Desktop:

```text
2400 × 1600
1920 × 1280
```

Mobile:

```text
900 × 1400
1080 × 1600
```

## 24.3 Regras

* não usar hotlink;
* armazenar os arquivos localmente ou em storage autorizado;
* informar autoria;
* possuir autorização de uso;
* escrever texto alternativo;
* criar versões responsivas;
* preservar o ponto focal;
* comprimir antes da publicação.

---

# 25. Loading

Carregar primeiro:

* logotipo;
* imagem do hero;
* imagem do primeiro projeto;
* fontes essenciais.

Carregar depois:

* projetos seguintes;
* artistas;
* vídeos;
* imagens internas.

Utilizar:

* lazy loading;
* `srcSet`;
* `sizes`;
* preload seletivo;
* skeleton quando necessário.

Não bloquear o site esperando todas as imagens.

---

# 26. Performance

Metas:

```text
Lighthouse Performance desktop: acima de 90
Lighthouse Performance mobile: acima de 80
Accessibility: acima de 90
SEO: acima de 90
CLS: abaixo de 0.1
```

Regras:

* animar somente transform e opacity;
* evitar múltiplos filtros de blur;
* não usar imagens gigantes sem redimensionamento;
* dividir o código por rota;
* carregar vídeos após interação;
* evitar re-render durante scroll;
* usar Motion Values;
* não armazenar posição do scroll em estado React.

---

# 27. Acessibilidade

Implementar:

* HTML semântico;
* apenas um `h1`;
* hierarquia correta de títulos;
* foco visível;
* navegação por teclado;
* contraste;
* alt em imagens;
* links descritivos;
* menu acessível;
* modal com focus trap;
* suporte a reduced motion;
* conteúdo disponível sem JavaScript sempre que possível.

---

# 28. SEO

Implementar:

* title;
* meta description;
* canonical;
* Open Graph;
* Twitter Cards;
* sitemap;
* robots.txt;
* JSON-LD;
* MusicGroup;
* Person;
* MusicAlbum;
* MusicRecording;
* VideoObject;
* Organization.

---

# 29. Conteúdo dinâmico futuro

Na segunda etapa, criar API Node.js para gerenciar:

* projetos;
* artistas;
* lançamentos;
* músicas;
* vídeos;
* imagens;
* configurações do site.

Na primeira etapa, utilizar dados locais tipados.

---

# 30. Componentes obrigatórios

Criar:

```text
AppHeader
FullscreenMenu
HeroParallax
ParallaxProjectPanel
ProjectContent
ScrollIndicator
SocialLinks
ResponsivePicture
AnimatedText
ProjectNavigation
VideoThumbnail
VideoModal
AppFooter
ReducedMotionFallback
```

---

# 31. Storyboard da home

## Etapa 1 — Hero

```text
0% a 15% da página
```

* logotipo central;
* fundo com movimento lento;
* indicador de rolagem;
* título desaparece gradualmente.

## Etapa 2 — Bunny Land Music

```text
15% a 30%
```

* imagem ocupa a tela;
* conteúdo à esquerda;
* imagem se move para cima lentamente;
* elementos de primeiro plano atravessam a composição.

## Etapa 3 — Caution! Audio Gateway

```text
30% a 45%
```

* entrada por sobreposição;
* conteúdo à direita;
* efeito de profundidade;
* luzes e portal.

## Etapa 4 — Rosa Negra de Halfeti

```text
45% a 60%
```

* fundo elegante;
* conteúdo central ou à esquerda;
* rosa ou piano como ponto focal;
* transição lenta.

## Etapa 5 — Wonderland Song TV

```text
60% a 75%
```

* ambiente audiovisual;
* conteúdo à direita;
* elementos de vídeo;
* botão para acessar canal.

## Etapa 6 — Artistas

```text
75% a 88%
```

* composição com retratos;
* apresentação dos nomes;
* acesso aos perfis.

## Etapa 7 — Encerramento

```text
88% a 100%
```

* sobre a Wonderland Song;
* redes;
* projetos;
* contato;
* frase final.

Texto:

```text
Every ending opens another gateway.
```

---

# 32. Critérios de aceitação

A primeira versão será aceita quando:

* a home possuir hero e pelo menos quatro painéis parallax;
* cada painel ocupar a tela inteira;
* imagem e texto se moverem em velocidades diferentes;
* o layout lembrar um portfólio editorial parallax;
* não houver cópia do conteúdo ou da marca POFO;
* o site possuir identidade Wonderland Song;
* o menu funcionar;
* as rotas internas funcionarem;
* mobile possuir imagens adaptadas;
* reduced motion funcionar;
* lint passar;
* typecheck passar;
* testes passarem;
* build passar;
* não houver erros no console;
* as imagens estiverem otimizadas.

---

# 33. Primeira fase de desenvolvimento

Implementar somente:

* React;
* TypeScript;
* Vite;
* Tailwind CSS;
* Motion;
* React Router;
* configuração de fontes;
* tokens visuais;
* header;
* menu mobile;
* hero;
* componente ParallaxProjectPanel;
* quatro projetos;
* footer;
* dados locais;
* mobile;
* reduced motion;
* testes básicos;
* README.

Não implementar banco de dados nesta fase.

Não implementar painel administrativo nesta fase.

---

# 34. Instruções para o Codex

1. Leia integralmente o `SDD.md`.
2. Analise o repositório antes de alterar arquivos.
3. Não copie código da demonstração pública do POFO.
4. Não baixe imagens diretamente da demonstração.
5. Caso exista `reference/pofo-licensed`, confirme que são arquivos fornecidos pelo proprietário.
6. Use o POFO apenas como referência estrutural.
7. Desenvolva uma implementação original em React.
8. Não utilize Bootstrap.
9. Não utilize jQuery.
10. Utilize Tailwind CSS.
11. Utilize Motion para o scroll.
12. Não utilize `any`.
13. Não concentre toda a página em um único componente.
14. Crie componentes reutilizáveis.
15. Crie versão mobile.
16. Implemente reduced motion.
17. Execute lint, typecheck, testes e build.
18. Corrija todos os erros.
19. Não avance para backend.
20. Documente os assets que ainda serão necessários.

---

# 35. Prompt de execução para o Codex

```text
Leia integralmente o arquivo SDD.md e use-o como fonte principal dos requisitos.

A referência visual do projeto é um portfólio parallax composto por grandes painéis de imagem em tela cheia, conteúdo editorial sobreposto e movimento de profundidade durante a rolagem.

Não copie o código, os textos, a marca ou as imagens da demonstração pública do POFO.

Se existir a pasta reference/pofo-licensed, analise esses arquivos apenas como material licenciado fornecido pelo proprietário. Caso ela não exista, utilize placeholders locais e imagens originais do projeto.

Primeiro:

1. analise o estado atual do repositório;
2. liste os arquivos existentes;
3. apresente a estrutura que será criada;
4. liste os arquivos que serão criados ou modificados.

Depois implemente somente a primeira fase:

- React;
- TypeScript;
- Vite;
- Tailwind CSS;
- Motion for React;
- React Router;
- tokens visuais;
- header transparente;
- menu mobile em tela cheia;
- hero parallax;
- ParallaxProjectPanel reutilizável;
- quatro painéis para Bunny Land Music, Caution! Audio Gateway, Rosa Negra de Halfeti e Wonderland Song TV;
- seção de artistas;
- rodapé;
- dados locais tipados;
- imagens temporárias locais;
- comportamento responsivo;
- prefers-reduced-motion;
- testes básicos;
- README.

Cada painel deve:

- ocupar pelo menos 100vh;
- possuir imagem responsiva;
- possuir overlay;
- possuir categoria;
- possuir título;
- possuir descrição;
- possuir botão;
- mover imagem e conteúdo em velocidades diferentes;
- possuir entrada e saída animadas;
- manter conteúdo acessível sem animações.

Não use Bootstrap.
Não use jQuery.
Não use any.
Não use listeners manuais de scroll quando Motion puder resolver.
Não coloque o progresso do scroll em estado React.
Não implemente backend.
Não implemente painel administrativo.
Não avance para outra fase.

Ao finalizar:

- execute npm run lint;
- execute npm run typecheck;
- execute npm run test;
- execute npm run build;
- corrija todos os erros;
- apresente os arquivos criados;
- informe os comandos para executar;
- liste as imagens definitivas ainda necessárias.
```

---

# 36. Comandos esperados

```bash
npm install
npm run dev
```

Validação:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

---

# 37. Definição de pronto

O site estará pronto quando apresentar os projetos da Wonderland Song como uma sequência elegante de grandes imagens parallax, mantendo a inspiração editorial da referência, mas com implementação, identidade, conteúdo e composição visual próprios.
