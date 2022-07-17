'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Acoes', {
      codAtivo: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      descPapel: {
        type: Sequelize.STRING,
      },
      qtdeAtivo: {
        type: Sequelize.INTEGER,
      },
      valor: {
        type: Sequelize.DECIMAL(10,2),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Acoes');
  }
};