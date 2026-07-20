/** Heretic's Fork — album lyrics (EN + PT-BR translation). */
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

export const hereticsForkTracks: BunnyAlbumTrack[] = [
  {
    title: 'No Hope Left',
    ...withPtTranslation(
      `Funny...

I spent all that time
trying to figure out
when you changed.

You didn't.

I just finally saw you.

Yeah...

Now I see you.

I gave you everything, every second, every reason,
Never saw the knife because I never saw the treason,
Every conversation was a calculated move,
Every little lie was hiding underneath the truth.

You twist it, flip it, make it look like I'm insane,
Put another bullet in the chamber of my brain,
Running in a circle while you're calling it a game,
Then you point your fucking finger like I'm the one to blame!

Wait!

Back it up!

Tell me what I missed!

Was it in your eyes?
Was it in your kiss?

Was it every time you disappeared at night?
Every time I knew that something wasn't fucking right?

I asked a question,
you started a fight,
You turned the darkness on
and told me it was light!

I caught the scent,
I saw the smoke,
I felt the fire—

But every time I found the truth
you called me a liar!

WHO'S THE LIAR NOW?!

YOU!

WHO'S THE VICTIM NOW?!

YOU!

That's what you do!
That's what you need!
Plant another lie,
then water the seed!

Make me doubt everything that I see,
Till I don't know you
and I don't know me!

You said...

"I would never hurt you."

Yeah...

I remember.

EVERY!

FUCKING!

WORD!

FALSE FACE!

I SEE YOU NOW!

NO MASK!

NO WAY OUT!

FALSE FACE!

SCREAM MY NAME!

YOU BROKE THE TRUST—

NOW TAKE THE BLAME!

FALSE FACE!

FALSE LOVE!

FALSE WORDS!

I'VE HAD ENOUGH!

FALSE!
FALSE!
FALSE!

FACE!

You had me walking through a maze that you designed,
Moving every wall whenever I got close behind,
Changing every story every single fucking time,
Then acting so offended when I questioned every line.

You said I'm paranoid!
You said I'm insecure!
You said I had a problem
and you couldn't take it anymore!

That's funny!

Really fucking funny!

'Cause the truth came out
and suddenly you're sorry!

Now you're crying,
now you're shaking,
now you're telling me you're breaking,
Now the consequences hit
and suddenly your heart is aching.

Where was that heart
when you looked into my eyes?

Where was that pain
when you manufactured lies?

Where was your conscience
when I couldn't fucking sleep?

While you were burying the truth
and watching me dig deep!

Dig.

Dig.

Dig.

Keep digging.

Maybe underneath another lie
I'll find the woman
I thought I knew.

She's not there.

SHE WAS NEVER FUCKING THERE!

So let me get this straight,
you want forgiveness now?

You want me to forget
because you're feeling guilty now?

You want another chance
because the walls are closing in?

You didn't give a fuck
when you thought that you would win!

Now suddenly it's—

"I'm sorry!"

Suddenly it's—

"I was wrong!"

Suddenly you found a fucking conscience
after all!

No!

Keep it!

Save it!

Take your apology and frame it!

Put it next to every other lie
and find another fucking name for it!

You call it a mistake?

A mistake happens once!

You made a fucking choice
every time you covered up!

Every message!
Every secret!
Every moment you deleted!

Every time I asked the question
and you made me feel defeated!

THAT!

WAS!

A!

CHOICE!

Not a mistake.

FALSE FACE!

I SEE YOU NOW!

NO MASK!

NO WAY OUT!

FALSE FACE!

SCREAM MY NAME!

YOU BROKE THE TRUST—

NOW TAKE THE BLAME!

FALSE FACE!

FALSE LOVE!

FALSE WORDS!

I'VE HAD ENOUGH!

FALSE!
FALSE!
FALSE!

FACE!

You want to know
what really hurts?

It isn't losing you.

It's realizing...

I never had you.

Not the real you.

I loved the version
you created for me.

The smile.

The words.

The promises.

The person
who never existed.

And somehow...

I'm supposed to mourn
someone who was never alive.

Tell me...

How the fuck
do you bury a ghost?

YOU!

NEVER!

EXISTED!

NEVER!

EVERY PROMISE!

NEVER!

EVERY KISS!

NEVER!

EVERY TIME YOU SAID
THAT I WAS EVERYTHING!

LIES!`,
      `SEM NENHUMA ESPERANÇA

Engraçado...

Passei todo aquele tempo
tentando descobrir
quando você mudou.

Você não mudou.

Eu apenas finalmente enxerguei você.

É...

Agora eu vejo você.

Eu te dei tudo, cada segundo, cada motivo,
Nunca vi a faca porque nunca percebi a traição,
Cada conversa era um movimento calculado,
Cada pequena mentira se escondia por baixo da verdade.

Você distorce, vira tudo, faz parecer que eu sou louco,
Coloca outra bala na câmara da minha mente,
Correndo em círculos enquanto você chama isso de jogo,
E então aponta a porra do dedo pra mim como se eu fosse o culpado!

Espera!

Volta!

Me diz o que eu não percebi!

Estava nos seus olhos?
Estava no seu beijo?

Foi em cada vez que você desaparecia à noite?
Em cada vez que eu sabia que alguma porra não estava certa?

Eu fazia uma pergunta,
você começava uma briga,
Você acendia a escuridão
e me dizia que aquilo era luz!

Eu senti o cheiro,
eu vi a fumaça,
eu senti o fogo—

Mas toda vez que eu encontrava a verdade
você me chamava de mentiroso!

QUEM É O MENTIROSO AGORA?!

VOCÊ!

QUEM É A VÍTIMA AGORA?!

VOCÊ!

É isso que você faz!
É disso que você precisa!
Planta outra mentira,
depois rega a semente!

Me faz duvidar de tudo o que eu vejo,
Até eu não conhecer mais você
e não conhecer mais a mim mesmo!

Você disse...

"Eu nunca machucaria você."

É...

Eu me lembro.

DE!

CADA!

MALDITA!

PALAVRA!

FALSA FACE!

AGORA EU VEJO VOCÊ!

SEM MÁSCARA!

SEM SAÍDA!

FALSA FACE!

GRITE O MEU NOME!

VOCÊ QUEBROU A CONFIANÇA—

AGORA ASSUMA A CULPA!

FALSA FACE!

FALSO AMOR!

FALSAS PALAVRAS!

EU JÁ TIVE O BASTANTE!

FALSA!
FALSA!
FALSA!

FACE!

Você me fez caminhar por um labirinto que você mesma criou,
Movendo cada parede sempre que eu chegava perto,
Mudando cada história toda maldita vez,
E então agindo como se estivesse ofendida quando eu questionava cada palavra.

Você disse que eu era paranoico!
Você disse que eu era inseguro!
Você disse que eu tinha um problema
e que não aguentava mais!

Isso é engraçado!

Engraçado pra caralho!

Porque a verdade apareceu
e de repente você está arrependida!

Agora você está chorando,
agora você está tremendo,
agora você diz que está desmoronando,
Agora as consequências chegaram
e de repente seu coração está doendo.

Onde estava esse coração
quando você olhava nos meus olhos?

Onde estava essa dor
quando você fabricava mentiras?

Onde estava sua consciência
quando eu não conseguia dormir?

Enquanto você enterrava a verdade
e me observava cavar cada vez mais fundo!

Cave.

Cave.

Cave.

Continue cavando.

Talvez debaixo de outra mentira
eu encontre a mulher
que pensei conhecer.

Ela não está lá.

ELA NUNCA ESTEVE LÁ, PORRA!

Então deixa eu ver se entendi,
agora você quer perdão?

Quer que eu esqueça
porque agora está se sentindo culpada?

Quer outra chance
porque as paredes estão se fechando ao seu redor?

Você não dava a mínima
quando achava que iria vencer!

Agora, de repente, é—

"Me desculpe!"

De repente é—

"Eu estava errada!"

De repente você encontrou a porra de uma consciência
depois de tudo!

Não!

Fique com ela!

Guarde!

Pegue seu pedido de desculpas e coloque numa moldura!

Coloque ao lado de todas as outras mentiras
e encontre outro maldito nome para isso!

Você chama isso de erro?

Um erro acontece uma vez!

Você fez uma maldita escolha
toda vez que tentou esconder!

Cada mensagem!
Cada segredo!
Cada momento que você apagou!

Cada vez que eu fazia uma pergunta
e você me fazia sentir derrotado!

ISSO!

FOI!

UMA!

ESCOLHA!

Não um erro.

FALSA FACE!

AGORA EU VEJO VOCÊ!

SEM MÁSCARA!

SEM SAÍDA!

FALSA FACE!

GRITE O MEU NOME!

VOCÊ QUEBROU A CONFIANÇA—

AGORA ASSUMA A CULPA!

FALSA FACE!

FALSO AMOR!

FALSAS PALAVRAS!

EU JÁ TIVE O BASTANTE!

FALSA!
FALSA!
FALSA!

FACE!

Quer saber
o que realmente dói?

Não é perder você.

É perceber...

Que eu nunca tive você.

Não a verdadeira você.

Eu amei a versão
que você criou para mim.

O sorriso.

As palavras.

As promessas.

A pessoa
que nunca existiu.

E de alguma forma...

Eu deveria lamentar
por alguém que nunca esteve viva.

Me diga...

Como caralhos
você enterra um fantasma?

VOCÊ!

NUNCA!

EXISTIU!

NUNCA!

CADA PROMESSA!

NUNCA!

CADA BEIJO!

NUNCA!

CADA VEZ QUE VOCÊ DISSE
QUE EU ERA TUDO!

MENTIRAS!`,
    ),
  },
];
