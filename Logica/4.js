/* Faça um programa que receba 5 números do usuário 
e os armazene de maneira ordenada em um array. */

const arrayOrdenada = [];
let i = 0;
while (i < 5) {
    let numeroPedido = parseInt(prompt("Digite um número:"));
    arrayOrdenada.push(numeroPedido);
    arrayOrdenada.sort();
    i++;
};

console.log(arrayOrdenada)