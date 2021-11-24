/* # Uma fila deve ter:

- propriedade tamanho (length)
- propriedade lastIn (para saber qual é o último elemento da fila)
- método que possibilite inserir um elemento no final da fila
- método que possibilite tirar um elemento do começo da fila

## Como deve ser a estrutura do meu elemento

### Quais propriedades e métodos que meu objeto deve ter (o que vou inserir no lastIn)?
- valor
- próximo (da fila): elemento (valor e próximo) */

// implementação de fila usando o array do JavaScript como base
class Queue {
  constructor() {
    this.list = [];
  }

  push(element) {
    this.list.push(element);
    // this.list = [...list, element]
  }

  pop() {
    this.list.shift();
    // No React o mais ideal seria fazer uma aproximação funcional como abaixo:
    // const [head, ...tail] = this.list
    // this.list = tail
    // return head
  }
}

//   const fila = new Queue()
//   fila.push('primeiro')
//   fila.push('segundo')
//   fila.push('terceiro')
//   fila.push('quarto')

//   console.log(fila.list)
//   fila.pop()
//   console.log(fila.list)
//   fila.pop()
//   console.log(fila.list)
