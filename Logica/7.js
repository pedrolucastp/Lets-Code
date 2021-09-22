/* Com os perfis aleatórios gerados acima, formate-os como um arquivo csv. Dica: um arquivo csv tem seus campos separados por vígula e pode ser representado no seguinte formato:
    const planilha = "
    nome, email, telefone, avatar\n
    Fulano, fulano@email.com, 1234-5678, https://google.com.br\n
    Ciclano, ciclano@email.com, 5678- 9102, https://google.com.br\n
    "
*/

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

let csv = "nome, email, telefone, avatar\n";

function geraCsv(perfis) {
  for (cadaPerfil of perfis) {
    // console.log(cadaPerfil)
    for (cadaCampo in cadaPerfil) {
      info = cadaPerfil[cadaCampo]; //console.log(info)
      csv = csv + info + ", ";
    }
    csv = csv.slice(0, -2) + "\n";
  }
}

geraCsv(listaDePerfis);
console.log(csv);
