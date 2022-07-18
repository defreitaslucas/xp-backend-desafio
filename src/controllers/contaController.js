const express = require('express');
const { depositMoney } = require('../services/contaService');

const conta = express();

conta.post('/deposito', async (req, res) => {
  await depositMoney(req.body);
  return res.status(201).json({ message: 'Depósito realizado com sucesso.' });
});

conta.post('/saque', async (_req, _res) => {
  
});

conta.get('/:id', async (_req, _res) => {
  
});

module.exports = conta;