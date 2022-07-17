'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wallet', {
      idAtivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'Acoes',
          key: 'idAcao'
        }
      },
      idConta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'Conta',
          key: 'idConta'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
      },
      valor: {
        type: Sequelize.DECIMAL(10,2),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Wallet');
  }
};