const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", authentication, UserController.getUsers);
router.get("/id/:id", authentication, UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/id/:id", authentication, UserController.updateUser);
router.delete("/id/:id", authentication, UserController.deleteUser);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;