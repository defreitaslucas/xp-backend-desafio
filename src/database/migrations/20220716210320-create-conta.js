'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Conta', {
      codCliente: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'Client',
          key: 'idCliente'
        }
      },
      saldo: {
        type: Sequelize.DECIMAL(10,2),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Conta');
  }
};