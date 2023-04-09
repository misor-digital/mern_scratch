if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const config  = require('./server/config');
const dbUri   = process.env.DB_URI;


config.database.connect(dbUri)
  .then(() => {
    console.log('Database: Connection successful');

    require('./server/app');
  })
  .catch(console.error);
