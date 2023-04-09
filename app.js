if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app   = require('./server');
const dbUri = process.env.DB_URI;

app.database.connect(dbUri)
  .then(() => {
    console.log('Database: Connection successful');

    app.server.start();
  })
  .catch(console.error);
