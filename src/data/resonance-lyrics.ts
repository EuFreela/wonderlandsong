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
      `Me arrastei pelas sombras, acorrentado no chão
Cada erro marcado bem fundo em mim
Mas o tempo não espera, não dá pra voltar
Chegou a hora — eu preciso me erguer

Dá pra sentir o medo se desmanchando
O peso das correntes caindo no chão

Queimando a dor, eu renasço das cinzas
O passado se foi, não me segura mais
Nada me para, tô finalmente livre
Agora eu vejo — sou mais forte assim

Caminhei entre ruínas, perdido em mim mesmo
Cada cicatriz, mais uma lição pra contar
Mas a luz brilha forte, me chamando de volta
Não tem volta — agora é tudo ou nada

Dá pra sentir o medo se desmanchando
O peso das correntes caindo no chão

Queimando a dor, eu renasço das cinzas
O passado se foi, não me segura mais
Nada me para, tô finalmente livre
Agora eu vejo — sou mais forte assim

O tempo passou, não tem mais prisão
Ecos gritam na escuridão
Mas eu vou me erguer, eu vou ficar
Eu sou o fogo — eu não vou sumir!

Queimando a dor, eu renasço das cinzas
O passado se foi, não me segura mais
Nada me para, tô finalmente livre
Agora eu vejo — sou mais forte assim

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
      `Sinto o peso esmagando em cima de mim
Cada passo fica mais difícil de acreditar
Perdido nos ecos dos meus erros do passado
Me afogando nas palavras que eu não aguentei

Mas eu não vou deixar isso me destruir
Já estive perto do abismo antes

Esse é o meu ponto de ruptura — não vou cair de novo
Já passei pelo fogo, já senti toda a dor
Mas agora eu tô mais forte, não vou ter medo
Dessa vez eu luto de volta, eu não vou quebrar

Cada cicatriz conta uma história que eu não apago
Lutando contra as vozes que não param de vir
Elas me puxam pro fundo, mas eu não vou me afogar
Vou achar a luz, vou ficar de pé

Mas eu não vou deixar isso me destruir
Já estive perto do abismo antes

Esse é o meu ponto de ruptura — não vou cair de novo
Já passei pelo fogo, já senti toda a dor
Mas agora eu tô mais forte, não vou ter medo
Dessa vez eu luto de volta, eu não vou quebrar

Já me perdi mil vezes
Mas eu vou me erguer, vou pegar o que é meu
Sem mais fuga, sem mais medo
Eu fico de pé — ainda tô aqui

Esse é o meu ponto de ruptura — não vou cair de novo
Já passei pelo fogo, já senti toda a dor
Mas agora eu tô mais forte, não vou ter medo
Dessa vez eu luto de volta, eu não vou quebrar

Não, eu não vou quebrar...`,
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
      `O tempo parou, as paredes tão se fechando
O silêncio chama pelo meu nome
Preso em memórias que nunca se apagam
Carregando o peso de tudo o que eu sou

Sinto o frio correndo nas veias
Cada erro esculpido na pele
A luz se apagou, as sombras me cercam
Sou só um eco dentro de mim
Os rostos que eu amei viraram fantasma
Olhos vazios cheios de desprezo
Tentei correr, mas não tem fuga
Meu destino tá selado no escuro incerto

E se não tiver redenção pra mim?
Se a minha voz for engolida pelo vento?
O tempo é um carcereiro impiedoso
E eu sou prisioneiro do que eu virei

Eu construí essa prisão com as minhas próprias mãos
As correntes apertam, não tem piedade
Se tudo que sobra é o peso da dor
O que me espera além das chamas?

Minhas preces se perdem num céu vazio
O vazio responde e me arrasta de volta

E se não tiver redenção pra mim?
Se a minha voz for engolida pelo vento?

Eu construí essa prisão com as minhas próprias mãos
As correntes apertam, não tem piedade
Se tudo que sobra é o peso da dor
O que me espera além das chamas?

Os dias se arrastam como correntes pesadas
O sol não toca essa jaula congelada
Se tem esperança, onde ela tá agora?
Se tem redenção, por que eu ainda sangro?

Eu construí essa prisão com as minhas próprias mãos
As correntes apertam, não tem piedade
Se tudo que sobra é o peso da dor
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

