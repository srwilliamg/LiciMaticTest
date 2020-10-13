'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('grants', {
      idGrant: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      agency: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      postedDate: {
        type: Sequelize.DATE
      },
      closeDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('grants');
  }
};