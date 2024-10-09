const express = require('express');

const app = express();
const port = 4000;

const products = [
  { productId: 1, title: "Producto 01" },
  { productId: 2, title: "Producto 02" }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Servidor API de productos ejecutándose en http://localhost:${port}`);
});
