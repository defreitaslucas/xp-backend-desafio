const express = require('express');
const { getAllCliente, getAllAssets, assetsWallet } = require('../services/ativosService');

const ativos = express();

ativos.get('/', async (_req, res) => {
  const assetsAll = await assetsWallet();
  return res.status(200).json(assetsAll);
});

ativos.get('/cliente/:id', async (req, res) => {
  const { id } = req.params;
  const assetsCliente = await getAllCliente(id);
  return res.status(200).json(assetsCliente);
});

ativos.get('/assets/:id', async (req, res) => {
  const { id } = req.params;
  const allAssets = await getAllAssets(id);
  return res.status(200).json(allAssets);
});

module.exports = ativos;