const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "Como um torcedor pode afetar uma estação de trem inteira por causa de uma aposta errada?",
alternativas: [
"Fazer com que o ambiente seja mais perigoso e violento, podendo resultar em feridos e até óbitos.",
"Pode quebrar uma coisa ou outra da estação, mas logo pode ser contido e preso pela polícia."
]
},
{
enunciado: "Como as apostas esportivas podem influenciar na taxa de violência urbana em transportes públicos?",
alternativas: [
"Algumas apostas esportivas são associadas a organizações ou grupos que podem promover ou tolerar comportamentos violentos. ",
"Áreas onde há muitos locais para apostas esportivas podem ter uma concentração maior de pessoas envolvidas em apostas, o que pode aumentar a tensão e, potencialmente, a violência, incluindo transportes públicos.",
]
},
{
enunciado: "Que medidas de segurança devem ser tomadas contra brigas de torcedores em relação a população que utiliza os transportes públicos?",
alternativas: [
"No ingresso deve ser cobrado uma taxa adicional referente a um frete de ônibus, assim após o final da partida os torcedores serão direcionados aos seus respectivos transportes, evitando conflitos.",
"Outra medida de para combater a violência é que um agente de segurança acompanhem os torcedores nos transportes públicos/privados para que a deslocação seja feita de forma pacífica."
]
},
{
enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
alternativas: [
"Criar uma imagem utilizando uma plataforma de design como o Paint.",
"Criar uma imagem utilizando um gerador de imagem de IA."
]
},
{
enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
alternativas: [
"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}

function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa;
caixaAlternativas.appendChild(botaoAlternativas);
}
}

mostraPergunta();