'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(models.Order, { through: models.Order_book });
      Book.belongsTo(models.Author);
    }
  }
  Book.init({
    name: DataTypes.STRING,
    img_product: DataTypes.STRING,
    genre: DataTypes.STRING,
    num_pages: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    AuthorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};