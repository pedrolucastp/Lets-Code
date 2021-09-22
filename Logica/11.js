/* Filtre uma lista de alunos para remover um aluno com uma
 propriedade id digitada pelo usuário. */

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

const listaFiltrada = usuarios.filter((usuario) => usuario.id !== idPesquisado);

console.log("Lista filtrada: ", listaFiltrada);
