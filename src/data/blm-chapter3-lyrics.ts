/** Chapter 3 · In Time With Your Heart lyrics (from Genius + PT translation). */
import type { BunnyAlbumTrack } from '../types';

const chapter3LyricsNote =
  'Letra original em inglês à esquerda; tradução em português à direita. Chapter 3 · In Time With Your Heart — Bunny Land Music.';

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
      title: 'Tradução',
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
    `Eu leio o teu silêncio como um roteiro
Cada pausa, um aperto mais certeiro
Você toca minha mão, depois solta
E nesse espaço… eu transbordo, à solta

Você não precisa dizer nada, afinal
O teu silêncio me quebra mais que um final

Quando você não diz nada, eu sangro
Cada palavra que falta corta fundo
Você é o eco que eu não consigo segurar
É o calor que me deixa congelar
E eu prefiro doer a não acreditar —
Então, quando você não diz nada… eu sangro

Você é um fogo que eu nunca nomeio
Mas continuo dançando no teu meio
Você deixa seus fantasmas na minha cama
Nunca mente — você ama, em chama

Não estamos quebrados, só desfeitos
Como estrelas que somem antes do efeito
Não olhe pra trás — só respira comigo
Mesmo que seja em silêncio, contido

Quando você não diz nada, eu sangro
Mas talvez seja assim que o amor é feito
Não é promessa, nem súplica em vão
Só um instante selvagem, sem prisão
Então não explique, não precisa pedir —
Só não diga nada… e me deixe sangrir`,
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
    `A cidade respira sobre a minha pele
O neon me corta por dentro, fere
Cada toque parece quase real
Mas nada fica, nada faz o mal sarar

Eu persigo fantasmas no teu olhar
Mentiras douradas vestidas de preto a brilhar
Não perguntamos se isso é certo ou não
Só queimamos pra sentir o coração

O amor tem gosto doce na escuridão
Mas some antes mesmo da faísca em combustão
Eu sinto o céu quando você se aproxima
E depois caio onde ninguém pisa

Nós dançamos sobre veludo em ruínas
Embriagados de sonhos que não vão ficar
O teu beijo parece eterno
Mas o eterno não sabe descansar

Nos afogamos em momentos roubados
Até o sol começar a falar a verdade
Eu não sei se isso é amor
Ou só dor vestida de juventude e vaidade

Perfume, fumaça e promessas quebradas
Diz meu nome, mas não pergunta nada
Tua sombra encaixa na minha solidão
Perto demais pra sentir, longe pra ter chão

Transformamos pecados em cinema
Cada erro vira cena sem problema
Se eu parar, posso sentir o vazio
Então eu bebo mais um amanhã tardio

Eu ouço anjos pulsando no grave
Sinto meu coração correr, instável
Mas quando o silêncio toma o lugar
Eu lembro tudo o que a gente deixa escapar

Nós dançamos sobre veludo em ruínas
Embriagados de sonhos que não vão ficar
O teu toque parece uma promessa
Mas promessas não sabem respirar

Nos afogamos em momentos roubados
Até a manhã quebrar a ilusão
Eu não sei se isso é amor
Ou só dor usando juventude como disfarção

Se o prazer é uma oração
Tenho me ajoelhado toda noite, então
Trocando pedaços da minha alma
Por uma luz temporária, falsa calma

Diz pra mim —
Você sente isso também?
Ou eu amo algo que nunca existiu além?

Nós dançamos sobre veludo em ruínas
Com o coração meio aberto, desigual
Buscando a eternidade
No lado escuro do desejo carnal

Se esse amor for só fome e nada mais
Que ao menos deixe uma marca brutal
Prefiro queimar na tua sombra
Do que não sentir nada no escuro total

O neon se apaga…
Mas a sensação não vai embora
Eu ainda te persigo
Através da dor que demora`,
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
    `Eu era jovem, não conhecia as regras
Achei que amor fosse algo que se prova
Então me dobrei até perder a forma
Fiz coisas que nunca pensei que faria

Aprendi tuas ruas, tuas preces caladas
Aprendi teu sorriso de longe, à distância
Você sempre soube que eu estava ali
Sempre escolheu fingir que não via

Você corria como se eu fosse só ar
Como se te querer fosse algo errado
Mas eu continuava respirando onde você cantava
Só pra sentir que eu pertencia a algum lugar

Você cantava com anjos ao seu lado
Eu ficava onde nunca foi meu chão
Entrei no teu coro só pra estar perto
Enquanto você fugia da própria canção

Você conhecia meu coração antes da minha voz
Me via quebrando, parado no mesmo lugar
Deixou que eu ficasse dentro do teu mundo
Mas nunca me deixou sentir o que você sentia

Segui luzes noite adentro
Você dançava onde eu não conseguia respirar
Ria com rostos que eu não conhecia
Como se eu nunca tivesse sido feito pra ser visto

Eu te vi entregar teus beijos
Como se amor fosse só um jogo qualquer
Então você olhou direto nos meus olhos
E beijou outra pessoa… de propósito

Algo dentro de mim se fechou
Não foi raiva — foi pior que dor
Saí antes que meu coração desabasse
Fingindo que ainda era o mesmo

Você cantava com anjos ao seu lado
Eu ficava onde não pertencia
Eu te amei em silêncio, por inteiro
Enquanto você insistia em me provar errado

Você nunca me tocou, nunca mentiu
Mas ainda assim me senti traído
Eu quebrei sozinho dentro do peito
E desapareci sem fazer barulho

Fui procurar — você já tinha sumido
Como se aquela vida nunca tivesse existido
Sem adeus, sem um último olhar
Só um fantasma que eu amava à noite

Os anos passaram, eu mudei de pele
Aprendi o que o amor não deveria ser
Encontrei alguém que ficou
Alguém que olhou de volta pra mim

Então eu te vi — mesmos olhos, mesmo feitiço
Esperando que eu caísse outra vez
Mas algo em mim não se moveu
Tua magia errou meu coração

Agora é você quem me segue
Fazendo perguntas que eu não sinto mais
Ganhei o jogo que nunca joguei
Aprendendo a hora certa de partir

Eu não te odeio
Eu não te amo
Eu só finalmente fui embora

Você me ensinou como o desejo mente
E como a liberdade às vezes parece igual`,
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
    `Pra você eu sou só um garoto mimado
Filho único, brincando de rei do barulho
Você me olha com esse sorriso torto
Como se tudo que eu toco fosse de mentira

Você acha que eu vivo dentro de uma ilusão
Um truque barato que o dinheiro compra
Pra você eu não sou nada — só mais um nome
Que você jura que possui, que jura dominar

Mas tem uma parte que você nunca enxerga
Eu não me dobro onde você espera

Eu não sou o teu tipo
Eu não jogo o teu jogo
Não preciso do teu trono
Nem do poder que você finge ter

Eu não ligo pro que você diz
Não me movo pelo teu orgulho
E é por isso que eu fico
Morando de graça na tua mente

Você trata o mundo como se fosse teu palco
Como se todos existissem pra ser substituídos
Você chama isso de charme, eu chamo de medo
Você precisa de controle pra se sentir real

Você diz que eu não sei do que falo
Que sou verde demais pra entender teu fogo
Engraçado é que você ainda olha pra trás
Como se eu fosse o erro que você não consegue apagar

Você pode me descartar, dizer que estou errado
Mas o silêncio pesa quando eu vou embora

Eu não sou o teu tipo
Eu não jogo o teu jogo
Não corro atrás de aprovação
Nem digo o teu nome

Eu não ligo pro que você pensa
Eu não alimento teu orgulho
E é por isso que o meu nome
É o que fica preso na tua cabeça

Você domina os fracos, os assustados
Os que precisam que você seja justo
Mas eu não ajoelho, não finjo
É aí que o teu poder chega ao fim

Você não me ama
Você não me odeia
Você só odeia o fato de eu ser livre

Eu não sou o teu tipo
Nunca fui, nunca tentei
Não preciso das tuas regras
Pra atravessar a noite

Você pode me chamar de nada
Dizer que eu estou perdendo tempo
Mas é o meu nome que você sussurra
Quando fica sozinho à noite

Eu não jogo o teu jogo
Eu não quero a tua coroa
E mesmo assim
Sou eu
Que você não consegue calar`,
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
Aprendeu as regras cedo
E carrega todas no olhar

