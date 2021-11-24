// Queremos montar uma classe Prato com as seguintes propriedades:
// nome (string), valor (number), quantidade (number) e
// tipo (string: sem restrições, vegetariano, vegano).

export class Prato {
    #tipos = ['sem restrições', 'vegetariano', 'vegano']
  constructor(nome, valor, quantidade = 1, tipo) {
    this.nome = nome
    this.valor = parseFloat(valor.toFixed(2))
    this.quantidade = parseInt(quantidade)
    this.tipo = this.#tipos.includes(tipo) ? tipo : 'sem restrições'
  }
}

const prato1 = new Prato("Lasanha", 19.99, 1, "vegetariano")
const prato2 = new Prato('Arroz com Feijão', 12.50)
console.log(prato1);
console.log(prato2)
