/** The Captive Magpie — SUNDAY AFTERNOON album lyrics (EN + PT-BR translation). */
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

export const sundayAfternoonTracks: BunnyAlbumTrack[] = [
  {
    title: 'Sunday Afternoon',
    ...withPtTranslation(
      `The radio is talking
But I don't hear a word
There's sunlight on the carpet
And silence in the room

The coffee's getting colder
The clock is running slow
I wonder if you're thinking
Of the places we would go

I took the long way home today
Just to watch the houses change
Every window had a different life
Every face looked far away

There's a photograph beside the bed
That I don't turn around
I know the colors have faded
But I still know every sound

And maybe I'm remembering
A little more than I should
Maybe all the things we lost
Were never meant to be understood

On a Sunday afternoon
When the world is standing still
I can almost hear you laughing
From somewhere on the hill

And the sky is turning golden
While the shadows fill the room
I don't know if I miss you
Or I just miss being young

The neighbors started arguing
Somewhere down the street
A dog is barking at the clouds
A child is counting trees

I found an old blue jacket
Hanging behind the door
I haven't worn it since that summer
I don't know what for

And maybe time is only
A story that we tell
To make the distance easier
Between the things we felt

On a Sunday afternoon
When the world is standing still
I can almost hear you laughing
From somewhere on the hill

And the sky is turning golden
While the shadows fill the room
I don't know if I miss you
Or I just miss being young

Maybe we're all passing through
Maybe nothing really stays
Maybe every little moment
Disappears before it fades

So let the evening find me
Let the windows turn to blue
I don't need another answer
I just wanted to remember you

On a Sunday afternoon
When the world is standing still
I can almost hear you laughing
From somewhere on the hill

And the sky is turning golden
And the shadows leave the room
I don't know if I miss you
Or I just miss being young

The radio is fading
The evening has begun
Tomorrow will be different
But today was almost ours`,
      `TARDE DE DOMINGO

O rádio está falando
Mas eu não ouço uma palavra
Há luz do sol sobre o tapete
E silêncio no quarto

O café está ficando frio
O relógio está andando devagar
Eu me pergunto se você está pensando
Nos lugares para onde iríamos

Peguei o caminho mais longo para casa hoje
Só para ver as casas mudarem
Cada janela tinha uma vida diferente
Cada rosto parecia distante

Há uma fotografia ao lado da cama
Que eu não viro
Eu sei que as cores desbotaram
Mas ainda conheço cada som

E talvez eu esteja me lembrando
Um pouco mais do que deveria
Talvez todas as coisas que perdemos
Nunca tenham sido feitas para serem compreendidas

Numa tarde de domingo
Quando o mundo está parado
Eu quase consigo ouvir você rindo
De algum lugar na colina

E o céu está ficando dourado
Enquanto as sombras preenchem o quarto
Eu não sei se sinto sua falta
Ou se apenas sinto falta de ser jovem

Os vizinhos começaram a discutir
Em algum lugar lá na rua
Um cachorro está latindo para as nuvens
Uma criança está contando árvores

Encontrei uma velha jaqueta azul
Pendurada atrás da porta
Não a uso desde aquele verão
Não sei nem por quê

E talvez o tempo seja apenas
Uma história que contamos
Para tornar mais fácil a distância
Entre as coisas que sentimos

Numa tarde de domingo
Quando o mundo está parado
Eu quase consigo ouvir você rindo
De algum lugar na colina

E o céu está ficando dourado
Enquanto as sombras preenchem o quarto
Eu não sei se sinto sua falta
Ou se apenas sinto falta de ser jovem

Talvez todos nós estejamos apenas de passagem
Talvez nada realmente permaneça
Talvez cada pequeno momento
Desapareça antes mesmo de desaparecer

Então deixe a noite me encontrar
Deixe as janelas ficarem azuis
Eu não preciso de outra resposta
Eu só queria me lembrar de você

Numa tarde de domingo
Quando o mundo está parado
Eu quase consigo ouvir você rindo
De algum lugar na colina

E o céu está ficando dourado
E as sombras deixam o quarto
Eu não sei se sinto sua falta
Ou se apenas sinto falta de ser jovem

O rádio está desaparecendo
A noite começou
Amanhã será diferente
Mas hoje quase foi nosso.`,
    ),
  },
  { title: 'Lithium Rain in My Garden' },
  { title: 'The Magpie and the Window' },
  { title: 'Silverwing Afternoons' },
  { title: 'When the Sun Hangs Still' },
  { title: 'Soft Collapse of Hours' },
];