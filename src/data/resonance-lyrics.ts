/** Resonance — Echoes of Redemption lyrics (EN + PT-BR translation only). */
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

export const echoesOfRedemptionTracks: BunnyAlbumTrack[] = [
  {
    title: 'Rise From The Ashes',
    ...withPtTranslation(
      `I crawled through shadows, chained to the ground
Every mistake carved deep inside
But time won’t wait, won’t turn around
Now’s the moment, I must rise

I can feel the fear breaking down
The weight of chains is falling out

Burning the pain, I rise from the ashes
The past is gone, it won’t hold me back
Nothing can stop me, I’m finally free
Now I see, I’m stronger this way

I walked through ruins, lost in myself
Every scar, another lesson to tell
But the light is shining, calling me back
There’s no turning, it's all or nothing now

I can feel the fear breaking down
The weight of chains is falling out

Burning the pain, I rise from the ashes
The past is gone, it won’t hold me back
Nothing can stop me, I’m finally free
Now I see, I’m stronger this way

Time has passed, there’s no more cage
Echoes screaming in the dark
But I will rise, I will remain
I am the fire, I will not fade!

Burning the pain, I rise from the ashes
The past is gone, it won’t hold me back
Nothing can stop me, I’m finally free
Now I see, I’m stronger this way

"I’m stronger this way..."`,
      `Me arrastei pelas sombras, acorrentado ao chão
Cada erro marcado bem fundo em mim
Mas o tempo não espera, não volta atrás
Chegou o momento — eu preciso me erguer

Posso sentir o medo se desfazendo
O peso das correntes caindo ao chão

Queimando a dor, eu renasço das cinzas
O passado se foi, não pode me prender
Nada pode me parar, estou finalmente livre
Agora vejo — sou mais forte assim

Caminhei entre ruínas, perdido em mim mesmo
Cada cicatriz, mais uma lição a contar
Mas a luz brilha forte, me chamando de volta
Não há retorno — agora é tudo ou nada

Posso sentir o medo se desfazendo
O peso das correntes caindo ao chão

Queimando a dor, eu renasço das cinzas
O passado se foi, não pode me prender
Nada pode me parar, estou finalmente livre
Agora vejo — sou mais forte assim

O tempo passou, não há mais prisão
Ecos gritam na escuridão
Mas eu me erguerei, eu permanecerei
Eu sou o fogo — eu não vou desaparecer!

Queimando a dor, eu renasço das cinzas
O passado se foi, não pode me prender
Nada pode me parar, estou finalmente livre
Agora vejo — sou mais forte assim

"Sou mais forte assim..."`,
    ),
  },
  {
    title: 'Breaking Point',
    ...withPtTranslation(
      `I feel the weight crushing down on me
Every step is harder to believe
Lost in the echoes of my past mistakes
Drowning in the words I couldn't take

But I won’t let this tear me apart
I’ve been too close to the edge before

This is my breaking point, I won’t fall again
I’ve been through the fire, I’ve felt all the pain
But I’m stronger now, I won’t be afraid
This time I fight back, I won’t break

Every scar tells a story I can’t erase
Fighting the voices that won’t go away
They pull me under, but I won’t drown
I’ll find the light, I’ll stand my ground

But I won’t let this tear me apart
I’ve been too close to the edge before

This is my breaking point, I won’t fall again
I’ve been through the fire, I’ve felt all the pain
But I’m stronger now, I won’t be afraid
This time I fight back, I won’t break

I’ve lost myself a thousand times
But I will rise, I’ll take what’s mine
No more running, no more fear
I will stand, I’m still here

This is my breaking point, I won’t fall again
I’ve been through the fire, I’ve felt all the pain
But I’m stronger now, I won’t be afraid
This time I fight back, I won’t break

No, I won’t break...`,
      `Sinto o peso esmagando sobre mim
Cada passo se torna mais difícil de acreditar
Perdido nos ecos dos meus erros do passado
Afogando-me nas palavras que não pude suportar

Mas eu não deixarei que isso me destrua
Já estive perto do abismo antes

Este é o meu ponto de ruptura — não cairei de novo
Já passei pelo fogo, já senti toda a dor
Mas agora estou mais forte, não terei medo
Desta vez luto de volta, não vou me quebrar

Cada cicatriz conta uma história que não posso apagar
Lutando contra as vozes que não desaparecem
Elas me puxam para o fundo, mas eu não me afogarei
Encontrarei a luz, permanecerei de pé

Mas eu não deixarei que isso me destrua
Já estive perto do abismo antes

Este é o meu ponto de ruptura — não cairei de novo
Já passei pelo fogo, já senti toda a dor
Mas agora estou mais forte, não terei medo
Desta vez luto de volta, não vou me quebrar

Já me perdi mil vezes
Mas eu me erguerei, tomarei o que é meu
Sem mais fugas, sem mais medo
Permaneço de pé — ainda estou aqui

Este é o meu ponto de ruptura — não cairei de novo
Já passei pelo fogo, já senti toda a dor
Mas agora estou mais forte, não terei medo
Desta vez luto de volta, não vou me quebrar

Não, eu não vou me quebrar...`,
    ),
  },
  {
    title: "Soul's Captivity",
    ...withPtTranslation(
      `Time stands still, the walls are closing in
The silence calls my name
Trapped in memories that never fade
Carrying the weight of all I am

I feel the cold running through my veins
Every mistake carved into my skin
The light has faded, the shadows surround me
I am nothing but an echo within
The faces I loved have turned to ghosts
Their empty eyes are filled with scorn
I tried to run, but there’s no escape
My fate is sealed in the dark unknown

And what if there’s no redemption for me?
If my voice is swallowed by the wind?
Time is a ruthless warden
And I am a prisoner of what I've become

I built this prison with my own hands
The chains grow tighter, no mercy stands
If all that remains is the weight of the pain
What awaits me beyond the flames?

My prayers fade into an empty sky
The void replies and drags me back

And what if there’s no redemption for me?
If my voice is swallowed by the wind?

I built this prison with my own hands
The chains grow tighter, no mercy stands
If all that remains is the weight of the pain
What awaits me beyond the flames?

The days drag on like heavy chains
The sun won't touch this frozen cage
If there's hope, then where is it now?
If there's redemption, why do I still bleed?

I built this prison with my own hands
The chains grow tighter, no mercy stands
If all that remains is the weight of the pain
What awaits me beyond the flames?`,
      `O tempo parou, as paredes estão se fechando
O silêncio chama pelo meu nome
Preso em memórias que nunca se apagam
Carregando o peso de tudo o que sou

Sinto o frio correndo em minhas veias
Cada erro esculpido em minha pele
A luz se apagou, as sombras me cercam
Sou apenas um eco dentro de mim
Os rostos que amei tornaram-se fantasmas
Seus olhos vazios transbordam de desprezo
Tentei correr, mas não há fuga
Meu destino está selado no escuro incerto

E se não houver redenção para mim?
Se minha voz for engolida pelo vento?
O tempo é um carcereiro impiedoso
E eu sou prisioneiro do que me tornei

Construí esta prisão com as minhas próprias mãos
As correntes apertam, não há piedade
Se tudo o que resta é o peso da dor
O que me espera além das chamas?

Minhas preces se perdem em um céu vazio
O vazio responde e me arrasta de volta

E se não houver redenção para mim?
Se minha voz for engolida pelo vento?

Construí esta prisão com as minhas próprias mãos
As correntes apertam, não há piedade
Se tudo o que resta é o peso da dor
O que me espera além das chamas?

Os dias se arrastam como correntes pesadas
O sol não toca esta jaula congelada
Se há esperança, onde ela está agora?
Se há redenção, por que ainda sangro?

Construí esta prisão com as minhas próprias mãos
As correntes apertam, não há piedade
Se tudo o que resta é o peso da dor
O que me espera além das chamas?`,
    ),
  },
  {
    title: 'Worn Away',
    ...withPtTranslation(
      `I feel the rust creeping under my skin
Every scar a story I can’t erase
The mirror shows a stranger staring back
A hollow shell lost in time and space
The days grow heavy like iron chains
Holding me down, pulling me back
A nameless ghost with nowhere to go
Waiting for a hand that never comes

And what if I fade into silence?
What if I vanish like dust in the wind?
The rust is sinking into my bones
Nothing remains but the echo within

Every day pulls me further away
Every shadow whispers my name

And what if I fade into silence?
What if I vanish like dust in the wind?

I am breaking down, worn away by time
Rust is claiming all I used to be
Shadows pull me into a nameless abyss
And the light I had is lost to the sea

Time devours all it touches
And I am nothing but another scar

And what if I fade into silence?
What if I vanish like dust in the wind?

I am breaking down, worn away by time
Rust is claiming all I used to be
Shadows pull me into a nameless abyss
And the light I had is lost to the sea

Nothing can stop the hands of time
It consumes, it breaks, it erases
Every memory, every promise
Gone in the blink of an eye

I am breaking down, worn away by time
Rust is claiming all I used to be
Shadows pull me into a nameless abyss
And the light I had is lost to the sea`,
      `Sinto a ferrugem se espalhando sob minha pele
Cada cicatriz é uma história que não posso apagar
O espelho reflete um estranho me encarando
Um casco vazio, perdido no tempo e no espaço
Os dias pesam como correntes de ferro
Me segurando, me puxando para trás
Um fantasma sem nome, sem ter para onde ir
Esperando por uma mão que nunca chega

E se eu desaparecer no silêncio?
E se eu sumir como poeira ao vento?
A ferrugem afunda em meus ossos
Nada resta além do eco dentro de mim

A cada dia sou levado mais longe
Cada sombra sussurra o meu nome

E se eu desaparecer no silêncio?
E se eu sumir como poeira ao vento?

Estou desmoronando, desgastado pelo tempo
A ferrugem consome tudo o que eu fui
As sombras me puxam para um abismo sem nome
E a luz que eu tinha se perdeu no mar

O tempo devora tudo o que toca
E eu sou apenas mais uma cicatriz

E se eu desaparecer no silêncio?
E se eu sumir como poeira ao vento?

Estou desmoronando, desgastado pelo tempo
A ferrugem consome tudo o que eu fui
As sombras me puxam para um abismo sem nome
E a luz que eu tinha se perdeu no mar

Nada pode parar as mãos do tempo
Ele consome, quebra, apaga
Cada memória, cada promessa
Desaparecendo num piscar de olhos

Estou desmoronando, desgastado pelo tempo
A ferrugem consome tudo o que eu fui
As sombras me puxam para um abismo sem nome
E a luz que eu tinha se perdeu no mar`,
    ),
  },
  {
    title: 'Scars of Tomorrow',
    ...withPtTranslation(
      `Another day is born, and there she stands
Among the ruins of what remains
Time has passed without permission
Taking promises no one kept

She looks in the mirror and sees a distant face
Marked by the past she used to know
The dreams she held have turned to ruins
And the scars now tell what memory erased

If she could go back and retrace her steps
If she could feel without the fear of falling
But life is written in broken lines
And no one taught her how to rebuild

But the past cannot define
If there’s a tomorrow, she must move on
Even if the pain makes her hesitate
The scars of tomorrow will remind her

She walks among shadows and echoes
Feels the ghosts of time calling her name

If she could go back and retrace her steps
If she could feel without the fear of falling

But the past cannot define
If there’s a tomorrow, she must move on
Even if the pain makes her hesitate
The scars of tomorrow will remind her

The voices of doubt whisper in her ear
That staying is easier than starting again
But life beats beyond the wounds
And maybe something waits at the end of the road

But the past cannot define
If there’s a tomorrow, she must move on
Even if the pain makes her hesitate
The scars of tomorrow will remind her`,
      `Mais um dia nasce, e lá está ela
Entre as ruínas do que restou
O tempo passou sem pedir licença
Levando promessas que ninguém guardou

Ela olha no espelho e vê um rosto distante
Marcado pelo passado que costumava conhecer
Os sonhos que guardava tornaram-se ruínas
E agora as cicatrizes contam o que a memória apagou

Se ela pudesse voltar e refazer os passos
Se pudesse sentir sem o medo de cair
Mas a vida é escrita em linhas quebradas
E ninguém lhe ensinou como reconstruir

Mas o passado não pode definir
Se houver um amanhã, ela precisa seguir
Mesmo que a dor a faça hesitar
As cicatrizes do amanhã a farão lembrar

Ela caminha entre sombras e ecos
Sente os fantasmas do tempo chamando o seu nome

Se ela pudesse voltar e refazer os passos
Se pudesse sentir sem o medo de cair

Mas o passado não pode definir
Se houver um amanhã, ela precisa seguir
Mesmo que a dor a faça hesitar
As cicatrizes do amanhã a farão lembrar

As vozes da dúvida sussurram em seu ouvido
Que é mais fácil permanecer do que recomeçar
Mas a vida pulsa além das feridas
E talvez algo a espere no fim da estrada

Mas o passado não pode definir
Se houver um amanhã, ela precisa seguir
Mesmo que a dor a faça hesitar
As cicatrizes do amanhã a farão lembrar`,
    ),
  },
  {
    title: 'Trapped In The Fall',
    ...withPtTranslation(
      `You held onto the lie for far too long
Every word sharp like a frozen blade
The castle you built is starting to fall
But you’d rather close your eyes

Every fall was a choice you made
Every wound, a cycle that repeats
You bleed and call it redemption
But you’re only sinking deeper

If everything is falling apart
Why do you still refuse to leave?

You're addicted to pain, you don't know escape
Always running back to what makes you break
Nothing can save you, ‘cause you won’t change
You’d rather be lost than break from these chains

You wear your scars like a trophy
As if the world needs to see
But no one can pull you out
If you won’t set yourself free

If everything is falling apart
Why do you still refuse to leave?

You're addicted to pain, you don't know escape
Always running back to what makes you break
Nothing can save you, ‘cause you won’t change
You’d rather be lost than break from these chains

The chains you don’t see
Are the same ones holding you here
How much more must you lose
To admit it’s time to disappear?

You're addicted to pain, you don't know escape
Always running back to what makes you break
Nothing can save you, ‘cause you won’t change
You’d rather be lost than break from these chains`,
      `Você se agarrou à mentira por tempo demais
Cada palavra afiada como uma lâmina fria
O castelo que construiu começa a ruir
Mas prefere fechar os olhos

Cada queda foi uma escolha sua
Cada ferida, um ciclo que se repete
Você sangra e chama isso de redenção
Mas só afunda ainda mais

Se tudo está desmoronando
Por que ainda se recusa a sair?

Você é viciado na dor, não sabe escapar
Sempre volta para o que o faz quebrar
Nada pode salvá-lo, pois você não muda
Prefere se perder a romper essas correntes

Você exibe as cicatrizes como um troféu
Como se o mundo precisasse ver
Mas ninguém pode tirá-lo daqui
Se você mesmo não quiser se libertar

Se tudo está desmoronando
Por que ainda se recusa a sair?

Você é viciado na dor, não sabe escapar
Sempre volta para o que o faz quebrar
Nada pode salvá-lo, pois você não muda
Prefere se perder a romper essas correntes

As correntes que você não vê
São as mesmas que o seguram aqui
O que mais precisa perder
Para admitir que é hora de desaparecer?

Você é viciado na dor, não sabe escapar
Sempre volta para o que o faz quebrar
Nada pode salvá-lo, pois você não muda
Prefere se perder a romper essas correntes`,
    ),
  },
  {
    title: 'Echoes That Remain',
    ...withPtTranslation(
      `The frames on the wall still tell their stories
Of days that felt like they’d never fade
But time has painted cracks in the memory
And now only shadows remain

I tried to erase the names on the glass
But the cold always brings them back
What is left when the past is all you have?

Echoes that remain screaming through the night
Whispering promises I never kept
I run, but it all returns to me
I’m just the reflection of what I’ve lost

The streets seem the same, but something has changed
I don’t recognize the places I once called home
Every closed door sounds like a warning
That there’s no way back to where I belong

Echoes that remain screaming through the night
Whispering promises I never kept
I run, but it all returns to me
I’m just the reflection of what I’ve lost

If all I have are memories that hurt
What happens if I forget them?
If I’m just a name lost in the wind
Then who am I without the past?

"Echoes never fade away..."`,
      `Os quadros na parede ainda contam suas histórias
De dias que pareciam nunca desaparecer
Mas o tempo pintou rachaduras na memória
E agora só restam sombras

Tentei apagar os nomes no vidro
Mas o frio sempre os traz de volta
O que resta quando o passado é tudo o que se tem?

Ecos que restaram gritam na noite
Sussurram promessas que nunca cumpri
Corro, mas tudo retorna a mim
Sou apenas o reflexo do que já perdi

As ruas parecem as mesmas, mas algo mudou
Não reconheço os lugares que um dia chamei de lar
Cada porta fechada soa como um aviso
De que não há caminho de volta para onde pertenço

Ecos que restaram gritam na noite
Sussurram promessas que nunca cumpri
Corro, mas tudo retorna a mim
Sou apenas o reflexo do que já perdi

Se tudo o que tenho são memórias que doem
O que acontece se eu as esquecer?
Se sou apenas um nome perdido no vento
Então quem sou eu sem o passado?

"Os ecos nunca desaparecem..."`,
    ),
  },
  {
    title: 'Silenced Voices',
    ...withPtTranslation(
      `We hear the promises that never reach us
We sell the truths that never come
Justice hides behind the walls
While hope fades into the dark

The screams are paid to be silent
The truth is buried beneath cold lies
Palaces rise over misery
And they call it evolution

But if we stand together, we will be stronger
If we hold our hands, no one can bring us down

Speak now, don’t let them silence your voice
We are many, we won’t be controlled
Silence has never brought liberation
Be the force that shatters the chains

They buy the fear to keep us blind
They shift the path so we can’t see
But the truth still burns inside of us
And their hands will never erase it

But if we stand together, we will be stronger
If we hold our hands, no one can bring us down

Speak now, don’t let them silence your voice
We are many, we won’t be controlled
Silence has never brought liberation
Be the force that shatters the chains

How many more must fall before they see?
How many cries are drowned in greed?
If the price of silence is your freedom
What is left but the dark?

Speak now, don’t let them silence your voice
We are many, we won’t be controlled
Silence has never brought liberation
Be the force that shatters the chains`,
      `Ouvimos as promessas que nunca nos alcançam
Vendemos verdades que nunca chegam
A justiça se esconde atrás dos muros
Enquanto a esperança se apaga na escuridão

Os gritos são pagos para permanecerem calados
A verdade enterrada sob mentiras frias
Palácios se erguem sobre a miséria
E eles chamam isso de evolução

Mas se estivermos juntos, seremos mais fortes
Se dermos as mãos, ninguém poderá nos derrubar

Fale agora, não deixe que calem a sua voz
Somos muitos, não seremos controlados
O silêncio nunca trouxe libertação
Seja a força que quebra as correntes

Eles compram o medo para nos manter cegos
Desviam o caminho para que não possamos ver
Mas a verdade ainda queima dentro de nós
E as mãos deles nunca poderão apagá-la

Mas se estivermos juntos, seremos mais fortes
Se dermos as mãos, ninguém poderá nos derrubar

Fale agora, não deixe que calem a sua voz
Somos muitos, não seremos controlados
O silêncio nunca trouxe libertação
Seja a força que quebra as correntes

Quantos mais precisam cair para que enxerguem?
Quantos gritos são afogados pela ganância?
Se o preço do silêncio for a sua liberdade
O que restará além da escuridão?

Fale agora, não deixe que calem a sua voz
Somos muitos, não seremos controlados
O silêncio nunca trouxe libertação
Seja a força que quebra as correntes`,
    ),
  },
  {
    title: 'Edge Of The Fall',
    ...withPtTranslation(
      `The wind whispers the weight of my guilt
Every step takes me closer to the end
I look back and see the shadows
But the light feels so far away now
The ground is breaking beneath my feet
Every mistake comes back to haunt me
I keep running, but the road is fading
Is there still a way to turn around?

Time is judging, forcing me to see
But is it too late to set me free?

On the edge of the fall, trying to hold on
But the wind keeps pushing, I can’t stop now
If there’s a way back, show me the path
Or let me fall without looking back

Echoes from the past keep calling my name
Every scar, a cruel reminder
If I could change all that I’ve done
Would I still be the same?

Time is judging, forcing me to see
But is it too late to set me free?

On the edge of the fall, trying to hold on
But the wind keeps pushing, I can’t stop now
If there’s a way back, show me the path
Or let me fall without looking back

Echoes from the past keep calling my name
Every scar, a cruel reminder
If I could change all that I’ve done
Would I still be the same?

What if all of this is just a test?
What if fear is just an illusion?
Maybe I need to fall
To learn how to rise again

On the edge of the fall, trying to hold on
But the wind keeps pushing, I can’t stop now
If there’s a way back, show me the path
Or let me fall without looking back
"I just wanted one more chance..."`,
      `O vento sussurra o peso da minha culpa
Cada passo me leva mais perto do fim
Olho para trás e vejo as sombras
Mas a luz parece tão distante agora
O chão se parte sob meus pés
Cada erro volta para me assombrar
Continuo correndo, mas a estrada desaparece
Ainda há um caminho para voltar?

O tempo me julga, forçando-me a enxergar
Mas será tarde demais para me libertar?

À beira do abismo, tentando me segurar
Mas o vento me empurra, não consigo parar
Se há um caminho de volta, mostre-me agora
Ou deixe-me cair sem olhar para trás

Os ecos do passado continuam chamando o meu nome
Cada cicatriz, um lembrete cruel
Se eu pudesse mudar tudo o que fiz
Ainda seria o mesmo?

O tempo me julga, forçando-me a enxergar
Mas será tarde demais para me libertar?

À beira do abismo, tentando me segurar
Mas o vento me empurra, não consigo parar
Se há um caminho de volta, mostre-me agora
Ou deixe-me cair sem olhar para trás

Os ecos do passado continuam chamando o meu nome
Cada cicatriz, um lembrete cruel
Se eu pudesse mudar tudo o que fiz
Ainda seria o mesmo?

E se tudo isso for apenas um teste?
E se o medo for apenas uma ilusão?
Talvez eu precise cair
Para aprender a me levantar de novo

À beira do abismo, tentando me segurar
Mas o vento me empurra, não consigo parar
Se há um caminho de volta, mostre-me agora
Ou deixe-me cair sem olhar para trás
"Eu só queria mais uma chance..."`,
    ),
  },
  {
    title: 'No Way Back',
    ...withPtTranslation(
      `Another day, still fighting my mind
Every thought keeps dragging me down
I keep running, but there’s no escape
The past won’t let me go this time

Lies were the only thing I had left
Broken promises echo through the void
If there’s a way to break these chains
Then why do I keep coming back?

I tried to escape, but the cycle never ends
If this is all that’s left, then tell me...

There’s no way back, I’m trapped in here
Time has stolen all that I had left
If there’s a way out, I can’t see it
Or am I too blind to understand?

Every choice has led me to this place
Every mistake burned deep in scars
I look in the mirror, but there’s nothing left
Just shadows of what I used to be

I tried to escape, but the cycle never ends
If this is all that’s left, then tell me...

There’s no way back, I’m trapped in here
Time has stolen all that I had left
If there’s a way out, I can’t see it
Or am I too blind to understand?

How much longer before I break?
How much longer before I fade?
If redemption is just another lie
Then let them take me away!

There’s no way back, I’m trapped in here
Time has stolen all that I had left
If there’s a way out, I can’t see it
Or am I too blind to understand?`,
      `Mais um dia, ainda lutando contra a minha mente
Cada pensamento continua a me puxar para baixo
Continuo correndo, mas não há escapatória
O passado não me deixará ir desta vez

Mentiras foram a única coisa que me restou
Promessas quebradas ecoam no vazio
Se há um jeito de quebrar essas correntes
Então por que continuo a voltar para cá?

Tentei escapar, mas o ciclo nunca termina
Se isso é tudo o que restou, então diga-me...

Não há mais retorno, estou preso aqui
O tempo roubou tudo o que me restava
Se há uma saída, não consigo vê-la
Ou estou cego demais para compreender?

Cada escolha me trouxe a este lugar
Cada erro queimado fundo nas cicatrizes
Olho no espelho, mas não resta mais nada
Apenas sombras do que um dia fui

Tentei escapar, mas o ciclo nunca termina
Se isso é tudo o que restou, então diga-me...

Não há mais retorno, estou preso aqui
O tempo roubou tudo o que me restava
Se há uma saída, não consigo vê-la
Ou estou cego demais para compreender?

Quanto tempo ainda até eu me quebrar?
Quanto tempo ainda até eu desaparecer?
Se a redenção for apenas mais uma mentira
Então que me levem embora!

Não há mais retorno, estou preso aqui
O tempo roubou tudo o que me restava
Se há uma saída, não consigo vê-la
Ou estou cego demais para compreender?`,
    ),
  },
  {
    title: 'Traces of Us',
    ...withPtTranslation(
      `We were young, unafraid to fall
We ran against time, never looking back
But the days have passed, the voices have faded
And all that remains is the silence between us

I see you now, through time and pain
We’re still the same, just shadows that changed
If I could go back, fix what was lost
Would we still hear the echoes of us?

We heard the promises we never kept
Let our pride speak louder than the heart
But if we’re here, if we still feel
Maybe it’s time to find redemption

I see you now, through time and pain
We’re still the same, just shadows that changed
If I could go back, fix what was lost
Would we still hear the echoes of us?

Time tried to break us, but never tore us down
The scars tell our story, but they don’t define us
If there’s still something left worth fighting for
Then maybe it’s time to try once more

I see you now, through time and pain
We’re still the same, just shadows that changed
If I could go back, fix what was lost
Would we still hear the echoes of us?`,
      `Éramos jovens, sem medo de cair
Corríamos contra o tempo, sem olhar para trás
Mas os dias passaram, as vozes se calaram
E o que restou foi o silêncio entre nós

Eu te vejo agora, através do tempo e da dor
Ainda somos os mesmos — apenas sombras que mudaram
Se eu pudesse voltar, consertar o que se perdeu
Será que ainda ouviríamos os ecos de nós?

Ouvimos promessas que nunca cumprimos
Deixamos o orgulho falar mais alto que o coração
Mas se estamos aqui, se ainda sentimos
Talvez seja hora de encontrar a redenção

Eu te vejo agora, através do tempo e da dor
Ainda somos os mesmos — apenas sombras que mudaram
Se eu pudesse voltar, consertar o que se perdeu
Será que ainda ouviríamos os ecos de nós?

O tempo tentou nos apagar, mas nunca nos quebrou
As cicatrizes contam nossa história, mas não nos definem
Se ainda há algo em nós que valha a luta
Então talvez seja hora de tentar de novo

Eu te vejo agora, através do tempo e da dor
Ainda somos os mesmos — apenas sombras que mudaram
Se eu pudesse voltar, consertar o que se perdeu
Será que ainda ouviríamos os ecos de nós?`,
    ),
  },
  {
    title: 'New Dawn',
    ...withPtTranslation(
      `Today I heard words that changed everything
A new path I never thought I'd see
My heart was racing, I fell to my knees
And a prayer escaped my lips

I see the dawn breaking through the night
Filling the sky with endless light
A voice inside whispers my name
Telling me I’ll never be the same

I once feared what I could not see
But now I find hope where the darkness used to be
Time had torn me down so many times
But today I know I was never alone

I see the dawn breaking through the night
Filling the sky with endless light
A voice inside whispers my name
Telling me I’ll never be the same

I know I won’t be perfect, but I will try
Every mistake will be a step to get it right
And when the day comes, I will hold your hand
And promise that I will never let you go

I see the dawn breaking through the night
Filling the sky with endless light
A voice inside whispers my name
Telling me I’ll never be the same`,
      `Hoje ouvi palavras que mudaram tudo
Um novo caminho que nunca pensei encontrar
Meu coração disparou, caí de joelhos
E uma oração escapou dos meus lábios

Vejo o amanhecer rompendo a escuridão
Preenchendo o céu com uma luz sem fim
Uma voz dentro de mim sussurra o meu nome
Dizendo que nunca mais serei o mesmo

Já temi o que não podia ver
Mas agora encontro esperança onde antes havia escuridão
O tempo me derrubou tantas vezes
Mas hoje sei que nunca estive sozinho

Vejo o amanhecer rompendo a escuridão
Preenchendo o céu com uma luz sem fim
Uma voz dentro de mim sussurra o meu nome
Dizendo que nunca mais serei o mesmo

Sei que não serei perfeito, mas tentarei
Cada erro será um passo para acertar
E quando o dia chegar, segurarei a sua mão
E prometerei que nunca a deixarei partir

Vejo o amanhecer rompendo a escuridão
Preenchendo o céu com uma luz sem fim
Uma voz dentro de mim sussurra o meu nome
Dizendo que nunca mais serei o mesmo`,
    ),
  },
  {
    title: 'Echoes Of Redemption',
    ...withPtTranslation(
      `The weight of the night pulls me down again
Whispers of doubt echo in my mind
I stare at the sky, searching for meaning
But the stars have all faded away

Can you hear the echoes of redemption?
Calling me back from the dark
Through the pain, I find salvation
A voice inside says, "you’re not alone"

I’ve walked through fire, lost in the embers
Every step felt like falling apart
But deep inside, a spark still lingers
A silent promise, a brand-new start

Can you hear the echoes of redemption?
Calling me back from the dark
Through the pain, I find salvation
A voice inside says, "you’re not alone"

The past won’t break me, the chains fall away
Every wound has shaped who I am today
Through the silence, through the fear
I still believe, I’m still here

Can you hear the echoes of redemption?
Calling me back from the dark
Through the pain, I find salvation
A voice inside says, "you’re not alone"

"You’re not alone..."`,
      `O peso da noite me arrasta novamente
Sussurros de dúvida ecoam em minha mente
Olho para o céu, buscando sentido
Mas as estrelas já não brilham mais

Você consegue ouvir os ecos da redenção?
Chamando-me de volta da escuridão
Através da dor, encontro a salvação
Uma voz me diz: "você não está sozinho"

Andei pelo fogo, perdi-me nas brasas
Cada passo parecia desmoronar
Mas bem no fundo ainda resta uma chama
Uma promessa silenciosa de recomeçar

Você consegue ouvir os ecos da redenção?
Chamando-me de volta da escuridão
Através da dor, encontro a salvação
Uma voz me diz: "você não está sozinho"

O passado não me quebra, as correntes caem
Cada ferida moldou quem sou hoje
No silêncio, no medo
Ainda acredito — ainda estou aqui

Você consegue ouvir os ecos da redenção?
Chamando-me de volta da escuridão
Através da dor, encontro a salvação
Uma voz me diz: "você não está sozinho"

"Você não está sozinho..."`,
    ),
  },
  {
    title: 'Beyond The Flames',
    ...withPtTranslation(
      `I’ve walked through fire, I’ve felt the rain
Every step was filled with pain
But in the embers, a voice remains
Calling me beyond the flames

Have I been lost inside the storm?
Or just afraid to break the norm?

Can you take me higher, beyond the pain?
Show me a world where fear fades away
Through the fire, through the rain
I will rise, I will remain

I see the dawn break through the sky
No longer chained by endless lies
The past is gone, but I still stand
With open eyes and open hands

Have I been lost inside the storm?
Or just afraid to break the norm?

Can you take me higher, beyond the pain?
Show me a world where fear fades away
Through the fire, through the rain
I will rise, I will remain

The past won't hold me, I’ve found my way
No longer drowning in yesterday
Through every fall, through every fight
I still believe, I see the light

Can you take me higher, beyond the pain?
Show me a world where fear fades away
Through the fire, through the rain
I will rise, I will remain

"I will remain..."`,
      `Caminhei pelo fogo, senti a chuva
Cada passo foi marcado pela dor
Mas entre as cinzas, uma voz permanece
Chamando-me além das chamas

Estive perdido dentro da tempestade?
Ou apenas com medo de quebrar o padrão?

Você pode me levar mais alto, além da dor?
Me mostrar um mundo onde o medo desaparece
Através do fogo, através da chuva
Eu me erguerei, eu permanecerei

Vejo o amanhecer romper o céu
Não estou mais acorrentado a mentiras sem fim
O passado se foi, mas ainda estou de pé
Com os olhos abertos e as mãos livres

Estive perdido dentro da tempestade?
Ou apenas com medo de quebrar o padrão?

Você pode me levar mais alto, além da dor?
Me mostrar um mundo onde o medo desaparece
Através do fogo, através da chuva
Eu me erguerei, eu permanecerei

O passado não me prenderá — encontrei meu caminho
Não me afogo mais no ontem
Em cada queda, em cada luta
Ainda acredito, vejo a luz

Você pode me levar mais alto, além da dor?
Me mostrar um mundo onde o medo desaparece
Através do fogo, através da chuva
Eu me erguerei, eu permanecerei

"Eu permanecerei..."`,
    ),
  },
];
