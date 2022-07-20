'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Cliente',
      [{
        idCliente: 1,
        name: 'Lucas de Freitas Abreu',
        username: 'tapa',
        email: 'lucas.dfa@live.com',
        password: 'lucas12345',
      },
      {
        idCliente: 2,
        name: 'Giulia Avelino Mattos',
        username: 'Giu',
        email: 'giulia@gmail.com',
        password: 'giulia12345',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Cliente', null, {});
  },
};
