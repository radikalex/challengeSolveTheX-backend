const { Order, Order_book, Book, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const OrderController = {
    async createOrder(req, res) {
        try {
            const order = await Order.create( { status: req.body.status, UserId: req.body.UserId } );
            for (const book of req.body.books) {
                Order_book.create({
                    OrderId: order.id,
                    BookId: book.id,
                    amount: book.amount,
                });
              }
            res.status(201).send({ msg: "Order added successfully", order });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while adding new order", error } )
        }
    },

    async getOrders(req, res) {
        try {
            const orders = await Order.findAll({ include: [Book] });
            res.status(200).send({ msg: "All orders", orders });
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting the orders", error } )
        }
    },

    async getOrderById(req, res) {
        try {
            const order = await Order.findOne({ 
                include: [Book],
                where: {
                    id: req.params.id 
                }
            });
            if(order)
                res.status(200).send({ msg: `Order whith id ${req.params.id}`, order });
            else
                res.status(200).send({ msg: `No order with id ${req.params.id}`});
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an order by id", error } )
        }
    },

    async updateOrder(req, res) {
        try {
            const rows_affected = await Order.update( req.body, {
                where: {
                    id: req.params.id,
                },
            });
            if (rows_affected[0]) {
                res.send({ msg: `Order with id ${req.params.id} updated` });
            } else {
                res.status(404).send({ msg: `No order with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an order by id", error } )
        }
    },

    async deleteOrder(req, res) {
        try {
            const rows_affected = await Order.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (rows_affected) {
                res.send({ msg: `Order with id ${req.params.id} deleted` });
            } else {
                res.status(404).send({ msg: `No order with id ${req.params.id} found` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send( {  msg: "An error occurred while getting an order by id", error } )
        }
    },
};

module.exports = OrderController;