2x
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
      `Sinto a ferrugem se espalhando sob a pele
Cada cicatriz é uma história que eu não apago
O espelho reflete um estranho me encarando
Um casco vazio, perdido no tempo e no espaço
Os dias pesam como correntes de ferro
Me segurando, me puxando pra trás
Um fantasma sem nome, sem pra onde ir
Esperando uma mão que nunca vem

E se eu sumir no silêncio?
Se eu virar poeira no vento?
A ferrugem afunda nos meus ossos
Não sobra nada além do eco dentro de mim

A cada dia me levam mais longe
Cada sombra sussurra o meu nome

E se eu sumir no silêncio?
Se eu virar poeira no vento?

Tô desmoronando, desgastado pelo tempo
A ferrugem come tudo o que eu fui
As sombras me puxam pra um abismo sem nome
E a luz que eu tinha se perdeu no mar

O tempo devora tudo o que toca
E eu sou só mais uma cicatriz

2x
E se eu sumir no silêncio?
Se eu virar poeira no vento?

Tô desmoronando, desgastado pelo tempo
A ferrugem come tudo o que eu fui
As sombras me puxam pra um abismo sem nome
E a luz que eu tinha se perdeu no mar

Nada para as mãos do tempo
Ele consome, quebra, apaga
Cada memória, cada promessa
Sumindo num piscar de olhos

Tô desmoronando, desgastado pelo tempo
A ferrugem come tudo o que eu fui
As sombras me puxam pra um abismo sem nome
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
Marcado pelo passado que ela costumava conhecer
Os sonhos que guardava viraram ruína
E agora as cicatrizes contam o que a memória apagou

Se ela pudesse voltar e refazer os passos
Se pudesse sentir sem medo de cair
Mas a vida é escrita em linhas quebradas
E ninguém ensinou como reconstruir

Mas o passado não pode definir
Se tem um amanhã, ela precisa seguir
Mesmo que a dor faça ela hesitar
As cicatrizes do amanhã vão lembrar

Ela caminha entre sombras e ecos
Sente os fantasmas do tempo chamando o nome dela

Se ela pudesse voltar e refazer os passos
Se pudesse sentir sem medo de cair

Mas o passado não pode definir
Se tem um amanhã, ela precisa seguir
Mesmo que a dor faça ela hesitar
As cicatrizes do amanhã vão lembrar

As vozes da dúvida sussurram no ouvido
Que é mais fácil ficar do que recomeçar
Mas a vida pulsa além das feridas
E talvez algo espere no fim da estrada

Mas o passado não pode definir
Se tem um amanhã, ela precisa seguir
Mesmo que a dor faça ela hesitar
As cicatrizes do amanhã vão lembrar`,
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
      `Você se agarrou na mentira por tempo demais
Cada palavra afiada como lâmina fria
O castelo que você construiu começa a ruir
Mas você prefere fechar os olhos

Cada queda foi uma escolha sua
Cada ferida, um ciclo que se repete
Você sangra e chama de redenção
Mas só afunda ainda mais

Se tudo tá desmoronando
Por que você ainda se recusa a sair?

Você é viciado na dor, não sabe escapar
Sempre volta pro que te faz quebrar
Nada te salva, porque você não muda
Prefere se perder do que quebrar essas correntes

Você veste as cicatrizes como troféu
Como se o mundo precisasse ver
Mas ninguém te tira daqui
Se você mesmo não quiser se libertar

Se tudo tá desmoronando
Por que você ainda se recusa a sair?

Você é viciado na dor, não sabe escapar
Sempre volta pro que te faz quebrar
Nada te salva, porque você não muda
Prefere se perder do que quebrar essas correntes

As correntes que você não vê
São as mesmas que te seguram aqui
O que mais você precisa perder
Pra admitir que é hora de sumir?

Você é viciado na dor, não sabe escapar
Sempre volta pro que te faz quebrar
Nada te salva, porque você não muda
Prefere se perder do que quebrar essas correntes`,
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
      `Os quadros na parede ainda contam as histórias
De dias que pareciam nunca sumir
Mas o tempo pintou rachaduras na memória
E agora só restam sombras

Tentei apagar os nomes no vidro
Mas o frio sempre traz eles de volta
O que sobra quando o passado é tudo o que você tem?

Ecos que restaram gritam na noite
Sussurram promessas que eu nunca cumpri
Eu corro, mas tudo volta pra mim
Sou só o reflexo do que eu já perdi

As ruas parecem iguais, mas algo mudou
Não reconheço os lugares que um dia chamei de lar
Cada porta fechada soa como aviso
De que não tem caminho de volta pra onde eu pertenço

Ecos que restaram gritam na noite
Sussurram promessas que eu nunca cumpri
Eu corro, mas tudo volta pra mim
Sou só o reflexo do que eu já perdi

Se tudo o que eu tenho são memórias que doem
O que acontece se eu esquecer?
Se eu sou só um nome perdido no vento
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
      `A gente ouve as promessas que nunca nos alcançam
