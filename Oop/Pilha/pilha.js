/* # Uma pilha deve ter:
- propriedade tamanho (length)
- propriedade topo (para saber qual é o elemento do topo)
- método que possibilite colocar um elemento no topo da pilha
- método que possibilite tirar um elemento do topo

## Como deve ser a esturtura do meu elelemento

### Quais propriedades e métodos que meu objeto deve ter?
- valor ()
- próximo (da pilha): elemento (valor e próximo) */

//LIFO ("the LastIn is the FirstOut")

export class Stack {
  constructor() {
    this.length = 0;
    this.lastIn = null;
  }
  
  push(element) {
    this.length += 1;
    this.top = {
      value: element,
      next: this.top,
    };
  }
  
  pop() {
    if (!this.top) {
      return;
    }

    this.length -= 1;
    this.top = this.top.next;
  }
  
  //print value array
  printStack() {
    const elementsValue = [];
    let next = this.top;
    while (next) {
      elementsValue.push(next.value);
      next = next.next;
    }
    return elementsValue;
  }
}

// class Dish {
//     constructor(color) {
//         this.color = color
//     }
// }

// const dishes = new Stack();
// console.log(dishes);

// dishes.stacker(new Dish ("white"));
// dishes.stacker(new Dish ("red"));
// dishes.stacker(new Dish ("blue"));
// dishes.stacker(new Dish ("black"));

// console.log(dishes.top);
// console.log(dishes.lastIn.next);
// console.log(dishes.lastIn.next.next.next.next);

// console.log(dishes.printStack());
// dishes.unstacker();
// dishes.unstacker();
// dishes.unstacker();
// dishes.unstacker();
// dishes.unstacker();
// console.log(dishes.printStack());
