const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", authentication, AuthorController.getAuthors);
router.get("/id/:id", authentication, AuthorController.getAuthorById);
router.post("/", authentication, isAdmin, AuthorController.createAuthor);
router.put("/id/:id", authentication, isAdmin, AuthorController.updateAuthor);
router.delete("/id/:id", authentication, isAdmin, AuthorController.deleteAuthor);

module.exports = router;