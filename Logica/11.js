/* Filtre uma lista de alunos para remover um aluno com uma
 propriedade id digitada pelo usuário. */
/* 
 let listaAlunos = []

 function cadastro() {
     const novoAluno = {
         nome: prompt("Informe um nome"),
         email: prompt("Para cadastro, informe um email"),
        // age: parseInt(prompt("Informe uma idade")),
         //activities: string[],
         };
         listaAlunos.push(novoAluno)
     };
 
 cadastro(true)
 cadastro(true)
 cadastro(true)
 
 function busca(lista) {
     const buscaEmail = prompt("Busque aluno por email")
     for (const aluno of lista) {
         if (aluno.email === buscaEmail)
         console.log("Aluno encontrado: \n", aluno)
     }
 };
 // busca(listaAlunos)
 
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
 // remove(listaAlunos)
 
 console.log(listaAlunos)

 */

faker.locale = "pt_BR";

const usuarios = Array.from({ length: 10 }, () => ({
  nome: faker.name.findName(),
  id: faker.datatype.uuid(),
}));


usuarios.forEach(function (usuario) {
  console.log(usuario);
});

const idPesquisado = prompt("Entre com um id");

const usuarioEncontrado = usuarios.find(
  (usuario) => usuario.id === idPesquisado
);

console.log("Usuario encontrado: ", usuarioEncontrado);

const listaFiltrada = usuarios.filter(
    (usuario) => usuario.id !== idPesquisado
  );
  
  console.log("Lista filtrada: ", listaFiltrada);