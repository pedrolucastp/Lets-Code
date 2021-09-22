/* Organize usuarios por estado: Utilize a biblioteca faker em seu index.html:
e o seguinte código no seu script para gerar usuários aleatórios */

faker.locale = "pt_BR";

const quantidadeUsuarios = 100;

const listaUsuarios = Array.from({ length: quantidadeUsuarios }, () => {
  return {
    nome: faker.name.firstName(),
    estado: faker.address.stateAbbr(),
  };
});

console.log(listaUsuarios);

/* Agora retorne um novo objeto com o seguinte formato como exemplo:

{
  usuariosDoMeuEstado: [
    "Bia",
    "Carlos",
  ],
  usuariosDeOutrosEstados: [
    "Roger",
    "Ana",
    "Carol",
    "Ju"
  ],
}
*/

const meuEstado = prompt("Digite sua Unidade Federal:");

const objetoUsuarios = {
  mesmoEstado: [],
  outrosEstados: [],
};

const usuariosPorEstado = listaUsuarios.reduce(function (
  usuariosAgrupados,
  usuario
) {
  if (usuario.estado === meuEstado) {
    usuariosAgrupados.mesmoEstado.push(usuario);
    return usuariosAgrupados;
  } else {
    usuariosAgrupados.outrosEstados.push(usuario);
    return usuariosAgrupados;
  }
},
objetoUsuarios);

console.log(usuariosPorEstado.mesmoEstado);
console.log(usuariosPorEstado.outrosEstados);