Vende verdades que nunca chegam
A justiça se esconde atrás dos muros
Enquanto a esperança se apaga no escuro

Os gritos são pagos pra ficar calados
A verdade enterrada sob mentiras frias
Palácios se erguem em cima da miséria
E eles chamam isso de evolução

Mas se a gente ficar junto, a gente fica mais forte
Se der as mãos, ninguém nos derruba

Fala agora, não deixa calarem a sua voz
Somos muitos, não vamos ser controlados
O silêncio nunca trouxe libertação
Seja a força que quebra as correntes

Eles compram o medo pra nos manter cegos
Desviam o caminho pra a gente não ver
Mas a verdade ainda queima dentro de nós
E as mãos deles nunca vão apagar

Mas se a gente ficar junto, a gente fica mais forte
Se der as mãos, ninguém nos derruba

Fala agora, não deixa calarem a sua voz
Somos muitos, não vamos ser controlados
O silêncio nunca trouxe libertação
Seja a força que quebra as correntes

Quantos mais precisam cair pra enxergarem?
Quantos gritos são afogados pela ganância?
Se o preço do silêncio for a sua liberdade
O que sobra além do escuro?

Fala agora, não deixa calarem a sua voz
Somos muitos, não vamos ser controlados
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
Olho pra trás e vejo as sombras
Mas a luz parece tão longe agora
O chão tá se partindo sob os meus pés
Cada erro volta pra me assombrar
Eu continuo correndo, mas a estrada some
Ainda tem um caminho pra voltar?

O tempo me julga, me forçando a enxergar
Mas será tarde demais pra me libertar?

À beira do abismo, tentando segurar
Mas o vento me empurra, eu não consigo parar
Se tem caminho de volta, me mostra agora
Ou me deixa cair sem olhar pra trás

Ecos do passado continuam chamando meu nome
Cada cicatriz, um lembrete cruel
Se eu pudesse mudar tudo o que eu fiz
Eu ainda seria o mesmo?

O tempo me julga, me forçando a enxergar
Mas será tarde demais pra me libertar?

À beira do abismo, tentando segurar
Mas o vento me empurra, eu não consigo parar
Se tem caminho de volta, me mostra agora
Ou me deixa cair sem olhar pra trás

Ecos do passado continuam chamando meu nome
Cada cicatriz, um lembrete cruel
Se eu pudesse mudar tudo o que eu fiz
Eu ainda seria o mesmo?

E se tudo isso for só um teste?
E se o medo for só ilusão?
Talvez eu precise cair
Pra aprender a me levantar de novo

À beira do abismo, tentando segurar
Mas o vento me empurra, eu não consigo parar
Se tem caminho de volta, me mostra agora
Ou me deixa cair sem olhar pra trás
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
Cada pensamento me puxa pra baixo
Eu continuo correndo, mas não tem escapatória
O passado não vai me soltar dessa vez

Mentiras foram a única coisa que sobrou
Promessas quebradas ecoam no vazio
Se tem um jeito de quebrar essas correntes
Então por que eu continuo voltando pra cá?

Eu tentei escapar, mas o ciclo nunca termina
Se isso é tudo o que sobrou, então me diz...

Não tem mais volta, tô preso aqui
O tempo roubou tudo o que eu ainda tinha
Se tem uma saída, eu não consigo ver
Ou eu tô cego demais pra entender?

Cada escolha me trouxe a esse lugar
Cada erro queimado fundo nas cicatrizes
Olho no espelho, mas não tem mais nada
Só sombras do que um dia eu fui

Eu tentei escapar, mas o ciclo nunca termina
Se isso é tudo o que sobrou, então me diz...

Não tem mais volta, tô preso aqui
O tempo roubou tudo o que eu ainda tinha
Se tem uma saída, eu não consigo ver
Ou eu tô cego demais pra entender?

Quanto tempo ainda até eu quebrar?
Quanto tempo ainda até eu sumir?
Se a redenção for só mais uma mentira
Então que me levem embora!

Não tem mais volta, tô preso aqui
O tempo roubou tudo o que eu ainda tinha
Se tem uma saída, eu não consigo ver
Ou eu tô cego demais pra entender?`,
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
      `A gente era jovem, sem medo de cair
Corria contra o tempo, sem olhar pra trás
Mas os dias passaram, as vozes se calaram
E o que restou foi o silêncio entre a gente

