const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const { checkIfEmailExist } = require("../middlewares/checkIfEmailExist");
const validateBodyParams = require("../middlewares/validateBodyParams");
const { check } = require("express-validator");
const router = express.Router();

router.get("/", authentication, UserController.getUsers);
router.get("/id/:id", authentication, UserController.getUserById);
router.get("/getLoggedUser", authentication, UserController.getLoggedUser);

router.post("/", 
    [
        check("name", "The name cant be empty.").notEmpty(),
        check("email", "The email format is not valid.").isEmail(),
        check("password", "The password cant be empty.").notEmpty(),
        validateBodyParams,
    ],
    checkIfEmailExist,
    UserController.createUser
);

router.put("/id/:id", authentication, UserController.updateUser);
router.delete("/id/:id", authentication, UserController.deleteUser);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;