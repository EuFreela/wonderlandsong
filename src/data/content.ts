import type { Artist, Project, ProjectAlbum, ProjectDetail, Release } from '../types';
import { aVerdadeAindaChamaTracks } from './agm-lyrics';
import { cautionAudioGatewayTracks } from './blm-chapter1-lyrics';
import { inTheForestTracks } from './blm-chapter2-lyrics';
import { inTimeWithYourHeartTracks } from './blm-chapter3-lyrics';
import { listenToDaddyTracks } from './blm-chapter4-lyrics';
import {
  newDayExtraTracks,
  newDayTracks,
  plasticGraceTracks,
  theComputerTracks,
  unpluggedTracks,
} from './helena-son-lyrics';
import { simplesmenteEuTracks } from './rnh-lyrics';
import { uss1937Tracks } from './uss-1937-lyrics';

/**
 * Homepage parallax panels (POFO-style fixed background sequence).
 * Images match the reference HTML (portfolio-item57–62).
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    category: 'Record Label',
    title: 'Wonderland Song',
    image: '/images/wonderland2.png',
    video: '/videos/wonderland2.mp4',
    // Color tint over the media — change hex + opacity as needed
    // filterColor: '#fff782',
    // filterOpacity: 0.35,
    href: '/projects/wonderland-song',
    // buttonLabel: 'Abrir projeto',
    // spotifyUrl: 'https://open.spotify.com/',
    // spotifyLabel: 'Spotify',
    message: 'Ajudando a construir música boa no Brasil e no mundo',
    youtubeUrl: 'https://www.youtube.com/@wonderlandsong/videos',
    youtubeLabel: 'YouTube',
  },
  {
    id: 'project-2',
    category: 'Dark EDM + Pop',
    title: 'Bunny Land Music',
    image: '/images/caution2.webp',
    imagePositionMobile: 'center 30%',
    // video: '/videos/caution.mp4',
    // Color tint over the media — change hex + opacity as needed
    // filterColor: '#9cbfff',
    // filterOpacity: 0.35,
    href: '/projects/bunny-land-music',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/7sf7qPbN4BiUlbOfEwziza',
    spotifyLabel: 'Ouvir no Spotify',
    youtubeUrl: 'https://www.youtube.com/@bunnylandmusic',
    youtubeLabel: 'YouTube',
  },

  {
    id: 'project-3',
    category: 'MPB · Experimental · Atmosférico',
    title: 'Rosa Negra de Halfeti',
    image: '/images/rnh3.webp',
    imagePositionMobile: 'center 28%',
    href: '/projects/rosa-negra-halfeti',
    buttonLabel: 'Abrir projeto',
    youtubeUrl: 'https://www.youtube.com/watch?v=0-nnIYlwXC0',
    youtubeLabel: 'YouTube',
  },
  {
    id: 'project-4',
    category: 'Gospel + TJ',
    title: 'A Grande Multidão',
    image: '/images/agm2.webp',
    href: '/projects/a-grande-multidao',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/0nUtKTD6CkcADpjPYYCzHu',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-5',
    category: 'Grunge',
    title: 'Helena Son',
    image: '/images/hs2.webp',
    imagePositionMobile: 'center 22%',
    href: '/projects/helena-son',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3w2iPAIrdoXXzJ38C59np8',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-6',
    category: 'Hard Rock 1960',
    title: 'USS Shenandoah',
    image: '/images/usss.webp',
    imagePositionMobile: 'center 32%',
    href: '/projects/uss-shenandoah',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/008vDYJA7fvRWxchF8QN1F',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-7',
    category: 'Blues',
    title: 'Lameck & Southern Birds Band',
    image: '/images/lsbb.webp',
    href: '/projects/lameck-southern-birds-band',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/6jZsG3waoXclu0mC2tv4eX',
    spotifyLabel: 'Ouvir no Spotify',
  },
];

/**
 * Detail data for the Bunny Land Music project page
 * (opened from project-2 "Abrir projeto").
 * History adapted from:
 * https://agencylk7.wixsite.com/bunny/post/history-of-bunny-land-music
 */
export const bunnyLandMusic: ProjectDetail = {
  slug: 'bunny-land-music',
  title: 'Bunny Land Music',
  category: 'Dark EDM + Pop',
  image: '/images/caution2.webp',
  imagePositionMobile: 'center 30%',
  tagline:
    'BunnyMan · Tommy o DJ coelho — uma jornada sonora por emoções, identidade e o universo Wonderland Song.',
  historyTitle: 'Como nasceu o Bunny Land Music',
  historyLead:
    'Bunny Land Music é um projeto conceitual de Lameck: o alter ego BunnyMan — o DJ coelho Tommy — guia uma jornada sonora por emoções e identidade. Nasceu de encontros no Twitch, da curiosidade por EDM e dark wave, e de um MIDI controller que mudou a forma de compor.',
  pullQuote: 'Tudo se resume ao Twitch.',
  footerNote: 'Bunny Land Music · Dark EDM + Pop',
  historySections: [
    {
      id: 'concept',
      title: 'O projeto e o Tommy',
      paragraphs: [
        'Bunny Land Music é um projeto conceitual criado por Lameck, em que o alter ego BunnyMan — representado por um DJ coelho chamado Tommy — conduz uma jornada sonora por emoções e identidade.',
        'Tommy é o personagem que representa Lameck: o garoto que se torna DJ no mundo Wonderland Song. Por trás da máscara e da batida está a mesma curiosidade de quem descobre a música eletrônica e quer dividir essa paixão com o mundo.',
      ],
    },
    {
      id: 'dream',
      title: 'O sonho de Bunny Land',
      paragraphs: [
        'Enquanto dormia, Tommy foi levado a um mundo mágico coberto de neve. Guiado por uma figura misteriosa vestida de vermelho, encontrou uma princesa japonesa e criaturas encantadas — sem ter certeza se estava na China ou no Japão. No começo teve medo; em seguida percebeu que se transformara em um DJ coelho.',
        'Encorajado por fadas, Tommy começou a tocar em um controlador mágico, com a ajuda de outros coelhos e de um pen drive encantado. A música ecoou pela floresta: os animais dançaram, o ambiente respondeu ao som e a experiência virou algo único e transformador. Ele se sentiu mais vivo do que nunca, imerso na energia da música.',
        'No fim do show, as fadas revelaram que o reino precisava de um DJ para dar vida às noites de fantasia — e recompensaram Tommy pelo talento. Na manhã seguinte, ele acordou na cama e entendeu que tudo fora um sonho. Mesmo assim, prometeu a si mesmo continuar buscando formas de compartilhar sua paixão pela música com o mundo.',
      ],
    },
    {
      id: 'origin',
      title: 'Origem',
      paragraphs: [
        'Conheci no YouTube a Jenn Sakura, na época estudante de música em Berklee (EUA). Ela fazia lives no Twitch com histórias, música e jogos. Com o tempo voltou ao país onde está hoje e parou de transmitir — o canal dela ficou com amigos.',
        'Ela brincava com o trocadilho “Jenn is a genius”, em referência ao programa “Jenny é um gênio”. Cheguei a fazer uma música de aniversário inspirada no tema de Alita — mas isso fica para outra história.',
        'Depois que ela sumiu das lives, passei a seguir outros canais. Um deles chamou atenção: Sasha Grey, que conheci jogando Lost Ark. Descobri que ela também é DJ, fui atrás dos mixes e comecei a brincar com a linguagem do som.',
      ],
    },
    {
      id: 'spark',
      title: 'A faísca',
      paragraphs: [
        'Sasha me inspirou a começar o projeto depois que descobri que ela também era DJ.',
        'Até então eu não tinha experiência com EDM, dark wave e outros gêneros eletrônicos. Pesquisei, ouvi e me inspirei em nomes como Deadmau5, The Chemical Brothers e outros do circuito.',
        'Meu pai administrou um grupo de venda de instrumentos na região — e, de surpresa, apareceu um brinquedo que mudou tudo: um controlador MIDI AKAI. Depois de algumas semanas aprendendo a usá-lo, escolhi faixas para remixar. A primeira foi “Month to a Flame”. A partir daí, nasceram outras a cada fim de semana.',
      ],
    },
    {
      id: 'craft',
      title: 'Ofício e remixes',
      paragraphs: [
        'Na época, eu terminava o curso “A Moeda da Música”, do Paulo Anhaia — o que coincidiu com mais conhecimento sobre covers, remixes e licenciamento. Subi essas versões no YouTube. Pausei por um tempo, conciliando estudo e trabalho.',
        'Desde então o interesse só cresceu: remixes cada vez mais profissionais, performance com o AKAI e o olhar já em outro brinquedo — um Pioneer. Quero montar um estúdio; as gravações estão em pausa por enquanto. Quando isso se encaixar, a ideia de um canal no Twitch para lives de show fica no radar.',
        'Nas descrições dos vídeos, deixo o material dos remixes (exceto quando a faixa é original).',
      ],
    },
    {
      id: 'bunny',
      title: 'Por que um coelho?',
      paragraphs: [
        'Gosto do universo de Alice no País das Maravilhas por vários motivos. O coelho leva Alice para o fundo da toca — um mundo de fantasias. O Bunny Man encaixa nesse conceito: levar a música a outro nível de consciência. Tommy, o DJ coelho, é a face desse portal no universo Wonderland Song.',
      ],
    },
    {
      id: 'styles',
      title: 'Estilos e exploração',
      paragraphs: [
        'O projeto passa por trance, EDM, pop e tons mais europeus, como avant-pop. Também me aproximo do K-pop (acompanhando trabalhos como o de Blackpink, em especial Jisoo) — menos como meta de copiar um gênero e mais como experiência de navegar outros territórios. Sou aquariano: curioso, gosto de explorar e descobrir.',
        'Não me vejo como profissional da música: é hobby de fim de semana ou quando sobra tempo. A ocupação principal é outra. Sei que misturar estilos pode ser armadilha para a identidade artística — ou caminho para um som mais maduro e rico. De qualquer forma, gosto de explorar.',
        'Misturar linguagens gera projetos interessantes. Exemplos que me marcam: “Drown”, de Karen O & Danger Mouse (pop orquestrado, ecos de James Bond, trip-hop, post-grunge); “Bleed as One”, de VOSH (dark wave com post-grunge); “The Test”, dos Chemical Brothers (quebrar o molde e abrir tendência); e mixes de melodic dubstep que fogem do estereótipo de 140–160 BPM de game. Quando entendo o conceito de cada estilo, a mistura fica legível — como em “Hearts Connected”, de Cathy Burton, que em trance ganhou vida com Omnia, e em outra versão minha inclinei dark wave com pop, numa atmosfera próxima de Stranger Things.',
      ],
    },
  ],
  historyClosing: 'É divertido.',
  historySourceUrl: 'https://agencylk7.wixsite.com/bunny/post/history-of-bunny-land-music',
  historySourceLabel: 'História completa (arquivo)',
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/7sf7qPbN4BiUlbOfEwziza',
  spotifyLabel: 'Ouvir no Spotify',
  youtubeUrl: 'https://www.youtube.com/@bunnylandmusic',
  youtubeLabel: 'YouTube',
};

