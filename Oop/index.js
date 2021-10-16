/* 1. A partir do objeto caneta crie um novo objeto canetaVermelha com as 
mesmas propriedades e valores da caneta acima, mas com a propriedade cor
com o valor vermelha. */

const caneta = {
  marca: "bic",
  tipo: "esferográfica",
};

const canetaVermelha = {
  ...caneta,
  cor: "vermelha",
};
// console.log(canetaVermelha);

/* 2. Faça um objeto pessoa com as propriedades nomeCompleto, email e 
primeiroNome (com get). */

const pessoa = {
  nomeCompleto: "Lorem Ipsum",
  email: "loremipsum@email.com",

  get primeiroNome() {
    return this.nomeCompleto.split(" ")[0];
  },
};
// console.log(pessoa.primeiroNome);

/* 3. Faça um objeto TV com as propriedades canal, volume e ligada e 
métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.*/
    const tv = {
        canal: 2,
        volume: 0,
        ligada: false,

        set canal(novoCanal) {
            this.canal = novoCanal
        },
        
        
    }
    const novoCanal = 4
    // console.log(tv.canal)

// 4. Refaça o exercício da TV utilizando uma função construtora/padrão factory.
// 5. Refaça o exercício da TV utilizando a sintaxe de classe (class).
/* 6. Faça uma classe Boletim para uma faculdade com as propriedades
nome (do aluno), 
ano (maior que 1964), 
semestre(de 1 a 14) 
e um array média com as médias de 6 máterias. */

// class Boletim {
//   constructor(nome, ano, semestre, medias) {
//     this.nome = nome;
//     this.ano = ano > 1964 ? ano : "Ano inválido";
//     this.semestre = (semestre > 0 && semestre < 15) ? semestre : "Semestre invalido";
//     this.medias = medias.every(media => {return media >= 0 && media <= 10})
//       ? medias
//       : "alguma media errada";
//   }
// }

// const boletim1 = new Boletim("Fulano", 1990, 10, [0, 2, 4, 6, 8, 10]);
// console.log(boletim1);

/* 7. Crie uma classe CNH que tenha como propriedades 
país e idade que, por padrão, deve ser maior ou igual a 18, 16 
se for igual a US ou CA e 21 se corresponder a CH ou RU. 
Se o país for BR deve também ser informada a categoria da carteira 
(A, B, C, D, E, AB, AC, AD ou AE). */

// class CNH {
//   constructor(pais, idade, categoria) {
//     this.pais = pais;
//     this.idade =
//       (pais !== "CH" && pais !== "RU" && idade >= 18) ||
//       (pais === "CH" && idade >= 21) ||
//       (pais === "RU" && idade >= 21) ||
//       (pais === "US" && idade >= 16) ||
//       (pais === "CA" && idade >= 16)
//         ? idade
//         : "Inválida";

//     const categorias = ["A", "B", "C", "D", "E", "AB", "AC", "AD", "AE"];
//     this.categoria =
//       pais === "BR" && categorias.includes(categoria)
//         ? categoria
//         : "Indisponivel";
//   }
// }

// const cnh1 = new CNH("BR", 18, "A");
// console.log(cnh1);

// const cnh2 = new CNH("CH", 18, "A");
// console.log(cnh2);

// const cnh3 = new CNH("FR", 18, "A");
// console.log(cnh3);

// const cnh4 = new CNH("RU", 19);
// console.log(cnh4);

// const cnh5 = new CNH("US", 16, "AB");
// console.log(cnh5);

// const cnh6 = new CNH("CA", 15, "AB");
// console.log(cnh6);

/* 8. Crie uma classe Carro que tenha as propriedades cor, marca, 
modelo (sedan ou hatch), capacidadeDoTanque (em litros),
tipoDeCombustível (gasolina, álcool ou flex) e um método abastecer 
que respeite o tipo de combustível que o automóvel aceita e a capacidade
máxima de litros. Além de abastecer o carro, também devemos ter 
o preço do abastecimento (gasolina = R$ 5,62/L e etanol = R$ 4,16/L). */

