class Animal {
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
}