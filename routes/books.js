const express = require("express");
const upload = require("../middlewares/upload");
const BookController = require("../controllers/BookController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", authentication, BookController.getBooks);
router.get("/id/:id", authentication, BookController.getBookById);
router.post("/", authentication, isAdmin, upload.single('img_book'), BookController.createBook);
router.put("/id/:id", authentication, isAdmin, upload.single('img_book'), BookController.updateBook);
router.delete("/id/:id", authentication, BookController.deleteBook);

module.exports = router;