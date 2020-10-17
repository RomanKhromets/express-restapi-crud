const express = require('express');
const port = 3000;
const app = express();

app.get('/', (request, response) => {
  response.send('Hello, Server!');
});

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});