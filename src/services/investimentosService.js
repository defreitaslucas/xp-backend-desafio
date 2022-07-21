const { Acoes, Wallet } = require('../database/models');

const buyStocks = async ({ codCliente, codAtivo, qtdeAtivo }) => {
    const verificaQtd = await Acoes.findByPk(codAtivo, { attributes: ['qtdeAtivo', 'valor'] });
    if (qtdeAtivo > verificaQtd.dataValues.qtdeAtivo) {
      const error = { status: 422, message: 'Quantidade solicitada superior quantidade ofertada' };
      throw error;
    }
    const verificaWallet = await Wallet.findOne({ where: { codCliente, codAtivo } });
    if (!verificaWallet) {
      const valorStock = qtdeAtivo * verificaQtd.dataValues.valor;
      const addWallet = await Wallet.create({ codCliente, codAtivo, qtdeAtivo, valor: valorStock });
      const updateQtdAcoes = verificaQtd.dataValues.qtdeAtivo - qtdeAtivo;
      await Acoes.update({ qtdeAtivo: updateQtdAcoes }, { where: { codAtivo } });
      return addWallet;
    }
    const qtd = qtdeAtivo + verificaWallet.dataValues.qtdeAtivo;
    const valStock = qtd * verificaQtd.dataValues.valor;
    await Wallet.update({ qtdeAtivo: qtd, valor: valStock }, { where: { codCliente, codAtivo } });
    const updateQtdAcoes = verificaQtd.dataValues.qtdeAtivo - qtdeAtivo;
    await Acoes.update({ qtdeAtivo: updateQtdAcoes }, { where: { codAtivo } });
};

const sellStocks = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  const verificaQtdWallet = await Wallet.findOne({ where: { codCliente, codAtivo } });
  if (!verificaQtdWallet || qtdeAtivo > verificaQtdWallet.dataValues.qtdeAtivo) {
    const error = { 
      status: 422, message: 'Você não tem ações suficientes para serem vendidas' };
    throw error;
  }
  const qtd = verificaQtdWallet.dataValues.qtdeAtivo - qtdeAtivo;
  const valorStock = await Acoes.findByPk(codAtivo, { attributes: ['valor', 'qtdeAtivo'] });
  const valorUpdate = verificaQtdWallet.dataValues.valor 
  - (valorStock.dataValues.valor * qtdeAtivo);
  await Wallet.update({ qtdeAtivo: qtd, valor: valorUpdate }, { where: { codCliente, codAtivo } });
  const valorAcoesRetornadas = valorStock.dataValues.qtdeAtivo + qtdeAtivo;
  await Acoes.update({ qtdeAtivo: valorAcoesRetornadas }, { where: { codAtivo } });
};

module.exports = {
  buyStocks,
  sellStocks,
};