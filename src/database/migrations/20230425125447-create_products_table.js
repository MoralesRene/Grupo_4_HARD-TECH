"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      shortname: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,
      },
      model: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      product_categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "product_categories",
          key: "id",
        },
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "status",
          key: "id",
        },
      },
      trademarks_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "trademarks",
          key: "id",
        },
      },
      families_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "families",
          key: "id",
        },
      },
      warranties_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "warranties",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("products");
  },
};