/**
 * Rosa Negra de Halfeti — project-3 detail page.
 * Sources: author notes + https://agencylk7.wixsite.com/halfeti
 * Álbum: Bandcamp (Demo, 15 mai 2025)
 */
export const rosaNegraHalfeti: ProjectDetail = {
  slug: 'rosa-negra-halfeti',
  title: 'Rosa Negra de Halfeti',
  category: 'MPB · Experimental · Atmosférico',
  image: '/images/rnh3.webp',
  imagePositionMobile: 'center 28%',
  tagline:
    'Letras autorais, MPB densa e a beleza rara que nasce da dor — amor, perda, identidade e transformação.',
  historyTitle: 'Sobre a Rosa Negra de Halfeti',
  historyLead:
    'Rosa Negra de Halfeti é um projeto musical autoral em formato de álbum, com letras introspectivas, existenciais e afetivas. Mistura MPB com linguagem densa e poética — amor, perda, identidade, solidão e transformação. O nome evoca a flor rara que nasce escura: a beleza incomum que nasce da dor.',
  footerNote: 'Rosa Negra de Halfeti · MPB contemporâneo · Experimental · Atmosférico',
  historySections: [
    {
      id: 'concept',
      title: 'O projeto',
      paragraphs: [
        'Rosa Negra de Halfeti é um projeto musical autoral em formato de álbum, com foco em letras introspectivas, existenciais e afetivas. As músicas misturam elementos da MPB com uma linguagem mais densa e poética — amor, perda, identidade, solidão e transformação pessoal. O nome faz referência à flor rara que nasce escura, símbolo da beleza incomum que nasce da dor.',
        'As composições são todas autorais e exploram sentimentos humanos profundos por meio de metáforas, vocabulário culto e estrutura lírica. O projeto não segue fórmulas comerciais: prioriza expressão pessoal e autenticidade emocional.',
      ],
    },
    {
      id: 'origin',
      title: 'De onde vêm as palavras',
      paragraphs: [
        'Rosa Negra de Halfeti é o reencontro do compositor com palavras que ele próprio deixou pelo caminho. Fragmentos de sentimentos, rabiscos em guardanapos, anotações em cadernos antigos — cada letra carrega uma situação vivida, um instante sentido com intensidade, reorganizado pela música como travessia emocional.',
        'Essas canções não foram escritas de uma vez. Foram descobertas. Como quem reencontra a si mesmo em papéis gastos, escritos em fases distintas da vida — onde o único abrigo possível era o verso e a poesia.',
        'Há muitos anos Lameck escreve músicas. O rock sempre foi espinha dorsal da essência criativa, sem se limitar a um estilo só: a raiz mais visceral é a Música Popular Brasileira. Escrever foi refúgio — poemas livres, sussurros no papel, tentativas de traduzir o que doía, pulsava e ainda não tinha nome. Esses textos viviam em caixas, bordas de guardanapos e páginas de partituras, até o dia de reunir parte desses pedaços e lhes dar melodia.',
      ],
    },
    {
      id: 'sound',
      title: 'Som e linguagem',
      paragraphs: [
        'O gênero é MPB contemporânea, atmosférica e experimental — a própria MPB já é mistura. As faixas carregam traços de rock, jazz, pop, blues e outras influências. Apaixonado pelos “anos de ouro” da música, o som busca uma estética de fita analógica: quente, íntima e crua, próxima dos anos 60–70. Ainda assim, o foco principal está nas letras.',
        'O português tem nuances que encantam — expressões cultas, palavras pouco usadas, raízes arcaicas e lirismo em forma de música. São composições próximas do poema, com estrutura livre e cada verso carregado de intenção e sentimento. Muitas expressões nasceram na adolescência e no começo da vida adulta; hoje viram música com liberdade, prazer e afeto — sem pretensão, com sinceridade.',
      ],
    },
    {
      id: 'themes',
      title: 'O que o projeto percorre',
      paragraphs: [
        'Cada música é como uma pétala caída — fragmento de algo maior, irrecuperável e ainda assim belo. No conjunto, o disco atravessa relações difíceis e amores desequilibrados; perda de identidade e crise interna; solidão, silêncio e afastamento; autoquestionamento e escolhas que pesam; e, mesmo em meio à dor, a tentativa de reconstrução e a esperança de voltar a si.',
        'Não é um inventário de faixas, e sim um mapa emocional: o ouvinte entra num diário em pedaços, onde o que importa é a travessia — não o catálogo de títulos.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        'Projeto: Rosa Negra de Halfeti · Compositor: Lameck S. Fernandes · Gênero: MPB contemporâneo | Experimental | Atmosférico · Projeto musical no universo Wonderland Song.',
      ],
    },
  ],
  historyClosing:
    'Rosas Negras de Halfeti é uma visão da MPB — linguagem culta na expressão mais bela da arte brasileira. Espero que, ao ouvir, você sinta.',
  historySourceUrl: 'https://agencylk7.wixsite.com/halfeti',
  historySourceLabel: 'Site Rosa Negra de Halfeti',
  youtubeUrl: 'https://www.youtube.com/watch?v=0-nnIYlwXC0',
  youtubeLabel: 'YouTube',
};

