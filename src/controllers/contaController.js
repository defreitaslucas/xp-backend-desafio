const express = require('express');
const { depositMoney, cashWithdrawal } = require('../services/contaService');

const conta = express();

conta.post('/deposito', async (req, res) => {
  await depositMoney(req.body);
  return res.status(201).json({ message: 'Depósito realizado com sucesso.' });
});

conta.post('/saque', async (req, res) => {
  await cashWithdrawal(req.body);
  return res.status(201).json({ message: 'Valor regastado com sucesso.' });
});

conta.get('/:id', async (_req, _res) => {
  
});

module.exports = conta;