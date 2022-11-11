const { Book, Sequelize } = require("../models/index");
const { Op } = Sequelize;
const { unlink } = require("fs/promises");
const path = require("path");

const BookController = {
    async createBook(req, res) {
        try {
            const book = await Book.create( req.body );
            res.status(201).send({ msg: "Book added successfully", book });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while adding new book", error } )
        }
    },

    async getBooksFilterName(req, res) {
        try {
            const books = await Book.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.query.name}%`,
                    }
                }
            });
            res.status(200).send({ msg: `All books with ${req.query.name} in their name`, books });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting the books filter by name", error } )
        }
    },

    async getBooks(req, res) {
        try {
            const books = await Book.findAll();
            res.status(200).send({ msg: "All books", books });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting the books", error } )
        }
    },

    async getBookById(req, res) {
        try {
            const book = await Book.findOne({ 
                where: {
                    id: req.params.id 
                }
            });
            if(book)
                res.status(200).send({ msg: `Book whith id ${req.params.id}`, book });
            else
                res.status(200).send({ msg: `No book with id ${req.params.id}`});
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an book by id", error } )
        }
    },

    async updateBook(req, res) {
        try {
            const book = await Book.findByPk(req.params.id);
            if (book) {
                await Book.update( req.body, {
                    where: {
                        id: req.params.id,
                    },
                });
                res.send({ msg: `Book with id ${req.params.id} updated` });
            } else {
                res.status(404).send({ msg: `No book with id ${req.params.id} found` });
            }
            if (book.img_book !== req.body.img_book && !/default\/.*/gm.test(book.img_book)) {
                const dir = path.resolve("./book_images");
                await unlink(path.join(dir, book.img_book));
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an book by id", error } )
        }
    },

    async deleteBook(req, res) {
        try {
            const book = await Book.findByPk(req.params.id);
            if (book) {
                if (!/default\/.*/gm.test(book.img_book)) {
                    const dir = path.resolve("./book_images");
                    await unlink(path.join(dir, book.img_book));
                }
                await Book.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                res.send({ msg: `Book with id ${req.params.id} deleted` });
            } else {
                res.status(404).send({ msg: `No book with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an book by id", error } )
        }
    },
};

module.exports = BookController;