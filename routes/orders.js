const express = require("express");
const OrderController = require("../controllers/OrderController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const validateBodyParams = require("../middlewares/validateBodyParams");
const { check } = require("express-validator");
const router = express.Router();

router.get("/", authentication, OrderController.getOrders);
router.get("/id/:id", authentication, OrderController.getOrderById);
router.get("/getOrdersOfLoggedUser", authentication, OrderController.getOrdersOfLoggedUser);

router.post("/", 
    authentication, 
    [
        check("status", "The status cant be empty.").notEmpty(),
        check("books", "The books cant be empty.").notEmpty(),
        validateBodyParams
    ],
    OrderController.createOrder
);

router.put("/id/:id", authentication, isAdmin, OrderController.updateOrder);
router.delete("/id/:id", authentication, isAdmin, OrderController.deleteOrder);

module.exports = router;