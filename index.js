const express = require("express");
const sqlite = require('sqlite3');
const db = new sqlite.Database('database.sqlite');
const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));