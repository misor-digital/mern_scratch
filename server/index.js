const express = require('express');
const cors    = require('cors');
const cp      = require('cookie-parser');

const config = require('./config');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const start = () => { app.listen(PORT, () => console.log(`Server @ PORT: ${PORT}`)); };

module.exports = {
  server: { start },
  database: config.database,
};