/**
 * Álbuns de Rosa Negra de Halfeti (project-3).
 * Source: https://wonderlandsong.bandcamp.com/album/simplesmente-eu-literalmente-aos-peda-os-em-frases-e-achados-demo
 */
export const rosaNegraHalfetiAlbums: ProjectAlbum[] = [
  {
    slug: 'simplesmente-eu-literalmente-aos-pedacos-em-frases-e-achados',
    title: 'Simplesmente eu: literalmente, aos pedaços — em frases e achados',
    year: '2025',
    type: 'Demo',
    cover: '/images/albums/rnh-cover.webp',
    summary:
      'Demo de 16 faixas líricas: pedaços de vida reencontrados em poemas, MPB densa e a beleza que nasce da dor.',
    description: [
      'Simplesmente eu: literalmente, aos pedaços — em frases e achados é a demo de Rosa Negra de Halfeti: dezesseis faixas de lirismo, introspecção e afeto. Escrita, composição, produção e arte — tudo de Lameck S. Fernandes. Um trabalho nascido em Minas Gerais, lançado em maio de 2025.',
      'O disco reúne escritos da adolescência e do começo da vida adulta — poemas livres, metáforas e perguntas existenciais — transformados em música. Mistura MPB com rock, jazz, blues e experimentação atmosférica, com estética quente e íntima inspirada nos anos 60–70, sempre priorizando a letra.',
      'O nome do projeto evoca a rosa negra de Halfeti: a beleza que nasce da dor. Cada canção percorre amor, identidade, solidão e transformação, com vocabulário culto e forma livre. Não é música feita para fórmula comercial — é expressão artística sincera.',
      'Rosa Negra de Halfeti é, em resumo, o compositor em pedaços, em poesia e em canção. Esperamos que, ao ouvir, você sinta.',
      'Projeto: Rosa Negra de Halfeti · 2025 · Wonderland Song (Selo) · Lameck S. Fernandes.',
    ],
    duration: '56 min',
    trackCount: simplesmenteEuTracks.length,
    bandcampUrl:
      'https://wonderlandsong.bandcamp.com/album/simplesmente-eu-literalmente-aos-peda-os-em-frases-e-achados-demo',
    bandcampLabel: 'RNH - Simplesmente eu...',
    tracks: simplesmenteEuTracks,
    clips: [],
  },
];

/**
 * A Grande Multidão — project-4 detail page (home: project-4).
 * Album-specific copy lives on each album page, not here.
 */
export const aGrandeMultidao: ProjectDetail = {
  slug: 'a-grande-multidao',
  title: 'A Grande Multidão',
  category: 'Gospel + TJ',
  image: '/images/agm2.webp',
  tagline:
    'Projeto musical cristão: estudos bíblicos, reflexões de fé e rock com propósito.',
  historyTitle: 'Sobre A Grande Multidão',
  historyLead:
    'A Grande Multidão é um projeto musical do universo Wonderland Song dedicado a transformar estudos bíblicos, reflexões espirituais e convicções de fé em arte.',
  footerNote: 'A Grande Multidão · Gospel + TJ',
  albumsEmptyMessage:
    'Os álbuns e lançamentos de A Grande Multidão serão adicionados em breve.',
  historySections: [
    {
      id: 'project',
      title: 'O projeto',
      paragraphs: [
        'Idealizado e composto por Lameck S. Fernandes, Adriano Lima e Rodrigo Alves, o projeto nasce do desejo de transformar estudos bíblicos, reflexões espirituais e convicções de fé em arte. Inspirado nas Escrituras e na perspectiva das Testemunhas de Jeová, não busca fama: usa a música para comunicar a fé com sinceridade, reflexão e envolvimento emocional.',
        'Unindo letras profundas e influências do rock clássico, hard rock, rock alternativo e worship, A Grande Multidão transmite mensagens baseadas nas Escrituras de forma sincera e emocionalmente envolvente. Aborda a busca pela verdade em um mundo de narrativas conflitantes, os perigos do engano religioso, a perseguição a quem permanece fiel, o sofrimento da humanidade e a esperança do Reino de Deus.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        'Projeto: A Grande Multidão · Compositores: Lameck S. Fernandes, Adriano Lima e Rodrigo Alves · Universo Wonderland Song.',
      ],
    },
  ],
  historySourceUrl: 'https://agrandemultidao.vercel.app/',
  historySourceLabel: 'Site A Grande Multidão',
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/0nUtKTD6CkcADpjPYYCzHu',
  spotifyLabel: 'Ouvir no Spotify',
};

/**
 * Helena's Son — project-5 detail page (home: project-5).
 * Source: Genesis PDF (Plastic Grace, New Day, Unplugged, The Computer).
 */
export const helenaSon: ProjectDetail = {
  slug: 'helena-son',
  title: "Helena's Son",
  category: 'Grunge',
  image: '/images/hs2.webp',
  imagePositionMobile: 'center 22%',
  tagline:
    'Grunge conceitual dos anos 90 revisitado: fé, desilusão e a falha da conexão humana na era digital.',
  historyTitle: "Sobre Helena's Son",
  historyLead:
    "Helena's Son é um projeto grunge que canaliza a introspecção e o peso emocional dos anos 90, reinterpretando-os com a sensibilidade sombria e existencial da era atual. Obra conceitual sobre um ser humano em busca de sentido dentro de uma realidade fragmentada.",
  pullQuote: 'Cada álbum é uma etapa da jornada — da graça plástica ao vazio da máquina.',
  footerNote: "Helena's Son · Grunge · Genesis",
  albumsEmptyMessage: 'Os álbuns de Helena’s Son serão adicionados em breve.',
  historySections: [
    {
      id: 'genesis',
      title: 'Genesis',
      paragraphs: [
        "Helena's Son é um projeto musical grunge que canaliza a introspecção e o peso emocional dos anos 90, reinterpretando-os com a sensibilidade sombria e existencial da era atual. Cada álbum representa uma etapa dessa jornada existencial — da descoberta da falsidade do mundo até o vazio da própria consciência. É uma narrativa sobre fé, desilusão e a falha da conexão humana na era digital.",
        'Este projeto nasceu da união de três amigos movidos pela mesma paixão: a música. Juntos, decidiram transformar sentimentos, experiências e emoções em expressão artística — compondo álbuns que traduzem percepções humanas em som, palavra e atmosfera. Cada canção é um canal onde o íntimo se torna arte.',
        "O conceito dos álbuns segue uma linha contínua: cada obra se conecta à próxima. Genesis é o nome para os quatro álbuns sequenciais — Plastic Grace; New Day; The Computer; e Unplugged. A história do projeto já vive nas redes há muitos anos; neste ciclo, Helena's Son volta com novas vozes, novas canções e o mesmo coração grunge.",
      ],
    },
    {
      id: 'journey',
      title: 'A jornada em quatro atos',
      paragraphs: [
        'Plastic Grace — A revelação da ilusão: clima moderado e introspectivo. O personagem vive saturado de crenças e símbolos e começa a perceber que a “graça” ao redor é plástica — fé vendida e performática. Temas: crítica à fé institucionalizada, vaidade espiritual, busca por pureza num mundo adulterado.',
        'New Day — O silêncio após a queda: denso, melancólico e confessional. Após a ilusão, o personagem mergulha no vazio e no luto existencial. Não há redenção fácil — só lucidez e a busca por sentido entre ruínas. No Spotify, as faixas oficiais; abaixo, faixas extras do Genesis.',
        'The Computer — O homem e a máquina: energético, elétrico e claustrofóbico. A tentativa de se reconstruir pela tecnologia revela só uma nova ilusão — conexão que vira isolamento, carne e código, identidade fragmentada.',
        'Unplugged — fechamento sentimental e nostálgico: setlist no Spotify (An Unforgettable Night) com versões acústicas; ao lado de cada faixa, o álbum de origem. Letras e traduções abrem direto na página do Unplugged.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        "Projeto: Helena's Son · Genesis · Compositores: Lameck S. Fernandes, Adriano Lima e Rodrigo Alves · Gênero: Grunge · Universo Wonderland Song.",
      ],
    },
  ],
  historyClosing:
    "Genesis reúne os quatro capítulos da jornada. Cada faixa é um pedaço da travessia — e, juntas, formam o coração grunge de Helena's Son.",
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3w2iPAIrdoXXzJ38C59np8',
  spotifyLabel: 'Ouvir no Spotify',
};

