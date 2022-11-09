const { User, Sequelize } = require("../models/index");
const bcrypt = require("bcryptjs");
const { Op } = Sequelize;

const UserController = {
    async createUser(req, res) {
        try {
            req.body.role = "user";
            const password = bcrypt.hashSync(req.body.password, 10);
            const user = await User.create({ ...req.body, password: password });
            res.status(201).send({ msg: "User added successfully", user });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while adding new user", error } )
        }
    },

    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).send({ msg: "All users", users });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting the users", error } )
        }
    },

    async getUserById(req, res) {
        try {
            const user = await User.findOne({ 
                where: {
                    id: req.params.id 
                }
            });
            if(user)
                res.status(200).send({ msg: `User whith id ${req.params.id}`, user });
            else
                res.status(200).send({ msg: `No user with id ${req.params.id}`});
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an user by id", error } )
        }
    },

    async updateUser(req, res) {
        try {
            const password = bcrypt.hashSync(req.body.password, 10);
            const rows_affected = await User.update( { ...req.body, password: password }, {
                where: {
                    id: req.params.id,
                },
            });
            if (rows_affected[0]) {
                res.send({ msg: `User with id ${req.params.id} updated` });
            } else {
                res.status(404).send({ msg: `No user with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an user by id", error } )
        }
    },

    async deleteUser(req, res) {
        try {
            const rows_affected = await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (rows_affected) {
                res.send({ msg: `User with id ${req.params.id} deleted` });
            } else {
                res.status(404).send({ msg: `No user with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an user by id", error } )
        }
    },
};

module.exports = UserController;