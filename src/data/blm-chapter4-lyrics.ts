/** Chapter 4 · Listen To Daddy lyrics (from Genius + PT translation). */
import type { BunnyAlbumTrack } from '../types';

const chapter4LyricsNote =
  'Letra original em inglês à esquerda; tradução em português à direita. Chapter 4 · Listen To Daddy — Bunny Land Music.';

function track(title: string, lyrics: string, translation: string): BunnyAlbumTrack {
  return {
    title,
    lyrics,
    lyricsExplanation: {
      title: 'Tradução',
      message: chapter4LyricsNote,
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

export const listenToDaddyTracks: BunnyAlbumTrack[] = [
  track(
    'Spirit That Won’t Fall',
    `What will you hold when the night turns hollow?
Who will you trust when no voices follow?

Where will you stand when your strength feels small?
How will you rise when you start to fall?
Don’t break
Don’t fade

The quiet in your chest
Still calls your name
Still calls your name

HOLD ON TO THE SPIRIT THAT WON’T FALL
HOLD ON TO THE SPIRIT THAT WON’T FALL
Even when the dark surrounds it all
You’re still standing

What will you find when your pride is shaken?
Where will you turn when the path feels taken?
Keep going
Keep breathing

And every broken wing
Still learns to fly
Still learns to fly

HOLD ON TO THE SPIRIT THAT WON’T FALL
HOLD ON TO THE SPIRIT THAT WON’T FALL

Lift your heart above the weight of all
You’re still rising

Don’t let the shadows stay
Don’t let them pull you in
(turn your head around)

Light grows inside the cracks
Where hope begins

HOLD ON TO THE SPIRIT THAT WON’T FALL
SPIRIT THAT WON’T FALL

HOLD ON TO THE SPIRIT THAT WON’T FALL
When everything fades and you feel so small
You still shine
You still shine

Hold on…
Spirit that won’t fall…`,
    `O que você vai segurar quando a noite ficar vazia?
(quando a noite ficar vazia)
Em quem vai confiar quando nenhuma voz responde?
(responde, responde)

Onde vai ficar quando sua força parecer pequena?
Como vai se erguer quando começar a cair?
"não quebre" (não quebre)
"não apague" (não apague)

O silêncio no seu peito
ainda chama seu nome
ainda chama seu no-o-me

SEGURE O ESPÍRITO QUE NÃO VAI CAIR
(o espírito que não vai cair)
SEGURE O ESPÍRITO QUE NÃO VAI CAIR
(cair, cair)
Mesmo quando a escuridão envolve tudo
Você ainda está de pé
(ainda de pé)

O que você encontra quando o orgulho se parte?
Para onde vai quando o caminho parece fechado?
"continue" (continue)
"continue respirando" (continue respirando)

E toda asa quebrada
ainda aprende a voar
ainda aprende a voa-a-ar

SEGURE O ESPÍRITO QUE NÃO VAI CAIR
(o espírito que não vai cair)
SEGURE O ESPÍRITO QUE NÃO VAI CAIR
(cair, cair)
Eleve seu coração acima de todo o peso
Você ainda está subindo
(subindo, subindo)

Não deixe as sombras ficarem
Não deixe elas te puxarem
(vire o rosto agora)
(vire o rosto agora)

A luz cresce nas rachaduras
onde a esperança começa
(começa, começa)

SEGURE O ESPÍRITO QUE NÃO VAI CAIR
O ESPÍRITO QUE NÃO VAI CAIR
(cair, cair)
SEGURE O ESPÍRITO QUE NÃO VAI CAIR
(o espírito não vai cair)
Quando tudo se apaga e você se sente tão pequeno
Você ainda brilha
(você ainda bri-i-ilha)
Você ainda brilha

Segure…
(segure…)
O espírito que não vai cair…
(cair, cair)`,
  ),
  track(
    'I’ve Been You',
    `You’re here now
(I can feel it)
You didn’t plan to stay
(but you did)

You walk like the ground feels heavier today
Eyes forward, but your heart looks away
Every smile feels learned, not true
Like you’re doing what you’re supposed to do

I see the pause in your breath
The words you never say
I know that weight
I’ve carried it the same

You think no one notices the crack
But I do
I’ve been you

What do you gain
By thinking the worst?
Does it protect you
Or does it hurt?

LET IT COME
(let it come~)
LET IT MOVE
(let it move~)
Love doesn’t ask you to be immune
Just open, just true

You don’t lose
When you fall sometimes
You’re learning how
To realign

You replay moments you can’t rewind
Trying to fix what lives in time
But every scar you hide so well
Is proof you rose after you fell

You say “maybe it’s just me”
Like hope’s a dangerous thing
I said that too
Before I learned to breathe

You don’t have to win today
You just have to stay

LET IT COME
(let it come)
LET IT MOVE
(let it move)
Love grows best when you leave it room—
No force, no rules

Every fall
Teaches you where to stand
You break
Then rise again

Stop asking why it hurts
Start asking what it shows
(turn toward it)
(turn toward it)
Nothing real arrives untouched
That’s how it goes
(that’s how it go-o-es)

LET IT COME
WITHOUT FEAR
LET IT MOVE
YOU’RE STILL HERE
Love meets you when you stop the fight
And trust the night

You fall
Then learn to stand
Again…
(again)

You’re not behind
(not behind)
You’re on your way…
(on your way)`,
    `Você está aqui agora
(eu consigo sentir)
Você não planejou ficar
(mas ficou)

Você anda como se o chão estivesse mais pesado hoje
olhos à frente, mas o coração longe
Cada sorriso parece ensaiado, não real
como se você estivesse fazendo o que esperam de você

Eu vejo a pausa no seu fôlego
as palavras que você nunca diz
Eu conheço esse peso
eu já carreguei ele também

Você acha que ninguém percebe a rachadura
mas eu percebo
eu já fui você

O que você ganha
pensando sempre no pior?
Isso te protege
ou só machuca mais?

DEIXA VIR
(deixa vir)
DEIXA SE MOVER
(deixa se mover)
O amor não pede que você seja imune
apenas aberta, apenas verdadeira

Você não perde
quando às vezes cai
você está aprendendo
a se realinhar

Você revive momentos que não pode rebobinar
tentando consertar o que só o tempo resolve
Mas cada cicatriz que você esconde tão bem
é prova de que você se levantou depois de cair

Você diz “talvez o problema seja eu”
como se a esperança fosse perigosa
Eu disse isso também
antes de aprender a respirar

Você não precisa vencer hoje
só precisa permanecer

DEIXA VIR
(deixa vir)
DEIXA SE MOVER
(deixa se mover)
O amor cresce melhor quando você dá espaço
sem força, sem regras

Cada queda
te ensina onde ficar
você quebra
e depois se levanta

Pare de perguntar por que dói
comece a perguntar o que isso revela
(olhe pra isso)
(olhe pra isso)
Nada real chega intacto
é assim que acontece
(é assim que aco-o-ontece)

DEIXA VIR
SEM MEDO
DEIXA SE MOVER
VOCÊ AINDA ESTÁ AQUI
O amor te encontra quando você para de lutar
e confia na noite

Você cai
e aprende a ficar de pé
de novo…
(de novo)

[Outro]

Você não está atrasada
(não está)
Você está a caminho…
(a cami-i-nho)`,
  ),
  track(
    'Not Yet',
    `You gave your heart before it learned its name
Thought every spark was meant to stay
You held a promise with trembling hands
But some truths only time can explain

You’re hurting now and asking why
Like love was something you did wrong
But choosing wrong once in the dark
Doesn’t mean your light is gone

This is the age of questions
Not the age of vows
You don’t have to know forever
You only have to know now

Not every heart that feels sincere
Knows how to stay or how to care
Some people love like open fire
Bright at first, then gone in air

There’s a season for learning pain
And one for knowing who you are
Some loves arrive when you’re still running
The ones that last walk where you stand

WAIT FOR THE LOVE THAT DOESN’T RUSH
(wait wait)
WAIT FOR THE TOUCH THAT BUILDS, NOT CRUSH
(builds, not crush)
What’s meant to stay won’t ask you to bleed
It will meet you when you’re ready

You see the world with gentle eyes
That’s not weakness, that’s grace
But not everyone deserves to hold
The softness in your face

Growing isn’t closing your heart
It’s learning where it belongs
The girl you are is enough right now
The woman will come along

WAIT FOR THE LOVE THAT KNOWS YOUR NAME
(know your name)
WAIT FOR THE ONE WHO STAYS THE SAME
(stays the same)
A lasting love is patient too
It grows as you do

No race to run
(no race)
No crown to win
(no crown)
Some doors open
When you’re whole within
(within)

WAIT FOR THE LOVE THAT FEELS LIKE HOME
(feels like ho-o-ome)
Not loud, not fast, not overgrown
When the time is right, you’ll know the way
Not yet…
But someday

Someday
(some da-a-ay)`,
    `Você entregou seu coração antes de ele saber quem era
achou que toda faísca era feita pra ficar
Segurou uma promessa com as mãos trêmulas
mas algumas verdades só o tempo sabe explicar

Você está sofrendo agora e se perguntando por quê
como se amar fosse algo que você fez errado
Mas escolher errado uma vez no escuro
não significa que a sua luz se apagou

Este é o tempo das perguntas
não o tempo dos votos
Você não precisa saber o para sempre
só precisa saber o agora

Nem todo coração que parece sincero
sabe ficar ou sabe cuidar
Algumas pessoas amam como fogo aberto
brilham no começo e depois viram ar

Existe um tempo para aprender com a dor
e outro para saber quem você é
Alguns amores chegam quando você ainda corre
Os que duram caminham onde você está

ESPERE O AMOR QUE NÃO TEM PRESSA
(espere, espere)
ESPERE O TOQUE QUE CONSTRÓI, NÃO ESMAGA
(constrói, não machuca)
O que é feito pra ficar não vai pedir que você sangre
Vai te encontrar quando você estiver pronta

Você vê o mundo com olhos gentis
isso não é fraqueza, é graça
Mas nem todos merecem segurar
a suavidade do seu rosto

Crescer não é fechar o coração
é aprender onde ele pertence
A menina que você é já basta agora
A mulher vem com o tempo

ESPERE O AMOR QUE SABE SEU NOME
(sabe seu nome)
ESPERE AQUELE QUE PERMANECE IGUAL
(permanece igual)
Um amor que dura também é paciente
Ele cresce junto com você

Não há corrida pra vencer
(nenhuma corrida)
Nenhuma coroa pra ganhar
(nenhuma coroa)
Algumas portas só se abrem
quando você está inteira por dentro
(por dentro)

ESPERE O AMOR QUE PARECE LAR
(parece la-a-ar)
Não alto, não rápido, não exagerado
Quando o tempo for certo, você vai saber o caminho
Ainda não…
Mas um dia

Um dia
(um di-a-a)`,
  ),
  track(
    'When The Room Goes Quiet',
    `You sit where the noise gives up
Where even the walls learn restraint
The light from your phone comes and goes
Like it’s afraid to stay

Thoughts return without urgency
They don’t rush, they repeat
They take the long way around
Until you recognize them

You move through days feeling distant
Not from people — from weight
Everything looks normal
But nothing feels light

You try to distract the silence
With motion, with sound
But it waits patiently
Until you slow down

You don’t say what’s happening
You don’t need to
Some things announce themselves
By staying

The world keeps offering answers
You keep declining
Not because you don’t care
But because you’re tired

You wonder if this emptiness
Means something is wrong
Or if it’s just a season
That forgot how to end

You don’t need to fix it tonight
You don’t need to name it
Just know this —
You are seen

When the thoughts circle back
Let them pass through
Not everything that stays
Belongs to you

And if the night feels longer
Than it should
Remember:
You’re not walking it alone`,
    `Você se senta onde o barulho desiste
Onde até as paredes aprendem contenção
A luz do seu celular vai e volta
Como se tivesse medo de ficar

Os pensamentos retornam sem pressa
Eles não correm, eles repetem
Dão a volta mais longa
Até que você os reconheça

Você atravessa os dias se sentindo distante
Não das pessoas — mas do peso
Tudo parece normal
Mas nada parece leve

Você tenta distrair o silêncio
Com movimento, com som
Mas ele espera pacientemente
Até você desacelerar

Você não diz o que está acontecendo
Nem precisa
Algumas coisas se anunciam
Permanecendo

O mundo continua oferecendo respostas
Você continua recusando
Não porque não se importa
Mas porque está cansado

Você se pergunta se esse vazio
Significa que algo está errado
Ou se é apenas uma estação
Que esqueceu como terminar

Você não precisa consertar isso hoje à noite
Não precisa dar um nome
Apenas saiba disso —
Você é visto

Quando os pensamentos voltarem a girar
Deixe que passem
Nem tudo o que fica
Pertence a você

E se a noite parecer mais longa
Do que deveria
Lembre-se:
Você não está caminhando sozinho`,
  ),
  track(
    'Rooms Without Windows',
    `The city speaks
But not to me
Its lights move
I don’t

I walk through days
Like unfinished rooms
Furnished with echoes
And nothing else

Thoughts return
The way waves do
Not loud
Just patient

I rename them every night
So they won’t recognize me
Still, they sit beside my bed
Like they always lived here

There’s space everywhere
Except inside

I try to keep myself occupied
With motion
With noise
With light

But silence knows my posture
Better than anyone
It waits
Until I sit down

People ask how I’m doing
I answer in weather
Something vague
Something safe

They don’t need to know
How empty can feel heavy
How absence
Learns to repeat itself

I’m not falling apart
I’m standing still

And that might be worse

This is what it’s like
To live untouched
Surrounded
But never held

The world keeps moving
I keep waiting
For something unnamed
To stop returning

The mind doesn’t scream
It circles

And every thought
Feels familiar

I don’t need rescue
I don’t need noise

Just a moment
Where nothing comes back`,
    `A cidade fala
Mas não comigo
Suas luzes se movem
Eu não

Eu atravesso os dias
Como quartos inacabados
Mobília feita de ecos
E nada além disso

Os pensamentos voltam
Como as ondas voltam
Não altos
Apenas pacientes

Eu os renomeio toda noite
Pra que não me reconheçam
Mesmo assim, eles se sentam ao lado da minha cama
Como se sempre tivessem vivido aqui

Há espaço em todo lugar
Menos por dentro

Tento me manter ocupado
Com movimento
Com barulho
Com luz

Mas o silêncio conhece minha postura
Melhor do que qualquer um
Ele espera
Até eu me sentar

As pessoas perguntam como eu estou
Eu respondo falando do clima
Algo vago
Algo seguro

Elas não precisam saber
Como o vazio pode pesar
Como a ausência
Aprende a se repetir

Eu não estou desmoronando
Estou parado

E talvez isso seja pior

É assim que é
Viver intocado
Cercado
Mas nunca segurado

O mundo continua se movendo
Eu continuo esperando
Que algo sem nome
Pare de voltar

A mente não grita
Ela circula

E cada pensamento
Parece familiar

Eu não preciso ser resgatado
Eu não preciso de barulho

Só um momento
Em que nada volte`,
  ),
  track(
    'Let Go Of The Weight',
    `What will you choose when the hurt feels louder?
Who will you be when the blame grows stronger?

Where do you go when the anger calls?
How do you stop when the walls feel tall?

Let it go
Don’t strike back

The fire in your hands
Doesn’t have to stay
Doesn’t have to sta-a-ay

Let go of the weight that you don’t need now
Let go of the weight that you don’t need now
You don’t heal a wound by returning the blow
You’re still choosing

What do you win when you answer with pain?
What do you lose when you feed the flame?
Be the calm, breathe it out

And every hardened heart
Can still change its way
Still change its wa-a-ay

Let go of the weight that you don’t need now
Let go of the weight that you don’t need now
Lift your hands above the need to throw
You’re still rising

Don’t build a throne from pain
Don’t crown the past again

Mercy grows in the space
Where love remains

Let go of the weight that you don’t need now
Weight you don’t need now
Let go of the weight that you don’t need now
(you don’t need now)
When you answer the dark with a gentler tone
You still shine

Let go
Pay it with love, not war`,
    `O que você vai escolher quando a dor falar mais alto?
(quando a dor falar mais alto)
Quem você vai ser quando a culpa ficar mais forte?
(mais forte, mais forte)

Para onde você vai quando a raiva chama?
Como você para quando os muros parecem altos?
“deixa ir” (deixa ir)
“não revida” (não revida)

O fogo nas suas mãos
não precisa ficar
não precisa fica-a-ar

DEIXE IR O PESO QUE VOCÊ NÃO PRECISA AGORA
(o peso que você não precisa agora)
DEIXE IR O PESO QUE VOCÊ NÃO PRECISA AGORA
(agora, agora)
Você não cura uma ferida devolvendo o golpe
Você ainda está escolhendo
(ainda escolhendo)

O que você ganha quando responde com dor?
O que você perde quando alimenta a chama?
“seja a calma” (seja a calma)
“respira fundo” (respira fun-do)

E todo coração endurecido
ainda pode mudar de caminho
ainda pode muda-a-ar

DEIXE IR O PESO QUE VOCÊ NÃO PRECISA AGORA
(o peso que você não precisa agora)
DEIXE IR O PESO QUE VOCÊ NÃO PRECISA AGORA
(agora, agora)
Erga as mãos acima da vontade de lançar
Você ainda está subindo
(subindo~ subindo)

Não construa um trono com a dor
Não coroe o passado outra vez
(vire isso)
(vire isso)
A misericórdia cresce no espaço
onde o amor permanece
(permanece, permanece)

DEIXE IR O PESO QUE VOCÊ NÃO PRECISA AGORA
O PESO QUE VOCÊ NÃO PRECISA AGORA
(agora, agora)
DEIXE IR O PESO QUE VOCÊ NÃO PRECISA AGORA
(você não precisa agora)
Quando você responde à escuridão com um tom mais gentil
Você ainda brilha
(você ainda bri-i-ilha)
Você ainda brilha

Deixa ir…
(deixa ir…)
Pague com amor, não com guerra…
(não guerra, não guerra)`,
  ),
  track(
    'It Doesn’t Mean You Don’t Belong',
    `You feel the room before you enter
Like every breath needs permission
Your chest tightens without warning
And words stay just out of reach

There’s a quiet fear behind your eyes
Asking if you’ll be refused
As if love and place and voice
Were things you had to prove

This feeling isn’t failure
It’s sensitivity awake
Some hearts feel deeper first
Before they feel safe

You feel different in the crowd
Not wrong, just out of tune
Like everyone else learned a step
You were never taught to use

Silence feels heavier than sound
But speaking feels like a fall
So you stay inside yourself
And carry everything alone

You don’t belong less because you feel more
You don’t lose worth by feeling scared

Some people bloom in quieter rooms
And still change the air

You wonder if the distance you feel
Means you’re standing in the wrong place
But not every space is meant to fit
The softness in your shape

Being careful isn’t weakness
And fear doesn’t cancel truth
It just means your heart is listening
Before it chooses who

You don’t have to disappear to be safe
You don’t have to shout to be seen

The right world won’t rush your voice
It will wait for you

No verdict here
No clock to beat

Belonging isn’t noise
It’s relief

You are not outside of life
You are not late to yourself

Some hearts arrive gently
And still arrive whole

Whole`,
    `Você sente o ambiente antes de entrar
Como se cada respiração precisasse de permissão
Seu peito aperta sem aviso
E as palavras ficam fora de alcance

Há um medo silencioso por trás dos seus olhos
Perguntando se você vai ser recusado
Como se amor, lugar e voz
Fossem coisas que você tivesse que provar

Esse sentimento não é fracasso
É sensibilidade desperta
Alguns corações sentem mais fundo primeiro
Antes de se sentirem seguros

Você se sente diferente no meio da multidão
Não errado, apenas fora do tom
Como se todos tivessem aprendido um passo
Que você nunca foi ensinado a usar

O silêncio pesa mais do que o som
Mas falar parece uma queda
Então você fica dentro de si
E carrega tudo sozinho

VOCÊ NÃO PERTENCE MENOS POR SENTIR MAIS
(sentir mais)
VOCÊ NÃO PERDE VALOR POR SENTIR MEDO
(medo)
Algumas pessoas florescem em salas mais quietas
E ainda assim mudam o ar

Você se pergunta se a distância que sente
Significa que está no lugar errado
Mas nem todo espaço foi feito para caber
Na suavidade da sua forma

Ser cuidadoso não é fraqueza
E o medo não anula a verdade
Ele só significa que o seu coração escuta
Antes de escolher em quem confiar

VOCÊ NÃO PRECISA DESAPARECER PARA ESTAR SEGURO
(estar seguro)
VOCÊ NÃO PRECISA GRITAR PARA SER VISTO
(ser visto)
O mundo certo não apressa a sua voz
Ele espera por você

Sem julgamento aqui
(sem julgamento)
Sem relógio para vencer
(sem relógio)
Pertencer não é barulho
É alívio
(alívio)

VOCÊ NÃO ESTÁ FORA DA VIDA
(da vida)
VOCÊ NÃO ESTÁ ATRASADO EM RELAÇÃO A SI MESMO
(a si mesmo)
Alguns corações chegam com delicadeza
E ainda assim chegam inteiros

Inteiros
(inte-e-eiros)`,
  ),
  track(
    'When You Feel Alone',
    `Why does the room feel louder
When no one's there?
Why does your heart keep asking
If this is fair?

You sit in places full of people
But feel unseen
Like everyone learned how to belong
Except you and me

You laugh when you’re expected
You nod, you stay polite
But I see how you disappear
A little more each night

Loneliness doesn't mean you're empty
It means you feel deeply
Before the world does

When you feel alone
Don’t think you're broken

When you feel alone
It doesn't mean
You're left behind

You're not missing love
You're learning its shape
And I'm right here
Even when you feel
So far away

There will be nights you question
If you belong anywhere
If being quiet means
No one really cares

But solitude is not rejection
It's space to grow
Some roots deepen underground
Before they show

You don’t need to fill the silence
To be real
You don’t need permission
To feel

When you feel alone
Don't turn against your heart
When you feel alone
It’s not the end
It's just the start

You're not forgotten
You're becoming strong
And I’m still here
When the night feels long

Let the quiet sit with you
It's not your enemy
Loneliness is just a room
Where you meet who you'll be

(turn toward yourself)
(breathe, don't run)

When you feel alone
Remember this
You are loved
Even like this

Not louder
Not different
Not more than you are

You don't walk this road alone
Even when it feels dark

Stay
You don't need to rush your light
I'm here
And you're doing alright`,
    `Por que o quarto parece mais barulhento
quando não há ninguém ali?
Por que o seu coração continua perguntando
se isso é justo?

Você se senta em lugares cheios de pessoas
mas se sente invisível
Como se todos tivessem aprendido a pertencer
menos você e eu

Você ri quando esperam
Assente com a cabeça, permanece educada
Mas eu vejo como você desaparece
um pouco mais a cada noite

Solidão não significa vazio
Significa que você sente profundamente
Antes que o mundo sinta

QUANDO VOCÊ SE SENTE SOZINHA
NÃO PENSE QUE ESTÁ QUEBRADA
(alguns corações são amplos)
QUANDO VOCÊ SE SENTE SOZINHA
ISSO NÃO SIGNIFICA
QUE VOCÊ FOI DEIXADA PARA TRÁS

Você não está sem amor
Você está aprendendo a forma dele
E eu estou aqui
Mesmo quando você se sente
Tão distante

Haverá noites em que você vai questionar
se pertence a algum lugar
Se ser quieta significa
que ninguém realmente se importa

Mas a solitude não é rejeição
É espaço para crescer
Algumas raízes se aprofundam no escuro
Antes de aparecer

Você não precisa preencher o silêncio
Para ser real
Você não precisa de permissão
Para sentir

QUANDO VOCÊ SE SENTE SOZINHA
NÃO SE VOLTE CONTRA SEU CORAÇÃO
(alguns corações sentem primeiro)
QUANDO VOCÊ SE SENTE SOZINHA
NÃO É O FIM
É APENAS O COMEÇO

Você não foi esquecida
Você está se tornando forte
E eu continuo aqui
Quando a noite parece longa

Deixe o silêncio ficar com você
Ele não é seu inimigo
A solidão é apenas um quarto
Onde você encontra quem vai se tornar

(vire-se para si mesma)
(respire, não fuja)

QUANDO VOCÊ SE SENTE SOZINHA
LEMBRE-SE DISSO
VOCÊ É AMADA
MESMO ASSIM

Não mais alta
Não diferente
Não mais do que você já é

Você não caminha por essa estrada sozinha
Mesmo quando tudo parece escuro

Fique…
Você não precisa apressar a sua luz
Eu estou aqui
E você está indo bem`,
  ),
  track(
    'Where Nothing Dies',
    `Come with me
Walk slowly

Bare feet on the golden ground
No shadows hanging a-around
Every breath is soft and clear
No fear is living here

Hands are open, eyes are kind
No one’s left behind
You are safe, you belong

The air is filled with peace
Nothing breaks
Nothing needs to leave

This is the garden of the evergreen
This is the place we’ve always seen

No tears fall and no hearts grieve
We are living the dream

Every face is glowing young
Time has just begun
Bodies strong and spirits light
No sickness in sight

Animals rest by our side
Gentle eyes, open wide
No harm here, only life

No pain written in our skin
This is how it’s meant to be-en

This is the garden of the evergreen
Where every soul is pure and free

No goodbyes, no sorrow scenes
Only joy between

No death waits at the door
No sadness on the floor

Every heart is in tune
Love is always new

This is the garden of the evergreen
The place where we have always been

No night falls on what is clean
We are shining free
We are shining free

Stay awhile
Nothing fades here`,
    `Venha comigo
(venha comigo)
Caminhe devagar
(de-va-gar…)

Pés descalços no chão dourado
nenhuma sombra ao nosso lado
Cada respiro é leve e claro
nenhum medo vive aqui

Mãos abertas, olhos gentis
ninguém fica para trás
“você está segura” (você está segura)
“você pertence” (você pertence)

O ar está cheio de paz
nada se quebra
nada precisa partir

ESTE É O JARDIM DO ETERNO VERDE
(verde eterno~ eternamente verde)
ESTE É O LUGAR QUE SEMPRE VIMOS
(vimos, vimos)
Nenhuma lágrima cai, nenhum coração sangra
Estamos vivendo o sonho
(vivendo o sonho)

Cada rosto brilha jovem
o tempo acabou de começar
Corpos fortes, espíritos leves
nenhuma doença à vista

Animais repousam ao nosso lado
olhos gentis, bem abertos
“aqui não há dor” (não há dor)
“somente vida” (so-omente vi-ida)

Nenhuma dor escrita na pele
é assim que deveria ser

ESTE É O JARDIM DO ETERNO VERDE
(verde eterno~ eternamente verde)
ONDE TODA ALMA É PURA E LIVRE
(livre, livre)
Sem despedidas, sem cenas de tristeza
Apenas alegria entre nós
(alegria entre nós)

Nenhuma morte espera à porta
Nenhuma tristeza no chão
(fique aqui)
(fique aqui)
Cada coração em sintonia
O amor é sempre novo
(sempre novo~ sempre novo)

ESTE É O JARDIM DO ETERNO VERDE
O LUGAR ONDE SEMPRE ESTIVEMOS
(estivemos, estivemos)
Nenhuma noite cai sobre o que é puro
Estamos brilhando livres
(brilhando livres)
Estamos brilhando livres

Fique um pouco…
(fique um pouco…)
Aqui nada desaparece…
(na-a-da se vai…)`,
  ),
  track(
    'Nights You Cry',
    `Where do the tears go
When you cry in the dark?

Who hears your breathing
When the room feels far?

Where do you hide when the night feels long?
How do you stay when the strength is gone?

Don’t be loud
Don’t wake anyone

You press your face in the pillow
To keep the world asleep
But pain doesn’t need permission
To speak

The tears in your chest
Still know the way

Hold on through the nights you cry
Hold on through the nights you cry
Crying doesn’t mean you’re losing ground
You’re still breathing

What do you tell yourself
When the thoughts don’t stop?
Why does your heart feel guilty
For wanting to drop?

Be strong
You should be over this

But no one heals on command
No one does it on time
Some wounds only open
At night

And every tear you hide
Still cleans the pain

Hold on through the nights you cry (2x)
Let the sadness pass through your eyes
You’re still standing

Don’t punish your heart
For feeling too deep

Some strength looks like breaking
And staying asleep

Hold on through the nights you cry
Through the nights you cry

Hold on through the nights you cry

When the tears fall and you feel undone
You’re still here (2x)

Let it fall
Morning knows your name`,
    `Para onde vão as lágrimas
quando você chora no escuro?
(quando você chora no escuro)
Quem ouve a sua respiração
quando o quarto parece distante?
(distante, distante)

Onde você se esconde quando a noite parece longa?
Como você permanece quando a força acaba?
“não faça barulho” (não faça barulho)
“não acorde ninguém” (não acorde ninguém)

Você aperta o rosto no travesseiro
pra manter o mundo dormindo
Mas a dor não precisa de permissão
pra falar

As lágrimas no seu peito
ainda sabem o caminho
ainda sabem o ca-mi-nho

SEGURE FIRME NAS NOITES EM QUE VOCÊ CHORA
(noites em que você chora)
SEGURE FIRME NAS NOITES EM QUE VOCÊ CHORA
(chora, chora)
Chorar não significa que você está perdendo terreno
Você ainda está respirando
(ainda respirando)

O que você diz a si mesma
quando os pensamentos não param?
Por que o seu coração se sente culpado
por querer desistir?
“seja forte” (seja forte)
“você já devia ter superado isso” (superado isso)

Mas ninguém se cura por comando
Ninguém faz no tempo certo
Algumas feridas só se abrem
à noite

E cada lágrima que você esconde
ainda limpa a dor
ainda limpa a do-o-or

SEGURE FIRME NAS NOITES EM QUE VOCÊ CHORA
(noites em que você chora)
SEGURE FIRME NAS NOITES EM QUE VOCÊ CHORA
(chora, chora)
Deixe a tristeza passar pelos seus olhos
Você ainda está de pé
(ainda de pé)

Não castigue o seu coração
por sentir tão fundo
(vire-se para si mesma)
(vire-se para si mesma)

Alguma força se parece com quebrar
e continuar dormindo
(dormindo~ dormindo)

SEGURE FIRME NAS NOITES EM QUE VOCÊ CHORA
ATRAVÉS DAS NOITES EM QUE VOCÊ CHORA
(chora, chora)
SEGURE FIRME NAS NOITES EM QUE VOCÊ CHORA
(vai ficar tudo bem)
Quando as lágrimas caem e você se sente desfeita
Você ainda está aqui
(ainda aqui-i-i)
Você ainda está aqui

Deixe cair…
(deixe cair…)
A manhã conhece o seu nome…
(conhece o seu no-o-me)`,
  ),
];
