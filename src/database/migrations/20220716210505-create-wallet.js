'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wallet', {
      codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'Conta',
          key: 'codCliente'
        }
      },
      codAtivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'Acoes',
          key: 'codAtivo'
        }
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
    await queryInterface.dropTable('Wallet');
  }
};