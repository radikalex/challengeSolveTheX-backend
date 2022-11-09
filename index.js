const express = require("express");
const sqlite = require('sqlite3');
const db = new sqlite.Database('database.sqlite');
const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));
app.use('/authors', require('./routes/authors'));
app.use('/orders', require('./routes/orders'));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));