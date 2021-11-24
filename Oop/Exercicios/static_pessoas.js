// Faça uma classe pessoa com uma propriedade estática total que conte
// quantos objetos do tipo pessoa foram criados.

// Agora separe as pessoas criadas em dois grupos (propriedades estáticas):
// maioresDeIdade e menoresDeIdade (menores de 18 anos)

class Pessoa {
  static total = 0;
  static menores = [];
  static maiores = [];
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.#Grupo();
    Pessoa.total += 1;
  }

  #Grupo() {
    this.idade < 18
      ? Pessoa.menores.push(this.nome)
      : Pessoa.maiores.push(this.nome);
    return;
  }
}
const pessoa1 = new Pessoa("Pedro", 31);
const pessoa2 = new Pessoa("Estela", 35);
const pessoa3 = new Pessoa("Iago", 16);
const pessoa4 = new Pessoa("Anastasia", 2);
console.log(pessoa1);
console.log(pessoa2);
console.log(Pessoa.total);
console.log(Pessoa.menores);
console.log(Pessoa.maiores);
