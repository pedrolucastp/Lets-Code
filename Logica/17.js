// Refaça o exercício 2 utilizando reduce
// Faça um programa que fornece o número de ocorrências de cada sobrenome da lista abaixo
/* 
const nums = [10, 20, 30, 40, 50];
const soma = nums.reduce((somatoria, item) => somatoria + item);
console.log(soma); // 150
 */


const pessoas = [
    "Ana Peres",
    "Maria Silva",
    "Cleide Peres",
    "Carlos Levir",
    "Zeca Silva",
    "Paulo Souza",
    "Roger Guimarães",
    "Carlos de Almeida",
    "Mayk Souza",
    "Paula Guimarães",
    "Edson Souza",
    "Milena Komatsu",
    "Zé Souza",
    "Joana Batisteti",
    "Carla Zuko",
    "Bruna de Almeida",
    "Jonas Peres",
  ]

const somaSobrenome = pessoas.reduce((obj, sobrenome) => obj + sobrenome + 1, {});
console.log(somaSobrenome)

const contadorSobrenomes = {}

for (let nome of pessoas) {
    const arrayNomeSobrenome = nome.split(" ");
    let sobrenome = null;
    for (indice in arrayNomeSobrenome) {
        if (indice > 0) {
            sobrenome = sobrenome 
            ? sobrenome + " " + arrayNomeSobrenome[indice] 
            : arrayNomeSobrenome[indice]
        };
    };
    const quantidade = contadorSobrenomes[sobrenome];
    if (contadorSobrenomes[sobrenome]) {
        contadorSobrenomes[sobrenome] = quantidade + 1;
  } else {
        contadorSobrenomes[sobrenome] = 1;
  }
};

console.log(contadorSobrenomes)