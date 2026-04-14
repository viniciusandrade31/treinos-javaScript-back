const notas = [10, 6.5, 8, 7.5];

let somasDasNotas = 0;

notas.forEach(function (nota) {
	somasDasNotas += nota;
});

const media = somasDasNotas / notas.length;
console.log(`A média das notas é ${media}`);

// const notasAtualizadas = notas.map(function (nota) {
// 	return nota + 1;
// });

// console.log(notasAtualizadas);

const notasAtualizadas = notas.map((nota) => (nota + 1 >= 10 ? 10 : nota + 1));
console.log(notasAtualizadas);

const nomes = ["ana Julia", "Caio vinícius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesPadronizados);

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
	nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas);

const listaProdutos = [
	"pôster A4",
	"pôster A5",
	"camiseta lisa",
	"camiseta estampada",
	"pin de metal",
	"cartela de adesivos",
];

const listaAtualizada = listaProdutos.map((produto) => {
	return `${produto} - unidade`;
});

console.log(listaAtualizada);

//For Each so executa não guarda a informação
const numeros = [1, 2, 3];

numeros.forEach((n) => {
	console.log(n * 2);
});

//Map novo array transformado
const numeros2 = [1, 2, 3];

const dobrados = numeros2.map((n) => n * 2);

console.log(dobrados);

const numeros4 = [2, 4, 6, 8];
let soma = 0;

numeros4.forEach((numero) => {
	soma += numero;
});

console.log("A soma dos números é:", soma);

const arrayNums = [1, 2, 3, 4];
const multi = arrayNums.map((numero) => numero * 10);
console.log(multi);

const musicas = ["Doze judas", "Meu Amor", "Julho de 64", "Jurei/Odin", "ABC Vaqueijada"];
musicas.forEach((cantos, i) => {
	console.log(`${cantos} - indice[${i}]`);
});

const frutas = ["Laranja", "Maçã", "Banana", "Ovo"];
frutas.pop();
console.log(frutas);

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todosAlunos.find(nome => nome === 'Ana Souza');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}

const numeros5 = [6, 9, 12, 15, 18, 21];

console.log('Elementos do array multiplicados por 3:');

numeros5.forEach(numero => {
  const resultado = numero * 3;
  console.log(resultado);
});

const indiceDoNumero18 = numeros5.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}

const amigos = ["Pedro", "Barbosa", "Katchaw", "Domingos", "Renato", "Tonho"];
const notasMedia = [10, 5, 6, 7, 9, 3];

const reprovados = amigos.filter((_, indice) => {
	return notasMedia[indice] < 7;
});

console.log(reprovados);

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
	const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

	const media = somaDasNotas / listaDeNotas.length;
	return media;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

const valoresNum = [7, 7, 8, 9];
const novosValores = [...valoresNum, 10];
console.log(valoresNum)
console.log(novosValores)

const listaChamada = ["Ana", "Clara", "Carla", "Carla", "Vinícius", "Vinícius", "Pedro", "Aguiar"];
//array like, parece mas não é
const nomesAtualizados = new Set(listaChamada);
console.log(nomesAtualizados)