/**
 * USS Shenandoah — project-6 detail page (home: project-6).
 * Álbum 1937 e sua explicação ficam na página do álbum.
 */
export const ussShenandoah: ProjectDetail = {
  slug: 'uss-shenandoah',
  title: 'USS Shenandoah',
  category: 'Hard Rock 1960',
  image: '/images/usss.webp',
  imagePositionMobile: 'center 32%',
  tagline:
    'Projeto musical de hard rock com a linguagem dos anos 60 — peso, groove e gravação orgânica.',
  historyTitle: 'Sobre USS Shenandoah',
  historyLead:
    'USS Shenandoah é um projeto musical de Lameck S. Fernandes, Adriano Lima e Rodrigo Alves, dedicado ao hard rock com forte influência do som dos anos 60.',
  pullQuote:
    'Rock direto, com personalidade — guitarras, riffs e a atmosfera de uma das eras mais marcantes do gênero.',
  footerNote: 'USS Shenandoah · Hard Rock · Anos 60',
  albumsEmptyMessage: 'Os álbuns de USS Shenandoah serão adicionados em breve.',
  historySections: [
    {
      id: 'project',
      title: 'O projeto',
      paragraphs: [
        'USS Shenandoah é um projeto musical de Lameck S. Fernandes, Adriano Lima e Rodrigo Alves. A proposta é explorar a sonoridade do hard rock clássico, em especial a do final da década de 1960, com guitarras distorcidas, riffs marcantes, órgão vintage e uma abordagem mais orgânica de gravação.',
        'O projeto não busca só copiar um estilo antigo: reinterpreta essa estética com a linguagem do hard rock dos anos 60, em busca de uma experiência musical envolvente e atemporal.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        'Projeto: USS Shenandoah · Compositores: Lameck S. Fernandes, Adriano Lima e Rodrigo Alves · Gênero: Hard rock · Influência: rock dos anos 60 · Universo Wonderland Song.',
      ],
    },
  ],
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/008vDYJA7fvRWxchF8QN1F',
  spotifyLabel: 'Ouvir no Spotify',
};

/** Álbuns de USS Shenandoah (project-6). */
export const ussShenandoahAlbums: ProjectAlbum[] = [
  {
    slug: '1937',
    title: '1937',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/uss-1937.webp',
    summary:
      'Álbum conceitual de hard rock com forte influência do som dos anos 60 — guitarras, riffs, órgão vintage e gravação orgânica.',
    description: [
      '1937 é o álbum conceitual de hard rock do projeto USS Shenandoah, com forte influência do som dos anos 60, criado por Lameck S. Fernandes, Rodrigo Alves e Adriano Lima. A proposta é explorar a sonoridade característica daquela época, resgatando elementos clássicos do rock como guitarras distorcidas, riffs marcantes, órgão vintage e uma abordagem mais orgânica de gravação.',
      'Inspirado na energia e na estética do rock do final da década de 1960, o álbum busca recriar uma atmosfera intensa, envolvente e autêntica, onde os instrumentos têm presença forte e a música se desenvolve de forma natural, valorizando a expressividade e a emoção.',
      'O resultado é um trabalho que combina peso, groove e sensibilidade musical, trazendo um rock direto, cheio de personalidade e de bom gosto, capaz de transportar o ouvinte para a atmosfera sonora de uma das épocas mais marcantes da história do gênero.',
      'Mais do que apenas reproduzir um estilo antigo, 1937 procura reinterpretar essa estética clássica, utilizando a linguagem do hard rock dos anos 60 para criar uma experiência musical envolvente e atemporal.',
      'Projeto: USS Shenandoah · Álbum: 1937 · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.',
    ],
    duration: '58 min',
    trackCount: uss1937Tracks.length,
    spotifyUrl: 'https://open.spotify.com/album/0qkcfpR2jWwbN1lExyZAjw',
    tracks: uss1937Tracks,
    clips: [],
  },
];

/**
 * Lameck & Southern Birds Band — project-7 detail page (home: project-7).
 * Antes: IEAS (projeto inacabado). Fonte: wonderlandsong / post _ieas.
 */
export const lameckSouthernBirdsBand: ProjectDetail = {
  slug: 'lameck-southern-birds-band',
  title: 'Lameck & Southern Birds Band',
  category: 'Blues',
  image: '/images/lsbb.webp',
  tagline:
    'Blues de estrada e palco: do projeto inacabado IEAS (2018) à banda orgânica para turnês e instrumentais com feeling.',
  historyTitle: 'Sobre Lameck & Southern Birds Band',
  historyLead:
    'Lameck & Southern Birds Band é o nome que o projeto IEAS ganhou ao amadurecer — de rascunhos instrumentais em 2018 a uma banda de blues pensada para palco, turnê e música que permanece.',
  pullQuote:
    'Primeiro nasce o sentimento, depois vem a estrada. Música boa não corre — ela permanece.',
  footerNote: 'Lameck & Southern Birds Band · Blues · IEAS (2018)',
  albumsEmptyMessage: 'Os álbuns de Lameck & Southern Birds Band serão adicionados em breve.',
  historySections: [
    {
      id: 'ieas',
      title: 'IEAS — o começo',
      paragraphs: [
        'O projeto nasceu em 2018, logo depois de Room 07, Motel Salaria, em Roma, na Itália. Na época, Lameck estava imerso na composição de álbuns no Guitar Pro e nos estudos musicais, ouvindo muito Steve Vai e Joe Satriani — o que reacendeu a vontade de criar algo instrumental, com feeling, técnica e emoção real. As primeiras ideias foram rascunhadas sem pressa, mas com intensidade.',
        'O clima também carregava referências do Lacuna Coil, principalmente por Cristina Scabbia. Dessa energia nasceu o nome IEAS: In Estasi All’Interno di Scabbia in Fm — “Em Êxtase Dentro da Scabbia em Fá menor.” Apesar de iniciado lá atrás, o projeto sempre acompanhou o compositor; partituras e rascunhos ficaram guardados em backups, com valor pessoal forte, esperando o momento certo de voltar.',
      ],
    },
    {
      id: 'rename',
      title: 'De IEAS para a banda',
      paragraphs: [
        'O nome mudou de IEAS para Lameck & Southern Birds Band para soar mais como banda de blues — algo orgânico, de estrada e de palco. A mudança importa pensando em apresentações ao vivo e possíveis turnês, onde o nome precisa respirar música antes da primeira nota.',
        'Amigos com quem se compartilham composições podem acompanhar nas performances, formando uma banda flexível, viva e verdadeira. A organização de ideias, formatos e próximos passos segue no ritmo do blues: primeiro o sentimento, depois a estrada.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        'Projeto: Lameck & Southern Birds Band · Origem: IEAS (2018) · Compositor: Lameck S. Fernandes · Gênero: Blues · Instrumental e autoral · Universo Wonderland Song.',
      ],
    },
  ],
  historySourceUrl: 'https://agencylk7.wixsite.com/wonderlandsong/post/_ieas',
  historySourceLabel: 'Wonderland Song · IEAS',
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/6jZsG3waoXclu0mC2tv4eX',
  spotifyLabel: 'Ouvir no Spotify',
};

