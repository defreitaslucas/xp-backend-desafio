'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Client', {
      idCliente: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Client');
  }
};