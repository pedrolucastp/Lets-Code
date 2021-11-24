/* class Animal {
    constructor(especie) {
        this.especie = especie
    }
    fazBarulho(){
        return 'Brrr'
    }
    seAlimenta() {
        return 'nhac'
    }
}

const MixinVoa = (SuperClasse) =>  {
    return class extends SuperClasse {
        voa() {
            return `${this.especie} voou` 
        }
    }
}

const MixinAnda = (SuperClasse) =>  {
    return class extends SuperClasse {
        anda() {
            return `${this.especie} andou` 
        }
    }
}

const MixinNada = (SuperClasse) =>  {
    return class extends SuperClasse {
        nada() {
            return `${this.especie} nada` 
        }
    }
}


class PassaroVoador extends MixinAnda(MixinVoa(Animal)) {}
class PassaroVoadorENadador extends MixinNada(PassaroVoador) {}


{
    const pomba = new PassaroVoador('pomba')
    console.log(pomba)
    console.log(pomba.fazBarulho())
    console.log(pomba.voa())
    console.log(pomba.anda())
    console.log(pomba.nada())

    const pato = new PassaroVoadorENadador('pato')
    console.log(pato)
    console.log(pato.fazBarulho())
    console.log(pato.voa())
    console.log(pato.anda())
    console.log(pato.nada())
} */
/* 19. Em um time de desenvolvimento temos os seguintes tipos de desenvolvedores com as mínimas competências esperadas:
  backend: 
     métodos: criaBancoDeDados, criaApiRest
  devops: 
     métodos: criaBancoDeDados, gerenciaBancoDeDados, configuraDeploy
  frontend: 
    métodos: protipaUI, criaUI
  designerUI: 
     métodos: protipaUI
  fullstack:
    métodos: criaBancoDeDados, criaUI, criaApiRest */

/* 20. Utilizando como base a classe:
  Dispositivo: 
  + calcula()
Faça alguns mixins para as seguintes funcionalidades:
  + ilumina()
  + acessaInternet()
  + tiraFoto()
  + registraPassos()
Para construir as seguintes classes:
  Relogio: + calcula(), + acessaInternet(), + registraPassos()
  Computador: + calcula(), + acessaInternet(), + tiraFoto() 
  Celular: + calcula(), + ilumina(), + acessaInternet(), + tiraFoto(), + registraPassos()*/
/* 
  21. Crie as seguintes classes utilizando composição: 
  Estabelecimento:
- id
- produtos: [
  {
    nome: string
    valor: number
  }
]
Restaurante:
- id
- produtos
- pontosParaResgatarPremio: number
+ resgataPremio(cartela)
Farmacia:
- id
- produtos
+ compraRemedio(prescricao)
Bar:
- id
- produtos
- pontosParaResgatarPremio: number
+ resgataPremio(cartela)
+ pedeBebida(idade)  */

class Estabelecimento {
  constructor(id,produtos=[]) {
    this.id = id;
    this.produtos = produtos;
  }
}

class Farmacia extends MixinRemedios(Estabelecimento) {
  constructor(id,produto, preço) {
    super(id,produto, preço);
  }
}
class Restaurante extends Estabelecimento {
  constructor(id, produto, preço) {
    super(id, produto, preço);
  }
}
class Bar extends Estabelecimento {
  constructor(id, produto, preço) {
    super(id, produto, preço);
  }
}

class Cartela {
  constructor(idDoEstabelecimento, carimbos) {
    this.idDoEstabelecimento = idDoEstabelecimento
    this.carimbos = carimbos
  }
}

function MixinRemedios(classe) {
  return class extends classe {
    remedio() {
      return `${this.remedio}`;
    }
  };
};

function MixinPremios(classe) {
  return class extends classe {
    constructor(id,produtos,pontosParaResgatarPremio) {
      super(id,produtos)
      this.ponstosParaResgtarPremio = pontosParaResgatarPremio
    }
    resgataPremio(cartela) {
      if(cartela.idDoEstabelecimento !== this.id) {
        return 'cartela invalida para este estabelecimento'
      }
      if (cartela.carimbos!== this.pontosParaResgatarPremio) {
        const pontosRestantes = this.pontosParaResgatarPremio - cartela.carimbos
        return `pontos insuficientes ${pontosRestantes} para resgatar`
    }
    cartela.carimbos = 0
    return 'parabens'
  };
};

function MixinBebidas(classe) {
  return class extends classe {
    pedeBebidas(idade,bebida) {
      if (idade > 18) {
        return 'nao pode' 
    }
  }
}

const estabelecimento = new Estabelecimento();
estabelecimento.novoEstabelecimento(new Restaurante("pizza", 20));
console.log(estabelecimento);

const restaurante = new Restaurante();
console.log(restaurante);

const remedios = [new Remedio('vitamina c') new Remedio('cortisona',true)]
const farmacia = new Farmacia('2', remedios)
console.log(farmacia.compraRemedio(['cortisona'], remedios))




/* Para resgatar um prêmio, cliente deve ter cartela do estabelecimento com número de carimbos igual aos pontosParaResgatarPremio do estabelecimento. Após resgate, número de carimbos volta para 0.

Para que a pessoa possa comprar um remédio na farmácia, o nome do remédio deve estar contido na lista de remedios da prescrição médica dele.

Para poder pedir bebida no bar, a pessoa deve ter um mínimo de 18 anos.

Outras classes que serão utilizadas:
Cartela:
- idDoEstabelecimento: string
- carimbos: number

Prescricao:
- remedios: string[] */
