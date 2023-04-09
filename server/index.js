const express = require('express');
const path    = require('path');
const cors    = require('cors');
const cp      = require('cookie-parser');

const config = require('./config');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/../client/public/index.html`)));

const start = () => { app.listen(PORT, () => console.log(`Server @ PORT: ${PORT}`)); };

module.exports = {
  server: { start },
  database: config.database,
};