Eu te vejo agora, através do tempo e da dor
Ainda somos os mesmos — só sombras que mudaram
Se eu pudesse voltar, consertar o que se perdeu
Será que a gente ainda ouviria os ecos de nós?

A gente ouviu promessas que nunca cumpriu
Deixou o orgulho falar mais alto que o coração
Mas se a gente tá aqui, se ainda sente
Talvez seja hora de achar redenção

Eu te vejo agora, através do tempo e da dor
Ainda somos os mesmos — só sombras que mudaram
Se eu pudesse voltar, consertar o que se perdeu
Será que a gente ainda ouviria os ecos de nós?

O tempo tentou apagar, mas nunca nos quebrou
As cicatrizes contam a história, mas não definem a gente
Se ainda tem algo em nós que valha a luta
Então talvez seja hora de tentar de novo

Eu te vejo agora, através do tempo e da dor
Ainda somos os mesmos — só sombras que mudaram
Se eu pudesse voltar, consertar o que se perdeu
Será que a gente ainda ouviria os ecos de nós?`,
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
      `Hoje eu ouvi palavras que mudaram tudo
Um caminho novo que eu nunca pensei encontrar
O coração disparou, caí de joelhos
E uma oração escapou dos lábios

Vejo o amanhecer rompendo a escuridão
Preenchendo o céu com uma luz sem fim
Uma voz dentro de mim sussurra meu nome
Dizendo que eu nunca mais vou ser o mesmo

Eu já temi o que não podia ver
Mas agora acho esperança onde antes era só escuridão
O tempo me derrubou tantas vezes
Mas hoje eu sei que nunca estive sozinho

Vejo o amanhecer rompendo a escuridão
Preenchendo o céu com uma luz sem fim
Uma voz dentro de mim sussurra meu nome
Dizendo que eu nunca mais vou ser o mesmo

Sei que não vou ser perfeito, mas eu vou tentar
Cada erro vai ser um passo pra acertar
E quando o dia chegar, eu seguro a sua mão
E prometo que nunca vou te deixar partir

Vejo o amanhecer rompendo a escuridão
Preenchendo o céu com uma luz sem fim
Uma voz dentro de mim sussurra meu nome
Dizendo que eu nunca mais vou ser o mesmo`,
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
      `O peso da noite me arrasta de novo
Sussurros de dúvida ecoam na mente
Olho pro céu, procurando sentido
Mas as estrelas já não brilham mais

Você consegue ouvir os ecos da redenção?
Me chamando de volta da escuridão
Através da dor, eu encontro salvação
Uma voz me diz: "você não tá sozinho"

Andei pelo fogo, me perdi nas brasas
Cada passo parecia ruir
Mas bem no fundo ainda resta uma chama
Uma promessa quieta de recomeçar

Você consegue ouvir os ecos da redenção?
Me chamando de volta da escuridão
Através da dor, eu encontro salvação
Uma voz me diz: "você não tá sozinho"

O passado não me quebra, as correntes caem
Cada ferida moldou quem eu sou hoje
No silêncio, no medo
Eu ainda acredito — eu ainda tô aqui

Você consegue ouvir os ecos da redenção?
Me chamando de volta da escuridão
Através da dor, eu encontro salvação
Uma voz me diz: "você não tá sozinho"

"Você não tá sozinho..."`,
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
      `Eu caminhei pelo fogo, senti a chuva
Cada passo marcado pela dor
Mas entre as cinzas, uma voz permanece
Me chamando além das chamas

Eu tava perdido dentro da tempestade?
Ou só com medo de quebrar o padrão?

Você consegue me levar mais alto, além da dor?
Me mostrar um mundo onde o medo some
Através do fogo, através da chuva
Eu me ergo — eu permaneço

Vejo o amanhecer romper o céu
Não tô mais preso em mentiras sem fim
O passado se foi, mas eu ainda tô de pé
Com os olhos abertos e as mãos livres

Eu tava perdido dentro da tempestade?
Ou só com medo de quebrar o padrão?

Você consegue me levar mais alto, além da dor?
Me mostrar um mundo onde o medo some
Através do fogo, através da chuva
Eu me ergo — eu permaneço

O passado não me segura — achei meu caminho
Não tô mais me afogando no ontem
Em cada queda, em cada luta
Ainda acredito, eu vejo a luz

Você consegue me levar mais alto, além da dor?
Me mostrar um mundo onde o medo some
Através do fogo, através da chuva
Eu me ergo — eu permaneço

"Eu permaneço..."`,
    ),
  },
];
