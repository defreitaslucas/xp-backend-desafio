const express = require('express');
const { buyStocks, sellStocks } = require('../services/investimentosService');

const investimento = express();

investimento.post('/comprar', async (req, res) => {
  await buyStocks(req.body);
  return res.status(201).json({ message: 'Compra realizada com sucesso.' });
});

investimento.post('/vender', async (req, res) => {
  await sellStocks(req.body);
  return res.status(201).json({ message: 'Venda realizada com sucesso.' });
});

module.exports = investimento;