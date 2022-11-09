const express = require("express");
const OrderController = require("../controllers/OrderController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", authentication, OrderController.getOrders);
router.get("/id/:id", authentication, OrderController.getOrderById);
router.post("/", authentication, OrderController.createOrder);
router.put("/id/:id", authentication, isAdmin, OrderController.updateOrder);
router.delete("/id/:id", authentication, isAdmin, OrderController.deleteOrder);

module.exports = router;