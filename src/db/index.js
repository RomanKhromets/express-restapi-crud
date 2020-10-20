const mongoose = require('mongoose');
require('dotenv').config();

// Connect to db
const db = mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db')
);

module.exports = db;
