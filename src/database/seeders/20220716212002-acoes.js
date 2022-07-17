'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Acoes',
      [{
        idAcao: 1,
        descPapel: 'AZUL4',
        quantidade: 200,
        valor: 100.00
      },
      {
        idAcao: 2,
        descPapel: 'PETR4',
        quantidade: 200,
        valor: 50.00
      },
      {
        idAcao: 3,
        descPapel: 'VALE4',
        quantidade: 200,
        valor: 70.00
      },
      {
        idAcao: 4,
        descPapel: 'XPTO',
        quantidade: 200,
        valor: 80.00
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Acoes', null, {});
  },
};
