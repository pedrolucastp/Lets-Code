/* Uma doceria tem um painel para informar os doces disponíveis

    🍰 64 pedaços

    🎂 8 bolos

    🍪 100 cookies

    🍩 20 donuts

    🍫 50 barras de chocolate

    🟢 + de 20% do estoque total

    🔴 - de 20% do estoque total

    ❌️ estoque zerado para o doce

    Faça um programa para que o caixa da doceria possa controlar
    o estoque, ou seja, permite adicionar ou subtrair um valor 
    do estoque de um doce e mostre para os clientes uma indicação 
    de estoque da seguinte forma:

    🍰 🟢

    🎂 🟢

    🍪 🔴

    🍩 🔴

    🍫 ❌️ 
*/

const estoqueInicial = {
  '🍰' : 64, 
  '🎂' : 8 ,
  '🍪' : 100, 
  '🍩' : 20, 
  '🍫' : 50,
}

const doces = {
  '🍰' : estoqueInicial['🍰'], 
  '🎂' : estoqueInicial['🎂'] ,
  '🍪' : estoqueInicial['🍪'], 
  '🍩' : estoqueInicial['🍩'], 
  '🍫' : estoqueInicial['🍫'],
}

function gerenciarDoces(doces, alteraDoces) {
  for (const doce in alteraDoces){
    const resultado = doces[doce] + alteraDoces[doce]
    if (resultado >= 0){
        doces[doce] = doces[doce] + alteraDoces[doce]
    }
  }
};

function exibirDocesParaClientes(doces, estoqueInicial) {
  for (const doce in doces) {
    const quantidade = doces[doce]
    let emblema = null

    if (quantidade === 0) {
        emblema = '❌️'
      }
    else {
        if (quantidade > estoqueInicial[doce] * 0.2) {
            emblema = '🟢'
        }
        else {
            if (quantidade <= estoqueInicial[doce] * 0.2) {
                emblema = '🔴'
          }
        }
      }
    console.log(doce + ' ' + emblema)
  };
};

gerenciarDoces(doces, { '🍪' : -10, '🍩' : 5,})
gerenciarDoces(doces, { '🍩' : 5,})
gerenciarDoces(doces, { '🍩' : 5,})
gerenciarDoces(doces, { '🍩' : 5, '🎂': -8})
gerenciarDoces(doces, { '🍩' : -36})
exibirDocesParaClientes(doces, estoqueInicial)