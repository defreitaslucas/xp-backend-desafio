const { Conta } = require('../database/models');

const depositMoney = async ({ codCliente, valor }) => {
  const verificaCliente = await Conta.findOne({ where: { codCliente } });
  if (!verificaCliente) {
    const error = {
      status: 404, message: 'Número da conta não encontrado' };
    throw error;
  }
  const saldo = Number(verificaCliente.dataValues.saldo) + valor;
  await Conta.update({ saldo }, { where: { codCliente } });
};

module.exports = {
  depositMoney,
};