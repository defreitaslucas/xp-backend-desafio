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

const cashWithdrawal = async ({ codCliente, valor }) => {
  const verificaSaldo = await Conta.findOne({ where: { codCliente } });
  if (!verificaSaldo) {
    const error = {
      status: 404, message: 'Número da conta não encontrado' };
    throw error;
  }
  if (valor > Number(verificaSaldo.dataValues.saldo)) {
    const error = {
      status: 422, message: 'O valor a ser sacado é maior que o saldo em conta' };
      throw error;
  }
  const saldo = Number(verificaSaldo.dataValues.saldo) - valor;
  await Conta.update({ saldo }, { where: { codCliente } });
};

module.exports = {
  depositMoney,
  cashWithdrawal,
};