'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        name: "The final empire",
        img_book: "default/the-final-empire.jpg",
        genre: "Fantastic literature",
        num_pages: 650,
        price: 13.5,
        AuthorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Way of Kings",
        img_book: "default/the-final-empire.jpg",
        genre: "Fantastic literature",
        num_pages: 1281,
        price: 22.25,
        AuthorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tales of Horror",
        img_book: "default/tales-of-horror.jpg",
        genre: "Horror",
        num_pages: 768,
        price: 19.49,
        AuthorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Harry Potter and the Half-Blood Prince",
        img_book: "default/harry-potter-6.jpg",
        genre: "Fantasy",
        num_pages: 652,
        price: 15.62,
        AuthorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Complete Tales of H.P. Lovecraft",
        img_book: "default/complete-tales-lovecraft.jpg",
        genre: "Horror",
        num_pages: 1564,
        price: 27.60,
        AuthorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
