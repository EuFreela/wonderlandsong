/** Chapter 4 · Listen To Daddy lyrics (from Genius + PT translation). */
import type { BunnyAlbumTrack } from '../types';

const chapter4LyricsNote =
  'Letra em inglês no painel esquerdo; tradução em português abaixo. Chapter 4 · Listen To Daddy — Bunny Land Music.';

function track(title: string, lyrics: string, translation: string): BunnyAlbumTrack {
  return {
    title,
    lyrics,
    lyricsExplanation: {
      title: 'Tradução e contexto',
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
    `O que você vai segurar quando a noite ficar oca?
Em quem você vai confiar quando nenhuma voz seguir?

Onde você vai ficar quando a força parecer pequena?
Como você vai se levantar quando começar a cair?
Não quebre
Não desvaneça

O silêncio no seu peito
Ainda chama o seu nome
Ainda chama o seu nome

SEGURE O ESPÍRITO QUE NÃO CAI
SEGURE O ESPÍRITO QUE NÃO CAI
Mesmo quando o escuro envolve tudo
Você ainda está de pé

O que você vai encontrar quando o orgulho for abalado?
Para onde você vai virar quando o caminho parecer tomado?
Continue
Continue respirando

E cada asa quebrada
Ainda aprende a voar
Ainda aprende a voar

SEGURE O ESPÍRITO QUE NÃO CAI
SEGURE O ESPÍRITO QUE NÃO CAI

Levante o coração acima do peso de tudo
Você ainda está subindo

Não deixe as sombras ficarem
Não deixe elas te puxarem para dentro
(vire a cabeça)

A luz cresce dentro das rachaduras
Onde a esperança começa

SEGURE O ESPÍRITO QUE NÃO CAI
ESPÍRITO QUE NÃO CAI

SEGURE O ESPÍRITO QUE NÃO CAI
Quando tudo some e você se sente tão pequeno
Você ainda brilha
Você ainda brilha

Segure…
Espírito que não cai…`,
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
(eu sinto)
Você não planejou ficar
(mas ficou)

Você caminha como se o chão pesasse mais hoje
Olhos à frente, mas o coração olha para longe
Cada sorriso parece aprendido, não verdadeiro
Como se você fizesse o que se espera que faça

Vejo a pausa na sua respiração
As palavras que você nunca diz
Eu conheço esse peso
Eu carreguei o mesmo

Você acha que ninguém nota a rachadura
Mas eu noto
Eu já fui você

O que você ganha
Pensando no pior?
Isso te protege
Ou dói?

DEIXE VIR
(deixe vir~)
DEIXE SE MOVER
(deixe se mover~)
O amor não pede que você seja imune
Só aberto, só verdadeiro

Você não perde
Quando cai às vezes
Você está aprendendo
A se realinhar

Você repete momentos que não pode rebobinar
Tentando consertar o que vive no tempo
Mas cada cicatriz que você esconde tão bem
É prova de que se levantou depois de cair

Você diz “talvez seja só eu”
Como se a esperança fosse algo perigoso
Eu também disse isso
Antes de aprender a respirar

Você não precisa vencer hoje
Só precisa ficar

DEIXE VIR
(deixe vir)
DEIXE SE MOVER
(deixe se mover)
O amor cresce melhor quando você deixa espaço—
Sem força, sem regras

Cada queda
Ensina onde se firmar
Você quebra
Depois sobe de novo

Pare de perguntar por que dói
Comece a perguntar o que mostra
(vire-se para isso)
(vire-se para isso)
Nada real chega intocado
É assim que é
(é assim que é)

DEIXE VIR
SEM MEDO
DEIXE SE MOVER
VOCÊ AINDA ESTÁ AQUI
O amor te encontra quando você para de lutar
E confia na noite

Você cai
Depois aprende a ficar de pé
De novo…
(de novo)

Você não está atrasado
(não está atrasado)
Você está a caminho…
(a caminho)`,
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
    `Você deu o coração antes de ele aprender o nome
Acreditou que cada centelha era para ficar
Segurou uma promessa com mãos trêmulas
Mas algumas verdades só o tempo explica

Você está doendo agora e perguntando por quê
Como se o amor fosse algo que você fez errado
Mas escolher errado uma vez no escuro
Não significa que a sua luz se foi

Esta é a idade das perguntas
Não a idade dos votos
Você não precisa saber o para sempre
Só precisa saber o agora

Nem todo coração que se sente sincero
Sabe como ficar ou como cuidar
Algumas pessoas amam como fogo aberto
Brilhante no começo, depois some no ar

Há uma estação para aprender a dor
E outra para saber quem você é
Alguns amores chegam quando você ainda corre
Os que duram caminham onde você está

ESPERE O AMOR QUE NÃO TEM PRESSA
(espere espere)
ESPERE O TOQUE QUE CONSTRÓI, NÃO ESMAGA
(constrói, não esmaga)
O que é para ficar não vai pedir que você sangre
Vai te encontrar quando você estiver pronto

Você vê o mundo com olhos gentis
Isso não é fraqueza, é graça
Mas nem todo mundo merece segurar
A suavidade no seu rosto

Crescer não é fechar o coração
É aprender onde ele pertence
A garota que você é basta agora
A mulher vai chegar

ESPERE O AMOR QUE SABE O SEU NOME
(sabe o seu nome)
ESPERE AQUELE QUE PERMANECE O MESMO
(permanece o mesmo)
Um amor duradouro também é paciente
Cresce como você cresce

Sem corrida para correr
(sem corrida)
Sem coroa para ganhar
(sem coroa)
Algumas portas abrem
Quando você está inteiro por dentro
(por dentro)

ESPERE O AMOR QUE PARECE LAR
(parece lar)
Não alto, não rápido, não descontrolado
Quando o tempo for certo, você saberá o caminho
Ainda não…
Mas um dia

Um dia
(um di-i-ia)`,
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
    `Você senta onde o barulho desiste
Onde até as paredes aprendem contenção
A luz do celular vem e vai
Como se tivesse medo de ficar

Pensamentos voltam sem urgência
Eles não correm, eles se repetem
Tomam o caminho longo
Até você os reconhecer

Você atravessa os dias se sentindo distante
Não das pessoas — do peso
Tudo parece normal
Mas nada parece leve

Você tenta distrair o silêncio
Com movimento, com som
Mas ele espera com paciência
Até você desacelerar

Você não diz o que está acontecendo
Não precisa
Algumas coisas se anunciam
Ficando

O mundo continua oferecendo respostas
Você continua recusando
Não porque não se importa
Mas porque está cansado

Você se pergunta se esse vazio
Significa que algo está errado
Ou se é só uma estação
Que esqueceu como terminar

Você não precisa consertar isso esta noite
Não precisa nomear
Só saiba isto —
Você é visto

Quando os pensamentos dão a volta
Deixe-os passar
Nem tudo o que fica
Pertence a você

E se a noite parecer mais longa
Do que deveria
Lembre:
Você não a caminha sozinho`,
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
As luzes dela se movem
Eu não

Caminho pelos dias
Como quartos inacabados
Mobiliados com ecos
E mais nada

Pensamentos voltam
Do jeito que as ondas voltam
Não altos
Só pacientes

Eu os renomeio toda noite
Para que não me reconheçam
Ainda assim, sentam ao lado da cama
Como se sempre tivessem morado aqui

Há espaço em todo lugar
Exceto por dentro

Tento me manter ocupado
Com movimento
Com barulho
Com luz

Mas o silêncio conhece a minha postura
Melhor do que qualquer um
Ele espera
Até eu me sentar

As pessoas perguntam como estou
Respondo com o tempo
Algo vago
Algo seguro

Elas não precisam saber
Como o vazio pode pesar
Como a ausência
Aprende a se repetir

Não estou me despedaçando
Estou parado

E isso pode ser pior

É assim que é
Viver intocado
Cercado
Mas nunca abraçado

O mundo continua se movendo
Eu continuo esperando
Que algo sem nome
Pare de voltar

A mente não grita
Ela gira em círculos

E cada pensamento
Parece familiar

Não preciso de resgate
Não preciso de barulho

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
    `O que você vai escolher quando a dor parecer mais alta?
Quem você vai ser quando a culpa crescer mais forte?

Para onde você vai quando a raiva chamar?
Como você para quando as paredes parecerem altas?

Deixe ir
Não revida

O fogo nas suas mãos
Não precisa ficar
Não precisa fi-i-icar

Solte o peso de que você não precisa agora
Solte o peso de que você não precisa agora
Você não cura uma ferida devolvendo o golpe
Você ainda está escolhendo

O que você ganha quando responde com dor?
O que você perde quando alimenta a chama?
Seja a calma, expire

E cada coração endurecido
Ainda pode mudar de caminho
Ainda mudar de cami-i-inho

Solte o peso de que você não precisa agora
Solte o peso de que você não precisa agora
Levante as mãos acima da necessidade de jogar
Você ainda está subindo

Não construa um trono com a dor
Não coroe o passado de novo

A misericórdia cresce no espaço
Onde o amor permanece

Solte o peso de que você não precisa agora
Peso de que você não precisa agora
Solte o peso de que você não precisa agora
(você não precisa agora)
Quando você responde ao escuro com um tom mais gentil
Você ainda brilha

Deixe ir
Pague com amor, não com guerra`,
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
    `Você sente o quarto antes de entrar
Como se cada respiração precisasse de permissão
O peito aperta sem aviso
E as palavras ficam logo fora do alcance

Há um medo quieto atrás dos seus olhos
Perguntando se você será recusado
Como se amor e lugar e voz
Fossem coisas que você tivesse de provar

Esse sentimento não é fracasso
É sensibilidade acordada
Alguns corações sentem mais fundo primeiro
Antes de se sentirem seguros

Você se sente diferente na multidão
Não errado, só desafinado
Como se todo mundo tivesse aprendido um passo
Que você nunca foi ensinado a usar

O silêncio parece mais pesado que o som
Mas falar parece uma queda
Então você fica dentro de si
E carrega tudo sozinho

Você não pertence menos porque sente mais
Você não perde valor por sentir medo

Algumas pessoas florescem em quartos mais quietos
E ainda assim mudam o ar

Você se pergunta se a distância que sente
Significa que está no lugar errado
Mas nem todo espaço é feito para caber
A suavidade da sua forma

Ser cuidadoso não é fraqueza
E o medo não cancela a verdade
Só significa que o coração está ouvindo
Antes de escolher quem

Você não precisa desaparecer para estar seguro
Não precisa gritar para ser visto

O mundo certo não vai apressar a sua voz
Ele vai esperar por você

Sem veredito aqui
Sem relógio para vencer

Pertencer não é barulho
É alívio

Você não está fora da vida
Você não está atrasado para si mesmo

Alguns corações chegam com suavidade
E ainda assim chegam inteiros

Inteiros`,
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
    `Por que o quarto parece mais alto
Quando não há ninguém?
Por que o coração continua perguntando
Se isso é justo?

Você senta em lugares cheios de gente
Mas se sente invisível
Como se todo mundo tivesse aprendido a pertencer
Exceto você e eu

Você ri quando se espera
Acena, fica educado
Mas eu vejo como você desaparece
Um pouco mais a cada noite

Solidão não significa que você está vazio
Significa que você sente fundo
Antes do mundo

Quando você se sente sozinho
Não pense que está quebrado

Quando você se sente sozinho
Não significa
Que foi deixado para trás

Você não está sem amor
Está aprendendo a forma dele
E eu estou bem aqui
Mesmo quando você se sente
Tão longe

Haverá noites em que você vai questionar
Se pertence a algum lugar
Se ser quieto significa
Que ninguém se importa de verdade

Mas solidão não é rejeição
É espaço para crescer
Algumas raízes se aprofundam no subterrâneo
Antes de aparecer

Você não precisa preencher o silêncio
Para ser real
Não precisa de permissão
Para sentir

Quando você se sente sozinho
Não se vire contra o coração
Quando você se sente sozinho
Não é o fim
É só o começo

Você não foi esquecido
Está ficando forte
E eu ainda estou aqui
Quando a noite parece longa

Deixe o silêncio sentar com você
Ele não é o seu inimigo
A solidão é só um quarto
Onde você encontra quem vai ser

(vire-se para si mesmo)
(respire, não corra)

Quando você se sente sozinho
Lembre disto
Você é amado
Mesmo assim

Não mais alto
Não diferente
Não mais do que você é

Você não caminha esta estrada sozinho
Mesmo quando parece escuro

Fique
Você não precisa apressar a sua luz
Estou aqui
E você está se saindo bem`,
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
Caminhe devagar

Pés descalços no chão dourado
Sem sombras penduradas ao redor
Cada respiração é suave e clara
Nenhum medo mora aqui

Mãos abertas, olhos gentis
Ninguém fica para trás
Você está seguro, você pertence

O ar está cheio de paz
Nada quebra
Nada precisa partir

Este é o jardim do sempre-verde
Este é o lugar que sempre vimos

Nenhuma lágrima cai e nenhum coração se entristece
Estamos vivendo o sonho

Cada rosto brilha jovem
O tempo só começou
Corpos fortes e espíritos leves
Nenhuma doença à vista

Animais descansam ao nosso lado
Olhos gentis, bem abertos
Nenhum mal aqui, só vida

Nenhuma dor escrita na nossa pele
É assim que deve ser

Este é o jardim do sempre-verde
Onde cada alma é pura e livre

Sem adeus, sem cenas de tristeza
Só alegria entre nós

Nenhuma morte espera na porta
Nenhuma tristeza no chão

Cada coração está em sintonia
O amor é sempre novo

Este é o jardim do sempre-verde
O lugar onde sempre estivemos

Nenhuma noite cai sobre o que é limpo
Estamos brilhando livres
Estamos brilhando livres

Fique um pouco
Nada some aqui`,
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
Quando você chora no escuro?

Quem ouve a sua respiração
Quando o quarto parece distante?

Onde você se esconde quando a noite parece longa?
Como você fica quando a força se foi?

Não faça barulho
Não acorde ninguém

Você pressiona o rosto no travesseiro
Para manter o mundo dormindo
Mas a dor não precisa de permissão
Para falar

As lágrimas no peito
Ainda conhecem o caminho

Aguente firme nas noites em que você chora
Aguente firme nas noites em que você chora
Chorar não significa que você está perdendo o chão
Você ainda está respirando

O que você diz a si mesmo
Quando os pensamentos não param?
Por que o coração se sente culpado
Por querer desistir?

Seja forte
Você já deveria ter superado isso

Mas ninguém cura sob comando
Ninguém faz no prazo
Algumas feridas só abrem
À noite

E cada lágrima que você esconde
Ainda limpa a dor

Aguente firme nas noites em que você chora (2x)
Deixe a tristeza passar pelos olhos
Você ainda está de pé

Não puna o seu coração
Por sentir fundo demais

Alguma força parece quebrar
E continuar dormindo

Aguente firme nas noites em que você chora
Nas noites em que você chora

Aguente firme nas noites em que você chora

Quando as lágrimas caem e você se sente desfeito
Você ainda está aqui (2x)

Deixe cair
A manhã sabe o seu nome`,
  ),
];
