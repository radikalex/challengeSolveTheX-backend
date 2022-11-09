const express = require("express");
const upload = require("../middlewares/upload");
const BookController = require("../controllers/BookController");
const router = express.Router();

router.get("/", BookController.getBooks);
router.get("/:id", BookController.getBookById);
router.post("/", upload.single('img_book'), BookController.createBook);
router.put("/:id", upload.single('img_book'), BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

module.exports = router;