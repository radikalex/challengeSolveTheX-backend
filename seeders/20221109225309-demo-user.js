'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("admin", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alex",
        email: "alex@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
