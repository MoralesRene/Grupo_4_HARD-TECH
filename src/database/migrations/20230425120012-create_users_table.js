'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      phone: {
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      avatar: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      locality: {
        type: Sequelize.TEXT,
      },
      adress: {
        type: Sequelize.TEXT,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      roles_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id"
        }
      }

    });
  },
  async down(queryInterface, Sequelize) {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
  await queryInterface.dropTable('users');
  }
};
