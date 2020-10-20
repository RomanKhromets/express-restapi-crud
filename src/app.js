const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
require('./db');

// Middleware
app.use(bodyParser.json());

// Import routes
const homePageRoute = require('./routes');
const productsRoute = require('./routes/products');

app.use('/', homePageRoute);
app.use('/products', productsRoute);

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
