const estudante = {
	nome: "José Silva",
	idade: 31,
	cpf: "12345678912",
	turma: "JavaScript",
	bolsista: true,
};

console.log(estudante.nome);
console.log(`O nome de estudantes é ${estudante.nome}`);
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`);

function exibeInfoEstudantes(objEstudante, infoEstudante) {
	return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante["pet"]);

console.log(estudante["nome"]);
console.log(estudante["cpf"]);

console.log(exibeInfoEstudantes(estudante, "nome"));
console.log(exibeInfoEstudantes(estudante, "cpf"));

estudante.telefones = ["551199999", "321412152312"];
console.log(estudante.telefones);
console.log(estudante);
console.log(estudante.telefones[0]);

estudante.endereco = [
	{
		rua: "Tomas Gonzaga",
		numero: "164",
		complemento: "casa",
	},
];

estudante.endereco.push({
	rua: "Tome de souza",
	numero: "71",
	complemento: null,
});

console.log(estudante.endereco.rua);
console.log(estudante);
const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

const livro = {
	titulo: "O Senhor dos Anéis",
	autor: "J.R.R. Tolkien",
	anoPublicacao: 1954,
	genero: "Fantasia",
};

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`);

const amiga = {
	nome: "Carla",
	idade: 23,
	cpf: "12345678912",
	turma: "Medicina",
	bolsista: true,
	telefone: ["421315434123", "235134125624"],
	media: 9.0,
	estaAprovado: function (mediaBase) {
		return this.media >= mediaBase ? true : false;
	},
};

console.log(amiga.estaAprovado(7));

const listaPessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];

function mostrarListaPessoas(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

mostrarListaPessoas(listaPessoas);

listaPessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" });

mostrarListaPessoas(listaPessoas);

const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);

const contaBancaria = {
    titular: "João",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = {
    nome: "Carlos",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(500);
cliente.conta.sacar(200);

mostrarSaldo(cliente)

const pessoa = {
	nome: "Felipe",
	idade: 34,
	cpf: "21314512332",
	turma: "direito",
	bolsista: true,
	telefones: ["32986281209", "02132445323"],
	enderecos: [
		{
			rua: "Cristovao Jaques",
			numero: "321",
			complemento: "apto 12",
		},
		{
			rua: "Rua Dona Clotilde",
			numero: "71",
			complemento: null,
		},
	],
};

for (let chave in pessoa) {
	const tipo = typeof pessoa[chave];
	if (tipo !== 'object' && tipo !== 'fuction'){
		const texto = `A chave ${chave} tem o valor ${pessoa[chave]}`;
		console.log(texto);
	}
}

const chavesObjeto = Object.keys(pessoa);
console.log(chavesObjeto)

if (!chavesObjeto.includes('enderecos')) {
	console.error('É necessário ter um endereço cadastrado')
}

function exibirTelefones(telefone1, telefone2) {
	console.log(`Ligar para ${telefone1}`);
	console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(...pessoa.telefones)

const dadosEnvio = {
	destinatario: pessoa.nome,
	...pessoa.enderecos[0]
}
console.log(dadosEnvio)


const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  cor: 'Prata',
  ligado: true, 

  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log('O carro está ligado.');
    } else {
      console.log('O carro já está ligado.');
    }
  },

  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log('O carro está desligado.');
    } else {
      console.log('O carro já está desligado.');
    }
  },

  obterDetalhes: function () {
    const estado = this.ligado ? 'ligado' : 'desligado';
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  }
};

carro.ligar(); 
carro.desligar(); 
carro.desligar(); 
carro.ligar();
console.log(carro.obterDetalhes()); 