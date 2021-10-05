const numerosPossiveis = 30;
const acertosParaGanhar = 5;
const quantidadePorCartela = 10;

const cartelas = Array.from({ length: 1000 }, () => {
  const numerosApostados = [];

  Array.from({
      length: quantidadePorCartela,
    },
    () => {
      let numeroSorteado = Math.floor(Math.random() * numerosPossiveis + 1);

      while (numerosApostados.includes(numeroSorteado)) {
        numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1);
      }

      numerosApostados.push(numeroSorteado);

      return numeroSorteado;
    }
  );
  return numerosApostados;
});

const numerosSorteados = [];

const sorteio = Array.from({ length: acertosParaGanhar }, () => {
  let numeroSorteado = Math.floor(Math.random() * numerosPossiveis + 1);

  while (numerosSorteados.includes(numeroSorteado)) {
    numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1);
  }

  numerosSorteados.push(numeroSorteado);

  return numeroSorteado;
});

const objetoDeCartelas = cartelas.map((numerosDaCartela) => {
  numerosDaCartela;
  let venceu = false;
  let acertos = 0;

  numerosSorteados.forEach((numeroSorteado) => {
    const acertou = numerosDaCartela.includes(numeroSorteado);

    acertos = acertou ? acertos + 1 : acertos;
  });
  if (acertos >= acertosParaGanhar) {
    venceu = true;
  }

  return {
    apostas: numerosDaCartela,
    venceu: venceu,
  };
});

function mostraVencedores(cartelas) {
  cartelas.forEach((cartela) => {
    if (cartela.venceu) {
      console.log("Vencedor encontrado!");
      console.log(cartela.apostas);
      console.log("==================");
    }
  });
}

console.log("Numeros sorteados: ", sorteio);
console.log("Jogos jogados: ", objetoDeCartelas);

mostraVencedores(objetoDeCartelas);