Ela se molda como perigo
Perto o bastante pra sentir
Ela sabe que eu não cruzo o limite
É por isso que faz parecer real

Cada movimento é calculado
Cada sorriso entorta a verdade
Ela me puxa devagar
Como se não tivesse nada a perder

Ela conhece o limite
E caminha sobre ele mesmo assim
Se inclina no silêncio
Mas nunca me pede pra ficar

Ela conhece o limite
E continua me testando
Fingindo que não percebe
O que está fazendo comigo

Ela não para quando eu desvio o olhar
Continua dançando no meu espaço
Como tentação com propósito
Como se o controle fizesse parte da caça

Eu digo a mim mesmo que sou mais forte
Que isso é só um jogo
Mas toda vez que ela encontra meus olhos
Eu esqueço quem é o culpado

Tento ler nas entrelinhas
Tento manter o controle
Mas ela fala em gestos silenciosos
E eles estão entrando na minha pele

Ela conhece o limite
E chega ainda mais perto
Nunca diz uma palavra
Mas eu sinto tudo o que ela quer

Ela conhece o limite
Ela sabe que não podemos
E é exatamente isso
Que ela entende

Não quero admitir
Mas acho que ela sabe
Que toda vez que eu resisto
Estou mais perto do que antes

Algumas noites eu quase cedo
Algumas noites eu quase caio
Mas me puxo de volta
Pouco antes do muro

