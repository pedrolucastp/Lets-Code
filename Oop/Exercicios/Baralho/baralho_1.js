/* Faça uma pilha de cartas com os seguintes atributos:
numero: (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
naipe: (paus (♣), ouros (♦), copas (♥) e espadas (♠)) */

import { Stack } from "../../Pilha/pilha.js";

class Baralho extends Stack {
  constructor() {
    super();
    this.numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    this.naipe = {
        paus: "♣",
        ouros: "♦",
        copas: "♥",
        espadas: "♠",
      };

    function criaBaralho() {
    const baralho = []; //52 cartas individuais (objetos)
    this.naipe.forEach((numero, naipe) => {
        const carta = {
            numero: numero,
            naipe: naipe,
        }

      this.baralho.push(carta);
    });
  }
const baralho1 = new Cartas(criaBaralho());
  }
}




console.log(baralho1);
