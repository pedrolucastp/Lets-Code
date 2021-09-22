// Dado o array :

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Utilize filter para selecionar todos os números primos do array

function checaPrimo(numero) {
  let divisor = 2;
  let ehPrimo = true;

  if (numero <= 1) {
    return false;
  }

  const divisores = Array.from(
    { lenght: Math.floor(numero / 2 - 1) },
    (_valor, index) => {
      return index + 2;
    }
  );

  divisores.forEach((divisor) => {
    if (numero % divisor === 0) {
      ehPrimo = false;
    }
  });

  return ehPrimo
}

const arrayComPrimos = array.filter((numero) => {
  let ehPrimo = true;

  if (numero <= 1) {
    return false;
  }

  const divisores = Array.from(
    { length: Math.floor(numero / 2 - 1) },
    (_valor, index) => {
      return index + 2;
    }
  );

  divisores.forEach((divisor) => {
    if (numero % divisor === 0) {
      ehPrimo = false;
    }
  });
  return ehPrimo;
});

console.log(arrayComPrimos);
