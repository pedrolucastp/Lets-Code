/* De um array com números aleatórios de 100 elementos, 
gere um novo array apenas com números divisíveis por 3. */

const numeros = Array.from({ length: 100 }, () => {
  const numero = Math.round(Math.random() * 9999);
  return numero;
});

const numerosDivisiveisPorTres = numeros.filter((numero) => numero % 3 === 0);

console.log(numerosDivisiveisPorTres);
