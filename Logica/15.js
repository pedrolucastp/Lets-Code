/* Utilize o método filter para determinar quais restaurantes estão abertos no horário atual. */

// new Date().getHours() para retornar o horário atual

const restaurantes = [
  {
    nome: "Pizzaria do Mario",
    horario_abertura: 14,
    horario_fechamento: 23,
  },
  {
    nome: "Churrascaria do Ronaldo",
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: "Bar do Zeca",
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: "Doceria da Mara",
    horario_abertura: 8,
    horario_fechamento: 20,
  },
];

const horarioAtual = new Date().getHours();

console.log("Horario atual: ", horarioAtual);

const restaurantesAbertos = restaurantes.filter((restaurante) => {
  const aberturaVaiAteProximoDia =
    restaurante.horario_fechamento < restaurante.horario_abertura;

  const horarioDeFechamentoReajustado = aberturaVaiAteProximoDia
    ? restaurante.horario_fechamento + 24
    : restaurante.horario_fechamento;

  const estaAberto =
    horarioAtual >= restaurante.horario_abertura &&
    horarioAtual < horarioDeFechamentoReajustado;

  return estaAberto;
});

restaurantesAbertos.forEach((restaurantesAberto) => {
  console.log(restaurantesAberto.nome, "está aberto");
});

// console.log(restaurantesAbertos);
