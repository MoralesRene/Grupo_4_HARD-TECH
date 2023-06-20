'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: "pruebaSeeder@gmail.com",
        phone: 1122334455,
        dni: 14142525,
        birthday: 1997-12-24,
        avatar: "default.jpg",
        password: "hola123",
        roles_id: 1,
      },
      {
        name: 'Maria Gualdo',
        email: "pruebaSeeder2@gmail.com",
        phone: 1122334455,
        dni: 14142525,
        birthday: 1997-12-24,
        avatar: "default.jpg",
        password: "hola123",
        roles_id: 1,
      },
      {
        name: 'Juana de Arco',
        email: "pruebaSeeder3@gmail.com",
        phone: 1122334455,
        dni: 14142525,
        birthday: 1997-12-24,
        avatar: "default.jpg",
        password: "hola123",
        roles_id: 1,
      },
      {
        name: 'Esteban Perez',
        email: "pruebaSeeder4@gmail.com",
        phone: 1122334455,
        dni: 14142525,
        birthday: 1997-12-24,
        avatar: "default.jpg",
        password: "hola123",
        roles_id: 2,
      },
      {
        name: 'Nicolas Dominguez',
        email: "pruebaSeeder5@gmail.com",
        phone: 1122334455,
        dni: 14142525,
        birthday: 1997-12-24,
        avatar: "default.jpg",
        password: "hola123",
        roles_id: 2,
      },

      
    
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('Users', null, {});
  }
};
