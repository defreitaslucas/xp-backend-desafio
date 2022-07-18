'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Client',
      [{
        idCliente: 1,
        login: 'tapa',
        name: 'Lucas de Freitas Abreu',
        email: 'lucas.dfa@live.com',
        password: '123456',
      },
      {
        idCliente: 2,
        login: 'giugiu',
        name: 'Giulia Avelino Mattos',
        email: 'giulia@gmail.com',
        password: '987654',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Client', null, {});
  },
};
