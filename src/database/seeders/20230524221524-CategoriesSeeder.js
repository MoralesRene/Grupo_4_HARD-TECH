'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Product_Categories', [
      {
        name: "Motherboard"
       },
      {
        name: "Procesadores"
       },
      {
        name: "Fuentes"
       },
      {
        name: "Memorias"
       },
      {
        name: "GPUs"
       },
      {
        name: "Perifericos"
       },
      {
        name: "PCs"
       },
      {
        name: "Almacenamiento"
       },
      {
        name: "Gabinetes"
       },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Product_Categories', null, {});
  }
  
};
