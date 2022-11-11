const express = require("express");
const upload = require("../middlewares/upload");
const BookController = require("../controllers/BookController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const validateBodyParams = require("../middlewares/validateBodyParams");
const { check } = require("express-validator");
const router = express.Router();

router.get("/", authentication, BookController.getBooks);
router.get("/id/:id", authentication, BookController.getBookById);
router.get("/getBooksFilterName", authentication, BookController.getBooksFilterName);

router.post("/", 
    authentication, 
    isAdmin, 
    upload.single('img_book'),
    [
        check('name', 'The name cant be empty.').notEmpty(),
        check('genre', 'The genre cant be empty.').notEmpty(),
        check('num_pages', 'The num_pages cant be empty.').notEmpty(),
        check('price', 'The price cant be empty.').notEmpty(),
        check('AuthorId', 'The AuthorId cant be empty.').notEmpty(),
        check('img_book', 'Please, select a valid file image.').notEmpty(),
        validateBodyParams
    ],
    BookController.createBook
);

router.put("/id/:id", authentication, isAdmin, upload.single('img_book'), BookController.updateBook);
router.delete("/id/:id", authentication, BookController.deleteBook);

module.exports = router;