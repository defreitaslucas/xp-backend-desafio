const express = require('express');
const { buyStocks } = require('../services/investimentosService');

const investimento = express();

investimento.post('/comprar', async (req, res) => {
  await buyStocks(req.body);
  return res.status(200).json({ message: 'Compra realizada com sucesso.' });
});

module.exports = investimento;