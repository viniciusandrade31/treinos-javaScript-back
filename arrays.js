//Pode guardar varios elementos em uma so variavel (lista ordenada)
const numeros = [50, 43, 12];

const notas = [10, 6.5, 8, 7.5];

const media5 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media5);

const notaAluno = [10, 6, 8];

notaAluno.push(7);
console.log(notaAluno);

const media2 = (notaAluno[0] + notaAluno[1] + notaAluno[2] + notaAluno[3]) / notaAluno.length;

console.log(media2);

const frutas = ["maçã", "banana", "pera", "melancia", "salada"];

frutas.pop();
console.log(frutas)

const arrayEsparso = [];

arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

console.log(arrayEsparso);
console.log(arrayEsparso.length);

let meuArray = [10, 20, 30, 40, 50];

console.log("Array antes da alteração: ", meuArray);

meuArray[0] = 5;
console.log("Array depois da alteração: ", meuArray);

const meuArray2 = [];
meuArray2.push(5);
meuArray2.push(10);
meuArray2.push(15);

console.log("Itens no array meuArray:", meuArray2);

meuArray2[0] = meuArray2[0] * 2;
console.log("Array após a atualização do primeiro elemento:", meuArray2);

let meuArray3 = [];

meuArray3.push(10);
meuArray3.push(20);
meuArray3.push(30);
console.log("Array resultante: ", meuArray3);

const clinica = [];

clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

console.log("Fila de animais após a chegada: ", clinica);

clinica.pop();
clinica.pop();
clinica.pop();
console.log("Fila de animais aguardando: ", clinica);

const listaEstudantes = [
	"Carla Alessandra",
	"Vinícius",
	"João",
	"Juliana",
	"Ana",
	"Caio",
	"Lara",
	"Marjorie",
	"Guilherme",
	"Aline",
	"Fabiana",
	"André",
	"Carlos",
	"Paulo",
	"Bia",
	"Vivian",
	"Isabela",
	"Renan",
	"Renata",
	"Daisy",
	"Camilo",
];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);

console.log(sala1);
console.log(sala2);

const listaEstudantes2 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

listaEstudantes2.splice(1, 2, "Rodrigo");

console.log(listaEstudantes2);

const salaJs = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJs.concat(salaPython);
console.log(salasUnificadas)

const alunos3 = ["João", "Juliana", "Caio", "Ana"];
const medias3 = [10, 8, 7.5, 9];

const lista3 = [alunos3, medias3];
console.log(`A aluna da posição 1 da lista é: ${lista3[0][1]}.
A nota dessa aluna é ${lista3[1][1]}.`);

function exibeNomeENota(aluno) {
	if (lista3[0].includes(aluno)) {
        const [alunos3, medias3] = lista3;
		const indice = alunos3.indexOf(aluno);
		const mediaAluno = medias3[indice];
		console.log(`${aluno} tem a média ${mediaAluno}`);
	} else {
console.log(`${aluno} não existe na lista`);
	}
}

exibeNomeENota("Juliana");
exibeNomeENota("Vini");

const notasMinha = [10, 8.5, 5, 6.5, 8, 7.5];
for (let indice = 0; indice < notasMinha.length; indice++) {
	console.log(indice, notasMinha[indice]);
}

let somaMinhasNotas = 0;
for (let i = 0; i < notasMinha.length; i++) {
	somaMinhasNotas += notasMinha[i];
}

for (let nota of notasMinha) {
   somaMinhasNotas += nota;
}

const media =(somaMinhasNotas / notasMinha.length);
console.log(`A média das notas é ${media.toFixed(2)}`);

