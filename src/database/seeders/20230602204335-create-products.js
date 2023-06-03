'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [
      {
        name: "Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4",
        description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
        price: 55000,
        model: "Ryzen 3 3200G",
        product_categories_id: 2,
        status_id: 1,
        trademarks_id: 1,
        families_id: 2,
        warranties_id: 5,
      },
      {
        name: "Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4",
        description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
        price: 57000,
        model: "Ryzen 3 3200G",
        product_categories_id: 2,
        status_id: 1,
        trademarks_id: 1,
        families_id: 2,
        warranties_id: 5,
      },
      {
        name: "Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4",
        description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
        price: 83000,
        model: "Ryzen 3 3200G",
        product_categories_id: 2,
        status_id: 1,
        trademarks_id: 1,
        families_id: 2,
        warranties_id: 5,
      },
      {
        name: "Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4",
        description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
        price: 18000,
        model: "Ryzen 3 3200G",
        product_categories_id: 2,
        status_id: 1,
        trademarks_id: 1,
        families_id: 2,
        warranties_id: 5,
      },
      {
        name: "Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4",
      description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
      price: 43000,
      model: "Ryzen 3 3200G",
      product_categories_id: 2,
      status_id: 1,
      trademarks_id: 1,
      families_id: 2,
      warranties_id: 5,
      },
      {
        name: "Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4",
      description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
      price: 24000,
      model: "Ryzen 3 3200G",
      product_categories_id: 2,
      status_id: 1,
      trademarks_id: 1,
      families_id: 2,
      warranties_id: 5,
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:  */
    await queryInterface.bulkDelete('Products', null, {});

  }
};
