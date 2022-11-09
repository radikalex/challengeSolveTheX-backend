const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const router = express.Router();

router.get("/", AuthorController.getAuthors);
router.get("/:id", AuthorController.getAuthorById);
router.post("/", AuthorController.createAuthor);
router.put("/:id", AuthorController.updateAuthor);
router.delete("/:id", AuthorController.deleteAuthor);

module.exports = router;