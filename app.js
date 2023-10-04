const express = require("express");
const cors = require("cors"); // Importe o módulo cors

const app = express();
const port = process.env.PORT || 3000;

// Use o cors no seu aplicativo Express
app.use(cors());

// Simulando uma lista de itens
const items = [
  {
    id: 6,
    filial: [
      {
        title: "Filial 1",
        id: 11111,
      },
      {
        title: "Filial 2",
        id: 222222,
      },
    ],
    name: "INSTITUTO TOTVS DE ENSINO SA",
    other: 'Testando Concat'
  },
  {
    id: 2,
    filial: {
      title: "Outra filial",
      id: 33333,
    },
    name: "TOTVS",
    other: 'Testando Concat 2'
  },
];

// Rota para obter todos os itens
app.get("/items", (req, res) => {
  res.json(items);
});

// Rota para obter um item por ID
app.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return res.status(404).json({ message: "Item não encontrado" });
  }

  res.json(item);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