/** Álbuns de Lameck & Southern Birds Band (project-7). */
export const lameckSouthernBirdsBandAlbums: ProjectAlbum[] = [
  {
    slug: 'check-in-after-midnight-in-passalacqua',
    title: 'Check-In After Midnight In Passalacqua',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/lsbb-passalacqua.webp',
    summary:
      'Instrumental de safra setentista, inspirado em Passalacqua (Lago de Como): classe, estudo e identidade própria — com Jimmy Page no horizonte.',
    description: [
      'Em 2025 o antigo IEAS voltou à estrada sob o nome Lameck & Southern Birds Band, com Check-In After Midnight In Passalacqua. Passalacqua é um lugar mágico no Lago de Como: no século XVIII, um refúgio para amigos, amor, lazer, a mesa e a arte italiana do dolce far niente — e continua sendo esse refúgio até hoje.',
      'Inspirado em Passalacqua, com classe e bom gosto, a proposta é música instrumental de boa qualidade, inspirada na melhor safra sonora dos anos 70. O álbum nasce também do estudo em música, transpondo influências marcantes — com destaque especial para Jimmy Page — filtradas por uma identidade própria, contemporânea e autoral.',
      'A faixa 1 é um segredo velado que só se revela no lançamento. Em resumo: raízes setentistas, alma moderna e zero pressa — porque música boa não corre, ela permanece.',
      'Projeto: Lameck & Southern Birds Band · Álbum: Check-In After Midnight In Passalacqua · Origem conceitual: IEAS · Lameck S. Fernandes.',
    ],
    duration: '43 min',
    trackCount: 12,
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/3pjTnZyMeCm6foIgVK5Ajn',
    tracks: [
      { title: 'Prelude in E Minor Op.28 No.4' },
      { title: 'A Pelle, Passalacqua, Camera 7' },
      { title: 'Passalacqua, Check-In After Midnight' },
      { title: 'Fire Stone' },
      { title: 'So Excited' },
      { title: 'On Shores Of Lake Como' },
      { title: 'In Your Sinuous Movement' },
      { title: 'Love All’italiana' },
      { title: 'In Their Game Of Exchanging Glances' },
      { title: 'With Me, She Becomes A Woman' },
      { title: "She's A Bad Girl, Too" },
      { title: "My Little Angel, I Don't Want To Hurt You" },
    ],
    clips: [],
  },
  {
    slug: 'instinct-in-minor-key',
    title: 'Instinct in Minor Key',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/lsbb-instinct.webp',
    summary:
      'Segundo capítulo no Spotify: blues e rock instrumental em tom menor — instinto, noite e estrada.',
    description: [
      'Instinct in Minor Key continua a linha de Lameck & Southern Birds Band: composição instrumental com feeling, técnica e clima de estrada. O título aponta para a tonalidade emocional do disco — instinto, sombra e movimento em clave menor.',
      'Projeto: Lameck & Southern Birds Band · Álbum: Instinct in Minor Key · Lameck S. Fernandes.',
    ],
    duration: '36 min',
    trackCount: 10,
    spotifyUrl: 'https://open.spotify.com/album/70ulKmwVvGyPmxLZqwMX7q',
    tracks: [
      { title: 'Instinct in Minor Key' },
      { title: 'The Space Between Bends' },
      { title: 'The Night She Knows' },
      { title: 'Sweet And Beautiful Illusion' },
      { title: 'Electric Blood & Wood' },
      { title: 'Give Me The Signal, Baby' },
      { title: 'The Rains Of Alabama Rise' },
      { title: 'She Knows How Yo Awaken My Instincts' },
      { title: 'Overwound Soul' },
      { title: "She's Lying On My Sailboat Sailing In The Gulf Of Mexico" },
    ],
    clips: [],
  },
];

/**
 * Álbuns de Helena's Son (project-5) — Genesis.
 */
