// 28. Faça um programa para organizar pessoas em duas filas, uma comum e outra
// prioritária. Leve em consideração as seguintes regras para entrada na fila
// prioritária:
// - Pessoas com 60 anos ou mais
// - Pessoas com deficiências
// - Gestantes
// Para fazer a conferência, passe para a fila um objeto da classe Pessoa que
// pode ter as propriedades: idade (number), portadorDeDeficiencia (boolean)
// e gestante (boolean)

class Fila {
  constructor() {
    this.length = 0;
    this.firstIn = null;
  }

  #getLastElement(element) {
    if (!element.next) {
      return element;
    }
    return this.#getLastElement(element.next);
  }

  push(element) {
    this.length += 1;

    if (!this.firstIn) {
      this.firstIn = {
        value: element,
        next: null,
      };
      return;
    }

    const lastIn = this.#getLastElement(this.firstIn);
    lastIn.next = {
      value: element,
      next: null,
    };
  }

  pop() {
    if (!this.firstIn) {
      return;
    }

    this.length -= 1;
    this.firstIn = this.firstIn.next;
  }

  printQueue() {
    const elementValue = [];

    let next = this.firstIn;
    while (next) {
      elementValue.push(next.value);
      next = next.next;
    }

    return elementValue;
  }
}

class Pessoa {
  constructor(idade, pdc, gestante) {
    this.idade = idade;
    this.pdc = pdc;
    this.gestante = gestante;
  }
}

class OrganizaFilas {
  constructor() {
    this.filaComum = new Fila();
    this.filaPrioridade = new Fila();
  }

  adicionaNaFila(pessoa) {
      if (pessoa.idade >= 60 || pessoa.pdc || pessoa.gestante) {
          this.filaPrioridade.push(pessoa)
          return
      }
      this.filaComum.push(pessoa)
  }
}

const organizaFilas = new OrganizaFilas ()
         


const pessoa1 = new Pessoa(18, false, false);
const pessoa2 = new Pessoa(60, false, false);
const pessoa3 = new Pessoa(35, true, false);
const pessoa4 = new Pessoa(27, false, true);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
