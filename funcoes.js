function exibeNomeEstudante(nome) {
	console.log(nome);
}

exibeNomeEstudante("Carla");
exibeNomeEstudante("Alessandra");

function exibeInfosEstudantes(nome, nota) {
	return `O nome é ${nome} e a nota é ${nota}`;
}

console.log(exibeInfosEstudantes("Carla", 10));

function somarDoisNumeros(numA, numB) {
	return numA + numB;
}

console.log(somarDoisNumeros(2, 2));

function dividir(dividendo, divisor) {
	return dividendo / divisor;
}

const resultado = dividir(10, 2);
console.log(`o resultado é ${resultado}`);

const estudanteReprovou = function (notaFinal, faltas) {
	if (notaFinal < 7 && faltas > 4) {
		return true;
	} else {
		return false;
	}
};

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

function calculaProduto(a, b = 2, c = 1) {
	return a * b * c;
}

const result1 = calculaProduto(3);
const result2 = calculaProduto(2, 4);
const result3 = calculaProduto(1, 2, 3);
const result4 = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", result1);
console.log("Resultado 2:", result2);
console.log("Resultado 3:", result3);
console.log("Resultado 4:", result4);

const exibeNome = (nome) => nome;

console.log(exibeNome("Carla"));

const calculadoraSimples = (a, b, operacao) => {
	if (operacao === "soma") {
		return a + b;
	} else if (operacao === "subtracao") {
		return a - b;
	} else if (operacao === "multiplicacao") {
		return a * b;
	} else if (operacao === "divisao") {
		return a / b;
	} else {
		return "Operação não reconhecida";
	}
};

console.log(calculadoraSimples(2, 3, "multiplicacao"));
