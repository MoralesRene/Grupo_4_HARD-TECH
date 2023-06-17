'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('orderitems', { 
      id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      orders_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      products_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      });
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('orderitems');
  }
};
