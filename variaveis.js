const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
	media += media * 0.1;
}

console.log(`A média é ${media.toFixed(2)}`);

const salarioMensal = 3500;
const despesasFixas = 1200;
const despesasVariaveis = 500;
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + economiasMensais * 12 + bonusAnual;

console.log(resultado);

let resultado1;
resultado1 = 10 + (5 * 2) / 3 - 7 + (15 * 3) / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado1);

const notaFinal = 7;
const faltas = 3;

if (notaFinal < 7 || faltas > 4) {
	console.log("reprovado, boas festas");
} else {
	console.log("Não foi reprovado por falta");
}

const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
	console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
	console.log("Não pode dirigir.");
}

const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
	console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
	console.log("Não pode se candidatar ao emprego.");
}

const chuva1 = false;

if (!chuva1) {
	console.log("Não está chovendo. Pode sair de casa.");
} else {
	console.log("Está chovendo. Melhor ficar em casa.");
}

const estaAprovado = true;

if (estaAprovado === true) {
	console.log("aprovado");
}

if ("0" === 0) {
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação')
}

