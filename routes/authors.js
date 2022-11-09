const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const validateBodyParams = require("../middlewares/validateBodyParams");
const { check } = require("express-validator");
const router = express.Router();

router.get("/", authentication, AuthorController.getAuthors);
router.get("/id/:id", authentication, AuthorController.getAuthorById);

router.post("/", 
    authentication, 
    isAdmin, 
    [
        check("name", "The name cant be empty.").notEmpty(),
        check("age", "The age cant be empty.").notEmpty(),
        check("genre", "The genre cant be empty.").notEmpty(),
        validateBodyParams
    ],
    AuthorController.createAuthor
);

router.put("/id/:id", authentication, isAdmin, AuthorController.updateAuthor);
router.delete("/id/:id", authentication, isAdmin, AuthorController.deleteAuthor);

module.exports = router;