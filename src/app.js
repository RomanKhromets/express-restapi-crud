const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

// Middleware
app.use(bodyParser.json());

// Import routes
const productsRoute = require('./routes/products');
app.use('/products', productsRoute);

app.get('/', (request, response) => {
  response.send("Our Home");
});

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true},
  () => console.log('connected to db'));