Por que ela faz isso comigo?
Por que me prende assim?
Ela sabe que não é permitido
E gosta que seja assim

Ela conhece o limite
Conhece meu nome
Conhece o fogo
Que eu tento conter

Ela conhece o limite
Sabe que eu luto
E toda vez que eu venço
Isso me custa mais uma noite

Ela nunca cruza
Nunca precisa cruzar
Ela apenas espera
Até que eu quase cruze`,
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
    `Vou ser sincero, garota, não brinque com meu coração
Você é o tipo de problema que não para no começo, não
Você não escuta “não”, não diminui o passo
Continua batendo num lugar que eu mantive trancado

Você anda como se soubesse o que faz comigo
Cada movimento parece intencional, perigoso
Eu digo a mim mesmo que isso não é nada
Mas tua sombra continua escalando minhas muralhas

Eu tento ser frio, tento me manter inteiro
Mas você continua passando pelo meio
De cada regra que jurei defender
Você testa onde meus limites vão ceder

Você está cruzando uma zona proibida
Invadindo algo que nem é permitido sentir ainda
Eu digo que sou forte, digo que estou bem
Mas o teu toque reescreve minha mente também

Eu não quero cair, não quero ceder
Mas você toca partes que eu não sei proteger
Você sabe que não devíamos — mesmo assim fica
E é isso que torna tudo tão perigoso

Você sorri como se já tivesse vencido
Como se resistência fosse algo esquecido
Você lê meu silêncio como um sinal
Sabe exatamente o que existe por trás do meu olhar

Eu nego, mas meu pulso não mente
Cada vez que você chega mais perto, eu perco o tempo
Não sei onde essa estrada vai dar
Mas sinto o peso de começar a perder o controle já

Eu me construí pra nunca quebrar
Aprendi o quanto um coração pode aguentar
Mas você não bate, não espera permissão
Você entra direto e muda o jogo então

