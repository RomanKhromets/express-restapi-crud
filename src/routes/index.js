const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send(
    'This is home page, try http://localhost:3000/products to see all products'
  );
});

module.exports = router;
