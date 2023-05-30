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
    await queryInterface.bulkInsert('Product_Images', [
      {
         url: '39186_1.jpg',
         is_primary: true,
         products_id: 1,
       },
      {
         url: '39186_2.jpeg',
         is_primary: false,
         products_id: 1,
       },
      {
         url: '39186_3.jpeg',
         is_primary: false,
         products_id: 1,
       },
      {
         url: '15853_1.png',
         is_primary: true,
         products_id: 2,
       },
      {
         url: '15853_2.png',
         is_primary: false,
         products_id: 2,
       },
      {
         url: '15853_3.png',
         is_primary: false,
         products_id: 2,
       },
      {
         url: '39394_1.jpeg',
         is_primary: true,
         products_id: 3,
       },
      {
         url: '39394_2.jpeg',
         is_primary: false,
         products_id: 3,
       },
      {
         url: '39394_3.jpeg',
         is_primary: false,
         products_id: 3,
       },
      {
         url: '36216_0.png',
         is_primary: true,
         products_id: 4,
       },
      {
         url: '36216_1.jpeg',
         is_primary: false,
         products_id: 4,
       },
      {
         url: '36216_2.jpeg',
         is_primary: false,
         products_id: 4,
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
    await queryInterface.bulkDelete('Product_Images', null, {});
  }
};