Você está cruzando uma zona proibida
Invadindo algo que eu jurei proteger na vida
Eu digo que sou forte, digo que estou bem
Mas o teu toque muda tudo que eu sei

Eu não quero cair, não quero ceder
Mas você toca partes que eu não sei defender
Você sabe que não devíamos — mesmo assim fica
E é isso que torna tudo tão perigosa

Eu preciso ser aquele homem inabalável
Pedra no peito, fogo controlável
Mas você encontrou a rachadura escondida
O único lugar onde eu não sobrevivo ainda

Você não pede permissão
Não precisa de sinal algum
Você sabia que isso era meu
Antes mesmo de eu perceber, nenhum

Você está cruzando uma zona proibida
E eu sinto o chão fugir sob meus pés
Eu continuo dizendo “isso é errado”
Mas meu coração não responde mais

Se isso terminar em chamas ou cicatriz
Eu juro que tentei ficar longe de ti
Você tocou onde eu nunca deixei mostrar
Agora não sei até onde isso vai chegar

Eu ainda estou de pé
Mas não ileso, não igual
Você não me quebrou
Só chegou perto demais do essencial`,
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
De quem poderia ser — não de quem está aqui

Você constrói uma cena sob luz neon
Todo mundo acredita na ilusão
Eles aplaudem porque sabem que você pode
Ser tudo o que vende esta noite

Mas você troca toda essa devoção
Por uma promessa feita de cromo
Carros baixos, rostos estranhos
Mãos que nunca parecem lar

Você não se importa com quem te segura
Desde que pague
Dinheiro é só a linguagem
Que você usa pra se entregar

Você dorme dentro de ilusões
Vidas emprestadas, verdades alugadas
Diz que é dona do futuro
Mas vive da juventude de outra pessoa

Você veste o desejo como um vestido
Troca quando rasga
Não chama isso de sobrevivência
Chama de renascer

Você deixa que pensem que importam
Deixa que acreditem que você sente
Diz “amor” quando convém
Depois some entre fumaça e luz

Você diz que é só um momento
Só um corpo, só um acordo
Mas toda noite você compra
Aquilo que tem medo de sentir

Você não se importa com quem te segura
Desde que pague
Dinheiro é só a linguagem
Que você usa pra se entregar

Você constrói um mundo de espelhos
Onde nada é verdadeiro
Diz que quer o para sempre
Mas não sabe o que fazer com ele

Então me diga —
O que você quer de mim?

Uma noite?
Uma dança?
Uma vida que não vai escolher?

Um filho?
Uma promessa?
Algo que você vai perder?

Você diz que quer um “nós”
Enquanto ama alguém que não ama
Pede honestidade
Mas não sabe o preço dela

Você não vive, você atua
Você não ama, você convence
Chama isso de independência
Mas é só mais um ciclo que se repete

Você diz que eu te faço sentir real
Depois corre de volta pra mentira
Então me diga o que você quer de mim
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
    `Você andava como se a noite te devesse algo
Como se toda porta fosse ficar aberta
Eu te vi juntar promessas uma a uma
E deixá-las respirando pelo caminho

Você dizia que amor era uma febre temporária
Algo doce, mas nunca profundo
Aprendeu a tirar sem pedir
E a sorrir enquanto outros choravam

Eu não te impedi
Eu não supliquei
Algumas lições precisam do silêncio
Pra chegar onde devem chegar

O tempo tem um jeito de lembrar nomes
Mesmo quando os corações esquecem
Cada passo que você deu sem olhar pra trás
Deixa uma sombra que você ainda não encontrou

Você não escuta agora
Mas um dia vai
Tudo o que você lança no escuro
Encontra seu caminho

Você dançou pelas vidas como se fossem estações
Mudou de cor quando choveu
Chamou isso de liberdade, chamou de viver
Eu chamei de fugir do próprio nome

Você achou que desejo era uma moeda
Que nunca acaba nem volta
Mas até o fogo fica solitário
Quando percebe que queima

