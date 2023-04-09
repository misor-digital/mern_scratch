const express = require('express');
const cors    = require('cors');
const cp      = require('cookie-parser');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Server @ PORT: ${PORT}`));
