const express = require('express');
const { depositMoney, cashWithdrawal, getByCliente } = require('../services/contaService');
const { validateConta } = require('../middlewares/validationConta');

const conta = express();

conta.post('/deposito', validateConta, async (req, res) => {
  await depositMoney(req.body);
  return res.status(201).json({ message: 'Depósito realizado com sucesso.' });
});

conta.post('/saque', validateConta, async (req, res) => {
  await cashWithdrawal(req.body);
  return res.status(201).json({ message: 'Valor regastado com sucesso.' });
});

conta.get('/:id', async (req, res) => {
  const { id } = req.params;
  const clienteConta = await getByCliente(id);
  return res.status(200).json(clienteConta);
});

module.exports = conta;