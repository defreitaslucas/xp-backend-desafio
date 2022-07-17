const { Acoes, Wallet } = require('../database/models');

const buyStocks = async ({ codCliente, codAtivo, qtdeAtivo }) => {
    const verificaQtd = await Acoes.findByPk(codAtivo, { attributes: ['qtdeAtivo'] });
    if (qtdeAtivo > verificaQtd.dataValues.qtdeAtivo) {
      const error = { 
        status: 422, message: 'Quantidade solicitada superior a quantidade ofertada' };
      throw error;
    }
    await Wallet.create({ codCliente, codAtivo, qtdeAtivo, valor: null });
};

const sellStocks = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  const verificaQtd = await Wallet.findByPk(codAtivo, { attributes: ['qtdeAtivo'] });
  if (qtdeAtivo > verificaQtd.dataValues.qtdeAtivo) {
    const error = { 
      status: 422, message: 'Você não tem ações suficientes para serem vendidas' };
    throw error;
  }
  const saldo = verificaQtd.dataValues.qtdeAtivo - qtdeAtivo;
  if (saldo === 0) await Wallet.destroy({ where: { codCliente, codAtivo } });

  await Wallet
  .update({ qtdeAtivo: saldo }, { where: { codCliente, codAtivo } });
};

module.exports = {
  buyStocks,
  sellStocks,
};