// class Carro {
//   constructor(cor, marca, modelo, capacidade, tipoDeCombustivel) {
//     this.cor = cor;
//     this.marca = marca;
//     this.modelo = modelo === ("sedan" || "hatch") ? modelo : "Inválido";
//     this.capacidadeMaximaDoTanque = capacidade;
//     this.tipoDeCombustivel = ["gasolina", "alcool", "flex"].includes(
//       tipoDeCombustivel
//     )
//       ? tipoDeCombustivel
//       : "Inválido"; //
//     this.nivelDoTanque = 0;
//   }

//   abastecer(tipo, litros) {
//     let preco;
//     let combustiveis = ["gasolina", "alcool"];
//     tipo === "gasolina" ? (preco = 5.62) : null;
//     tipo === "alcool" ? (preco = 4.16) : null;

//     combustiveis.includes(tipo) &&
//     this.nivelDoTanque + litros < this.capacidadeMaximaDoTanque
//       ? (this.nivelDoTanque += litros) &&
//         console.log(
//           "preço do abastecimento de " + tipo + ": R$ " + litros * preco
//         )
//       : console.log("Combustivel invalido");
//   }
// }

// const carro1 = new Carro("Branco", "Fiat", "sedan", 100, "flex");
// console.log(carro1);
// carro1.abastecer("alcool", 10);
// console.log(carro1);
// carro1.abastecer("hidrogenio", 10);
// console.log(carro1);

// 9. Crie uma classe Time que tenha como propriedade o nome do país, nome do esporte e a pontuação dele em um torneio. Sua pontuação pode ser acrescida por um método pontua que recebe como parâmetro "W" para vitória (+3 pontos), "L" para derrota (+0 pontos) e "D" para empate (+1 ponto).
// 10. Deseja-se montar uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um número que corresponderá ao número de inscrição do participante e declara o vencedor.
// 11. Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positivo, o tempo estimado de entrega.
// 12. Faça uma classe Perfil que tem as seguintes informações:  nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).

/* 13. Faça uma classe SmartWatch com a contagem dos passos diários de uma 
pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos 
apenas podem ser incrementados e um método resetOnMidnight() que reseta os 
passos para 0.*/

class Smartwatch {
  #passos;
  constructor(passos) {
    this.#passos = this.#validaPassos(passos);
  }

  get passos() {
    return this.#passos;
  }

  set passos(passos) {
    return this.#validaPassos(passos);
  }
  #validaPassos(passos) {
    if (passos > 0 && passos > this.#passos) {
      this.#passos = passos;
    }

    if (!this.#passos) {
      this.#passos = 0;
    }

    return this.#passos;
  }
}

const appleWatch = new Smartwatch(1000);

// console.log(appleWatch);

// 14. Faça uma classe Album (de figurinhas) que tem como propriedades a quantidade de figurinhas e um array de figurinhasColadas que recebe os números das figurinhas coladas. Garanta que o array de  figurinhasColadas apenas pode crescer. Tenha também um método colarFigurinha que permita colar figurinhas que existam no álbum e que não foram coladas ainda.

/* 15. Construa uma classe Veiculo que tem como propriedades rodas (1 a n)
, usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 
'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta 
(infantil: true/false - tem que ter mais que 2 rodas) que também herda as
características de Veiculo.*/
class Veiculo {
  constructor(rodas, usaCombustivel) {
    this.rodas = rodas;
    this.usaCombustivel = true || false ? usaCombustivel : "Input Inválido";
  }
}

class Carro extends Veiculo {
  constructor(usaCombustivel, tipoDeCombustivel) {
    super(usaCombustivel);
    this.tipoDeCombustivel = tipoDeCombustivel.includes(
      "gasolina",
      "álcool",
      "flex"
    )
      ? tipoDeCombustivel
      : "Combustivel Invalido";
  }
}

