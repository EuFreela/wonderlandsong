import fs from 'fs';

const path = 'src/data/blm-chapter4-lyrics.ts';

const translations = {
  'Spirit That Won’t Fall': `O que você vai segurar quando a noite ficar vazia?
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

  'I’ve Been You': `Você está aqui agora
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

  'Not Yet': `Você entregou seu coração antes de ele saber quem era
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

  'When The Room Goes Quiet': `Você se senta onde o barulho desiste
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

  'Rooms Without Windows': `A cidade fala
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

  'Let Go Of The Weight': `O que você vai escolher quando a dor falar mais alto?
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

  "It Doesn’t Mean You Don’t Belong": `Você sente o ambiente antes de entrar
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

  'When You Feel Alone': `Por que o quarto parece mais barulhento
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

  'Where Nothing Dies': `Venha comigo
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

  'Nights You Cry': `Para onde vão as lágrimas
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
};

function escapeTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

let src = fs.readFileSync(path, 'utf8');

// Update note + title
src = src.replace(
  /const chapter4LyricsNote =\n  '[^']*';/,
  `const chapter4LyricsNote =\n  'Letra original em inglês à esquerda; tradução em português à direita. Chapter 4 · Listen To Daddy — Bunny Land Music.';`,
);
src = src.replace(
  "title: 'Tradução e contexto'",
  "title: 'Tradução'",
);

const updated = [];
const missing = [];

// Match each track(...) block: track( 'Title', `lyrics`, `translation`, ),
// Titles may contain curly apostrophes
const trackRe =
  /track\(\s*'((?:\\'|[^'])*)'\s*,\s*`([\s\S]*?)`\s*,\s*`([\s\S]*?)`\s*,?\s*\)/g;

src = src.replace(trackRe, (full, title, lyrics) => {
  const tr = translations[title];
  if (!tr) {
    missing.push(title);
    return full;
  }
  updated.push(title);
  return `track(\n    '${title}',\n    \`${lyrics}\`,\n    \`${escapeTemplate(tr)}\`,\n  )`;
});

fs.writeFileSync(path, src);
console.log('Updated:', updated.length, updated);
console.log('Missing/unchanged in map:', missing);
console.log('Map keys:', Object.keys(translations));