Eu fiquei imóvel
Deixei a verdade respirar
Você não corre de ecos
Que nascem por dentro

O tempo sabe fechar mãos
Que um dia pareceram intocáveis
Cada coroa que você usou tão leve
Aprende o peso que pode ter

Você ainda não sente
Mas um dia vai
Tudo o que você entrega sem cuidado
Encontra seu caminho

Eu não vou dizer “eu avisei”
Não vou dizer nada
Algumas verdades soam mais alto
Quando nunca são ditas

Você vai chamar de destino
Vai chamar de azar
Mas no fundo vai saber
Que já estava escrito
No momento em que você partiu

O tempo não tem pressa
Ele apenas espera
Paciente como a consequência
Suave como o destino

Quando você finalmente parar
Onde antes só passou
Procurando algo pra segurar
Vai entender o que eu nunca disse
E por que te deixei ir

Círculos não se quebram
Eles se completam
E toda estrada que você escolheu
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
    `Percebi como nos parecemos
Não na forma, mas no peso
Você carrega um pouco de calor
Eu carrego o que fica quando ele vai

Às vezes é só isso que somos —
Ouvidos treinados para permanecer abertos
Esperando por algo
Que nunca nos escolhe

Você me coloca em quartos estreitos
Onde toda resposta tem um preço
Onde segurar apaga
E soltar parece definitivo

Há uma beleza nisso
Do tipo que te afina aos poucos
Tão silenciosamente
Que quase parece merecida

Eu fico entre dois instintos
Nenhum deles limpo
Nenhum deles gentil

Há momentos em que me observo
Como se o dano pudesse se traduzir
Como se a prova vivesse sob a superfície
O bastante para interromper tua ausência

Mas até me desfazendo
Eu chegaria suave demais
Para redirecionar teu olhar
Ou me abrigar dentro do teu coração

Prometeram que isso
Se espelharia
Duas mãos avançando
Em direção à mesma luz

Mas você raramente está aqui
E nunca por dentro
Você passa por mim
Sem intenção

Eu não acuso
Eu não dramatizo

Eu só não entendo
Como algo pode parecer mútuo
E nunca ser compartilhado

Isso deveria ser bonito
Uma estrada silenciosa rumo à leveza
Em vez disso, permanece inacabado
Como uma frase
Que ninguém concorda em terminar

Eu não sei o que fazer
Com um sentimento
Que conhece a tua forma
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
    `Eu percebo o jeito como o teu nome
Sai da sala antes de você
Como algo importante
Que aprendeu a não permanecer fiel

Eu não te sigo com palavras
Eu te sigo com dúvida
Ela fica quieta no meu peito
Depois encontra um jeito de sair

Você me lê como um aviso
Mesmo quando estou calmo
Teu silêncio afia momentos
Que nunca quiseram ferir

Eu carrego coisas inacabadas
Não pecados, só pedaços de ar
Mas cada pausa que guardo pra mim
Pesa mais quando você me encara

[Refrão — Ambos (suave, alternado)]
Ele: Eu não quero te perder para o escuro
Ela: Eu não quero viver dentro do teu medo

Sinto falta de como você falava
Antes de cada palavra ter peso
Agora escuto procurando erros
Nas coisas que você nunca diz

Faço perguntas demais
Porque tenho medo do espaço
Confundo tua respiração
Com uma distância que não sei encarar

Estou cansado de ter cuidado
Com um amor que antes se movia
Eu não me entreguei demais
Eu só precisava de espaço

Você me segura como se eu estivesse partindo
Antes mesmo de eu virar
E toda vez que você me puxa pra perto
Algo silencioso queima

[Pré-Refrão — Ambos (sobrepostos)]
Ele: Me diz onde eu estou
Ela: Me diz por que você duvida

Estamos desgastando o que é bonito
Tentando fazê-lo ficar
Transformando o amor numa pergunta
Que nunca vai embora

