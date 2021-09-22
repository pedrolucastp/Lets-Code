// Refaça o exercício 2 utilizando reduce
// Faça um programa que fornece o número de ocorrências de cada sobrenome da lista abaixo


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
];

console.log(pessoas.reduce(contaSobrenomes));

function contaSobrenomes(total, num) {
  if (typeof total === "string") {
    let _total = total.split(" ");
    total = {};
    total[_total[_total.length - 1]] = 1;
  }
  num = num.split(" ");
  if (num[num.length - 1] in total) {
    total[num[num.length - 1]] += 1;
  } else {
    total[num[num.length - 1]] = 1;
  }
  return total;
}

/* const somaSobrenome = pessoas.reduce((obj, sobrenome) => obj + sobrenome + 1, {});
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

console.log(contadorSobrenomes) */
