/* Utilize a biblioteca faker em seu index.html:
e o seguinte código no seu script para gerar usuários aleatórios

```jsx
faker.locale = "pt_BR"

const usersAmount = 100

const usuarios = Array.from({ length: usersAmount }, () => {
  return  {
    nome: faker.name.findName(),
    estado: faker.address.stateAbbr()
  }
})
```

Agora retorne um novo objeto com o seguinte formato como exemplo:

```json
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
``` */