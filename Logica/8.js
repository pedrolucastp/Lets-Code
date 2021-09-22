/* Faça um programa que crie um array de 100000 posições 
e insira trevos de quatro folhas (🍀) caso o valor um número sorteado 
de 0 a 1 seja superior a 0.9999 e trevos de três folhas (☘️), 
caso contrário. Descubra também se o array contém algum trevo de quatro 
folhas e, em caso positivo, a primeira posição do array que o encontramos. */

const trevos = Array.from({ length: 100000 }, () => {
  return Math.random() < 0.9999 ? "☘️" : "🍀";
});
console.log(trevos);

const posicaoDoTrevo = trevos.findIndex((trevo) => trevo === "🍀");

function exibeTrevo(posicao) {
  if (posicaoDoTrevo === -1) {
    return console.log("Nenhum trevo encontrado");
  }

  return console.log("Trevo na posição " + posicaoDoTrevo);
}

exibeTrevo(posicaoDoTrevo);
