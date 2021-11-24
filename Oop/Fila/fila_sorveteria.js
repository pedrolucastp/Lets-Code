//LIFO (LastIn FirstOut - Últimos serão os primeiros)
class Stack {
  constructor() {
    this.length = 0;
    this.lastIn = null;
  }
  //push
  add(element) {
    this.length += 1;
    this.lastIn = {
      value: element,
      next: this.lastIn,
    };
  }
  //pop
  remove() {
    if (!this.lastIn) {
      return;
    }
    this.length -= 1;
    this.lastIn = this.lastIn.next;
  }
  //print value array
  printStack() {
    const elementsValue = [];
    let next = this.lastIn;
    while (next) {
      elementsValue.push(next.value);
      next = next.next;
    }
    return elementsValue;
  }
}

class CasquinhaDeSorvete extends Stack {
  add(element) {

    if (this.length >= 4) {
      return;
    }

    if(this.lastIn && this.lastIn.value === element) {
      return
    }

    this.length += 1;
    this.lastIn = {
      value: element,
      next: this.lastIn,
    }
  }
}

function MixinTamanho(classe) {
  return class extends classe {
      constructor(tamanhoDaCasquinha) {
          super()
          this.tamanhoDaCasquinha = tamanhoDaCasquinha
      }
    vendeSorvete(tamanho) {
      if (tamanho === "pequena" && this.length > 2) {
        return;
      }
      if (tamanho === "media" && this.length > 3) {
        return;
      }
      if (tamanho === "grande" && this.length > 4) {
        return;
      }
    }
  };
}

const casquinha = new CasquinhaDeSorvete()
console.log(casquinha);

casquinha.add("cocolate");
casquinha.add("baunilha");
casquinha.add("morango");
casquinha.add("abacaxi");
casquinha.add("framboesa");

console.log(casquinha.length);
console.log(casquinha.lastIn.value);

console.log(casquinha.length);
console.log(casquinha.lastIn.value);

casquinha.vendeSorvete('pequena')
