const express = require("express");
const sqlite = require('sqlite3');
require('dotenv').config();
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());

app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));
app.use('/authors', require('./routes/authors'));
app.use('/orders', require('./routes/orders'));
app.use(express.static('./book_images'));

app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));

module.exports = app;