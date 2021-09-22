/* Importando a lib:
<script src="https://cdn.jsdelivr.net/gh/marak/Faker.js/dist/faker.min.js></script>

Gere perfis aleatórios para 5 usuários com as seguintes informações:
- Nome, email, telefone, avatar.

Obs: Métodos para geração destes valores estão disponíveis no repositório 
do projeto do github [https://github.com/marak/Faker.js/](https://github.com/marak/Faker.js/) */

faker.locale = "pt_BR";

const listaDePerfis = [];
const quantidaDePerfis = parseInt(prompt("Digite uma quantidade de perfis"));
let i = 0;
function geraPerfis(numeroDePerfis) {
  while (i < numeroDePerfis) {
    let perfil = {
      nome: faker.name.findName(),
      email: faker.internet.email(),
      telefone: faker.phone.phoneNumber(),
      avatar: faker.image.avatar(),
    };
    listaDePerfis.push(perfil);
    i++;
  }
}
geraPerfis(quantidaDePerfis);
console.log(listaDePerfis);
