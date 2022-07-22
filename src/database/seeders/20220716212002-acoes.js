'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Acoes',
      [{
        codAtivo: 1,
        descPapel: 'AZUL4',
        qtdeAtivo: 192,
        valor: 100.00
      },
      {
        codAtivo: 2,
        descPapel: 'PETR4',
        qtdeAtivo: 195,
        valor: 50.00
      },
      {
        codAtivo: 3,
        descPapel: 'VALE4',
        qtdeAtivo: 197,
        valor: 70.00
      },
      {
        codAtivo: 4,
        descPapel: 'XPTO',
        qtdeAtivo: 200,
        valor: 80.00
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Acoes', null, {});
  },
};
