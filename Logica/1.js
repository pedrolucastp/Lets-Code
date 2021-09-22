/* Fazer um programa para cadastro de alunos 
em uma academia, para isso iremos salvá-los em uma lista.
Cada aluno possui os seguintes dados:

name: string
email: string
age: number
activities: string[]

Devemos ter as seguintes funcionalidades:

- Cadastro
- Busca por email (em caso positivo exibe os dados do aluno)
- Remoção de aluno (caso email exista email)
- Extras
    - Matrícula em atividade
    - Valor mensal das atividades:
        - Musculação 🏋️‍♀️ R$120,00
        - Esteira🏃 R$40,00
        - Natação 🏊‍♀️ R$50,00
        - Judô 🥋 R$90,00
    - Regras de negócio:
        - Esteira não pode acontecer junto com musculação, 
        pois já está inclusa nessa categoria
        - Menores de 14 anos não podem fazer musculação */

let listaAlunos = []

function cadastro() {
    const novoAluno = {
        nome: prompt("Informe um nome"),
        email: prompt("Para cadastro, informe um email"),
        age: parseInt(prompt("Informe uma idade")),
        //activities: string[],
        };
        console.log(novoAluno)
        listaAlunos.push(novoAluno)
    };

cadastro(true)
cadastro(true)
cadastro(true)
console.log(listaAlunos)

function busca(lista) {
    const buscaEmail = prompt("Busque aluno por email")
    for (const aluno of lista) {
        if (aluno.email === buscaEmail)
        console.log("Aluno encontrado: \n", aluno)
    }
};
busca(listaAlunos)

function remove(lista) {
    const objetoARemover = prompt("Remova um aluno por email")
    let novaListaAlunos = []
    let objeto = {}
    for (let objeto of lista) {
        console.log(objeto.email)
        if (objetoARemover !== objeto.email)
        novaListaAlunos.push(objeto)
    }
    listaAlunos = novaListaAlunos 
    console.log("Aluno removido: ", objetoARemover)   
};
remove(listaAlunos)

console.log(listaAlunos)
