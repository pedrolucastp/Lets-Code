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
