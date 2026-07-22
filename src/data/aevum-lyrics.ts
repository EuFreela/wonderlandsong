/** AEVUM — Levels of Consciousness album lyrics (EN + PT-BR translation). */
import type { BunnyAlbumTrack } from '../types';

function withPtTranslation(en: string, pt: string): {
  lyrics: string;
  lyricsExplanation: {
    title: string;
    sections: { title: string; content: string }[];
  };
} {
  return {
    lyrics: en,
    lyricsExplanation: {
      title: 'Tradução',
      sections: [
        {
          title: 'Tradução (português)',
          content: pt,
        },
      ],
    },
  };
}

export const aevumTracks: BunnyAlbumTrack[] = [
  {
    title: 'The Unanswered Geometry',
    dedication: 'O Grande Arquiteto do Universo',
    ...withPtTranslation(
      `If You are listening
beneath the names we carved for You
beneath the temples
beneath the tongues
beneath the frightened architecture of belief

then hear me

not as a disciple
not as a righteous man

but as a question
still learning how to breathe

I have knelt where they told me to kneel
and swallowed the maps of invisible kingdoms

I have watched holy mouths
manufacture heaven
while their hands rehearsed the mathematics of hunger

They measured my soul
with rulers made of doctrine

then broke the ruler
when the numbers disagreed

I followed their arrows
until every direction
pointed back
to another arrow

I searched for You
inside the vocabulary of men

and found men

wearing eternity
like borrowed skin

I drank from their wisdom
and grew thirsty

I inherited their answers
and became confused

Every prophet carried a mirror
Every mirror demanded a face
Every face called itself truth

and truth...

remained silent

So teach me nothing
that can be memorized

Give me no sentence
that dies when questioned

I need consciousness

not another cage
painted to resemble infinity

I need understanding
that survives the collapse of certainty

I need wisdom
with no throne to defend

Where is the path
when every road was drawn by the lost?

Where is the north
when the compass inherited its fear?

I stand between the symbol
and the thing it failed to name

calling through the geometry

hoping something
beyond the circle

knows my name

Perhaps You never lived
inside the laws they built around You

Perhaps the sacred
was never hiding in their words

Perhaps You are the silence
between one number and the next

the proportion
no hand invented

the spiral sleeping in the shell

the unseen law
teaching galaxies
how to turn

If creation bears a fingerprint

let me read it

not in fear
not in obedience
not through the eyes
of those who profit from blindness

but with the consciousness
to recognize the hand

without mistaking
the hand
for the cage`,
      `A Geometria Sem Resposta

Se estás ouvindo
por baixo dos nomes que esculpimos para Ti
por baixo dos templos
por baixo das línguas
por baixo da temerosa arquitetura da crença

então ouve-me

não como um discípulo
não como um homem justo

mas como uma pergunta
ainda aprendendo a respirar

Eu me ajoelhei onde disseram que eu deveria me ajoelhar
e engoli os mapas de reinos invisíveis

Eu observei bocas sagradas
fabricarem o céu
enquanto suas mãos ensaiavam a matemática da fome

Mediram minha alma
com réguas feitas de doutrina

depois quebraram a régua
quando os números discordaram

Segui suas setas
até que todas as direções
apontassem de volta
para outra seta

Procurei por Ti
dentro do vocabulário dos homens

e encontrei homens

vestindo a eternidade
como uma pele emprestada

Bebi de sua sabedoria
e fiquei com sede

Herdei suas respostas
e fiquei confuso

Todo profeta carregava um espelho
Todo espelho exigia um rosto
Todo rosto chamava a si mesmo de verdade

e a verdade...

permaneceu em silêncio

Então não me ensines nada
que possa simplesmente ser memorizado

Não me dês nenhuma sentença
que morra quando questionada

Eu preciso de consciência

não de outra prisão
pintada para se parecer com o infinito

Eu preciso de entendimento
que sobreviva ao colapso da certeza

Eu preciso de sabedoria
sem um trono para defender

Onde está o caminho
quando todas as estradas foram traçadas pelos perdidos?

Onde está o norte
quando a bússola herdou seu medo?

Estou entre o símbolo
e aquilo que ele não conseguiu nomear

chamando através da geometria

esperando que algo
além do círculo

conheça meu nome

Talvez Tu nunca tenhas vivido
dentro das leis que construíram ao Teu redor

Talvez o sagrado
nunca estivesse escondido em suas palavras

Talvez Tu sejas o silêncio
entre um número e o seguinte

a proporção
que nenhuma mão inventou

a espiral adormecida na concha

a lei invisível
ensinando as galáxias
a girar

Se a criação carrega uma impressão digital

deixa-me lê-la

não pelo medo
não pela obediência
não através dos olhos
daqueles que lucram com a cegueira

mas com a consciência
para reconhecer a mão

sem confundir
a mão
com a prisão`,
    ),
  },
];
