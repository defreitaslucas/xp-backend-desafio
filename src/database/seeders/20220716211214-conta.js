'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Conta',
      [{
        codCliente: 100,
        idCliente: 1,
        saldo: 2000.01,
      },
      {
        codCliente: 101,
        idCliente: 2,
        saldo: 1000.05,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Conta', null, {});
  },
};
