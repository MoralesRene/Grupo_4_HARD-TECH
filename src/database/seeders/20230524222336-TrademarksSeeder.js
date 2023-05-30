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
    await queryInterface.bulkInsert('Trademarks', [
      {
        name: 'Amd',
       },
      {
        name: 'Intel',
       },
      {
        name: 'Sentey',
       },
      {
        name: 'Gigabyte',
       },
      {
        name: 'Asus',
       },
      {
        name: 'MSI',
       },
      {
        name: 'Corsair',
       },
      {
        name: 'HyperX',
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Trademarks', null, {});
  }
};
