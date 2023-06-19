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
        name: 'Motherboard AM4 - Msi B550 TOMAHAWK',
        description: "La serie MAG nació a través de rigurosas pruebas de calidad y está diseñada para ser un símbolo de robustez y durabilidad. Centrada en proporcionar la mejor experiencia de usuario, la serie MAG tiene un proceso de instalación simple junto con una interfaz de usuario amigable que la convierte en la mejor opción para los jugadores de nivel básico.",
        price: 49000,
        model: "B550 TOMAHAWK",
        product_categories_id: 1,
        status_id: 1,
        trademarks_id: 6,
        families_id: 2,
        warranties_id: 5,
        stock:10
      },
      {
        name: 'MOTHERBOARD GIGABYTE GA-H310M-H S1151',
        description: "Soporte de hasta 8 º Intel Generación ® procesador Core ™ i7 / Intel ® Core i5 ™ / Intel ® Core i3 ™ / Intel ® Pentium ® procesadores / Intel ® Celeron ® procesadores en el paquete LGA1151,2 zócalos DIMM DDR4 que admiten hasta 32 GB de memoria del sistema",
        price: 23000,
        model: "GA-H310M-H S1151",
        product_categories_id: 1,
        status_id: 1,
        trademarks_id: 4,
        families_id: 1,
        warranties_id: 4,
        stock:4
      },
      {
        name: 'Motherboard AM4 - Gigabyte GA-B550 AORUS ELITE V2',
        description: "Placa base AMD B550 AORUS con diseño de energía gemela digital de 12+2 fases, disipadores térmicos de superficie ampliada, PCIe 4.0/3.0 x4 M.2 dual con protectores térmicos duales, Intel ® WiFi 6 802.11ax, LAN de 2,5 GbE, USB  Type-C™ frontal, RGB FUSIÓN 2.0, Q-Flash Plus",
        price: 72000,
        model: "B550 AORUS ELITE V2",
        product_categories_id: 1,
        status_id: 1,
        trademarks_id: 4,
        families_id: 2,
        warranties_id: 5,
        stock:7
      },
      {
        name: 'Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4',
        description: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.Memoria caché de 4 MB, rápida y volátil.Procesador gráfico Radeon Vega 8 Graphics.Soporta memoria RAM DDR4.Su potencia es de 65 W.Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.",
        price: 37000,
        model: "Ryzen 3 3200G",
        product_categories_id: 2,
        status_id: 1,
        trademarks_id: 1,
        families_id: 2,
        warranties_id: 5,
        stock:3
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
