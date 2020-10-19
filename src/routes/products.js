const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (request, response) => {
  try {
    const products = await Product.find();
    response.json(products);
  } catch(err) {
    response.json({ message: err });
  }
});

// POST new product
router.post('/', async (request, response) => {
  const product = new Product({
    name: request.body.name,
    description: request.body.description
  });
  try {
    const savedProducts = await product.save();
    response.json(savedProducts);
  } catch(err) {
    response.json({ message: err });
  }
});

module.exports = router;
