const { Acoes, Wallet } = require('../database/models');

const buyStocks = async ({ codCliente, codAtivo, qtdeAtivo }) => {
    const verificaQtd = await Acoes.findByPk(codAtivo, { attributes: ['qtdeAtivo', 'valor'] });
    if (qtdeAtivo > verificaQtd.dataValues.qtdeAtivo) {
      const error = { 
        status: 422, message: 'Quantidade solicitada superior a quantidade ofertada' };
      throw error;
    }
    const verificaWallet = await Wallet.findOne({ where: { codCliente, codAtivo } });
    if (!verificaWallet) {
      const valorStock = qtdeAtivo * verificaQtd.dataValues.valor;
      const createWallet = await Wallet
      .create({ codCliente, codAtivo, qtdeAtivo, valor: valorStock });
      return createWallet;
    }
    const updateSaldo = qtdeAtivo + verificaWallet.dataValues.qtdeAtivo;
    const valorStock = updateSaldo * verificaQtd.dataValues.valor;
    await Wallet
    .update({ qtdeAtivo: updateSaldo, valor: valorStock }, { where: { codCliente, codAtivo } });
};

const sellStocks = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  const verificaQtd = await Wallet
  .findOne({ attributes: ['qtdeAtivo', 'valor'] }, { where: { codCliente, codAtivo } });
  if (qtdeAtivo > verificaQtd.dataValues.qtdeAtivo) {
    const error = { 
      status: 422, message: 'Você não tem ações suficientes para serem vendidas' };
    throw error;
  }
  const saldo = verificaQtd.dataValues.qtdeAtivo - qtdeAtivo;
  const valorStock = await Acoes.findByPk(codAtivo, { attributes: ['valor'] });
  const valorUpdate = verificaQtd.dataValues.valor 
  - (valorStock.dataValues.valor * qtdeAtivo);
  await Wallet
  .update({ qtdeAtivo: saldo, valor: valorUpdate }, { where: { codCliente, codAtivo } });
};

module.exports = {
  buyStocks,
  sellStocks,
};