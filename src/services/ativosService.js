const { Wallet, Acoes } = require('../database/models');

// lista de todas as ações e a qtd nas carteiras
const assetsWallet = async () => {
  const getAll = await Acoes.findAll({
    include: [{
    model: Wallet,
    as: 'Wallet',
    attributes: { exclude: ['codCliente', 'codAtivo', 'valor'] },
  }],
});
  return getAll;
};
const getAllCliente = async (id) => {
  const codCliente = Number(id);
  const getAll = await Wallet
  .findAll({ where: { codCliente },
attributes: { exclude: ['valor'] },
include: [{
    model: Acoes,
    as: 'Acoes',
    attributes: { exclude: ['codAtivo', 'descPapel', 'qtdeAtivo'] },
  }] });
  if (!getAll) {
    const error = {
      status: 404, message: 'Número da conta não encontrado' };
    throw error;
  }
  return getAll;
};

const getAllAssets = async (id) => {
  const codAtivo = Number(id);
  const getAllAtivos = await Acoes.findOne({ where: { codAtivo }, exclude: ['descPapel'] });
  if (!getAllAtivos) {
    const error = {
      status: 404, message: 'Número do ativo não encontrado' };
    throw error;
  }
  return getAllAtivos;
};

module.exports = {
  assetsWallet,
  getAllCliente,
  getAllAssets,
};