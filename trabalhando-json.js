const estudante = require("./estudante.json");
const estudantes = require("./estudantes.json");

console.log(estudante)
console.log(typeof estudante)

const chaves = Object.keys(estudante);
console.log(chaves)

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante)
console.log(typeof stringEstudante)

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante)

function buscaInformacao(lista, chave, valor) {
	return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, "nome", "Juliet");
console.log(estudanteEncontrado);

const estudanteTelefone = buscaInformacao(estudantes, "telefone", "1918820860");
console.log(estudanteTelefone);

function filtraPorPropriedade(lista, propriedade) {
	return lista.filter((estudante) => {
		return !estudante.endereco.hasOwnProperty(propriedade);
	})
}

const listaEnderecosImcompletos = filtraPorPropriedade(estudantes, 'cep');
console.log("Ceps não encontrados:")
console.log(listaEnderecosImcompletos)

function ordena(lista, propriedade) {
	return lista.sort((a, b) => {
		if (a[propriedade] < b[propriedade]) return -1;
		if (a[propriedade] > b[propriedade]) return 1;
		return 0;
	})
}

const listaOrdenada = ordena(estudantes, 'nome')
console.log(listaOrdenada)
