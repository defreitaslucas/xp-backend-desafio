const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const accountModel = require('../database/models/accountModel');
const clientModel = require('../database/models/clientModel');
const stockModel = require('../database/models/stockModel');
const walletModel = require('../database/models/walletModel');

describe('Verifica os nomes e propriedades das models', () => {
    const Conta = accountModel(sequelize, dataTypes);
    const conta = new Conta();
    checkModelName(Conta)('Conta');
    context('properties', () => {
      ['codCliente', 'idCliente', 'saldo'].forEach(checkPropertyExists(conta));
    });

    const Cliente = clientModel(sequelize, dataTypes);
    const cliente = new Cliente();
    checkModelName(Cliente)('Cliente');
    context('properties', () => {
      ['idCliente', 'name', 'username', 'email', 'password'].forEach(checkPropertyExists(cliente));
    });

    const Acoes = stockModel(sequelize, dataTypes);
    const acoes = new Acoes();
    checkModelName(Acoes)('Acoes');
    context('properties', () => {
      ['codAtivo', 'descPapel', 'qtdeAtivo', 'valor'].forEach(checkPropertyExists(acoes));
    });

    const Wallet = walletModel(sequelize, dataTypes);
    const wallet = new Wallet();
    checkModelName(Wallet)('Wallet');
    context('properties', () => {
      ['codCliente', 'codAtivo', 'qtdeAtivo', 'valor'].forEach(checkPropertyExists(wallet));
    });
});