export const helenaSonAlbums: ProjectAlbum[] = [
  {
    slug: 'plastic-grace',
    title: 'Plastic Grace',
    chapter: 'Genesis · 1',
    year: '2025',
    type: 'Album',
    cover: '/images/albums/plastic-grace.webp',
    summary:
      'A revelação da ilusão: graça plástica, fé performática e o grito de libertação contra o silêncio emocional.',
    description: [
      'Plastic Grace expõe a falsidade da perfeição, a espiritualidade moldada e o preço de parecer bem quando tudo está em ruínas por dentro. É um grito de libertação contra o silêncio emocional — um exorcismo feito de raiva, dor e ironia.',
      'O álbum desnuda a espiritualidade corrompida, a fé transformada em instrumento de controle e o amor travestido de redenção. É o retrato de uma alma sufocada pela exigência de pureza, aparência e perdão — crítica à forma como o divino foi domesticado para caber no ego humano.',
      'A luz é plástica: moldada, fria, industrial — brilho artificial do que a sociedade espera ver. Helena rasga esse verniz e expõe o que pulsa por baixo: carne, falha e humanidade. Da culpa à consciência, da fé fingida à raiva lúcida — a “graça” não vem do céu; é sintética. Do plástico queimado nasce a alma crua.',
      'Clima: moderado, introspectivo, contido, espiritual e desconfiado. Temas: crítica à fé institucionalizada, vaidade espiritual, moralidade de fachada, busca por pureza num mundo adulterado.',
      "Projeto: Helena's Son · Álbum: Plastic Grace · Genesis · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.",
    ],
    trackCount: plasticGraceTracks.length,
    tracks: plasticGraceTracks,
    clips: [],
    spotifyUrl: 'https://open.spotify.com/album/3LIbl6h4ZxUaAXqRYN68q2',
    lyricsUrl: 'https://genius.com/albums/Helenas-son/Plastic-grace',
    lyricsLabel: 'Genius',
  },
  {
    slug: 'new-day',
    title: 'New Day',
    chapter: 'Genesis · 2',
    year: '2025',
    type: 'Album',
    cover: '/images/albums/new-day.webp',
    summary:
      'O silêncio após a queda: niilismo, luto existencial e a busca por sentido entre as ruínas da fé.',
    description: [
      'New Day é o segundo capítulo de Genesis. Após perceber a ilusão de Plastic Grace, o personagem mergulha num estado de vazio e perda de propósito. Tudo o que sustentava fé e identidade se dissolve.',
      'O silêncio vira a única resposta — e dói. Não há redenção fácil, apenas lucidez. As letras carregam tristeza contida e exaustão espiritual: alguém que ainda tenta encontrar sentido entre as ruínas do que acreditava.',
      'As faixas principais seguem o lançamento no Spotify. Abaixo da tracklist oficial, o documento Genesis reúne faixas extras que prolongam o clima de luto e desconexão — também listadas no Unplugged.',
      'Clima: denso, melancólico, frio e confessional. Temas: niilismo e esgotamento emocional; a morte da fé e o luto existencial; o peso da lucidez e a solidão após o despertar; busca por significado em meio à ausência de sentido.',
      "Projeto: Helena's Son · Álbum: New Day · Genesis · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.",
    ],
    trackCount: newDayTracks.length,
    tracks: newDayTracks,
    extraTracks: newDayExtraTracks,
    extraTracksLabel: 'Faixas extras',
    clips: [],
    spotifyUrl: 'https://open.spotify.com/album/6ItUU1ZnXNELGTLRCD3r9Y',
    lyricsUrl: 'https://genius.com/albums/Helenas-son/New-day',
    lyricsLabel: 'Genius',
  },
  {
    slug: 'the-computer',
    title: 'The Computer',
    chapter: 'Genesis · 3',
    year: '2025',
    type: 'Album',
    cover: '/images/albums/the-computer.webp',
    summary:
      'O homem e a máquina: conexões falsas, carne e código, e o brilho digital que não salva ninguém.',
    description: [
      'The Computer é o terceiro capítulo de Genesis. O personagem tenta se reconstruir pela tecnologia — e descobre que o mundo digital oferece só uma nova ilusão. A promessa de conexão vira isolamento; o ruído das máquinas espelha o caos interno.',
      'Há mais energia e tensão, mistura de raiva e desespero pela humanidade que se esvai. Letras com metáforas digitais e emoção crua: a mente como sistema sobrecarregado, prestes a falhar.',
      'Clima: energético, elétrico e claustrofóbico. Temas: falsas conexões e solidão digital; fusão entre carne e código; identidade fragmentada; a tecnologia como espelho do vazio humano.',
      "Projeto: Helena's Son · Álbum: The Computer · Genesis · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.",
    ],
    trackCount: theComputerTracks.length,
    tracks: theComputerTracks,
    clips: [],
    spotifyUrl: 'https://open.spotify.com/album/2TqFaz0RQrDm7mDpdVEDOn',
    lyricsUrl: 'https://genius.com/albums/Helenas-son/The-computer',
    lyricsLabel: 'Genius',
  },
  {
    slug: 'unplugged',
    title: 'Unplugged',
    chapter: 'Genesis · 4',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/hs-unplugged.webp',
    summary:
      'An Unforgettable Night (Unplugged): setlist acústica com letras das faixas de estúdio — clique para ler sem sair da página.',
    description: [
      'Unplugged encerra a sequência Genesis com clima sentimental, nostálgico e belo. No Spotify, An Unforgettable Night (Unplugged) [Acoustic Live Versions] reúne intros e faixas de Plastic Grace, New Day e The Computer em versões acústicas / live, além de Protect e Buy the Pain.',
      'A lista abaixo é a tracklist do Spotify. Ao lado de cada título aparece o álbum de origem. Onde a faixa existe em estúdio, o título abre a letra e a tradução no mesmo modal — sem precisar ir a cada álbum.',
      "Projeto: Helena's Son · An Unforgettable Night (Unplugged) · Genesis · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.",
    ],
    trackCount: unpluggedTracks.length,
    tracks: unpluggedTracks,
    clips: [],
    spotifyUrl: 'https://open.spotify.com/album/6p3KSfHU1aG28DI86R6wA3',
  },
];

/**
 * Álbuns de A Grande Multidão (project-4).
 * Sources: https://agrandemultidao.vercel.app/ · Spotify album 2khPW0DgXHc5NcKg3uPZKl
 */
export const aGrandeMultidaoAlbums: ProjectAlbum[] = [
  {
    slug: 'a-verdade-ainda-chama',
    title: 'A Verdade Ainda Chama',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/a-verdade-ainda-chama.webp',
    summary:
      'Álbum conceitual de rock cristão: profecias bíblicas, conflitos humanos e a esperança do Reino de Deus em 12 faixas.',
    description: [
      'A Verdade Ainda Chama é um álbum de A Grande Multidão — obra conceitual de rock cristão que transforma profecias bíblicas, conflitos humanos e a esperança do Reino de Deus em uma experiência musical profunda.',
      'Em um mundo cheio de vozes conflitantes, a verdade continua chamando. Cada canção aborda temas bíblicos — profecia, fé, esperança e o propósito de Deus para a humanidade. Em meio às crises do mundo atual, a mensagem aponta para a esperança do Reino. Influências do rock brasileiro melódico e progressivo, rock clássico, hard rock, alternativo e worship se unem a letras intensas e emocionalmente marcantes.',
      'Ao longo das 12 faixas, o ouvinte percorre a busca pela verdade em um mundo de narrativas conflitantes, os perigos do engano religioso, a perseguição a quem permanece fiel, o sofrimento da humanidade e a esperança das promessas divinas. A mensagem central não é condenação, e sim convite: a misericórdia de Deus continua alcançando pessoas sinceras.',
      'Mais do que uma coleção de músicas, A Verdade Ainda Chama convida a ouvir além do barulho deste mundo e a redescobrir que o propósito de Deus permanece vivo, firme e imutável.',
      'Álbum de A Grande Multidão · 2026 · Compositores: Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.',
    ],
    duration: '57 min',
    trackCount: aVerdadeAindaChamaTracks.length,
    spotifyUrl: 'https://open.spotify.com/album/2khPW0DgXHc5NcKg3uPZKl',
    lyricsUrl: 'https://agrandemultidao.vercel.app/',
    lyricsLabel: 'Letras (site)',
    tracks: aVerdadeAindaChamaTracks,
    clips: [
      {
        id: 'alem-do-odio',
        title: 'Além do Ódio',
        subtitle: 'A Verdade Ainda Chama · A Grande Multidão',
        youtubeId: 'b9QHotS4408',
      },
    ],
  },
];

/**
 * Discography for Bunny Land Music gallery + album detail pages.
 * Sources: Spotify, Bandcamp, and blog posts on agencylk7.wixsite.com/bunny
 */