Se cada olhar vira um teste
Cada silêncio, um sinal
Vamos nos perder devagar
Sem nunca cruzar uma linha

Eu sei que meu ciúme
Não vem do que você faz
Vem de amar algo
Que não sei como perder

Eu sei que teu medo é silencioso
Mas ele segue cada som
Não estou tentando fugir de você
Só estou tentando não me afogar

Ele: Eu preciso de segurança
Ela: Eu preciso de ar
Ele: Eu preciso de você presente
Ela: Eu preciso de justiça

Não estamos quebrando por traição
Ou por algo que alguém disse
Estamos quebrando pelo esforço
De carregar o que nunca foi dito

Se ainda existe um caminho entre nós
Ele não vai vir do controle
Mas de aprender a amar
Sem perder o todo

Ele: Tenho medo de te perder
Ela: Tenho medo de me perder

E nós dois temos medo
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
Eu decoro suas saídas
Antes mesmo de ele aprender meu nome

Ele toca o que não pretende guardar
Deixa calor como luz emprestada
Eu digo a mim mesma que não é nada
E então espero por ele a noite inteira

Tento deixar o sentimento passar fome
Ensinar meu coração a descansar
Mas ele continua indo atrás dele
Como se não soubesse o que é melhor

Eu não sei por que eu fico
Quando ele olha além de mim
Como se eu fosse cenário
No caminho dele

Eu não sei por que eu me importo
Quando cada palavra que ele dá
Chega só pela metade

Ele fala em quase-promessas
Só o suficiente pra me puxar pra perto
Depois desaparece dentro de si
Como se eu nunca tivesse estado aqui

Eu junto as menores gentilezas
Como se fossem prova de algo real
Como se ser necessária por um instante
Significasse que eu importei pra você

Digo a mim mesma pra deixar desaparecer
Afrouxar o que eu seguro
Mas alguns sentimentos não escutam
Eles apenas envelhecem

Eu não sei por que eu fico
Quando ele nunca me escolhe
Ele só permanece tempo suficiente
Pra me fazer acreditar

Eu não sei por que dói
Querer alguém
Que trata teu coração
Como se trabalhasse pra ele

Talvez o amor nem sempre seja gentil
Talvez não seja justo
Talvez eu tenha aprendido devoção
Antes de aprender cuidado comigo mesma

Eu não chamo isso de crueldade
Não chamo ele de mau
Eu só não entendo
Por que eu quero o que me entristece

Eu não sei por que eu fico
Quando é mais fácil me deixar
Do que me segurar
Ou acreditar em mim

Se amar ele é perder
Então eu perco em silêncio
Porque ir embora parece mais difícil
Do que ficar invisível

Ele nunca me pede pra ficar
Nunca me pede pra ir

E de algum jeito
É isso
Que me mantém
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
    `Você liga quando a noite fica vazia
Não quando ela é gentil
Aprendi o som dos seus passos
Só quando eles vêm por trás

Você toca como quem está de passagem
Como se eu fosse um lugar pra descansar
Você pega o que está quente no momento
E deixa o resto pra trás

Digo a mim mesma que isso não é nada
Só timing, só espaço
Mas meu coração continua confundindo
A sua necessidade com um rosto

Eu não sei por que eu fico
Quando só sou útil
Nas horas silenciosas
Que você não quer nomear

Eu não sei por que dói
Me sentir escolhida
Apenas quando
Você está quebrando

Você fala em intimidade emprestada
Depois some ao amanhecer
Eu decoro suas saídas
Como se fosse assim que o amor continua

Tento afrouxar o sentimento
Me ensinar contenção
Mas ele sempre volta
Como se não entendesse

Eu sei que não sou teu abrigo
Sou só onde você para
Antes de seguir adiante
Com a mão de outra pessoa

Eu não sei por que eu fico
Quando nunca sou a resposta
Só um lugar temporário
Por onde você passa

Eu não sei por que eu quero
Alguém que só me enxerga
Quando não há mais
Nada pra fazer

Talvez eu confunda intensidade
Com ser vista
Talvez eu tenha aprendido afeto
Nos espaços entre

Eu não te chamo de cruel
Não digo que isso é errado
Eu só não sei
Por que eu continuo segurando

Eu não sei por que eu fico
Quando você não escolhe
Você chega quando está vazio
E vai embora cheio

Se amar você é silêncio
Então eu aprendi bem
Só queria saber
Quando é hora de me soltar

Você não me pede pra ficar
Não me pede pra ir

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
    `O jeito que você olha pra mim
