const express = require("express");
const sqlite = require('sqlite3');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));
app.use('/authors', require('./routes/authors'));
app.use('/orders', require('./routes/orders'));

app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));

module.exports = app;