export const bunnyLandAlbums: ProjectAlbum[] = [
  {
    slug: 'chapter-1-caution-audio-gateway',
    title: 'Caution! Audio Gateway',
    chapter: 'Chapter 1',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/chapter-1-caution-audio-gateway.webp',
    summary:
      'Remix em Dark EDM e Dark Pop do projeto demo Reverse Universe — o portal sonoro que abre a jornada de Bunny Land Music.',
    description: [
      'Bunny Land Music – Caution! Audio Gateway é um projeto conceitual musical que mergulha no universo da música eletrônica com uma abordagem imersiva e experimental. O álbum propõe uma narrativa sonora em que uma playlist misteriosa serve como portal para outra dimensão, desafiando os limites da percepção e da realidade.',
      'Na prática, Caution! Audio Gateway é o remix das músicas do projeto demo Reverse Universe — um trabalho não finalizado cujas faixas originais já estão registradas. Parte desse material foi reimaginada em Dark EDM e Dark Pop; as músicas descritas neste chapter são as novas versões que complementam e relançam o projeto sob o universo Bunny Land Music.',
      'Há uma narrativa na introdução que dá início a essa jornada por Bunny Land Music. Com influências de festivais como Tomorrowland e gêneros como EDM, trance, techno e glitch pop, cada faixa marca uma etapa da transformação sensorial e emocional provocada pelo som.',
      'A personagem Liat, ao chegar em casa depois de um dia exaustivo, adormece ao som de Bunny Land Music – Caution! Audio Gateway e mergulha em outra realidade: o mundo de Bunny Land.',
      'Projeto: Caution! Audio Gateway · Origem: Reverse Universe (demo) · Compositor/DJ: Lameck S. Fernandes · Vulgo: Bunny Land Music.',
    ],
    trackCount: cautionAudioGatewayTracks.length,
    bandcampUrl: 'https://wonderlandsong.bandcamp.com/album/chapter-1-reverse-universe',
    bandcampLabel: 'Reverse Universe Demo',
    tracks: cautionAudioGatewayTracks,
    clips: [
      {
        id: 'apocalipse-in-me-remix',
        title: 'Apocalipse In Me (Remix)',
        subtitle: 'Chapter 1 · Bunny Land Music',
        youtubeId: 'j4Zi3IXLOKM',
      },
      {
        id: 'apocalipse-in-me',
        title: 'Apocalipse In Me',
        subtitle: 'Chapter 1 · Bunny Land Music',
        youtubeId: 'jda4Dbyd5i0',
      },
      {
        id: 'veins-of-autumn',
        title: 'Veins of Autumn',
        subtitle: 'Chapter 1 · Bunny Land Music',
        youtubeId: 'H9GqGZtcR74',
      },
    ],
  },
  {
    slug: 'chapter-2-in-the-forest',
    title: 'In The Forest',
    chapter: 'Chapter 2',
    year: '2025',
    type: 'Album',
    cover: '/images/albums/chapter-2-in-the-forest.webp',
    summary:
      'Uma jornada emocional na floresta sonora: superação, identidade, amor, nostalgia e tecnologia em 14 faixas.',
    description: [
      'Bunny Land Music – In The Forest é um projeto conceitual que cruza gêneros e atmosferas para explorar superação, amor, identidade, tecnologia e empoderamento. Cada música é um trecho dessa jornada — e, juntas, formam uma experiência imersiva para o ouvinte.',
      'Bunny Land Music não é só um conjunto de canções: é uma narrativa sonora em que cada faixa tem um papel. O eixo é a exploração emocional e existencial — autodescoberta, luta, paixão, solidão e renascimento. O título In The Forest sugere a busca pelo desconhecido: um espaço onde emoções, sonhos e desafios se entrelaçam.',
      'O álbum convida a percorrer momentos de descoberta, confronto, desejo, perda e recomeço. Gêneros e influências se misturam num ambiente sonoro diverso; a mensagem central é que todo mundo atravessa mudança — e, no caminho, dá para reencontrar força, identidade e propósito.',
      'Superação e autoconfiança: não importa quantas vezes se caia, sempre há um jeito de se reerguer. Memórias e nostalgia: algumas lembranças assombram, mas também moldam quem somos. Amor e relacionamentos: desejo e ilusão podem prender — e também ensinar a crescer. Tecnologia e futuro: a identidade pode ser recriada, no mundo físico ou digital.',
      'In The Forest é mais do que um álbum: é uma experiência que guia por cenários e emoções, com batida, melodia e letra carregadas de sentido. Cada faixa é um capítulo; o conjunto forma um universo denso, onde a evolução pessoal fica no centro da história.',
      'Projeto: In The Forest · Compositor/DJ: Lameck S. Fernandes · Vulgo: Bunny Land Music.',
    ],
    duration: '42 min',
    trackCount: inTheForestTracks.length,
    spotifyUrl: 'https://open.spotify.com/album/2ds30x0CDVRqQtOZVI6fft',
    tracks: inTheForestTracks,
    clips: [
      {
        id: 'burn-it-down',
        title: 'Burn It Down',
        subtitle: 'Chapter 2 · Bunny Land Music',
        youtubeId: 'C6t6tQo2oPU',
      },
      {
        id: 'runaway-lights',
        title: 'Runaway Lights',
        subtitle: 'Chapter 2 · Bunny Land Music',
        youtubeId: 'bHf1U2Ilh-8',
      },
      {
        id: 'lost-in-time',
        title: 'Lost In Time',
        subtitle: 'Chapter 2 · Bunny Land Music',
        youtubeId: 'CEnr8x4xqbs',
      },
      {
        id: 'lost-in-the-night',
        title: 'Lost In The Night',
        subtitle: 'Synthwave Retro Hit · Chapter 2',
        youtubeId: 'Ff50E_xq8gc',
      },
      {
        id: 'falling-apart',
        title: 'Falling Apart',
        subtitle: 'Chapter 2 · Bunny Land Music',
        youtubeId: 'Vm_uyDy9YSc',
      },
      {
        id: 'take-the-lead',
        title: 'Take The Lead',
        subtitle: 'When Confidence Isn’t Optional · Chapter 2',
        youtubeId: 'k38LDYSDZ4w',
      },
      {
        id: 'no-mercy',
        title: 'No Mercy',
        subtitle: 'The Enemy Within · Chapter 2',
        youtubeId: 'G8DmOS5uFZ4',
      },
      {
        id: 'lost-in-the-night-remix',
        title: 'Lost In The Night - Remix',
        subtitle: 'Chapter 2 · Bunny Land Music',
        youtubeId: 'LX-ZDzQNxjM',
      },
    ],
  },
  {
    slug: 'chapter-3-in-time-with-your-heart',
    title: 'In Time With Your Heart',
    chapter: 'Chapter 3',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/chapter-3-in-time-with-your-heart.webp',
    summary:
      'Álbum conceitual sobre o tempo emocional: desencontros, silêncios, desejo contido e amores que existem mais na sensação do que na ação.',
    description: [
      'In Time With Your Heart é um álbum conceitual que explora o tempo emocional — não o relógio, mas o tempo que cada pessoa vive por dentro. Fala de desencontros, silêncios, limites, desejo contido e amores que existem mais na sensação do que na ação. É um disco sobre sentir antes de estar pronto, amar antes de ser escolhido e aprender, devagar, a respeitar o próprio ritmo do coração.',
      'Neste capítulo as músicas amadurecem: chegam a revelações mais fortes e a sentimentos autênticos. As faixas não contam uma história linear; montam uma jornada íntima e psicológica — expectativa, apego, autocontrole, perda, consciência e, por fim, maturidade. O amor aparece menos como romance idealizado e mais como experiência real: incompleta, ambígua, às vezes dolorosa, mas sempre honesta.',
      'O projeto trabalha presença e ausência. Muitos personagens amam em silêncio, observam, esperam, resistem ou permanecem em relações em que não são totalmente escolhidos. O tempo não resolve tudo depressa — apenas revela. Cada faixa é um momento em que o coração entende algo antes da razão conseguir acompanhar. Cada música é também uma relação — ilusão, platônica ou real — e, no mapa emocional do disco (revelations), cada uma se liga a uma presença.',
      'Sonoramente, o álbum mantém atmosfera introspectiva, noturna e cinematográfica, com dark pop, indie, ambient e R&B alternativo. O foco não está em explosões, e sim em tensão contida, espaços vazios e sentimentos que ecoam. O silêncio entra como parte da música, não como falta dela.',
      'Há ainda um eixo de autorespeito emocional: do desejo de ser visto e escolhido à compreensão de que nem todo sentimento precisa virar vínculo — e que saber partir também é uma forma de amor, por si. Amar “no tempo do coração” é aceitar quando algo ainda não pode ser vivido, ou quando nunca será.',
      'In Time With Your Heart não pede respostas imediatas. Convida à escuta atenta, à identificação silenciosa e à reflexão — para quem já sentiu demais, esperou demais ou precisou aprender que algumas histórias não terminam: apenas se transformam em consciência. Em essência, é sentir com verdade, mesmo sem garantia, e saber que o coração tem o próprio relógio — e ignorá-lo sempre cobra um preço.',
      'Projeto: In Time With Your Heart · Compositor/Produtor: Lameck S. Fernandes · Projeto musical: Bunny Land Music.',
    ],
    warning: 'Este capítulo transmite emoções fortes e revelações íntimas. Ouça com moderação.',
    duration: '1 h 6 min',
    trackCount: inTimeWithYourHeartTracks.length,
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/6aOOALcMvYmoVUQXhOPufv',
    easterEgg: {
      title: 'Revelations',
      subtitle: 'Chapter 3 · In Time With Your Heart',
      intro:
        'Cada música expressa uma relação amorosa: ilusão, platônica ou real. Cada música é uma garota.',
      note: 'Easter egg do álbum — o mapa emocional por trás das faixas.',
    },
    tracks: inTimeWithYourHeartTracks,
    clips: [
      {
        id: 'chapter-3-trailer',
        title: 'Chapter 3 | Trailer',
        subtitle: 'In Time With Your Heart',
        youtubeId: '-6fgoASzoGE',
      },
      {
        id: 'when-you-say-nothing-i-bleed',
        title: 'When You Say Nothing, I Bleed',
        subtitle: 'Chapter 3 · Bunny Land Music',
        youtubeId: '_JCosH8KO4A',
      },
      {
        id: 'velvet-ruin',
        title: 'Velvet Ruin',
        subtitle: 'Chapter 3 · Bunny Land Music',
        youtubeId: 'mOwOT-trV-A',
      },
      {
        id: 'keys-i-never-held',
        title: 'Keys I Never Held',
        subtitle: 'Chapter 3 · Bunny Land Music',
        youtubeId: 'NghLnjWRWnA',
      },
    ],
  },
  {
    slug: 'chapter-4-listen-to-daddy',
    title: 'Listen To Daddy',
    chapter: 'Chapter 4',
    year: '2026',
    type: 'Album',
    cover: '/images/albums/listen-to-daddy.webp',
    summary:
      'Uma voz de orientação e cuidado: escuta, presença e maturidade emocional — o quarto capítulo do Bunny Land Music.',
    description: [
      'Listen To Daddy é um álbum conceitual construído como voz de orientação, proteção e maturidade emocional — quase um pai falando com um filho, ou com alguém mais jovem, em momentos de dúvida, dor e transição. O disco não parte de quem está perdido, e sim de quem já atravessou erro, queda e aprendizado, e agora oferece palavras que não controlam: apenas sustentam.',
      'O tema central é a escuta. Não só ouvir o outro, mas aprender a ouvir a si mesmo quando tudo parece confuso. As músicas funcionam como conselhos calmos em meio ao caos — escolhas, consequências, orgulho, paciência, força interior, limites e esperança. Não há julgamento nem imposição; há presença. A figura do “Daddy” não é autoritária: é firme, acolhedora e consciente do tempo de cada um.',
      'As faixas traçam uma jornada da fragilidade à estabilidade. O ouvinte passa por medo, raiva contida, culpa, resistência e exaustão, até a ideia de que crescer não é vencer sempre, e sim permanecer inteiro quando tudo falha. Cair não é o fim; força não está em endurecer, e sim em soltar pesos desnecessários.',
      'O álbum trabalha responsabilidade emocional. Diferente do amor romântico, o cuidado aqui é estruturante: saber quando não reagir, quando respirar, quando esperar, quando se levantar e quando simplesmente continuar. Muitas letras soam como instruções simples — “continue”, “não quebre”, “deixe ir” — porque, em certos momentos, o essencial precisa ser direto.',
      'Sonoramente, mantém a identidade cinematográfica e introspectiva do Bunny Land Music, com mais foco em estabilidade e chão emocional. Produções profundas, contidas e sólidas; andamentos médios a lentos; harmonias quentes e sensação de amparo. Silêncio e repetição reforçam a constância — alguém que permanece ao lado, mesmo sem falar muito.',
      'Há também uma espiritualidade humana — não religiosa — como força interior, consciência e continuidade. O espírito que não cai, o peso que pode ser solto, o pertencer mesmo em silêncio atravessam as faixas e dão unidade ao disco.',
      'Listen To Daddy não busca impacto imediato. É um álbum para pausa, reconstrução e escuta interna: não empurra o ouvinte para frente — segura a mão enquanto ele aprende a andar no próprio ritmo. Em essência, é crescer sem perder a sensibilidade, aprender com quem já esteve lá, e entender que ouvir uma voz firme e amorosa — externa ou interna — pode ser a diferença entre quebrar e continuar.',
      'Projeto: Listen To Daddy · Compositor/Produtor: Lameck S. Fernandes · Projeto musical: Bunny Land Music.',
    ],
    duration: '46 min',
    trackCount: listenToDaddyTracks.length,
    spotifyUrl: 'https://open.spotify.com/album/5LmYLnlAgYhi6tTrP2WLYg',
    tracks: listenToDaddyTracks,
    clips: [
      {
        id: 'spirit-that-wont-fall-short',
        title: 'Spirit That Won’t Fall',
        subtitle: 'Short · Chapter 4 · Listen To Daddy',
        youtubeId: 'XK4UWvd-a_A',
        isShort: true,
      },
    ],
  },
];

