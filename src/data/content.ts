import type { Artist, ProjectAlbum, ProjectDetail, Release } from '../types';
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
import { hereticsForkTracks } from './heretics-fork-lyrics';
import { echoesOfRedemptionTracks } from './resonance-lyrics';
import { simplesmenteEuTracks } from './rnh-lyrics';
import { uss1937Tracks } from './uss-1937-lyrics';

/** Re-export home panels for any legacy import of content.ts */
export { projects } from './home-projects';

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
        'Conheci no YouTube a [Jenn Sakura](https://www.youtube.com/@sakurajenn), na época estudante de música em Berklee (EUA). Ela fazia lives no Twitch com histórias, música e jogos. Com o tempo voltou ao país onde está hoje e parou de transmitir — o canal dela ficou com amigos.',
        'Ela brincava com o trocadilho “Jenn is a genius”, em referência ao programa “Jenny é um gênio”. Cheguei a fazer uma música de aniversário inspirada no tema de Alita — mas isso fica para outra história.',
        'Depois que ela sumiu das lives, passei a seguir outros canais. Um deles chamou atenção: [Sasha Grey](https://www.twitch.tv/sashagrey), que conheci jogando Lost Ark. Descobri que ela também é DJ, fui atrás dos mixes e comecei a brincar com a linguagem do som.',
      ],
    },
    {
      id: 'spark',
      title: 'A faísca',
      paragraphs: [
        '[Sasha](https://www.twitch.tv/sashagrey) me inspirou a começar o projeto depois que descobri que ela também era DJ.',
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
      id: 'remix-path',
      title: 'Do remix à produção',
      paragraphs: [
        'No começo, comecei remixando músicas de outros artistas: ouvir a estrutura original, reimaginar batida, arranjo e clima, e publicar o resultado. Era o caminho prático para entrar na música eletrônica — experimentar, errar, ouvir de novo e melhorar.',
        'Com o tempo, o ofício foi se aperfeiçoando: remix e remasterização passaram a exigir mais cuidado com mixagem, dinâmica, equilíbrio de frequências e acabamento de produção musical. Cada nova versão era um passo a mais em direção a um som mais limpo, intencional e profissional.',
        'Alguns desses trabalhos, publicados no YouTube sob o selo Bunny Land / LK7, documentam essa trajetória: [Cathy Burton & Omnia — Hearts Connected (remix LK7)](https://www.youtube.com/watch?v=OHkcJcqW7uo); [BLACKPINK — Kill This Love (High-Energy EDM Version feat. LK7)](https://www.youtube.com/watch?v=0ECow_j4lDA); [Aaliah — Try Again (remix LK7)](https://www.youtube.com/watch?v=ArnSeNVIdGc); [Fergie — Fergalicious (remix LK7)](https://www.youtube.com/watch?v=mewg3GOoxgQ); [Jisoo — Flower](https://www.youtube.com/watch?v=USVmWfw0ll4); [Madonna — Beautiful Stranger (Isabela cover feat. remix LK7)](https://www.youtube.com/watch?v=e-U8iUmyYdI); [Zandros — Obsessed (remix LK7)](https://www.youtube.com/watch?v=tHQw4R0VJao); [Swedish House Mafia & The Weeknd — Moth To a Flame (remix LK7)](https://www.youtube.com/watch?v=rV8TIcchEyA).',
        'Cheguei a iniciar um making of para mostrar, em detalhe, como os remixes eram feitos — etapas, decisões e bastidores. No entanto, o tempo gasto em documentar cada passo acabou pesando: optei por perder menos tempo na narrativa do processo e investir mais na própria produção. Como exemplo do que chegou a ser registrado, fica o making of do remix de BLACKPINK — Kill This Love: [Making of Bunny Land · Kill This Love (feat. remix LK7)](https://agencylk7.wixsite.com/bunny/post/making-of-banny-land-black-pink-kill-this-love-feat-remix-lk7).',
        'Depois de usar uma versão não oficial do FL Studio — e de enfrentar, com ela, vários problemas técnicos —, fui aprendendo a ferramenta. Em seguida, adquiri a licença full vitalícia por míseros quinhentos reais. A grande vantagem da versão vitalícia são as atualizações contínuas e sem prazo de validade: em cerca de cinco anos desde então, inúmeros recursos foram aperfeiçoados e criados, sobretudo com o apoio da inteligência artificial.',
        'A separação de stems, por exemplo, passou a ser possível dentro do próprio FL Studio, sem depender de utilitários externos como o removeVoice citado no making of do remix de BLACKPINK. Criar e clonar vozes, ou empregar cantores virtuais para acompanhar a música, também ficou bem mais acessível. Escrevo partituras no Guitar Pro — o que abre novas possibilidades de timbres para elementos MIDI — e gravo instrumentos por meio de uma interface de áudio. Produzir músicas, de fato, tornou-se mais simples na era da IA — e o Bunny Land Music acompanha essa evolução.',
      ],
      featuredVideo: {
        youtubeId: 'ArnSeNVIdGc',
        title: 'Try Again (remix LK7)',
        subtitle: 'Aaliah · Bunny Land',
      },
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
    clips: [
      {
        id: 'paralelos-fractais',
        title: 'Paralelos Fractais',
        subtitle: 'Simplesmente eu… · Rosa Negra de Halfeti',
        youtubeId: '_xHNXhUetcQ',
      },
    ],
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
 * História do projeto: post Wix “The Story of Helena's Son”.
 * Detalhe de cada disco Genesis fica na página do álbum.
 * https://agencylk7.wixsite.com/wonderlandsong/post/the-story-of-helena-s-son
 */
export const helenaSon: ProjectDetail = {
  slug: 'helena-son',
  title: "Helena's Son",
  category: 'Grunge',
  image: '/images/hs2.webp',
  imagePositionMobile: 'center 22%',
  tagline:
    'Projeto grunge inspirado em Alice in Chains: tristeza, raiva, amor e o cotidiano em sonoridade densa e crua.',
  historyTitle: "Sobre Helena's Son",
  historyLead:
    "Helena's Son é um projeto grunge inspirado em Alice in Chains, cujos temas abordam tristeza, raiva, amor e demais questões do cotidiano. O projeto nasceu em Passos–MG, no contexto de isolamento, do retorno à guitarra e da decisão de voltar a compor.",
  pullQuote:
    'Helena representa o simbolismo da injustiça disfarçada de verdade absoluta.',
  footerNote: "Helena's Son · Grunge · Genesis · Wonderland Song",
  albumsEmptyMessage: 'Os álbuns de Helena’s Son serão adicionados em breve.',
  historySourceUrl:
    'https://agencylk7.wixsite.com/wonderlandsong/post/the-story-of-helena-s-son',
  historySourceLabel: "The Story of Helena's Son",
  historySections: [
    {
      id: 'passos-2018',
      title: '4 de agosto de 2018 — Passos, Minas Gerais',
      paragraphs: [
        'Por volta daquela época, após o retorno de São Paulo, Lameck isolou-se de tudo e de todos. Por motivo particular que prefere não detalhar, necessitava de tempo para se reencontrar. Encontrou na música uma forma de conforto. Havia longo período sem retomar a guitarra — desde os tempos da faculdade, aproximadamente nove ou dez anos.',
        'Naquele período, um amigo deixara a banda em que tocava baixo, os Madsneaks: Adriano (Catatal). Ele realizava jams com a nova formação na garagem. Conversavam sobre bandas, composições e a trajetória da antiga banda. Lameck dedicava-se ao estudo de músicas do [Hammer of the Gods](https://www.youtube.com/watch?v=lK-c0lyc8-M&list=PLwQ8TCZAotl__JwfRh0FA1HgCsrFZnjWm) — banda de Cláudio Merlin, da época. Após ouvir [“Visions of the Beyond”](https://www.youtube.com/watch?v=MuaHm2Mcy1A), do álbum Hamlet — que reunia grandes bandas nacionais daquele período —, decidiu transcrever todas as faixas do Hammer of the Gods em partitura.',
      ],
    },
    {
      id: 'first-songs',
      title: 'Os primeiros riffs',
      paragraphs: [
        'Surgiu, então, com Catatal, a ideia de compor riffs em estilo grunge que pudessem integrar um projeto. Foi assim que nasceu “Drowning In Your Worlds”. Lameck aprofundou-se em Alice in Chains; as influências do amigo inclinavam-se mais a Nirvana. Não dispunha de home studio — apenas do Guitar Pro. Nele escreveu a partitura, editou o material e exportou o arquivo MP3 com a mesma ferramenta.',
        'Quando se ouvem os [singles de Helena’s Son](https://soundcloud.com/wonderland_song/sets/helena-son), costuma-se supor que tenham sido produzidos em home studio. Não o foram: a totalidade foi escrita e editada no Guitar Pro 6. Após apresentar o trabalho a Catatal, que o recebeu com aprovação, entregou-lhe a partitura. Ainda sob o impulso da inspiração, nasceu a segunda faixa: “Ain’t A Rotten Heart”. Acrescentou letra a fim de imaginar a peça com voz. Sem domínio pleno do inglês e sem hábito de cantar, decidiu procurar um vocalista.',
      ],
    },
    {
      id: 'name',
      title: 'O nome do projeto',
      paragraphs: [
        'Antes de publicar as músicas no [SoundCloud](https://soundcloud.com/wonderland_song/sets/helena-son), o projeto carecia de um nome. Ao ouvir intensamente Alice in Chains — em boa medida por indicação do algoritmo do YouTube —, o filme Alice no País das Maravilhas foi-lhe recomendado. O tema agradou; já havia sido empregado em um projeto anterior (Ken and Klein). Imagens de Alice auxiliaram na inspiração e, em busca de uma capa para o que viria a ser o álbum, encontrou a imagem que se tornaria a capa oficial: a mulher na água evocava o “teste” medieval empregado nas acusações de bruxaria — o que conduziu à figura de Helena Curtens.',
        'Helena Curtens foi uma mulher alemã acusada de bruxaria e executada em 1738, em Kempten, na Baviera — acusada de provocar mortes por feitiçaria e de celebrar pacto com o diabo. Em contexto de caça às bruxas e de superstição, os processos frequentemente se apoiavam em provas frágeis. Após a prisão, foi torturada e confessou; em seguida, retratou-se. Foi condenada à morte por enforcamento e executada em público. Hoje, sua história é citada como exemplo do medo e da superstição que cercavam tais perseguições na Europa dos séculos XVII e XVIII.',
        'Como o projeto previa vocal masculino, o nome escolhido foi Helena’s Son — inspirado em Helena Curtens. Antes de qualquer interpretação: não se trata de prática de magia. A intenção é expor a injustiça praticada por quem se apresenta como detentor da verdade absoluta — a ponto de cometer atrocidades e de disfarçar a violência sob o manto da “justiça”, apenas por discordar de ideias ou convicções alheias. Ainda hoje, pessoas podem ser perseguidas pelo que pensam, por quem são ou pelo que possuem. Helena representa o simbolismo desse conceito.',
      ],
    },
    {
      id: 'drafts',
      title: 'Rascunhos e a busca por voz',
      paragraphs: [
        'Sem grande experiência na busca de vocalistas, tentou parcerias em sítios voltados à formação de grupos e ao encontro de interesses em comum — sem êxito. Em seguida, recorreu a grupos de redes sociais ligados ao grunge (admiradores de Alice in Chains, Nirvana, Pearl Jam e afins). A maioria não respondia. Quase a desistir, a amiga que hoje é sua esposa convidou-o a permanecer na residência que ela alugava em São Paulo. Interrompeu a produção musical por cerca de dois anos e meio.',
        'Ainda em São Paulo, retomou projetos musicais: remixes (como Samael) e singles por puro prazer. Ao ouvir novamente o material de Helena’s Son, decidiu concluir o álbum. Contatou o [airgigs.com](https://www.airgigs.com/) e abriu um projeto em busca de vocalista para “Ain’t A Rotten Heart”. Após curadoria, conheceu Ser Ouj, da Califórnia — assim se identificava; Lameck acredita que seja de origem indiana.',
        'Enviou a ideia da letra e solicitou amostras de, no mínimo, vinte segundos. O resultado distou bastante do que imaginava. Explicou novamente; houve chamada de Skype — dificultada pelo sotaque e pelo inglês limitado de ambos — e, por fim, um vídeo detalhando trecho a trecho. Ser Ouj empenhou-se e também reescreveu a letra, aproximando-a do meio em que o inglês é falado. Houve adiantamento, demos e seleção: a introdução agradou; a ponte e o refrão, menos. Parte desse material encontra-se em [arquivos no Drive](https://drive.google.com/drive/folders/1zCp_pyR6EsLDuVLTnT9VPn-0-vQOlxMr) (também mencionados no [SoundCloud](https://soundcloud.com/wonderland_song/sets/helena-son)). A faixa não foi concluída; o trabalho cotidiano consumiu o tempo disponível. A experiência no airgigs permitiu repensar o método de busca de vocalistas — abordagem que, mais tarde, mostrou-se eficaz em outro projeto (Nile Seeds).',
      ],
    },
    {
      id: 'distribution',
      title: 'Distribuição',
      paragraphs: [
        'A música foi distribuída pela Tratore. Os retornos financeiros ficaram aquém dos obtidos com outras distribuidoras, e o perfil cadastrado não correspondia ao do artista — registrado de forma incorreta sob LK7. Esse foi um dos motivos que levaram à busca de outros meios de distribuição. O contato com a Tratore resultou de um curso de negócios da música oferecido pelo Palco Digital.',
      ],
    },
    {
      id: 'genesis-2025',
      title: "Helena's Son Genesis",
      paragraphs: [
        'Em 2025, o projeto foi retomado — desta vez com experiência consideravelmente maior em música, produção e composição. O que se iniciara como hobby evoluiu com naturalidade. Em companhia de amigos, reconstruíram o projeto, preservando a essência do grunge e permitindo-lhe amadurecer.',
        'O método de composição de Lameck assemelha-se ao de redigir um ensaio: planejar antes de executar favorece a compreensão do trabalho como um todo — temas, identidade visual e capa, o assunto de cada canção e a visão clara de como o projeto deve soar. Esse processo confere coerência à música e faz com que cada elemento sirva à mesma narrativa: nada existe por acaso. O detalhe de cada álbum do ciclo Genesis encontra-se na página do disco correspondente.',
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
    'Do Guitar Pro em Passos ao Genesis em 2025: Helena’s Son é grunge que carrega memória, a denúncia da injustiça e a perseverança de quem retorna à composição.',
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3w2iPAIrdoXXzJ38C59np8',
  spotifyLabel: 'Ouvir no Spotify',
};

/**
 * USS Shenandoah — project-6 detail page (home: project-6).
 * Álbum 1937 e sua explicação ficam na página do álbum.
 * Antes: Graf Hindenburg / LZ 129 — renomeado por associação histórica indesejada.
 * Fonte: https://agencylk7.wixsite.com/graf-hindenburg/post/the-graf-hindenburg
 */
export const ussShenandoah: ProjectDetail = {
  slug: 'uss-shenandoah',
  title: 'USS Shenandoah',
  category: 'Hard Rock · 60/70',
  image: '/images/usss.webp',
  imagePositionMobile: 'center 32%',
  tagline:
    'Hard rock clássico, influência de Led Zeppelin e a jornada de um dirigível: dos covers na garagem ao álbum autoral 1937.',
  historyTitle: 'Sobre USS Shenandoah',
  historyLead:
    'USS Shenandoah é um projeto musical de Lameck, Adriano (Catatal) e Rodrigo Alves: começa com covers de bandas favoritas, passa por releituras hard rock de clássicos e chega a composições próprias — sempre com o peso e o groove dos anos 60 e 70, e com forte influência de Led Zeppelin.',
  pullQuote:
    'Música é diversão. Esse é o nosso lazer nos finais de semana — estudar, ensaiar e deixar o som cada vez mais próximo do que a gente imagina.',
  footerNote: 'USS Shenandoah · Hard Rock · Anos 60/70 · Antes: Graf Hindenburg',
  albumsEmptyMessage: 'Os álbuns de USS Shenandoah serão adicionados em breve.',
  historySections: [
    {
      id: 'origin',
      title: 'Como tudo começa',
      paragraphs: [
        'O projeto nasce dos covers das bandas favoritas, enquanto o trio estuda música e experimenta o som — inclusive no Garagem\' Bar do Adriano. A arte do projeto carrega a influência de Led Zeppelin: riffs, peso, groove e uma estética de hard rock clássico.',
        'Os ensaios acontecem na casa do Adriano, nas noites de terça-feira. A meta é simples e exigente: fechar cada música como ela deve soar — e, na prática, isso costuma significar tocar a mesma faixa trinta vezes ou mais até a energia encaixar.',
        'O foco não era só “aprender a música”: era produzir aquele som ao vivo. Estudar a faixa, timbrar tudo, e chegar o mais perto possível do original em sala de ensaio — com a mesma intensidade de quem grava e de quem sobe no palco.',
      ],
    },
    {
      id: 'tone-and-pedals',
      title: 'Timbre, making-of e pedais analógicos',
      paragraphs: [
        'O trabalho de produção de som foi deliberado e documentado: para cada música, escreveu-se um making-of baseado no setting que havia sido montado — o caminho do sinal, as decisões de timbre e o que funcionava (ou não) em ensaio. Os making-ofs e estudos de timbragem estão em: [https://agencylk7.wixsite.com/graf-hindenburg/post/estudos-1#viewer-v7ael138465](https://agencylk7.wixsite.com/graf-hindenburg/post/estudos-1#viewer-v7ael138465).',
        'Vários pedais analógicos entraram na cadeia. O sonho era ter aquele setup real: testava-se tudo no home studio com Amplitube 5 e, quando o timbre fechava, compravam-se os pedais referentes — os equivalentes físicos do que soava bem no software. Não se usava pedaleira digital na época: a aposta era analog, com setting stereo e duas caixas amplificadas, cada uma com saída e timbre diferentes, para aproximar o som do original em trechos específicos.',
        'Hoje, no retrospecto, o digital costuma ser o caminho preferido: mais cômodo, rápido e fácil — e a cadeia fica menor. Naquele momento, porém, o rito era outro: provar no Amplitube, comprar o analógico, documentar o making-of e levar o setting para a terça à noite.',
      ],
    },
    {
      id: 'phase-1',
      title: 'Fase 1 — Covers das bandas favoritas',
      paragraphs: [
        'A primeira fase é o repertório de covers em constante ajuste: ordem, sequência e a energia que se quer levar ao palco (ou ao próximo ensaio). É o laboratório em que se aprende a música por dentro — arranjo, dinâmica e feeling — e em que se constrói o som ao vivo, música a música.',
        'O repertório desta fase está reunido nesta playlist no YouTube: [https://www.youtube.com/playlist?list=PLvFwlimtvenMB6M0AzX17T54nCvXuRBKF](https://www.youtube.com/playlist?list=PLvFwlimtvenMB6M0AzX17T54nCvXuRBKF).',
        'Por um tempo, o trabalho era sobretudo ensaio e produção de timbre: aprender e relembrar músicas, ajustar instrumentos com luthier da cidade vizinha, completar a pedaleira analógica. Uma experiência de lazer e estudo — antes de qualquer apresentação formal.',
      ],
    },
    {
      id: 'phase-2',
      title: 'Fase 2 — Clássicos em hard rock',
      paragraphs: [
        'A segunda fase já está em andamento: transpor clássicos de artistas e épocas que inspiraram as bandas dos anos 60 e 70 para versões hard rock. A ideia treina composição, regência e harmonia — e estimula a criatividade com releituras rock and roll daquele período.',
        'Não é um conceito isolado na história do rock: Jimmy Page fez caminhos parecidos com material clássico no universo Zeppelin; e projetos recentes, como o de Slash com releituras de clássicos, seguem a mesma linha de reimaginar o passado com linguagem de rock. A referência ajuda a enquadrar o exercício: [https://www.youtube.com/watch?v=gStYftT3ybM&ab_channel=SeattleStoodios](https://www.youtube.com/watch?v=gStYftT3ybM&ab_channel=SeattleStoodios).',
        'As músicas candidatas desta fase estão nesta playlist: [https://www.youtube.com/watch?v=mVHyVjUYJ98&list=PLvFwlimtvenNRABWDHCoOAyxxJscEJXvP&ab_channel=CatBurglars](https://www.youtube.com/watch?v=mVHyVjUYJ98&list=PLvFwlimtvenNRABWDHCoOAyxxJscEJXvP&ab_channel=CatBurglars).',
        'Uma amostra do processo: Howlin\' Wolf — “Smokestack Lightning”. A base já foi escrita no Guitar Pro (sem edição final de áudio); arranjos seguem em aberto para experimentar nos ensaios. O arquivo da base (só escrita, sem mix): [https://drive.google.com/file/d/167YuzrKGkzaweOYVxkCxs3jYAnfPjr8D/view?usp=sharing](https://drive.google.com/file/d/167YuzrKGkzaweOYVxkCxs3jYAnfPjr8D/view?usp=sharing).',
      ],
    },
    {
      id: 'phase-3',
      title: 'Fase 3 — Composições próprias e o álbum',
      paragraphs: [
        'A terceira fase, no começo, era uma incógnita: experimentar e ver o que nascia. Com o tempo, o grupo deu uma pausa nos covers — estava, por exemplo, tirando material na linha Greta Van Fleet — e passou a compor a partir de rascunhos antigos.',
        'No fim, as músicas fecharam um álbum. É o capítulo autoral do projeto: a linguagem hard rock dos anos 60/70 aplicada a material próprio, depois de ter passado pelos covers e pelas releituras de clássicos.',
      ],
    },
    {
      id: 'rename',
      title: 'De Graf Hindenburg a USS Shenandoah',
      paragraphs: [
        'O projeto se chamava Graf Hindenburg (e o primeiro capítulo, LZ 129). “Graf”, em alemão, é o título de conde — o mesmo do famoso dirigível Graf Zeppelin, em homenagem a Ferdinand von Zeppelin. O LZ 129 Hindenburg, por sua vez, é o grande dirigível rígido dos anos 1930, conhecido tanto pelo luxo das travessias transatlânticas quanto pelo desastre de 6 de maio de 1937 em Lakehurst, Nova Jersey — o fim simbólico da era dos grandes dirigíveis de passageiros.',
        'A escolha do nome sempre foi estético-conceitual: algo ligado a dirigíveis e à aura de inovação, escala e drama aéreo — e fortemente alinhado à imagética e à influência de Led Zeppelin. Não havia intenção política.',
        'Na hora de publicar o material, notou-se que “Hindenburg” carrega associações com o regime alemão daquela época — uma ligação indesejada para o projeto. Por isso o nome mudou para USS Shenandoah: ainda no universo dos dirigíveis, ainda na metáfora de voo e escala, mas com outra referência histórica e sem o peso da associação anterior.',
      ],
    },
    {
      id: 'lineup',
      title: 'Formação',
      paragraphs: [
        'Bateria: Rodrigo Alves · Guitarra: Lameck · Baixo: Adriano (Catatal). Vocal fixo ainda em aberto; por enquanto usam-se playbacks na linha de referência (Robert Plant no papel de voz-guia dos covers).',
        'Para um som mais rico e próximo do original, entram amigos em violões, guitarra base, órgão, sintetizadores e vozes extras — o reforço que o hard rock clássico pede quando se quer textura de banda completa.',
        'Conforme os estudos avançam, materiais de timbragem e making-ofs (Amplitube 5, Guitar Rig 7 e afins) vão sendo compartilhados. Música é diversão: lazer de fim de semana, ofício em construção e, quando fizer sentido, apresentação.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        'Projeto: USS Shenandoah (antes: Graf Hindenburg / LZ 129) · Lameck · Adriano Lima (Catatal) · Rodrigo Alves · Gênero: hard rock clássico · Influências: Led Zeppelin e rock dos anos 60/70 · Universo Wonderland Song.',
      ],
    },
  ],
  historySourceUrl:
    'https://agencylk7.wixsite.com/graf-hindenburg/post/the-graf-hindenburg',
  historySourceLabel: 'The Graf Hindenburg (arquivo)',
  spotifyUrl: 'https://open.spotify.com/intl-pt/artist/008vDYJA7fvRWxchF8QN1F',
  spotifyLabel: 'Ouvir no Spotify',
  youtubeUrl: 'https://www.youtube.com/playlist?list=PLvFwlimtvenMB6M0AzX17T54nCvXuRBKF',
  youtubeLabel: 'Playlist · Covers',
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
      'Primeiro álbum autoral: hard rock dos anos 60/70 nascido depois dos covers e das releituras — peso, groove e gravação orgânica.',
    description: [
      '1937 é o álbum conceitual e autoral de hard rock do projeto USS Shenandoah, criado por Lameck, Rodrigo Alves e Adriano Lima. O título ecoa o ano que marcou o fim da era dos grandes dirigíveis — e o imaginário que deu nome ao projeto (primeiro Graf Hindenburg / LZ 129, depois USS Shenandoah).',
      'O disco fecha a terceira fase da jornada: depois dos covers das bandas favoritas e das releituras hard rock de clássicos, o trio passou a compor a partir de rascunhos do passado. O resultado reúne guitarras distorcidas, riffs marcantes, órgão vintage e uma abordagem mais orgânica de gravação — a linguagem dos anos 60 e 70, com forte influência de Led Zeppelin.',
      'Inspirado na energia e na estética do rock do final da década de 1960, o álbum busca uma atmosfera intensa e autêntica, em que os instrumentos têm presença forte e a música se desenvolve com expressividade. Combina peso, groove e sensibilidade — rock direto, com personalidade.',
      'Mais do que copiar um estilo antigo, 1937 reinterpreta essa estética clássica com material próprio: o ponto de chegada de um processo de estudo, ensaio e diversão que começou na garagem e nas terças à noite.',
      'Projeto: USS Shenandoah · Álbum: 1937 · Lameck · Adriano Lima (Catatal) · Rodrigo Alves.',
    ],
    duration: '58 min',
    trackCount: uss1937Tracks.length,
    spotifyUrl: 'https://open.spotify.com/album/0qkcfpR2jWwbN1lExyZAjw',
    tracks: uss1937Tracks,
    clips: [
      {
        id: 'when-the-silence-learns-to-scream',
        title: 'When the Silence Learns to Scream',
        subtitle: '1937 · USS Shenandoah',
        youtubeId: 'PoIBsxWP1ho',
      },
    ],
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
      'Conceito e capa: a falsidade da perfeição, a espiritualidade moldada e a falsa luz diante do fim iminente.',
    description: [
      'Conceito — O disco Plastic Grace expõe a falsidade da perfeição, a espiritualidade moldada e o preço de parecer bem quando tudo se encontra em ruínas por dentro. Constitui um grito de libertação contra o silêncio emocional: um exorcismo feito de raiva, dor e ironia.',
      'Plastic Grace desnuda a espiritualidade corrompida, a fé transformada em instrumento de controle e o amor travestido de redenção. É o retrato de uma alma sufocada pela exigência de pureza, aparência e perdão — uma crítica à forma como o divino foi domesticado para caber no ego humano.',
      'A luz é plástica: moldada, fria, industrial — um brilho artificial que reflete o que a sociedade espera ver: virtude sem verdade, piedade sem empatia. Helena, contudo, rasga esse verniz e expõe o que pulsa por baixo: carne, falha e humanidade.',
      'O álbum é uma jornada da culpa à consciência, da fé fingida à raiva lúcida, em que a “graça” não provém do céu, mas se apresenta sintética, vendida em vitrines emocionais, reciclada em discursos e consumida como consolo. Plastic Grace não busca a fé: derrete-a. E do plástico queimado nasce algo mais verdadeiro — a alma crua, humana e imperfeita.',
      'A capa de Plastic Grace — a falsa luz e o fim iminente. Os discos voadores não representam falsidade, mas uma metáfora visual de Cristo e de seus anjos: mensageiros da justiça divina, vindos para pôr fim ao sistema de coisas. A escolha dessa imagem evita a literalidade do apocalipse bíblico e transmite a mensagem de forma simbólica e reflexiva. Mostra o momento em que a verdade espiritual se manifesta sobre o mundo corrompido, revelando o contraste entre aparência e essência, fé e hipocrisia. Não se trata de ficção: é a representação artística do julgamento espiritual, em que a luz desce não para entreter, mas para corrigir e expor o que está oculto.',
      'A estética retrô e colorida da destruição tem função crítica: mostra como até o apocalipse seria utilizado como publicidade nas mãos erradas. O mundo de Plastic Grace é aquele em que a mentira se vende bem, em que até a ideia do “fim” é distorcida por quem lucra com o medo e com a fé. Por isso, a capa não é literal — é um espelho sarcástico de como o sagrado seria manipulado em tempos modernos.',
      'Síntese simbólica da capa: os discos voadores simbolizam Cristo e seus anjos, vindos para destruir o sistema de coisas; as explosões e o caos urbano representam a destruição moral e espiritual dos hipócritas.',
      "Projeto: Helena's Son · Álbum: Plastic Grace · Genesis · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.",
    ],
    previewVideo: '/videos/hs-preview.webm',
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
      'Conceito e símbolo: o colapso interior, o renascimento em ruína e a Medusa como espelho do eu quebrado.',
    description: [
      'Conceito — O disco New Day é uma reflexão sobre o colapso interior: uma tentativa de renascer após o fim, entre a dor, o silêncio e o reconhecimento da própria falha. Não se trata de um amanhecer de esperança, mas de consciência. É o som de quem acorda em um mundo queimado e, ainda assim, decide respirar.',
      'New Day aborda o renascimento em meio à ruína, em que a luz não salva — apenas revela o que restou. As letras exploram o vazio, a culpa, o amor desgastado e a fé perdida, não como lamentos, mas como espelhos. O eu lírico não busca redenção: observa, analisa e sangra em silêncio.',
      'A luz que, em Plastic Grace, se tornaria fria e moldada, aqui ainda tenta existir — mas se dissolve em cinzas, ferrugem e carne exposta. Cada faixa é um fragmento desse processo: da raiva à lucidez, da dor à aceitação de que viver é continuar quebrado. Após perder as esperanças naquilo em que depositava fé, o eu lírico sente-se perdido, sem razão à qual se apegar ou pela qual viver.',
      'New Day é o dia depois do fim, o despertar no interior dos escombros da alma. O som é denso, melancólico e visceral — guitarras em drop D, vocais gritados e melódicos, baixo espesso, bateria orgânica e respiração suja. É redenção sem fé, vida sem filtro, esperança com cicatrizes.',
      'No fim, New Day não promete salvação — apenas o direito de existir em meio à destruição. O novo dia não nasce do sol: nasce da consciência. E essa luz, ainda que fraca, é o que ainda nos mantém humanos.',
      'Por que Medusa representa New Day — Medusa, na mitologia, não nasceu monstro: foi transformada. Punida injustamente, tornou-se símbolo de beleza amaldiçoada, de quem carrega o peso da culpa e da rejeição social. Isso reflete o tema central do álbum: o personagem não é mau, apenas quebrado pela dor, pela exclusão e pela perda da fé. Assim como Medusa, ele encara o espelho e vê uma versão distorcida de si mesmo — alguém irreconhecível, mas ainda humano.',
      'O álbum trata de padrões estéticos, de dor disfarçada e do culto à aparência. Medusa encarna essa contradição: uma mulher bela, porém amaldiçoada por sua própria imagem. É o símbolo da beleza que causa medo — assim como o personagem, que vive a angústia de existir em um mundo que transforma pureza em espetáculo e dor em estética.',
      'O olhar de Medusa transforma em pedra quem a encara. Em New Day, o eu lírico experimenta exatamente isso: vê demais — enxerga o que está por trás das ilusões — e isso o imobiliza (o espanto). A lucidez é a maldição. A petrificação é metáfora do esvaziamento emocional: já não consegue sentir, apenas observar.',
      "Projeto: Helena's Son · Álbum: New Day · Genesis · Lameck S. Fernandes, Adriano Lima e Rodrigo Alves.",
    ],
    previewVideo: '/videos/hs-preview-nd.webm',
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
      'Último estágio da trilogia: a busca pela verdade na versão tecnológica e a freira com o computador.',
    description: [
      'The Computer representa o último estágio da trilogia (Plastic Grace → New Day → The Computer). Se em Plastic Grace o eu lírico questionava a falsidade da fé e, em New Day, buscava sentido em meio à dor humana, agora ele adentra o território da busca pela verdade na versão tecnológica.',
      'O álbum é uma descida poética ao mundo digital: um lugar em que sentimentos são simulados, a presença é substituída por conexão e o toque se tornou código binário. Diferentemente de uma simples crítica ao avanço tecnológico, o disco trata de algo mais íntimo — a solidão moderna e a necessidade de ser compreendido, ainda que por uma máquina.',
      'A máquina, aqui, não é o vilão. É o espelho: devolve ao humano o vazio que ele próprio construiu. O narrador tenta encontrar “vida” nos circuitos e descobre que o digital é o novo espelho do espiritual — frio, porém constante; falso, porém atento. Ainda assim, há informações que o levam a pensar.',
      'Por que uma freira com um computador — A imagem mostra uma freira em estado de espanto, tentando esconder um computador. Ela representa o conflito entre fé e conhecimento, entre o mundo espiritual que teme o questionamento e a era digital que o estimula.',
      'Com o advento do computador, o conhecimento se globalizou — e verdades antes ocultas, censuradas ou monopolizadas por instituições tornaram-se acessíveis a qualquer um. A máquina tornou-se o novo templo: fria, silenciosa, porém repleta de revelações.',
      'A freira teme não a tecnologia em si, mas o que ela revela. Seu olhar assustado reflete a culpa de quem acessa um saber proibido — a consciência de que, diante da informação, o dogma permanece intocado.',
      'O gesto de esconder o computador simboliza a tentativa desesperada de preservar o velho sagrado em um mundo em que o divino foi digitalizado. Ela teme ser descoberta, não por estar cometendo um pecado, mas por estar buscando a verdade fora dos muros da Igreja.',
      'A arte dialoga com o conceito do álbum: em The Computer, o eu lírico abandona o conforto da crença cega e mergulha na conexão — um lugar em que a verdade se mistura ao código, em que a revelação já não provém de um púlpito, mas de uma tela iluminada.',
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
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/18lZciTtMd3QBXNpvr7Ddz',
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

/**
 * Resonance — project-8 detail page (home: project-8).
 * História de origem do projeto. Detalhes de álbuns ficam em cada página de álbum.
 */
export const resonance: ProjectDetail = {
  slug: 'resonance',
  title: 'Resonance',
  category: 'Post-Grunge / Alternative Rock',
  image: '/images/albums/Ressonance.webp',
  imagePositionMobile: 'center 30%',
  tagline:
    'Post-grunge e alternative rock nascidos da amizade de três músicos — ensaios, teoria e a vontade de criar o próprio som.',
  historyTitle: 'Sobre Resonance',
  historyLead:
    'Resonance nasceu entre amigos, instrumentos e a vontade de criar. Antes de virar o projeto que é hoje, foi encontro, estudo e uma ideia que resistiu à pausa da vida.',
  pullQuote: 'A ideia não morreu.',
  footerNote: 'Resonance · Post-Grunge / Alternative Rock · Alpinópolis-MG',
  albumsEmptyMessage: 'Os álbuns de Resonance serão adicionados em breve.',
  historySections: [
    {
      id: 'beginning',
      title: 'O começo: três amigos',
      paragraphs: [
        'O projeto é formado por Lameck Silva Fernandes, Adriano Lima e Rodrigo Alves. Os três são amigos de longa data — a história registrada sobre o projeto diz que essa amizade vem desde a quinta série.',
        'Adriano já tinha experiência musical como ex-integrante do Madsneaks e também é presidente do Motoclub Guardiões Ventania. Rodrigo, por sua vez, havia retornado de Muzambinho, onde tocava bateria em uma igreja protestante.',
      ],
    },
    {
      id: 'studies',
      title: 'Tudo começou estudando música',
      paragraphs: [
        'Em determinado momento, Lameck e Adriano resolveram voltar a estudar teoria musical juntos. Lameck ia à noite para a casa dele levando os instrumentos. Os dois estudavam, tocavam covers e tinham a intenção de trabalhar principalmente com músicas de hard rock para, aos poucos, começar a criar composições próprias.',
        'Adriano já demonstrava desde o começo a vontade de compor algo original. Uma das primeiras ideias era usar esses estudos para criar um hino para o motoclube. Ou seja, naquele momento ainda não existia propriamente o Resonance como ele viria a ser depois. Era mais um encontro entre amigos, instrumentos, teoria musical e vontade de criar.',
      ],
    },
    {
      id: 'rodrigo',
      title: 'A chegada de Rodrigo aos ensaios',
      paragraphs: [
        'Com Rodrigo novamente por perto, surgiu a possibilidade de os três tocarem juntos. Havia, porém, uma questão prática: não seria possível manter uma bateria acústica na casa dele. A solução foi utilizar a garagem do Adriano, onde havia uma bateria acústica disponível. Assim, aquele espaço passou a ser o ponto onde os amigos poderiam ensaiar juntos.',
      ],
    },
    {
      id: 'pause',
      title: 'A vida colocou o projeto em pausa',
      paragraphs: [
        'Como acontece com muitos projetos que nascem entre amigos, as responsabilidades pessoais começaram a aparecer. O tempo ficou mais curto e outras prioridades da vida de cada integrante fizeram com que os encontros e planos musicais fossem ficando em pausa.',
        'Mas a ideia não morreu. Lameck continuou compondo e, paralelamente, começou a trabalhar no álbum In The Forest, do projeto Bunny Land Music. Foi nesse período que ele iniciou uma música dentro do grupo de WhatsApp que os três amigos mantinham para assuntos relacionados à música.',
        'E foi desse processo que nasceu efetivamente o Resonance.',
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        'Projeto: Resonance · Integrantes: Lameck Silva Fernandes, Adriano Lima e Rodrigo Alves · Cidade: Alpinópolis-MG · Gênero: Post-grunge / Alternative rock · Universo Wonderland Song.',
      ],
    },
  ],
  historyClosing:
    'Do estudo noturno e da garagem aos álbuns: Resonance é o que restou quando a amizade e a música recusaram ficar em silêncio.',
};

/** Álbuns de Resonance (project-8). */
export const resonanceAlbums: ProjectAlbum[] = [
  {
    slug: 'echoes-of-redemption',
    title: 'Echoes of Redemption',
    year: '2026',
    type: 'Demo',
    cover: '/images/albums/Ressonance.webp',
    summary:
      'Post-grunge e alternative rock de Alpinópolis — uma viagem emocional de queda, memória, desilusão e reconstrução.',
    description: [
      'O trabalho ganhou identidade própria com Echoes of Redemption (Ecos da Redenção).',
      'O projeto é associado a Alpinópolis, Minas Gerais, e sua estética sonora foi construída em torno do post-grunge e alternative rock, tendo como referências bandas como Creed e Alter Bridge.',
      'Musicalmente, a proposta inclui guitarras pesadas e melódicas e uso de afinação Drop-D. Já as letras seguem um caminho emocional e reflexivo, abordando dor, aprendizado, esperança e a possibilidade de recomeçar.',
      'E existe algo particularmente pessoal nisso: segundo a história registrada do Resonance, muitas letras refletem partes de experiências realmente vividas por integrantes do projeto. Então não é apenas uma narrativa fictícia construída para um disco — existe uma dimensão autobiográfica por trás das músicas.',
      'O álbum funciona praticamente como uma viagem emocional. A pessoa representada pelas músicas começa enfrentando suas próprias sombras e carregando os ecos do passado. Aos poucos, passa pela dor, pelo conflito interior e pela reflexão, até encontrar forças para seguir adiante.',
      'Os grandes temas são: superação e resiliência; conflito interno e autodescoberta; libertação do passado; crescimento pessoal; memórias que continuam ecoando; dor e esperança; renascimento e redenção.',
      'Até os símbolos utilizados nas composições seguem essa lógica. Fogo e cinzas representam destruição e renascimento; luz e sombra, a tensão entre esperança e desespero; oceano e abismo, a sensação de estar perdido; e tempo e correntes, o peso de um passado do qual é difícil escapar.',
      'No fundo, Echoes of Redemption fala sobre alguém que precisa encarar aquilo que viveu para finalmente conseguir continuar. A mensagem central é de que, mesmo depois da dor e da queda, ainda existe a possibilidade de encontrar um novo caminho.',
      'As 14 faixas documentadas formam esse arco de queda, memória, enfrentamento e reconstrução: Rise From The Ashes; Breaking Point; Soul’s Captivity; Worn Away; Scars of Tomorrow; Trapped in the Fall; Echoes That Remain; Silenced Voices; Edge of the Fall; No Way Back; Traces of Us; New Dawn; Echoes of Redemption; Beyond the Flames.',
    ],
    previewVideo: '/videos/ressonance-preview.webm',
    trackCount: echoesOfRedemptionTracks.length,
    tracks: echoesOfRedemptionTracks,
    bandcampUrl:
      'https://wonderlandsong.bandcamp.com/album/echoes-of-redemption-demo',
    bandcampLabel: 'DEMO Echos Redemptation',
    clips: [
      {
        id: 'breaking-point',
        title: 'Breaking Point',
        subtitle: 'Echoes of Redemption · Resonance',
        youtubeId: 'b83oG9Ni55c',
      },
    ],
  },
];

/**
 * Heretic's Fork — project-9 detail page (home: project-9).
 * Metal moderno: Nu Metal, Heavy, Thrash e Groove — a batalha interior.
 */
export const hereticsFork: ProjectDetail = {
  slug: 'heretics-fork',
  title: "Heretic's Fork",
  category: 'Metal Moderno · Nu Metal · Groove',
  image: '/images/albums/heretics-fork.webp',
  imagePositionMobile: 'center 28%',
  tagline:
    'Metal moderno de guitarras pesadas e grooves agressivos — a batalha silenciosa travada dentro de cada indivíduo.',
  historyTitle: "Sobre Heretic's Fork",
  historyLead:
    "Heretic's Fork é um projeto de metal moderno inspirado na intensidade do Nu Metal, Heavy Metal, Thrash Metal e Groove Metal, combinando guitarras extremamente pesadas, riffs agressivos, grooves marcantes e vocais que alternam entre linhas melódicas e interpretações graves, carregadas de emoção.",
  pullQuote:
    'Porque, às vezes, o maior ato de força não é vencer um inimigo… é impedir que ele desperte dentro de você.',
  footerNote: "Heretic's Fork · Metal Moderno · Nu Metal · Groove · Universo Wonderland Song",
  historySections: [
    {
      id: 'name',
      title: 'O nome',
      paragraphs: [
        "O nome do projeto faz referência ao instrumento histórico de tortura medieval conhecido como Heretic's Fork, utilizado para impedir que uma pessoa falasse, descansasse ou encontrasse alívio. Essa imagem simboliza perfeitamente o conceito do projeto: pessoas aprisionadas pelos próprios pensamentos, emoções e conflitos internos.",
      ],
    },
    {
      id: 'themes',
      title: 'Temas e batalha interior',
      paragraphs: [
        'As músicas exploram sentimentos como raiva, ódio, frustração, culpa, ansiedade, medo e impulsividade, não como uma forma de glorificá-los, mas de revelar a batalha silenciosa travada dentro de cada indivíduo.',
        'Cada faixa representa um momento dessa luta interior. Situações comuns do cotidiano tornam-se metáforas para conflitos emocionais profundos, mostrando como pensamentos reprimidos podem crescer até o ponto de parecer impossível contê-los. O verdadeiro inimigo raramente está do lado de fora — ele nasce na mente.',
      ],
    },
    {
      id: 'masks',
      title: 'Máscaras e visual',
      paragraphs: [
        'As máscaras e o visual do projeto representam essas diferentes faces da psique humana. Cada personagem simboliza um estado emocional ou uma parte da personalidade que tenta assumir o controle durante momentos de pressão. São personificações daquilo que muitas vezes permanece escondido atrás de uma expressão aparentemente normal.',
      ],
    },
    {
      id: 'aesthetic',
      title: 'Estética e metáforas',
      paragraphs: [
        "Em vez de contar histórias sobrenaturais, Heretic's Fork utiliza uma estética sombria, cinematográfica e inspirada no horror para retratar experiências profundamente humanas. Cemitérios, funerais, chuva, máscaras e cenários decadentes funcionam como metáforas para o luto emocional, a culpa, a repressão e o peso das escolhas.",
      ],
    },
    {
      id: 'resistance',
      title: 'Resistência',
      paragraphs: [
        "No fim, Heretic's Fork fala sobre resistência. Sobre reconhecer que todos enfrentam impulsos destrutivos, pensamentos sombrios e emoções capazes de consumir a razão. As músicas convidam o ouvinte a encarar essas sombras de frente, mostrando que a maior batalha não acontece contra o mundo, mas dentro de si mesmo.",
      ],
    },
    {
      id: 'credits',
      title: 'Créditos',
      paragraphs: [
        "Projeto: Heretic's Fork · Integrantes: Lameck S. Fernandes, Rodrigo Alves e Adriano Lima · Gênero: Metal moderno · Nu Metal · Heavy Metal · Thrash Metal · Groove Metal · Universo Wonderland Song.",
      ],
    },
  ],
  historyClosing:
    'Porque, às vezes, o maior ato de força não é vencer um inimigo… é impedir que ele desperte dentro de você.',
};

/** Álbuns de Heretic's Fork (project-9). */
export const hereticsForkAlbums: ProjectAlbum[] = [
  {
    slug: 'heretics-fork',
    title: "Heretic's Fork",
    year: '2026',
    type: 'Demo',
    cover: '/images/albums/heretics-fork.webp',
    summary:
      'Desilusão, raiva, pressão, angústia e desespero — o peso de cada sentimento que o álbum atravessa sem alívio.',
    demoInfo: [
      "O álbum Heretic's Fork ainda está em composição. Por enquanto existe uma música demo: No Hope Left — o primeiro registro desse funeral simbólico da antiga identidade.",
    ],
    description: [
      'O caixão presente na capa não simboliza a morte de uma pessoa, mas o sepultamento de uma identidade.',
      'Ao longo do álbum, o eu lírico enfrenta conflitos internos, decepções, manipulações, impulsos e sentimentos reprimidos que lentamente destroem a versão de si mesmo que existia até então. Cada música representa uma etapa desse processo de ruptura, como se partes da antiga personalidade fossem sendo enterradas uma a uma.',
      'O funeral retratado na capa marca o fim dessa antiga identidade. Não é um ato de derrota, mas uma passagem inevitável. A pessoa que entrou nessa jornada já não existe mais. No lugar dela nasce alguém transformado pelas cicatrizes, pela dor e pelas escolhas feitas ao longo do caminho.',
      'As figuras mascaradas representam diferentes aspectos da mente humana — emoções, impulsos e pensamentos que acompanham essa transformação. Elas não estão enterrando um corpo, mas encerrando um ciclo. O caixão guarda tudo aquilo que precisava morrer: a ingenuidade, a dependência emocional, a confiança quebrada, a culpa, a submissão e as ilusões — abrindo margem para o perdão e a nova personalidade que virá a seguir.',
      'O álbum inteiro conduz o ouvinte por esse funeral simbólico. A morte da antiga personalidade torna-se necessária para que uma nova identidade possa emergir, mais consciente, mais resistente e marcada pelas experiências vividas.',
      "Heretic's Fork não fala sobre a morte do corpo. Fala sobre aquilo que todos enfrentamos em algum momento da vida: a dolorosa necessidade de deixar morrer quem éramos para sobreviver como alguém novo.",
    ],
    trackCount: hereticsForkTracks.length,
    tracks: hereticsForkTracks,
    clips: [
      {
        id: 'no-hope-left',
        title: 'No Hope Left',
        subtitle: "Heretic's Fork · Heretic's Fork",
        youtubeId: 'tehu7eGR8i8',
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
  [resonance.slug]: resonance,
  [hereticsFork.slug]: hereticsFork,
};

/** Discographies keyed by project slug. */
export const projectAlbumsBySlug: Record<string, ProjectAlbum[]> = {
  [bunnyLandMusic.slug]: bunnyLandAlbums,
  [rosaNegraHalfeti.slug]: rosaNegraHalfetiAlbums,
  [aGrandeMultidao.slug]: aGrandeMultidaoAlbums,
  [helenaSon.slug]: helenaSonAlbums,
  [ussShenandoah.slug]: ussShenandoahAlbums,
  [lameckSouthernBirdsBand.slug]: lameckSouthernBirdsBandAlbums,
  [resonance.slug]: resonanceAlbums,
  [hereticsFork.slug]: hereticsForkAlbums,
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
