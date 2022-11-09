'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Authors", [
      {
        name: "Brandon Sanderson",
        age: 46,
        genre: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "H. P. Lovecraft",
        age: 132,
        genre: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "J. K. Rowling",
        age: 57,
        genre: "female",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