class Bicicleta extends Veiculo {
  constructor(rodas, usaCombustivel) {
    super(rodas, usaCombustivel);
    this.infantil =
      this.rodas > 2 && this.usaCombustivel === false ? true : false;
  }
}

const veiculoGenerico = new Veiculo(2, false);

/* 16. Construa uma classe Programa com as propriedades duracao e generos 
(ação, comédia, suspense, drama, terror) e duas classes que herdam desta 
(Seriado e Filme). A classe Seriado deve ter numeroDeEpisodios (de 1 a n),
anoDeInicio e anoDeFim. Já a classe Filme precisa ter a duracao (em minutos).*/
class Programa {
  constructor(duracao, genero) {
    this.duracao = duracao;
    this.genero = genero.includes([
      "ação",
      "comédia",
      "suspense",
      "drama",
      "terror",
    ])
      ? genero
      : "Genero Inválido";
  }
}
class Seriado extends Programa {
  constructor(duracao, genero, episodios, anoInicio, anoFim) {
    super(duracao, genero);
    this.numeroDeEpisodios = episodios;
    this.anoInicio = anoInicio;
    this.anoFIm = anoFim;
  }
}

class Filme extends Programa {
  constructor(duracao) {
    super(duracao);
  }
}
/* 17. Crie uma classe Livro com as propriedades autor e ano. Crie também 
as classes Ebook e AudioBook que herdam de Livro. Ebook deve ter numero 
de páginas e número de capítulos. Já a classe AudioBook deve ter a duração 
total do aúdio em minutos.*/

class Livro {
  constructor(autor, ano) {
    this.autor = autor;
    this.ano = ano;
  }
}

class Ebook extends Livro {
  constructor(autor, ano, paginas, capitulos) {
    super(autor, ano);
    this.numeroDePaginas = paginas > 0 ? paginas : 1;
    this.numeroDeCapitulos = capitulos > 0 ? capitulos : 1;
  }
}

class Audiobook extends Livro {
    #duracaoDoAudio

  constructor(autor, ano, duracaoEmSegundos) {
    super(autor, ano)
    this.#duracaoDoAudio = this.#validaDuracaoDoAudio(duracaoEmSegundos)
  }
  get duracaoDoAudio() {
      return this.#duracaoDoAudio
  }

  set duracaoDoAudio(duracaoEmSegundos) {
      return this.#validaDuracaoDoAudio(duracaoEmSegundos)
  }

  #validaDuracaoDoAudio(duracaoEmSegundos) {
      const minutos = Math.floor(duracaoEmSegundos / 60)
      const segundos = duracaoEmSegundos % 60 //resta da divisao
      this.#duracaoDoAudio = `${minutos ? `${minutos}m`: ''}${segundos ? `${segundos}s` : ''}`
      return this.#duracaoDoAudio
  }
}

const livro1 = new Livro ('Fulano', '1970')
const ebook1 = new Ebook ('Beltrano', '2020', 200, 10)
const audiobook1 = new Audiobook ('Ciclano', '2021', 130)
console.log(livro1)
console.log(ebook1)
console.log(audiobook1)


/* 18. Crie uma classe Camera que deve ter como propriedades 
resolucaoMaxima e fotosTiradas e um método tiraFoto que apenas aumenta o 
número de fotos tiradas. Crie uma classe Celular que  tenha como 
propriedades espacoDisponivel (em número de fotos), cameraFrontal e 
cameraTraseira. Tanto a cameraFrontal como a cameraTraseira devem ser 
classes que herdam de Camera e tem como propriedades adicionais a 
resolucaoAtual (não pode ser superior à resolucaoMaxima). Ambas apenas 
podem tirar fotos se houver espaço disponível no celular e a 
cameraFrontal deve ter resolucaoMaxima menor que a cameraTraseira. */

class Camera {
    constructor() {
        this.resolucaoMaxima = 1080,
        this.fotosTiradas = 100,

        tiraFoto (this.fotosTiradas += 1)
    }
}

class Celular {
    constructor() {
        this.espacoDisponivel = '1000'
    }
}
