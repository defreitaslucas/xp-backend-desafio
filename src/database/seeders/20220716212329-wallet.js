'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Wallet',
      [{
        idAtivo: 1,
        idConta: 100,
        quantidade: 3,
        valor: 300.00
      },
      {
        idAtivo: 2,
        idConta: 100,
        quantidade: 4,
        valor: 200.00
      },
      {
        idAtivo: 3,
        idConta: 100,
        quantidade: 3,
        valor: 210.00
      },
      {
        idAtivo: 1,
        idConta: 101,
        quantidade: 5,
        valor: 500.00
      },
      {
        idAtivo: 2,
        idConta: 101,
        quantidade: 1,
        valor: 50.00
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Wallet', null, {});
  },
};
