'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Conta',
      [{
        idConta: 100,
        idClient: 1,
        saldo: 2000.01,
      },
      {
        idConta: 101,
        idClient: 2,
        saldo: 1000.05,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Conta', null, {});
  },
};
