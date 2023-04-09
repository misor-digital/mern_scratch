const mongoose = require('mongoose');

function connect(_db_uri) {
  return mongoose.connect(
    _db_uri,
    {
      useNewUrlParser    : true,
      useUnifiedTopology : true,
    }
  );
}

module.exports = {
  connect
};
