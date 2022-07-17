'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Wallet',
      [{
        codCliente: 100,
        codAtivo: 1,
        qtdeAtivo: 3,
        valor: 300.00
      },
      {
        codCliente: 100,
        codAtivo: 2,
        qtdeAtivo: 4,
        valor: 200.00
      },
      {
        codCliente: 100,
        codAtivo: 3,
        qtdeAtivo: 3,
        valor: 210.00
      },
      {
        codCliente: 101,
        codAtivo: 1,
        qtdeAtivo: 5,
        valor: 500.00
      },
      {
        codCliente: 101,
        codAtivo: 2,
        qtdeAtivo: 1,
        valor: 50.00
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Wallet', null, {});
  },
};
