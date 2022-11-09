const { Author, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const AuthorController = {
    async createAuthor(req, res) {
        try {
            const author = await Author.create( req.body );
            res.status(201).send({ msg: "Author added successfully", author });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while adding new author", error } )
        }
    },

    async getAuthors(req, res) {
        try {
            const authors = await Author.findAll();
            res.status(200).send({ msg: "All authors", authors });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting the authors", error } )
        }
    },

    async getAuthorById(req, res) {
        try {
            const author = await Author.findOne({ 
                where: {
                    id: req.params.id 
                }
            });
            if(author)
                res.status(200).send({ msg: `Author whith id ${req.params.id}`, author });
            else
                res.status(200).send({ msg: `No author with id ${req.params.id}`});
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an author by id", error } )
        }
    },

    async updateAuthor(req, res) {
        try {
            const rows_affected =await Author.update( req.body, {
                where: {
                    id: req.params.id,
                },
            });
            if (rows_affected[0]) {
                res.send({ msg: `Author with id ${req.params.id} updated` });
            } else {
                res.status(404).send({ msg: `No author with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an author by id", error } )
        }
    },

    async deleteAuthor(req, res) {
        try {
            const rows_affected = await Author.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (rows_affected) {
                res.send({ msg: `Author with id ${req.params.id} deleted` });
            } else {
                res.status(404).send({ msg: `No author with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an author by id", error } )
        }
    },
};

module.exports = AuthorController;