Parece quase honesto
Como algo que eu poderia guardar
Se eu não tocar

Eles sussurram tua reputação
Como se fosse escritura no escuro
Mas eu só escuto tua voz
Quando ela diz meu nome, baixo

Eu quero acreditar no ângulo do teu olhar
No jeito que você se inclina quando a luz ajuda
Finjo que os rumores se dissolvem no grave
Quando você me puxa de volta pro teu espaço

Se isso é amor
Ele brilha limpo demais
Como diamantes de plástico
Sobre a tua pele

Você segura meu rosto
Mas olha pra outro lugar
Contando corações
Que não são meus

Dizem que você empresta afeto
Como moeda
Troca devoção por atenção
E chama isso de destino

Você não rouba — você coleciona
O que já está disposto
Eu caio como se tivesse escolhido
E é isso que mais machuca

Você mantém a noite em movimento
Nunca deixa desacelerar
Cada segundo precisa de testemunha
Cada sentimento precisa aparecer

Se isso é amor
Por que não conseguimos sentar
Em cantos silenciosos
Sem uma lente?

Você está aqui comigo
Mas em todo lugar
Vestindo o desejo
Como se fosse moda

Nós não falamos como pessoas
Que planejam ficar
Nós posamos como momentos
Feitos pra desaparecer

O teu reflexo te conhece melhor
Do que eu jamais vou
Você confia mais no vidro
Do que no silêncio

Eu te vejo amar a imagem
Enquanto eu amo o atraso
Aquele segundo antes de você virar o rosto

Talvez eu seja só o centro
Da atenção desta noite
Até algo mais brilhante
Entrar no enquadramento

Se isso é amor
É ensaiado
Mentiras bem iluminadas
Vestidas pra ferir

Você me mantém por perto
Mas nunca a sós
Eu te sinto mais
Quando você já foi embora

