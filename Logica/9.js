/* 5. De um array com números aleatórios de 100 elementos, 
gere um novo array apenas com números divisíveis por 3. */

const arrayDivisiveis = []
const arrayNaoDivisiveis = []
const numerosAleatorios = Array.from({ length: 100}, () => {
    return Math.random() > 0.5 ? arrayDivisiveis.push('maior') : arrayNaoDivisiveis.push('menor')
})

console.log(numerosAleatorios)
console.log(arrayDivisiveis)
console.log(arrayNaoDivisiveis) 
 
/* const trevos = Array.from({ length: 100 }, () => {
    return Math.random() < 0.9999 ? '☘️' : '🍀'
})
console.log(trevos)

const posicaoDoTrevo = trevos.findIndex(trevo => trevo === '🍀')

function exibeTrevo(posicao) {
    if (posicaoDoTrevo === -1) {
      return console.log("Nenhum trevo encontrado")
    }

    return console.log("Trevo na posição " + posicaoDoTrevo)
}

exibeTrevo(posicaoDoTrevo) */
