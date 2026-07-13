/** USS Shenandoah · 1937 lyrics (EN + PT translation only). */
import type { BunnyAlbumTrack } from '../types';

const ussLyricsNote =
  'Letra em inglês no painel esquerdo; tradução em português abaixo. USS Shenandoah · Álbum 1937.';

function track(title: string, lyrics: string, translation: string): BunnyAlbumTrack {
  return {
    title,
    lyrics,
    lyricsExplanation: {
      title: 'Tradução',
      message: ussLyricsNote,
      sections: [
        {
          title: 'Tradução (português)',
          content: translation,
        },
      ],
      verses: [],
    },
  };
}

export const uss1937Tracks: BunnyAlbumTrack[] = [
  track(
    'Electric',
    `mmm

Mind feels loud
world feels slow
Purple noise
starts to glow~

E-LEC-TRIC
in my head
E-LEC-TRIC
in my chest

Eyes half closed
feet on ground
Lost control
but still around

E-LEC-TRIC
in my head
E-LEC-TRIC
in my chest`,
    `mmm

A mente faz barulho
o mundo fica lento
Ruído roxo
começa a brilhar~

E-LÉ-TRI-CO
na minha cabeça
E-LÉ-TRI-CO
no meu peito

Olhos semicerrados
pés no chão
Perdi o controle
mas ainda estou aqui

E-LÉ-TRI-CO
na minha cabeça
E-LÉ-TRI-CO
no meu peito`,
  ),
  track(
    'Dust in My Mouth, Fire in My Hands',
    `I woke up hungry
with dust in my mouth
No map in my pocket
no reason to doubt

I learned my prayers
from broken ground
Truth don’t whisper
it makes a sound

I don’t belong
to what I see!

Fire in my hands
wind at my back
I don’t need tomorrow
I won’t look back`,
    `Acordei com fome
com poeira na boca
Sem mapa no bolso
sem razão pra duvidar

Aprendi minhas preces
no chão quebrado
A verdade não sussurra
ela faz barulho

Eu não pertenço
ao que eu vejo!

Fogo nas minhas mãos
vento nas costas
Não preciso do amanhã
não vou olhar pra trás`,
  ),
  track(
    'She Spent Me Dry',
    `She smiled easy
knew my name
Drank my nights
spent my days
Every promise
felt brand new
Every bill
came back to you

You held my hand
when the lights were on
Counted my money
till the feeling’s gone
Loved my fire
loved my sound
Left me empty
broke and bound

You took it all
and let me fall

You wore my hunger
like perfume
Slept in my dreams
used my room
Said my name
like it was yours
Walked away
wanted more`,
    `Ela sorria fácil
sabia meu nome
Bebeu minhas noites
gastou meus dias
Cada promessa
parecia novinha
Cada conta
voltava pra você

Você segurou minha mão
quando as luzes estavam acesas
Contou meu dinheiro
até o sentimento acabar
Amou meu fogo
amou meu som
Me deixou vazio
quebrado e preso

Você levou tudo
e me deixou cair

Você vestiu minha fome
como perfume
Dormiu nos meus sonhos
usou meu quarto
Disse meu nome
como se fosse seu
Foi embora
querendo mais`,
  ),
  track(
    'Where Your Shadow Learned My Name',
    `We walk on dust
that won’t hold our name
We light no crown
we feed no flame

We speak of Him
in breath and sound
A kingdom rising
not written in ground

From the old world fading!
To the NEW one near!

We are not staying!
We are passing through!`,
    `Caminhamos sobre a poeira
que não guarda nosso nome
Não acendemos coroas
não alimentamos chamas

Falamos Dele
no fôlego e no som
Um reino que se levanta
não escrito no chão

Do velho mundo que se apaga!
Para o NOVO que se aproxima!

Não estamos ficando!
Estamos só de passagem!`,
  ),
  track(
    'I Can’t Save You From Yourself',
    `The crowd looked small
from where we stood
Dreams burn brighter
when they’re good
You leaned closer
just to say
“This is the safest
we’ll ever stay”

don’t let go

Fire comes quiet
before it roars
Love does the same
when it wants more
I lost your voice
inside the flame
But I still carry
your name

I was loving
too high
to see`,
    `A multidão parecia pequena
de onde estávamos
Os sonhos queimam mais forte
quando são bons
Você se inclinou mais perto
só pra dizer
“Este é o lugar mais seguro
em que vamos ficar”

não solta

O fogo chega em silêncio
antes de rugir
O amor faz o mesmo
quando quer mais
Perdi sua voz
dentro da chama
Mas ainda carrego
o seu nome

Eu estava amando
alto demais
pra ver`,
  ),
  track(
    'Time Sat Down Beside Me',
    `been watchin’ it go by

Time sat down
beside me

Didn’t ask my name
didn’t need a reason

Time
time

Stayed a while
then walked on`,
    `tenho observado ele passar

O tempo sentou
ao meu lado

Não perguntou meu nome
não precisou de um motivo

Tempo
tempo

Ficou por um tempo
depois seguiu adiante`,
  ),
  track(
    'Faces Full of Light, Rooms Full of Stone',
    `They love their names
more than truth
Count their breath
count their youth
Every mirror
knows their face
Every promise
knows its price

Gold sounds right
when hearts are thin
They cheer the noise
they’re drowning in
Every word
learned how to shine
Nothing left
behind the smile

So much talk
no weight inside

Pleasure sits
on every throne
Comfort sings
the loudest song
They fear the dark
they fear the still
They fear the truth
they cannot feel

it looks alive

They wear the shape
of something real
Learn the words
but break the seal
Hands raised high
souls asleep
They look awake
but never weep

So much form
no fire left`,
    `Eles amam seus nomes
mais do que a verdade
Contam cada fôlego
contam a juventude
Todo espelho
conhece seus rostos
Toda promessa
conhece seu preço

O ouro soa certo
quando os corações são rasos
Eles aplaudem o ruído
em que estão se afogando
Cada palavra
aprendeu a brilhar
Nada resta
por trás do sorriso

Tanta fala
sem peso algum

O prazer se senta
em todo trono
O conforto canta
a canção mais alta
Eles temem o escuro
temem o silêncio
Temem a verdade
que não conseguem sentir

parece vivo

Vestem a forma
de algo real
Aprendem as palavras
mas quebram o selo
Mãos erguidas
almas adormecidas
Parecem despertos
mas nunca choram

Tanta forma
sem fogo algum`,
  ),
  track(
    'When the Silence Learns to Scream',
    `Young soul of the hour, you’ll feel the divide
The mark that is carved between mercy and fire

Watch the sightless kings aim at the sky
Echoes raining down, counting lives

If you’ve played with shadows, I know you have
And the storm has not yet called your name

You should lower your eyes and quiet your breath
And wait for the turning blade

Young soul of the hour, you’ll feel the divide
The mark that is carved between mercy and fire

Watch the sightless kings aim at the sky
Echoes raining down, counting lives

If you’ve played with shadows, I know you have
And the storm has not yet called your name

You should lower your eyes and quiet your breath
And wait for the turning blade`,
    `Jovem alma do momento, você vai sentir a divisão
A marca que é talhada entre a misericórdia e o fogo

Observe os reis cegos apontarem para o céu
Ecos caem como chuva, contando vidas

Se você brincou com as sombras, eu sei que brincou
E a tempestade ainda não chamou o seu nome

Abaixe os olhos e aquiete o fôlego
E espere pela lâmina que gira

Jovem alma do momento, você vai sentir a divisão
A marca que é talhada entre a misericórdia e o fogo

Observe os reis cegos apontarem para o céu
Ecos caem como chuva, contando vidas

Se você brincou com as sombras, eu sei que brincou
E a tempestade ainda não chamou o seu nome

Abaixe os olhos e aquiete o fôlego
E espere pela lâmina que gira`,
  ),
  track(
    'Dreams Don’t Pay the Fare',
    `I left my name
on a dusty road
Chasing a shine
I was never owed
Every town
said “just one more”
Every smile
felt like before

They sang of gold
in open hands
Of easy nights
and promised lands
Said happiness
was close in sight
If I kept walking
through the night

So I ramble on
with borrowed dreams
Thinking love
means what it seems

I met her eyes
along the way
She spoke in hope
but traded stays
She loved the fire
not the flame
Loved the story
not the name

I gave my time
I gave my gold
Gave my heart
before it sold
She found another
just like me
Young enough
to still believe

So I ramble on
a little slower
Every truth
feels older

Now the road
knows me well
Knows when stories
start to sell
Dreams look bright
from far away
Up close
they fade to gray

Still I ramble on
lighter inside
No more gold
left to find`,
    `Deixei meu nome
numa estrada empoeirada
Perseguindo um brilho
que nunca me foi devido
Cada cidade
dizia “só mais uma”
Cada sorriso
parecia o mesmo de antes

Eles cantavam sobre ouro
em mãos abertas
Sobre noites fáceis
e terras prometidas
Diziam que a felicidade
estava logo ali
Se eu continuasse andando
pela noite

Então sigo vagando
com sonhos emprestados
Achando que amor
é aquilo que parece

Cruzei com o olhar dela
pelo caminho
Ela falava em esperança
mas trocava permanências
Ela amava o fogo
não a chama
Amava a história
não o nome

Dei meu tempo
dei meu ouro
Dei meu coração
antes que ele fosse vendido
Ela encontrou outro
igual a mim
Jovem o bastante
pra ainda acreditar

Então sigo vagando
um pouco mais devagar
Cada verdade
parece mais velha

Agora a estrada
me conhece bem
Sabe quando histórias
começam a se vender
Sonhos parecem brilhantes
de longe
De perto
desbotam em cinza

Ainda sigo vagando
mais leve por dentro
Sem mais ouro
pra encontrar`,
  ),
  track(
    'Turn It Up Tonight',
    `Another late night hangin’ by the bar
Neon buzzin’, feelin’ tired and scarred
Dust on my boots, fire in my head
This town keeps tellin’ me I’m better off dead

Wind in my ear sayin’ “boy, you gotta run”
There’s a place out west where the nights ain’t done
They say the sun hits different on the land
Where the ocean shakes the devil’s hand

feel it
I ain’t lookin’ back this time
Got one chance, yeah it’s mine

She keeps callin’ my name
Yeah she’s drivin’ me INSANE

I’m leavin’ it ALL behind
Burnin’ roads, crossin’ lines
With a little faith and a beat-up plan
I’m headin’ west, yeah I AM

yeah

Old men say “boy, stay right here”
Same old words I’ve heard for years
But I seen it clear in their tired eyes
Who never leaves already died

I don’t need much, just six strings tight
Some loud amp love and a restless night
If it’s a lie, I’ll learn the truth
But rotin’ here ain’t what I choose

(come on)
If it breaks me, let it try
Better burn than fade and hide

Hot sun, cold nights
Angels dance with snakebite

I’m leavin’ it ALL behind
This old life ain’t mine
With my boots down hard on the ground
I’m westbound, OUTTA TOWN

If that dream turns on me
I’ll stand tall

‘Cause worse than fallin’ down
Is never movin’ at all~

Hear that engine cry
Yeah~ tonight I FLY

No map, no sign
Just rhythm, faith and time
Six strings screamin’ like a gun
I’m gone I’m gone I’m GONE`,
    `Outra noite tarde encostado no bar
Neon zunindo, cansado e marcado
Poeira nas botas, fogo na cabeça
Essa cidade insiste em dizer que eu já era

O vento no ouvido diz “garoto, você tem que correr”
Tem um lugar a oeste onde a noite não termina
Dizem que o sol bate diferente naquela terra
Onde o oceano aperta a mão do diabo

sente isso
Dessa vez eu não vou olhar pra trás
Uma chance só — e ela é minha~

Ela vive chamando meu nome
É, ela tá me deixando LOUCO

Tô deixando TUDO pra trás
Queimando estradas, cruzando limites
Com um pouco de fé e um plano todo surrado
Tô indo pro oeste, É ISSO MESMO

yeah

Os velhos dizem “garoto, fica por aqui”
As mesmas palavras de sempre, há anos
Mas vi claro no cansaço dos olhos deles
Quem nunca parte, já morreu

Não preciso de muito, só seis cordas bem afinadas
Um amplificador alto, amor e uma noite inquieta
Se for mentira, eu encaro a verdade
Mas apodrecer aqui não é a minha escolha

(vamos lá)
Se isso me quebrar, que tente
Melhor queimar do que sumir e se esconder

Sol quente, noites frias
Anjos dançam com veneno de cobra

Tô deixando TUDO pra trás
Essa vida velha não é minha
Com as botas firmes batendo no chão
Rumo ao oeste, FORA DA CIDADE

Se esse sonho virar contra mim~
Eu fico de pé

Porque pior do que cair
É nunca se mover~

Escuta esse motor chorar
Yeah~ hoje à noite EU VOO

Sem mapa, sem placa
Só ritmo, fé e tempo
Seis cordas gritando como um tiro
Eu fui~ eu fui~ eu FUI`,
  ),
  track(
    'You Don’t Give a Damn',
    `I see you standing across the room
Same old fire, same old perfume
I say your name, you don’t look my way
Like I’m just noise you hear, then fade

That riff keeps rollin’ under my feet
Heart outta time, missin’ the beat
I’m right here, you’re miles away
You don’t hear a word I say

You don’t give a DAMN about me
No~ not a single sign
I burn all night for you
Girl, you don’t give a DAMN about mine

You don’t give a DAMN about me
Still I come back every time
I bleed these notes for you
Girl, you don’t give a DAMN about mine~

yeah`,
    `Eu te vejo parada do outro lado da sala
O mesmo fogo de sempre, o mesmo perfume
Eu digo seu nome, você nem olha pra mim
Como se eu fosse só um ruído que você ouve e some

Esse riff continua rolando sob meus pés
Coração fora do tempo, perdendo o compasso
Eu tô aqui, você tá a quilômetros
Você não ouve uma palavra do que eu falo

Você não dá a mínima pra mim
Não~ nem um único sinal
Eu queimo a noite inteira por você
Garota, você não dá a mínima pro que é meu

Você não dá a mínima pra mim
Mesmo assim eu volto toda vez
Eu sangro essas notas por você
Garota, você não dá a mínima pro que é meu~

yeah`,
  ),
  track(
    'The Sleep That Watched Back',
    `I was walkin’ through rooms with no names
Walls too thin, floors the same
Every door felt half asleep
Every promise buried deep

Shadows leaned against the wall
Boots on stairs, but none would call
I held my breath, afraid to move
Like the house already knew

They’re comin’ in waves, room by room
No flags, no sound, no moon
Faces fade, numbers grow
Like a tide that moves too slow

Windows shut their tired eyes
People hid inside their lives
Every breath was hard to keep
Every step was much too deep

They’re comin’ in waves, wall to wall
No names left to call
Not one voice, not at all
Like a flood that waits to fall`,
    `Eu caminhava por quartos sem nome
Paredes finas demais, pisos iguais
Cada porta parecia meio adormecida
Cada promessa, enterrada fundo

Sombras se apoiavam contra a parede
Botas na escada, mas ninguém chamava
Segurei o fôlego, com medo de me mover
Como se a casa já soubesse

Eles vêm em ondas, quarto por quarto
Sem bandeiras, sem som, sem lua
Rostos desaparecem, números crescem
Como uma maré que se move devagar demais

As janelas fecharam seus olhos cansados
As pessoas se esconderam dentro das próprias vidas
Cada respiração era difícil de manter
Cada passo era fundo demais

Eles vêm em ondas, de parede a parede
Sem nomes restantes para chamar
Nenhuma voz, nenhuma sequer
Como uma enchente que espera cair`,
  ),
];