/** All project detail pages keyed by URL slug (`/projects/:slug`). */
export const projectDetailsBySlug: Record<string, ProjectDetail> = {
  [bunnyLandMusic.slug]: bunnyLandMusic,
  [rosaNegraHalfeti.slug]: rosaNegraHalfeti,
  [aGrandeMultidao.slug]: aGrandeMultidao,
  [helenaSon.slug]: helenaSon,
  [ussShenandoah.slug]: ussShenandoah,
  [lameckSouthernBirdsBand.slug]: lameckSouthernBirdsBand,
};

/** Discographies keyed by project slug. */
export const projectAlbumsBySlug: Record<string, ProjectAlbum[]> = {
  [bunnyLandMusic.slug]: bunnyLandAlbums,
  [rosaNegraHalfeti.slug]: rosaNegraHalfetiAlbums,
  [aGrandeMultidao.slug]: aGrandeMultidaoAlbums,
  [helenaSon.slug]: helenaSonAlbums,
  [ussShenandoah.slug]: ussShenandoahAlbums,
  [lameckSouthernBirdsBand.slug]: lameckSouthernBirdsBandAlbums,
};

export function getProjectDetailBySlug(slug: string): ProjectDetail | undefined {
  return projectDetailsBySlug[slug];
}

export function getProjectAlbums(projectSlug: string): ProjectAlbum[] {
  return projectAlbumsBySlug[projectSlug] ?? [];
}

export function getProjectAlbum(
  projectSlug: string,
  albumSlug: string,
): ProjectAlbum | undefined {
  return getProjectAlbums(projectSlug).find((album) => album.slug === albumSlug);
}

/** @deprecated Prefer getProjectAlbum('bunny-land-music', slug). */
export function getBunnyAlbumBySlug(slug: string): ProjectAlbum | undefined {
  return getProjectAlbum(bunnyLandMusic.slug, slug);
}

export const artists: Artist[] = [
  {
    id: 'maya',
    name: 'Maya Vale',
    role: 'Composer & Voice',
    image: '/images/artists/maya.svg',
    description: 'Shapes narrative songs with intimate textures and cinematic pacing.',
  },
  {
    id: 'joao',
    name: 'João Lumen',
    role: 'Producer & Sound Design',
    image: '/images/artists/joao.svg',
    description: 'Builds modular sound worlds that move between analogue and digital.',
  },
  {
    id: 'nora',
    name: 'Nora Sol',
    role: 'Visual Direction',
    image: '/images/artists/nora.svg',
    description: 'Creates dreamlike visual systems that echo the music’s emotional range.',
  },
];

export const releases: Release[] = [
  {
    id: 'silver-echo',
    title: 'Silver Echo',
    type: 'Single',
    year: '2026',
    image: '/images/releases/silver-echo.svg',
  },
  {
    id: 'night-archive',
    title: 'Night Archive',
    type: 'EP',
    year: '2025',
    image: '/images/releases/night-archive.svg',
  },
  {
    id: 'circuit-garden',
    title: 'Circuit Garden',
    type: 'Album',
    year: '2024',
    image: '/images/releases/circuit-garden.svg',
  },
];
