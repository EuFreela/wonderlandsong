/** Chapter 3 · In Time With Your Heart lyrics (from Genius + PT translation). */
import type { BunnyAlbumTrack } from '../types';

const chapter3LyricsNote =
  'Letra em inglês no painel esquerdo; tradução em português abaixo. Chapter 3 · In Time With Your Heart — Bunny Land Music.';

function track(
  title: string,
  lyrics: string,
  translation: string,
  dedication?: string,
): BunnyAlbumTrack {
  return {
    title,
    ...(dedication ? { dedication } : {}),
    lyrics,
    lyricsExplanation: {
      title: 'Tradução e contexto',
      message: chapter3LyricsNote,
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

export const inTimeWithYourHeartTracks: BunnyAlbumTrack[] = [
  track(
    'When You Say Nothing, I Bleed',
    `I read your silence like a script
Every pause, a deeper grip
You touch my hand, then let it go
But in that space, I overflow

You don’t have to speak at all
Your quiet breaks me more than fall

When you say nothing, I bleed
Every word you don’t say cuts deep
You're the echo I can’t hold
You're the warmth that leaves me cold
And I’d rather hurt than not believe—
So when you say nothing… I bleed

You’re a fire I never name
But I keep dancing in your flame
You leave your ghosts inside my bed
You never lie, you love instead

We’re not broken, just undone
Like stars that fade before they’re gone
Don’t look back—just breathe with me
Even if it’s silently

When you say nothing, I bleed
But maybe that’s what love should be
Not a promise, not a plea
Just a moment, wild and free
So don’t explain, don’t even need—
Just say nothing… and let me bleed`,
    `Leio o seu silêncio como um roteiro
Cada pausa, um aperto mais fundo
Você toca a minha mão, depois solta
Mas nesse espaço, eu transbordo

Você não precisa falar nada
O seu silêncio me quebra mais do que a queda

Quando você não diz nada, eu sangro
Cada palavra que você não diz corta fundo
Você é o eco que eu não consigo segurar
Você é o calor que me deixa frio
E prefiro doer a não acreditar—
Então quando você não diz nada… eu sangro

Você é um fogo que eu nunca nomeio
Mas continuo dançando na sua chama
Você deixa os seus fantasmas na minha cama
Você nunca mente, você ama em vez disso

Não estamos quebrados, só desfeitos
Como estrelas que somem antes de partir
Não olhe para trás—só respire comigo
Mesmo que seja em silêncio

Quando você não diz nada, eu sangro
Mas talvez seja isso que o amor deva ser
Não uma promessa, não um pedido
Só um momento, selvagem e livre
Então não explique, nem precisa—
Só não diga nada… e deixe eu sangrar`,
    'Josi',
  ),
  track(
    'Velvet Ruin',
    `City breathing through my skin
Neon cuts me from within
Every touch feels almost real
But nothing stays, nothing heals

I chase ghosts inside your eyes
Golden lies in black disguise
We don’t ask if this is right
We just burn to feel alive

Love tastes sweet in the dark
But it fades before the spark
I feel heaven when you’re close
Then I fall where nobody goes

We dance on velvet ruin
Drunk on dreams we can’t keep
Your kiss feels like forever
But forever doesn’t sleep

We drown in stolen moments
Till the sun starts telling truth
I don’t know if this is love
Or just pain dressed up as youth

Perfume, smoke and broken vows
Say my name but don’t ask how
Your shadow fits my loneliness
Too close to feel, too far to rest

We make sins feel cinematic
Every wrong feels automatic
If I stop, I might feel hollow
So I drink another tomorrow

I hear angels in the bass
Feel my heart begin to race
But when silence fills the room
I remember what we lose

We dance on velvet ruin
Drunk on dreams we can’t keep
Your touch feels like a promise
But promises don’t breathe

We drown in stolen moments
Till the morning breaks the truth
I don’t know if this is love
Or just pain dressed up as youth

If pleasure is a prayer
I’ve been kneeling every night
Trading pieces of my soul
For a temporary light

Tell me —
Do you feel it too?
Or am I loving what we never knew?

We dance on velvet ruin
With our hearts half open wide
Searching for eternity
In the dark side of desire

If this love is only hunger
Let it leave a deeper scar
I’d rather burn in your shadow
Than feel nothing in the dark

Neon fades…
But the feeling stays
I’m still chasing you
Through the ache`,
    `A cidade respira através da minha pele
O neon me corta por dentro
Cada toque parece quase real
Mas nada fica, nada cura

Eu persigo fantasmas dentro dos seus olhos
Mentiras douradas em disfarce preto
A gente não pergunta se isso é certo
A gente só queima para se sentir vivo

O amor tem gosto doce no escuro
Mas some antes da centelha
Sinto o céu quando você está perto
Depois caio onde ninguém vai

Dançamos na ruína de veludo
Bêbados de sonhos que não podemos guardar
Seu beijo parece para sempre
Mas o para sempre não dorme

Nos afogamos em momentos roubados
Até o sol começar a contar a verdade
Não sei se isso é amor
Ou só dor vestida de juventude

Perfume, fumaça e votos quebrados
Diga o meu nome, mas não pergunte como
Sua sombra cabe na minha solidão
Perto demais para sentir, longe demais para descansar

Fazemos o pecado parecer cinema
Cada erro parece automático
Se eu parar, posso me sentir oco
Então bebo mais um amanhã

Ouço anjos no grave
Sinto o coração acelerar
Mas quando o silêncio enche o quarto
Eu lembro o que a gente perde

Dançamos na ruína de veludo
Bêbados de sonhos que não podemos guardar
Seu toque parece uma promessa
Mas promessas não respiram

Nos afogamos em momentos roubados
Até a manhã quebrar a verdade
Não sei se isso é amor
Ou só dor vestida de juventude

Se o prazer é uma oração
Tenho ajoelhado toda noite
Trocando pedaços da minha alma
Por uma luz temporária

Me diga —
Você sente isso também?
Ou estou amando o que a gente nunca soube?

Dançamos na ruína de veludo
Com os corações meio abertos
Buscando a eternidade
No lado escuro do desejo

Se este amor é só fome
Que deixe uma cicatriz mais profunda
Prefiro queimar na sua sombra
Do que não sentir nada no escuro

O neon some…
Mas o sentimento fica
Ainda estou te perseguindo
Através da dor`,
    'Scabbia',
  ),
  track(
    'Games Of Love',
    `I was young, I didn’t know the rules
I thought love was something you prove
So I bent myself out of shape
Did things I never thought I’d do

I learned your streets, your quiet prayers
I learned your smile from far away
You always knew I was there
You always chose to look away

You ran like I was chasing air
Like wanting you was something wrong
But I kept breathing where you sang
Just to feel like I belong

You sang with angels on your side
I stood where I didn’t belong
I joined your choir just to be near
While you kept running from the song

You knew my heart before I spoke
You saw me breaking, standing still
You let me stay inside your world
But never let me feel you feel

I followed lights into the night
You danced where I couldn’t breathe
You laughed with faces I didn’t know
Like I was never meant to be seen

I watched you give your mouth away
Like love was just a game you play
Then you looked straight into my eyes
And kissed someone else… on purpose

I felt something inside me close
Not anger — something worse than pain
I left before my heart collapsed
Pretending I was still the same

You sang with angels on your side
I stood where I didn’t belong
I loved you quietly, completely
While you kept proving me wrong

You never touched me, never lied
But still I felt betrayed somehow
I broke alone inside my chest
Then disappeared without a sound

I went looking — you were gone
Like you never lived that life
No goodbye, no final look
Just a ghost I loved at night

Years went by, I changed my skin
Learned what love is not supposed to be
I found someone who stayed
Someone who looked back at me

Then I saw you — same eyes, same spell
Waiting for me to fall apart
But something in me didn’t move
Your magic missed my heart

Now you’re the one who follows me
Asking questions I don’t feel
I won the game I never played
By learning when to leave

I don’t hate you
I don’t love you
I just finally walked away

You taught me how desire lies
And how freedom feels the same`,
    `Eu era jovem, não sabia as regras
Achei que o amor era algo que se prova
Então me torci fora da forma
Fiz coisas que nunca pensei que faria

Aprendi as suas ruas, as suas orações quietas
Aprendi o seu sorriso de longe
Você sempre soube que eu estava lá
Você sempre escolheu olhar para o outro lado

Você correu como se eu perseguisse o ar
Como se te querer fosse algo errado
Mas continuei respirando onde você cantava
Só para me sentir pertencendo

Você cantava com anjos ao seu lado
Eu fiquei onde não pertencia
Entrei no seu coral só para estar perto
Enquanto você fugia da canção

Você conhecia o meu coração antes de eu falar
Você me viu quebrando, parado
Você me deixou ficar dentro do seu mundo
Mas nunca me deixou sentir o que você sente

Segui as luzes na noite
Você dançava onde eu não conseguia respirar
Ria com rostos que eu não conhecia
Como se eu nunca devesse ser visto

Vi você entregar a boca
Como se o amor fosse só um jogo que você joga
Depois olhou direto nos meus olhos
E beijou outra pessoa… de propósito

Senti algo dentro de mim se fechar
Não raiva — algo pior que a dor
Saí antes do meu coração desabar
Fingindo que ainda era o mesmo

Você cantava com anjos ao seu lado
Eu fiquei onde não pertencia
Te amei em silêncio, por completo
Enquanto você me provava errado

Você nunca me tocou, nunca mentiu
Mas mesmo assim me senti traído de algum modo
Quebrei sozinho dentro do peito
Depois sumi sem um som

Fui procurar — você tinha sumido
Como se nunca tivesse vivido aquela vida
Sem adeus, sem último olhar
Só um fantasma que amei à noite

Anos passaram, mudei de pele
Aprendi o que o amor não deveria ser
Encontrei alguém que ficou
Alguém que olhou de volta para mim

Então te vi — mesmos olhos, mesmo feitiço
Esperando que eu me despedaçasse
Mas algo em mim não se moveu
Sua magia errou o meu coração

Agora é você quem me segue
Fazendo perguntas que eu não sinto
Ganhei o jogo que nunca joguei
Aprendendo quando partir

Eu não te odeio
Eu não te amo
Eu só finalmente fui embora

Você me ensinou como o desejo mente
E como a liberdade parece a mesma coisa`,
    'Silana',
  ),
  track(
    'Not Your Game',
    `To you I’m just a spoiled boy
Only child, playing king of noise
You look at me with that crooked grin
Like everything I touch is pretend

You think I live inside a lie
A cheap illusion money buys
To you I’m nothing — just another name
You swear you own, you swear you tame

But here’s the part you never see
I don’t bend where you expect me to be

I’m not your type
I don’t play your game
I don’t need your throne
Or the power you fake

I don’t care what you say
I don’t move for your pride
And that’s why I stay
Living rent-free in your mind

You treat the world like it’s your stage
Like everyone exists to be replaced
You call it charm, I call it fear
You need control to feel sincere

You say I don’t know what I claim
That I’m too green to know your flame
But funny how you still look back
Like I’m the glitch you can’t attack

You can dismiss me, say I’m wrong
But silence hits when I’m gone

I’m not your type
I don’t play your game
I don’t chase approval
I don’t say your name

I don’t care what you think
I don’t feed your pride
And that’s why my name
Is the one stuck in your mind

You dominate the weak, the scared
The ones who need you to be fair
But I don’t kneel, I don’t pretend
That’s where your power meets its end

You don’t love me
You don’t hate me
You just hate that I’m free

I’m not your type
Never was, never tried
I don’t need your rules
To walk through the night

You can call me nothing
Say I’m wasting my time
But it’s my name you whisper
When you’re alone at night

I don’t play your game
I don’t want your crown
Still somehow
I’m the one
You can’t shut down`,
    `Para você eu sou só um menino mimado
Filho único, brincando de rei do barulho
Você me olha com aquele sorriso torto
Como se tudo que eu toco fosse de mentira

Você acha que vivo dentro de uma mentira
Uma ilusão barata que o dinheiro compra
Para você eu sou nada — só mais um nome
Que você jura possuir, jura domar

Mas aqui está a parte que você nunca vê
Eu não me dobro onde você espera que eu esteja

Eu não sou o seu tipo
Eu não jogo o seu jogo
Não preciso do seu trono
Nem do poder que você finge

Não me importo com o que você diz
Não me movo pelo seu orgulho
E é por isso que fico
Morando de graça na sua mente

Você trata o mundo como se fosse o seu palco
Como se todo mundo existisse para ser substituído
Você chama de charme, eu chamo de medo
Você precisa de controle para se sentir sincera

Você diz que eu não sei o que afirmo
Que sou verde demais para conhecer a sua chama
Mas é engraçado como você ainda olha para trás
Como se eu fosse o glitch que você não consegue atacar

Você pode me dispensar, dizer que estou errado
Mas o silêncio bate quando eu sumo

Eu não sou o seu tipo
Eu não jogo o seu jogo
Não corro atrás de aprovação
Não digo o seu nome

Não me importo com o que você pensa
Não alimento o seu orgulho
E é por isso que o meu nome
É o que fica preso na sua mente

Você domina os fracos, os assustados
Os que precisam de você para ser justa
Mas eu não me ajoelho, eu não finjo
É aí que o seu poder encontra o fim

Você não me ama
Você não me odeia
Você só odeia que eu sou livre

Eu não sou o seu tipo
Nunca fui, nunca tentei
Não preciso das suas regras
Para caminhar pela noite

Você pode me chamar de nada
Dizer que estou perdendo tempo
Mas é o meu nome que você sussurra
Quando está sozinha à noite

Eu não jogo o seu jogo
Não quero a sua coroa
Ainda assim, de algum modo
Sou eu
Que você não consegue desligar`,
    'Kelly',
  ),
  track(
    'She Knows The Line',
    `She knows she’s beautiful
Knows how the mirror lies
She learned the rules early
And wears them in her eyes

She shapes herself like danger
Just close enough to feel
She knows I won’t cross the line
That’s why she makes it real

Every move is calculated
Every smile bends the truth
She pulls me closer slowly
Like she’s got nothing to lose

She knows the line
And she walks it anyway
She leans into the silence
But never asks me to stay

She knows the line
And she keeps testing me
Pretending she doesn’t notice
What she’s doing to me

She doesn’t stop when I look away
She keeps dancing in my space
Like temptation with a purpose
Like restraint is part of the chase

I tell myself I’m stronger
That this is just a game
But every time she meets my eyes
I forget who’s to blame

I try to read between her words
Try to keep my control
But she speaks in quiet gestures
And they’re getting under my skin

She knows the line
And she moves closer still
She never says a word
But I feel everything she will

She knows the line
She knows we can’t
And that’s the part
She understands

I don’t want to admit it
But I think she knows
That every time I resist
I’m closer than I was before

Some nights I almost give in
Some nights I almost fall
But I pull myself back
Just before the wall

Why does she do this to me?
Why does she make me stay?
She knows we’re not allowed
And she likes it that way

She knows the line
She knows my name
She knows the fire
I’m trying to contain

She knows the line
She knows I fight
And every time I win
It costs me another night

She never crosses
She never has to
She just waits
Until I almost do`,
    `Ela sabe que é bonita
Sabe como o espelho mente
Ela aprendeu as regras cedo
E as usa nos olhos

Ela se molda como perigo
Perto o bastante para sentir
Sabe que eu não vou cruzar a linha
Por isso ela torna real

Cada movimento é calculado
Cada sorriso distorce a verdade
Ela me puxa para mais perto devagar
Como se não tivesse nada a perder

Ela conhece a linha
E mesmo assim caminha nela
Se inclina no silêncio
Mas nunca pede para eu ficar

Ela conhece a linha
E continua me testando
Fingindo que não percebe
O que está fazendo comigo

Ela não para quando eu olho para longe
Continua dançando no meu espaço
Como tentação com propósito
Como se a contenção fizesse parte da caça

Digo a mim mesmo que sou mais forte
Que isso é só um jogo
Mas toda vez que ela encontra os meus olhos
Esqueço de quem é a culpa

Tento ler entre as palavras dela
Tento manter o controle
Mas ela fala em gestos quietos
E eles estão entrando debaixo da minha pele

Ela conhece a linha
E se move ainda mais perto
Nunca diz uma palavra
Mas eu sinto tudo o que ela vai fazer

Ela conhece a linha
Sabe que a gente não pode
E essa é a parte
Que ela entende

Não quero admitir
Mas acho que ela sabe
Que cada vez que resisto
Estou mais perto do que antes

Algumas noites quase cedo
Algumas noites quase caio
Mas me puxo de volta
Logo antes do muro

Por que ela faz isso comigo?
Por que me faz ficar?
Ela sabe que não temos permissão
E gosta assim

Ela conhece a linha
Sabe o meu nome
Sabe o fogo
Que estou tentando conter

Ela conhece a linha
Sabe que eu luto
E cada vez que eu ganho
Me custa mais uma noite

Ela nunca cruza
Nunca precisa
Ela só espera
Até eu quase fazer isso`,
    'Layla',
  ),
  track(
    'Forbidden Zone',
    `I’ll be honest, girl, don’t play with my heart
You’re the kind of trouble that don’t stop at the start
You don’t hear “no”, you don’t slow down
You keep knocking on a place I locked down

You walk like you know what you do to me
Every move feels intentional, dangerously
I tell myself this is nothing at all
But your shadow keeps climbing my walls

I try to stay cold, I try to stay clean
But you keep slipping in between
Every rule I swore I’d defend
You’re testing where my limits end

You’re crossing a forbidden zone
Breaking into something I don’t own
I say I’m strong, I say I’m fine
But your touch rewrites my mind

I don’t wanna fall, I don’t wanna bend
But you’re touching parts I can’t defend
You know we shouldn’t — still you stay
And that’s what makes this dangerous

You smile like you already won
Like resistance is something you run from
You read my silence like a sign
You know exactly what’s behind my eyes

I deny it, but my pulse don’t lie
Every time you get a little closer, I lose time
I don’t know where this road will go
But I feel the weight of losing control

I built myself to never break
Learned how much a heart can take
But you don’t knock, you don’t wait
You step inside and change the stakes

You’re crossing a forbidden zone
Breaking into something I don’t own
I say I’m strong, I say I’m fine
But your touch rewrites my mind

I don’t wanna fall, I don’t wanna bend
But you’re touching parts I can’t defend
You know we shouldn’t — still you stay
And that’s what makes this dangerous

I need to be that unshaken man
Stone in my chest, fire in my hands
But you found the crack I hide
The one place I don’t survive

You don’t ask permission
You don’t need a sign
You knew this was mine
Before I realized

You’re crossing a forbidden zone
And I feel myself losing ground
I keep saying “this is wrong”
But my heart don’t make a sound

If this ends in flames or scars
I swear I tried to stay apart
You touched the place I couldn’t show
Now I don’t know how far this goes

I’m still standing
But not untouched
You didn’t break me
You just got too close`,
    `Vou ser honesto, garota, não brinque com o meu coração
Você é o tipo de problema que não para no começo
Você não ouve “não”, não desacelera
Continua batendo num lugar que eu trancou

Você caminha como se soubesse o que faz comigo
Cada movimento parece intencional, perigosamente
Digo a mim mesmo que isso não é nada
Mas a sua sombra continua subindo as minhas paredes

Tento ficar frio, tento ficar limpo
Mas você continua escorregando no meio
Cada regra que jurei defender
Você testa onde os meus limites acabam

Você está cruzando uma zona proibida
Invadindo algo que eu não possuo
Digo que sou forte, digo que estou bem
Mas o seu toque reescreve a minha mente

Não quero cair, não quero me dobrar
Mas você toca partes que não consigo defender
Você sabe que a gente não deveria — ainda assim fica
E é isso que torna isso perigoso

Você sorri como se já tivesse vencido
Como se a resistência fosse algo de que você foge
Você lê o meu silêncio como um sinal
Sabe exatamente o que há por trás dos meus olhos

Eu nego, mas o meu pulso não mente
Cada vez que você chega um pouco mais perto, eu perco o tempo
Não sei para onde essa estrada vai
Mas sinto o peso de perder o controle

Me construí para nunca quebrar
Aprendi o quanto um coração aguenta
Mas você não bate, não espera
Entra e muda as apostas

Você está cruzando uma zona proibida
Invadindo algo que eu não possuo
Digo que sou forte, digo que estou bem
Mas o seu toque reescreve a minha mente

Não quero cair, não quero me dobrar
Mas você toca partes que não consigo defender
Você sabe que a gente não deveria — ainda assim fica
E é isso que torna isso perigoso

Preciso ser aquele homem inabalável
Pedra no peito, fogo nas mãos
Mas você encontrou a rachadura que eu escondo
O único lugar em que eu não sobrevivo

Você não pede permissão
Não precisa de um sinal
Você soube que isso era meu
Antes de eu perceber

Você está cruzando uma zona proibida
E sinto que estou perdendo o chão
Continuo dizendo “isso é errado”
Mas o meu coração não faz um som

Se isso terminar em chamas ou cicatrizes
Juro que tentei ficar separado
Você tocou o lugar que eu não podia mostrar
Agora não sei até onde isso vai

Ainda estou de pé
Mas não intacto
Você não me quebrou
Só chegou perto demais`,
    'Secret',
  ),
  track(
    'Rented Dreams',
    `You say all the things
You wish someone would hear
You fall in love with versions
Of who you could be, not who’s here

You build a scene in neon light
Everyone believes the lie
They cheer because they know you might
Be everything you sell tonight

But you trade all that devotion
For a promise made of chrome
Low cars, strange faces
Hands that never feel like home

You don’t care who holds you
As long as they pay
Money’s just your language
For giving yourself away

You sleep inside illusions
Borrowed lives, rented truth
You say you own the future
But you’re living off someone else’s youth

You wear desire like a dress
You change it when it’s torn
You don’t call it survival
You call it being born

You let them think they matter
You let them think you care
You say love when it’s convenient
Then disappear in smoke and glare

You say it’s just a moment
Just a body, just a deal
But every night you’re buying
What you’re too afraid to feel

You don’t care who holds you
As long as they pay
Money’s just your language
For giving yourself away

You build a world of mirrors
Where nothing’s ever true
You say you want forever
But you don’t know what to do

So tell me —
What do you want from me?

A night?
A dance?
A life you won’t choose?

A child?
A promise?
Something you’ll lose?

You say you want a “we”
While loving someone you don’t love
You ask for honesty
But you don’t know what it costs

You don’t live, you perform
You don’t love, you convince
You call it independence
But it’s just another rinse

You say I make you feel real
Then you run back to the lie
So tell me what you want from me
Before you say goodbye

You’re not free
You’re just expensive

And I don’t know
Why you want me`,
    `Você diz todas as coisas
Que gostaria que alguém ouvisse
Se apaixona por versões
De quem poderia ser, não de quem está aqui

Você monta uma cena na luz de neon
Todo mundo acredita na mentira
Eles aplaudem porque sabem que você pode
Ser tudo o que vende esta noite

Mas você troca toda essa devoção
Por uma promessa feita de cromo
Carros baixos, rostos estranhos
Mãos que nunca parecem lar

Você não se importa com quem te segura
Desde que paguem
Dinheiro é só a sua linguagem
Para se entregar

Você dorme dentro de ilusões
Vidas emprestadas, verdade alugada
Diz que é dona do futuro
Mas vive da juventude de outra pessoa

Você veste o desejo como um vestido
Troca quando rasga
Não chama de sobrevivência
Chama de nascer

Deixa eles pensarem que importam
Deixa eles pensarem que você se importa
Diz amor quando é conveniente
Depois some em fumaça e brilho

Diz que é só um momento
Só um corpo, só um acordo
Mas toda noite você compra
O que tem medo demais de sentir

Você não se importa com quem te segura
Desde que paguem
Dinheiro é só a sua linguagem
Para se entregar

Você constrói um mundo de espelhos
Onde nada é verdade
Diz que quer o para sempre
Mas não sabe o que fazer

Então me diga —
O que você quer de mim?

Uma noite?
Uma dança?
Uma vida que você não vai escolher?

Um filho?
Uma promessa?
Algo que você vai perder?

Você diz que quer um “nós”
Enquanto ama alguém que não ama
Pede honestidade
Mas não sabe o que ela custa

Você não vive, você performa
Não ama, convence
Chama de independência
Mas é só mais um ciclo

Diz que eu te faço se sentir real
Depois corre de volta para a mentira
Então me diga o que quer de mim
Antes de dizer adeus

Você não é livre
Você só é cara

E eu não sei
Por que você me quer`,
    'Jéssica',
  ),
  track(
    'Between The Pause',
    `You walked like the night owed you something
Like every door would stay open wide
I watched you collect every promise
Then leave them breathing on the side

You said love was a temporary fever
Something sweet, but never deep
You learned how to take without asking
And how to smile while others weep

I didn’t stop you
I didn’t beg
Some lessons need silence
To land where they’re meant

Time has a way of remembering names
Even when hearts forget
Every step you took without looking back
Leaves a shadow you haven’t met yet

You don’t hear it now
But you will, someday
What you send into the dark
Finds its way

You danced through lives like they were seasons
Changed your colors when it rained
Called it freedom, called it living
I called it running from your name

You thought desire was a currency
That never runs out or returns
But even fire gets lonely
When it realizes it burns

I stayed still
Let the truth breathe
You can’t outrun echoes
That start underneath

Time has a way of closing hands
That once felt untouchable
Every crown you wore so lightly
Learns how heavy it can become

You don’t feel it yet
But you will, someday
What you give without care
Finds its way

I won’t say I warned you
I won’t say a word
Some truths sound louder
When they’re never heard

You’ll call it fate
You’ll call it bad luck
But deep down you’ll know
It was already written
The moment you walked

Time doesn’t rush
It just waits
Patient as consequence
Soft as fate

When you finally stand where you once passed through
Looking for something to hold
You’ll understand what I never said
And why I let you go

Circles don’t break
They just complete
And every road you chose
Knows how to meet`,
    `Você caminhava como se a noite te devesse algo
Como se toda porta ficasse bem aberta
Vi você coletar cada promessa
E deixá-las respirando de lado

Você disse que o amor era uma febre temporária
Algo doce, mas nunca profundo
Você aprendeu a pegar sem pedir
E a sorrir enquanto os outros choram

Eu não te parei
Eu não implorei
Algumas lições precisam de silêncio
Para pousar onde devem

O tempo tem um jeito de lembrar nomes
Mesmo quando os corações esquecem
Cada passo que você deu sem olhar para trás
Deixa uma sombra que você ainda não encontrou

Você não ouve agora
Mas um dia vai ouvir
O que você manda para o escuro
Encontra o caminho

Você dançou por vidas como se fossem estações
Mudou de cores quando chovia
Chamou de liberdade, chamou de viver
Eu chamei de fugir do seu nome

Você achava que o desejo era uma moeda
Que nunca acaba nem volta
Mas até o fogo fica sozinho
Quando percebe que queima

Eu fiquei quieto
Deixei a verdade respirar
Você não consegue fugir de ecos
Que começam por baixo

O tempo tem um jeito de fechar mãos
Que um dia pareciam intocáveis
Cada coroa que você usou tão leve
Aprende o quanto pode pesar

Você ainda não sente
Mas um dia vai sentir
O que você dá sem cuidado
Encontra o caminho

Não vou dizer que te avisei
Não vou dizer uma palavra
Algumas verdades soam mais alto
Quando nunca são ouvidas

Você vai chamar de destino
Vai chamar de azar
Mas no fundo vai saber
Já estava escrito
No momento em que você andou

O tempo não corre
Ele só espera
Paciente como consequência
Suave como destino

Quando finalmente ficar onde um dia passou
Procurando algo para segurar
Vai entender o que eu nunca disse
E por que eu te deixei ir

Círculos não quebram
Eles só se completam
E cada estrada que você escolheu
Sabe como se encontrar`,
    'Natália',
  ),
  track(
    'Half Of Us',
    `I noticed how we resemble each other
Not in shape, but in weight
You carry a little warmth
I carry what stays when it’s gone

Sometimes that’s all we are —
Ears trained to stay open
Waiting for something
That never chooses us

You place me in narrow rooms
Where every answer costs
Where holding on erases
And letting go feels final

There’s a beauty in it
The kind that thins you slowly
So quietly
It almost feels deserved

I stand between two instincts
Neither one clean
Neither one kind

There are moments I study myself
As if damage could translate
As if proof lived under the surface
Enough to interrupt your absence

But even unraveling
Would arrive too softly
To redirect your eyes
Or house me in your heart

They promised this thing
Would mirror itself
Two hands moving forward
Toward the same light

But you are rarely here
And never inward
You move past me
Without meaning to

I don’t accuse
I don’t dramatize

I just don’t understand
How something can feel mutual
And never be shared

This was supposed to be beautiful
A quiet road toward ease
Instead it stays unfinished
Like a sentence
No one agrees to complete

I don’t know what to do
With a feeling
That knows your shape
But has nowhere to live`,
    `Notei como nos parecemos
Não na forma, mas no peso
Você carrega um pouco de calor
Eu carrego o que fica quando ele some

Às vezes é só isso que somos —
Ouvidos treinados a ficar abertos
Esperando algo
Que nunca nos escolhe

Você me coloca em quartos estreitos
Onde cada resposta custa
Onde segurar apaga
E soltar parece definitivo

Há uma beleza nisso
Do tipo que te afina devagar
Tão quieto
Que quase parece merecido

Fico entre dois instintos
Nenhum limpo
Nenhum gentil

Há momentos em que me estudo
Como se o dano pudesse traduzir
Como se a prova vivesse sob a superfície
O bastante para interromper a sua ausência

Mas até se desfazer
Chegaria suave demais
Para redirecionar os seus olhos
Ou me abrigar no seu coração

Prometeram que essa coisa
Se espelharia
Duas mãos avançando
Em direção à mesma luz

Mas você raramente está aqui
E nunca para dentro
Você passa por mim
Sem querer

Eu não acuso
Eu não dramatizo

Só não entendo
Como algo pode parecer mútuo
E nunca ser compartilhado

Isso deveria ser bonito
Uma estrada quieta rumo ao alívio
Em vez disso fica incompleto
Como uma frase
Que ninguém concorda em terminar

Não sei o que fazer
Com um sentimento
Que conhece a sua forma
Mas não tem onde morar`,
    'Vanessa',
  ),
  track(
    'Violence Words',
    `I notice the way your name
Leaves the room before you do
Like something important
Learned how not to stay true

I don’t follow you with words
I follow you with doubt
It grows quiet in my chest
Then figures its way out

You read me like a warning
Even when I’m calm
Your silence sharpens moments
That were never meant to harm

I carry things unfinished
Not sins, just pieces of air
But every pause I keep for me
Feels heavier when you stare

Him: I don’t want to lose you to the dark
Her: I don’t want to live inside your fear

I miss the way you spoke
Before every word had weight
Now I listen for mistakes
In things you never say

I ask too many questions
Because I’m scared of space
I mistake your breathing
For distance I can’t face

I’m tired of being careful
With a love that used to move
I didn’t give myself away
I just needed room

You hold me like I’m leaving
Before I even turn
And every time you pull me close
Something quiet burns

Him: Tell me where I stand
Her: Tell me why you doubt

We’re wearing down the beautiful
By asking it to stay
Turning love into a question
That never goes away

If every glance becomes a test
Every silence, a sign
We’ll lose each other slowly
Without crossing a line

I know my jealousy
Doesn’t come from what you do
It comes from loving something
I don’t know how to lose

I know your fear is quiet
But it follows every sound
I’m not trying to escape you
I’m just trying not to drown

Him: I need reassurance
Her: I need air
Him: I need you present
Her: I need you fair

We’re not breaking from betrayal
Or something someone said
We’re breaking from the effort
Of carrying unsaid

If there’s still a way between us
It won’t come from control
But from learning how to love
Without losing the whole

Him: I’m scared of losing you
Her: I’m scared of losing myself

And we’re both afraid
Of what’s left`,
    `Notei o jeito como o seu nome
Sai do quarto antes de você
Como algo importante
Aprendi a não permanecer verdadeiro

Eu não te sigo com palavras
Eu te sigo com dúvida
Ela cresce quieta no meu peito
Depois encontra a saída

Você me lê como um aviso
Mesmo quando estou calmo
Seu silêncio afia momentos
Que nunca deveriam ferir

Carrego coisas inacabadas
Não pecados, só pedaços de ar
Mas cada pausa que guardo para mim
Pesa mais quando você encara

Ele: Não quero te perder para o escuro
Ela: Não quero viver dentro do seu medo

Sinto falta do jeito que você falava
Antes de cada palavra ter peso
Agora escuto erros
Nas coisas que você nunca diz

Faço perguntas demais
Porque tenho medo do espaço
Confundo a sua respiração
Com uma distância que não consigo encarar

Estou cansado de ser cuidadoso
Com um amor que costumava se mover
Eu não me entreguei
Só precisava de espaço

Você me segura como se eu estivesse saindo
Antes mesmo de eu me virar
E cada vez que me puxa para perto
Algo quieto queima

Ele: Me diga onde eu fico
Ela: Me diga por que você duvida

Estamos desgastando o belo
Pedindo que fique
Transformando o amor numa pergunta
Que nunca vai embora

Se cada olhar vira um teste
Cada silêncio, um sinal
Vamos nos perder devagar
Sem cruzar uma linha

Sei que o meu ciúme
Não vem do que você faz
Vem de amar algo
Que não sei como perder

Sei que o seu medo é quieto
Mas segue cada som
Não estou tentando escapar de você
Só estou tentando não me afogar

Ele: Preciso de reafirmação
Ela: Preciso de ar
Ele: Preciso de você presente
Ela: Preciso de você justa

Não estamos quebrando por traição
Nem por algo que alguém disse
Estamos quebrando pelo esforço
De carregar o não dito

Se ainda houver um caminho entre nós
Não virá do controle
Mas de aprender a amar
Sem perder o todo

Ele: Tenho medo de te perder
Ela: Tenho medo de me perder

E os dois temos medo
Do que sobra`,
    'Elaine',
  ),
  track(
    'The Way I Stay',
    `He arrives like something temporary
Never takes off his coat
I learn his exits by heart
Before he learns my name

He touches what he won’t keep
Leaves warmth like borrowed light
I tell myself it’s nothing
Then wait for him all night

I try to starve the feeling
Teach my heart to rest
But it keeps reaching for him
Like it doesn’t know what’s best

I don’t know why I stay
When he looks past me
Like I’m scenery
In his way

I don’t know why I care
When every word he gives
Feels halfway there

He speaks in almost-promises
Just enough to pull me near
Then disappears inside himself
Like I was never here

I collect the smallest kindness
Like it’s proof of something true
As if being needed briefly
Means I mattered to you

I tell myself to let it fade
To loosen what I hold
But some feelings don’t listen
They only grow old

I don’t know why I stay
When he never chooses me
He just stays long enough
To make me believe

I don’t know why it hurts
To want someone
Who treats your heart
Like it works for him

Maybe love isn’t always gentle
Maybe it isn’t fair
Maybe I learned devotion
Before I learned self-care

I don’t call it cruelty
I don’t call him bad
I just don’t understand
Why I want what makes me sad

I don’t know why I stay
When I’m easier to leave
Than I am to hold
Or to believe

If loving him is losing
Then I lose quietly
Because leaving feels harder
Than staying unseen

He never asks me to remain
He never asks me to go

And somehow
That’s what keeps me
Here`,
    `Ele chega como algo temporário
Nunca tira o casaco
Aprendo as saídas dele de cor
Antes de ele aprender o meu nome

Ele toca o que não vai guardar
Deixa calor como luz emprestada
Digo a mim mesma que não é nada
Depois espero por ele a noite toda

Tento matar o sentimento de fome
Ensinar o coração a descansar
Mas ele continua se estendendo para ele
Como se não soubesse o que é melhor

Não sei por que fico
Quando ele olha através de mim
Como se eu fosse cenário
No caminho dele

Não sei por que me importo
Quando cada palavra que ele dá
Parece só pela metade

Ele fala em quase-promessas
O bastante para me puxar para perto
Depois some dentro de si
Como se eu nunca tivesse estado aqui

Coleto a menor gentileza
Como se fosse prova de algo verdadeiro
Como se ser precisada por um instante
Significasse que eu importei para você

Digo a mim mesma para deixar sumir
Soltar o que seguro
Mas alguns sentimentos não escutam
Só envelhecem

Não sei por que fico
Quando ele nunca me escolhe
Só fica o tempo suficiente
Para me fazer acreditar

Não sei por que dói
Querer alguém
Que trata o seu coração
Como se trabalhasse para ele

Talvez o amor nem sempre seja gentil
Talvez não seja justo
Talvez eu tenha aprendido devoção
Antes de aprender autocuidado

Não chamo de crueldade
Não o chamo de mau
Só não entendo
Por que quero o que me deixa triste

Não sei por que fico
Quando sou mais fácil de deixar
Do que de segurar
Ou de acreditar

Se amá-lo é perder
Então perco em silêncio
Porque partir parece mais difícil
Do que ficar sem ser vista

Ele nunca pede para eu permanecer
Ele nunca pede para eu ir

E de algum modo
É isso que me mantém
Aqui`,
    'Ellen (sobre mim)',
  ),
  track(
    'Only When You Need Me',
    `You call when the night feels empty
Not when it’s kind
I’ve learned the sound of your footsteps
Only when they’re behind

You touch like you’re passing through
Like I’m a place to rest
You take what’s warm in the moment
And leave the rest

I tell myself this is nothing
Just timing, just space
But my heart keeps mistaking
Your need for a face

I don’t know why I stay
When I’m only useful
In the quiet hours
You don’t want to name

I don’t know why it hurts
To feel chosen
Only when
You’re breaking

You speak in borrowed closeness
Then disappear by dawn
I memorize your exits
Like that’s how love goes on

I try to loosen the feeling
Teach myself restraint
But it keeps returning
Like it doesn’t understand

I know I’m not your shelter
I’m just where you stand
Before you move forward
With someone else’s hand

I don’t know why I stay
When I’m never the answer
Just a temporary place
You pass through

I don’t know why I want
Someone who only sees me
When there’s nothing else
To do

Maybe I confuse intensity
With being seen
Maybe I learned affection
In spaces in between

I don’t call you cruel
I don’t call this wrong
I just don’t know
Why I hold on

I don’t know why I stay
When you don’t choose
You arrive when you’re empty
Then leave full

If loving you is silence
Then I’ve learned it well
I just wish I knew
When to let myself go

You don’t ask me to remain
You don’t ask me to leave

You just come back
When you need me`,
    `Você liga quando a noite parece vazia
Não quando ela é gentil
Aprendi o som dos seus passos
Só quando estão atrás

Você toca como quem está de passagem
Como se eu fosse um lugar para descansar
Leva o que é quente no momento
E deixa o resto

Digo a mim mesmo que isso não é nada
Só timing, só espaço
Mas o meu coração continua confundindo
A sua necessidade com um rosto

Não sei por que fico
Quando só sou útil
Nas horas quietas
Que você não quer nomear

Não sei por que dói
Me sentir escolhido
Só quando
Você está se quebrando

Você fala em proximidade emprestada
Depois some ao amanhecer
Memorizo as suas saídas
Como se fosse assim que o amor segue

Tento soltar o sentimento
Ensinar-me contenção
Mas ele continua voltando
Como se não entendesse

Sei que não sou o seu abrigo
Sou só onde você fica de pé
Antes de seguir em frente
Com a mão de outra pessoa

Não sei por que fico
Quando nunca sou a resposta
Só um lugar temporário
Por onde você passa

Não sei por que quero
Alguém que só me vê
Quando não há mais nada
Para fazer

Talvez eu confunda intensidade
Com ser visto
Talvez eu tenha aprendido afeto
Nos espaços entre

Não te chamo de cruel
Não chamo isso de errado
Só não sei
Por que me agarro

Não sei por que fico
Quando você não escolhe
Você chega quando está vazio
Depois sai cheio

Se te amar é silêncio
Então aprendi bem
Só gostaria de saber
Quando me deixar ir

Você não pede para eu permanecer
Você não pede para eu ir

Você só volta
Quando precisa de mim`,
    'Resposta a Ellen',
  ),
  track(
    'Fake Love Glow',
    `The way you look at me
Feels almost honest
Like something I could keep
If I don't touch it

They whisper your reputation
Like it’s scripture in the dark
But I only hear your voice
When it says my name soft

I want to believe in the angle of your eyes
The way you lean closer when the light is right
I pretend the rumors dissolve in the bass
When you pull me back into your space

If this is love
It shines too clean
Like plastic diamonds
On your skin

You hold my face
But look elsewhere
Counting hearts
That aren't mine

They say you borrow affection
Like currency
Trade devotion for attention
And call it destiny

You don't steal — you collect
What’s already willing
I fall like I chose it
That's the part that's killing

You keep the night in motion
Never let it slow
Every second needs a witness
Every feeling needs to show

If this is love
Why can't we sit
In quiet corners
Without a lens?

You're here with me
But everywhere
Wearing desire
Like it's fashion

We don't talk like people
Who plan to stay
We pose like moments
Meant to fade

Your reflection knows you better
Than I ever will
You trust the glass
More than the still

I watch you love the image
While I love the delay
That second before you turn away

Maybe I'm just the center
Of tonight’s attention
Until something brighter
Enters the frame

If this is love
It’s rehearsed
Well-lit lies
Dressed to hurt

You keep me close
But never alone
I feel you most
When you're already gone

I don’t want to call it fake
But nothing here is real

You kiss like it's content
And I fall for the feel`,
    `O jeito que você me olha
Parece quase honesto
Como algo que eu poderia guardar
Se eu não tocar

Eles sussurram a sua reputação
Como escritura no escuro
Mas eu só ouço a sua voz
Quando diz o meu nome baixinho

Quero acreditar no ângulo dos seus olhos
No jeito que você se inclina quando a luz está certa
Finjo que os rumores se dissolvem no grave
Quando você me puxa de volta para o seu espaço

Se isso é amor
Brilha limpo demais
Como diamantes de plástico
Na sua pele

Você segura o meu rosto
Mas olha para outro lado
Contando corações
Que não são meus

Dizem que você empresta afeto
Como moeda
Troca devoção por atenção
E chama de destino

Você não rouba — você coleta
O que já está disposto
Eu caio como se tivesse escolhido
Essa é a parte que mata

Você mantém a noite em movimento
Nunca deixa desacelerar
Cada segundo precisa de testemunha
Cada sentimento precisa se mostrar

Se isso é amor
Por que não podemos sentar
Em cantos quietos
Sem uma lente?

Você está aqui comigo
Mas em todo lugar
Vestindo desejo
Como se fosse moda

A gente não conversa como pessoas
Que planejam ficar
Posamos como momentos
Feitos para sumir

O seu reflexo te conhece melhor
Do que eu jamais vou conhecer
Você confia no vidro
Mais do que no silêncio

Assisto você amar a imagem
Enquanto eu amo o atraso
Aquele segundo antes de você se virar

Talvez eu seja só o centro
Da atenção desta noite
Até algo mais brilhante
Entrar no quadro

Se isso é amor
É ensaiado
Mentiras bem iluminadas
Vestidas para ferir

Você me mantém perto
Mas nunca sozinho
Eu sinto você mais
Quando você já foi embora

Não quero chamar de falso
Mas nada aqui é real

Você beija como se fosse conteúdo
E eu caio pelo sentimento`,
    'Talita',
  ),
  track(
    'Keys I Never Held',
    `What stirs inside you
When my words circle your name?
I aim every thought in your direction
Like devotion without a place

There’s nothing rare left
In a room this hollow
Still, I keep asking the silence
If you feel it too

Some truths arrive too early
And seal the lips that hear them
They linger in the mind
Until escape feels impossible

This is how it breaks
When love echoes alone
This is how it fades
When I’m not where you belong

I stay where you forget
I wait where you don’t return
And the absence learns my shape

Have you ever stood surrounded
Yet untouched by the night?
When everything feels distant
Even the one who loves you right

I walk through moments unfinished
Like a shadow you don’t claim
Loving you blindly
In a room that knows my name

You hear me, but not enough
To meet me in the fall
I speak in full sentences
You answer with none at all

This is how it feels
When you’re not here
This is how it aches
When I disappear

I call it patience
But it’s just pain
Dressed to stay

I gave you everything open
No locks, no disguise
You kept the entrance hidden
Somewhere behind your eyes

If hearts could be repaired
By wanting it to be true
I’d already be whole
Still loving you

Tell me where you keep the key
To what you never let me touch
I broke myself in honesty
You never asked for much

If loving you is losing
Then I lose without defense
Because I’m still here loving
What never chose me back

I don’t blame your distance
I just don’t know how to leave

When every part of me
Still believes`,
    `O que se mexe em você
Quando as minhas palavras giram em torno do seu nome?
Apontar cada pensamento na sua direção
Como devoção sem lugar

Não sobra nada raro
Num quarto tão oco
Ainda assim, continuo perguntando ao silêncio
Se você também sente

Algumas verdades chegam cedo demais
E selam os lábios que as ouvem
Elas ficam na mente
Até a fuga parecer impossível

É assim que quebra
Quando o amor ecoa sozinho
É assim que some
Quando eu não sou onde você pertence

Fico onde você esquece
Espero onde você não volta
E a ausência aprende a minha forma

Você já esteve cercado
E ainda assim intocado pela noite?
Quando tudo parece distante
Até quem te ama de verdade

Caminho por momentos inacabados
Como uma sombra que você não reivindica
Te amando de olhos fechados
Num quarto que conhece o meu nome

Você me ouve, mas não o bastante
Para me encontrar na queda
Falo em frases completas
Você responde com nenhuma

É assim que se sente
Quando você não está aqui
É assim que dói
Quando eu desapareço

Chamo de paciência
Mas é só dor
Vestida para ficar

Te dei tudo aberto
Sem fechaduras, sem disfarce
Você manteve a entrada escondida
Em algum lugar atrás dos seus olhos

Se corações pudessem ser reparados
Só por querer que fosse verdade
Eu já estaria inteiro
Ainda te amando

Me diga onde você guarda a chave
Do que nunca me deixou tocar
Me quebrei na honestidade
Você nunca pediu muito

Se te amar é perder
Então perco sem defesa
Porque ainda estou aqui amando
O que nunca me escolheu de volta

Não culpo a sua distância
Só não sei como partir

Quando cada parte de mim
Ainda acredita`,
    'Silana',
  ),
  track(
    'Nice To Meet You',
    `Nice to meet you, I’m Lameck
You know how it goes
Some things live so deep
They forget how to be told

I’m not good with exits
Or with saying what stays
I carry whole conversations
That never find their way

Look, girl
You move like gravity
Quiet, invisible
Pulling everything in me

I hope you understand
This isn’t a line
I’m not asking for mercy
Or your time

Whatever this is
It needed a voice
You didn’t ask for it
But I didn’t have a choice

Since that night
Something shifted its place
You stayed in my thoughts
Like you never left

You don’t know what you do
That’s the dangerous part
You exist like a power
With no concern for the dark

I see you in small moments
In songs, in passing cars
In the way the city breathes
After midnight bars

I tried to rename the feeling
Call it chance, call it mood
But it keeps returning
Every time I think of you

Whatever this is
It’s not a request
I don’t need you to answer
I just needed it said

Since that night
My silence changed
Your absence learned
My name

I don’t expect anything
Not closeness, not signs
Some truths aren’t meant to open doors
They just refuse to hide

If you walk away unchanged
I’ll understand
Some things are only meant
To be felt

Whatever this is
I’ll carry it clean
No pressure, no weight
Placed on you or me

But I couldn’t pretend
I don’t feel it this way
Some names stay with us
After one night

So this is all
I wanted to do

Let you know
You crossed my mind

And stayed`,
    `Prazer em te conhecer, eu sou Lameck
Você sabe como é
Algumas coisas vivem tão fundo
Que esquecem como ser contadas

Não sou bom com saídas
Nem em dizer o que fica
Carrego conversas inteiras
Que nunca encontram o caminho

Olha, garota
Você se move como gravidade
Quieta, invisível
Puxando tudo em mim

Espero que entenda
Isso não é cantada
Não estou pedindo misericórdia
Nem o seu tempo

Seja o que for isso
Precisava de uma voz
Você não pediu
Mas eu não tive escolha

Desde aquela noite
Algo mudou de lugar
Você ficou nos meus pensamentos
Como se nunca tivesse saído

Você não sabe o que faz
Essa é a parte perigosa
Você existe como um poder
Sem se importar com o escuro

Te vejo em pequenos momentos
Em músicas, em carros que passam
No jeito que a cidade respira
Depois dos bares da madrugada

Tentei renomear o sentimento
Chamar de acaso, chamar de humor
Mas ele continua voltando
Toda vez que penso em você

Seja o que for isso
Não é um pedido
Não preciso que você responda
Só precisava que fosse dito

Desde aquela noite
O meu silêncio mudou
A sua ausência aprendeu
O meu nome

Não espero nada
Nem proximidade, nem sinais
Algumas verdades não são feitas para abrir portas
Elas só se recusam a se esconder

Se você for embora sem mudar
Eu entendo
Algumas coisas só são feitas
Para serem sentidas

Seja o que for isso
Vou carregar limpo
Sem pressão, sem peso
Em você ou em mim

Mas não pude fingir
Que não sinto assim
Alguns nomes ficam conosco
Depois de uma noite

Então é só isso
Que eu queria fazer

Te deixar saber
Que você atravessou a minha mente

E ficou`,
    'Viviana',
  ),
  track(
    'Only When You Need Me (Dakmode)',
    `You call when the night feels empty
Not when it’s kind
I’ve learned the sound of your footsteps
Only when they’re behind

You touch like you’re passing through
Like I’m a place to rest
You take what’s warm in the moment
And leave the rest

I tell myself this is nothing
Just timing, just space
But my heart keeps mistaking
Your need for a face

I don’t know why I stay
When I’m only useful
In the quiet hours
You don’t want to name

I don’t know why it hurts
To feel chosen
Only when
You’re breaking

You speak in borrowed closeness
Then disappear by dawn
I memorize your exits
Like that’s how love goes on

I try to loosen the feeling
Teach myself restraint
But it keeps returning
Like it doesn’t understand

I know I’m not your shelter
I’m just where you stand
Before you move forward
With someone else’s hand

I don’t know why I stay
When I’m never the answer
Just a temporary place
You pass through

I don’t know why I want
Someone who only sees me
When there’s nothing else
To do

Maybe I confuse intensity
With being seen
Maybe I learned affection
In spaces in between

I don’t call you cruel
I don’t call this wrong
I just don’t know
Why I hold on

I don’t know why I stay
When you don’t choose
You arrive when you’re empty
Then leave full

If loving you is silence
Then I’ve learned it well
I just wish I knew
When to let myself go

You don’t ask me to remain
You don’t ask me to leave

You just come back
When you need me`,
    `Você liga quando a noite parece vazia
Não quando ela é gentil
Aprendi o som dos seus passos
Só quando estão atrás

Você toca como quem está de passagem
Como se eu fosse um lugar para descansar
Leva o que é quente no momento
E deixa o resto

Digo a mim mesmo que isso não é nada
Só timing, só espaço
Mas o meu coração continua confundindo
A sua necessidade com um rosto

Não sei por que fico
Quando só sou útil
Nas horas quietas
Que você não quer nomear

Não sei por que dói
Me sentir escolhido
Só quando
Você está se quebrando

Você fala em proximidade emprestada
Depois some ao amanhecer
Memorizo as suas saídas
Como se fosse assim que o amor segue

Tento soltar o sentimento
Ensinar-me contenção
Mas ele continua voltando
Como se não entendesse

Sei que não sou o seu abrigo
Sou só onde você fica de pé
Antes de seguir em frente
Com a mão de outra pessoa

Não sei por que fico
Quando nunca sou a resposta
Só um lugar temporário
Por onde você passa

Não sei por que quero
Alguém que só me vê
Quando não há mais nada
Para fazer

Talvez eu confunda intensidade
Com ser visto
Talvez eu tenha aprendido afeto
Nos espaços entre

Não te chamo de cruel
Não chamo isso de errado
Só não sei
Por que me agarro

Não sei por que fico
Quando você não escolhe
Você chega quando está vazio
Depois sai cheio

Se te amar é silêncio
Então aprendi bem
Só gostaria de saber
Quando me deixar ir

Você não pede para eu permanecer
Você não pede para eu ir

Você só volta
Quando precisa de mim`,
  ),
];