Eu não quero chamar de falso
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
    `O que se move dentro de você
Quando minhas palavras giram em torno do teu nome?
Aponto cada pensamento na tua direção
Como devoção sem lugar

Não há mais nada raro
Num quarto tão vazio
Mesmo assim, continuo perguntando ao silêncio
Se você sente isso também

Algumas verdades chegam cedo demais
E selam os lábios de quem as ouve
Elas ficam rondando a mente
Até que escapar parece impossível

É assim que se quebra
Quando o amor ecoa sozinho
É assim que se apaga
Quando eu não sou onde você pertence

Eu fico onde você esquece
Espero onde você não volta
E a ausência aprende a minha forma

Você já ficou cercado
E ainda assim intocado pela noite?
Quando tudo parece distante
Até quem te ama do jeito certo

Eu caminho por momentos inacabados
Como uma sombra que você não assume
Te amo às cegas
Num quarto que conhece meu nome

Você me ouve, mas não o bastante
Pra me encontrar na queda
Eu falo em frases completas
Você responde com nenhuma

É assim que se sente
Quando você não está aqui
É assim que dói
Quando eu desapareço

Eu chamo isso de paciência
Mas é só dor
Vestida pra ficar

Eu te entreguei tudo aberto
Sem trancas, sem disfarce
Você manteve a entrada escondida
Em algum lugar atrás dos teus olhos

Se corações pudessem ser consertados
Só por querer que fosse verdade
Eu já estaria inteiro
Ainda te amando

Diz pra mim onde você guarda a chave
Do que nunca me deixou tocar
Eu me quebrei na honestidade
Você nunca pediu muito

Se te amar é perder
Então eu perco sem defesa
Porque ainda estou aqui amando
O que nunca me escolheu de volta

Eu não culpo a tua distância
Eu só não sei como ir embora

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
Que esquecem como ser ditas

Eu não sou bom com despedidas
Nem com dizer o que fica
Carrego conversas inteiras
Que nunca encontram saída

Olha, garota
Você se move como gravidade
Quieta, invisível
Puxando tudo em mim

Espero que você entenda
Isso não é uma cantada
Não estou pedindo piedade
Nem o teu tempo

Seja lá o que isso for
Precisava de uma voz
Você não pediu por isso
Mas eu não tive escolha

Desde aquela noite
Algo mudou de lugar
Você ficou nos meus pensamentos
Como se nunca tivesse ido

Você não sabe o que causa
E essa é a parte perigosa
Você existe como uma força
Sem se importar com a escuridão

Eu te vejo em momentos pequenos
Em músicas, em carros passando
No jeito que a cidade respira
Depois dos bares da meia-noite

Tentei renomear o sentimento
Chamar de acaso, chamar de momento
Mas ele sempre volta
Toda vez que penso em você

Seja lá o que isso for
Não é um pedido
Eu não preciso que você responda
Eu só precisava dizer

Desde aquela noite
Meu silêncio mudou
Tua ausência
Aprendeu meu nome

Eu não espero nada
Nem proximidade, nem sinais
Algumas verdades não servem pra abrir portas
Elas só se recusam a se esconder

Se você seguir em frente sem mudar
Eu vou entender
Algumas coisas só existem
Pra ser sentidas

Seja lá o que isso for
Eu vou carregar limpo
Sem pressão, sem peso
Sobre você ou sobre mim

Mas eu não consegui fingir
Que não sinto desse jeito
Alguns nomes ficam com a gente
Depois de uma noite

Então isso é tudo
Que eu queria fazer

Te avisar
Que você passou pela minha mente

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
    `Você liga quando a noite fica vazia
Não quando ela é gentil
Aprendi o som dos seus passos
Só quando eles vêm por trás

Você toca como quem está de passagem
Como se eu fosse um lugar pra descansar
Você pega o que está quente no momento
E deixa o resto pra trás

Digo a mim mesma que isso não é nada
Só timing, só espaço
Mas meu coração continua confundindo
A sua necessidade com um rosto

Eu não sei por que eu fico
Quando só sou útil
Nas horas silenciosas
Que você não quer nomear

Eu não sei por que dói
Me sentir escolhida
Apenas quando
Você está quebrando

Você fala em intimidade emprestada
Depois some ao amanhecer
Eu decoro suas saídas
Como se fosse assim que o amor continua

Tento afrouxar o sentimento
Me ensinar contenção
Mas ele sempre volta
Como se não entendesse

Eu sei que não sou teu abrigo
Sou só onde você para
Antes de seguir adiante
Com a mão de outra pessoa

Eu não sei por que eu fico
Quando nunca sou a resposta
Só um lugar temporário
Por onde você passa

Eu não sei por que eu quero
Alguém que só me enxerga
Quando não há mais
Nada pra fazer

Talvez eu confunda intensidade
Com ser vista
Talvez eu tenha aprendido afeto
Nos espaços entre

Eu não te chamo de cruel
Não digo que isso é errado
Eu só não sei
Por que eu continuo segurando

Eu não sei por que eu fico
Quando você não escolhe
Você chega quando está vazio
E vai embora cheio

Se amar você é silêncio
Então eu aprendi bem
Só queria saber
Quando é hora de me soltar

Você não me pede pra ficar
Não me pede pra ir

Você só volta
Quando precisa de mim`,
  ),
];
