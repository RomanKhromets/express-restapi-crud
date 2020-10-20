const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// GET all products
router.get('/', async (request, response) => {
  try {
    const products = await Product.find();
    response.json(products);
  } catch (err) {
    response.json({ message: err });
  }
});

// POST new product
router.post('/', async (request, response) => {
  const product = new Product({
    name: request.body.name,
    description: request.body.description,
  });
  try {
    const savedProducts = await product.save();
    response.json(savedProducts);
  } catch (err) {
    response.json({ message: err });
  }
});

// Find specific product by id
router.get('/:productId', async (request, response) => {
  try {
    const product = await Product.findById(request.params.productId);
    response.json(product);
  } catch (err) {
    response.json({ message: err });
  }
});

// Delete product
router.delete('/:productId', async (request, response) => {
  try {
    const removedProduct = await Product.remove({
      _id: request.params.productId,
    });
    response.json(removedProduct);
  } catch (err) {
    response.json({ message: err });
  }
});

// Update product
router.patch('/:productId', async (request, response) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: request.params.productId },
      {
        $set: {
          name: request.body.name,
          description: request.body.description,
        },
      }
    );
    response.json(updatedProduct);
  } catch (err) {
    response.json({ message: err });
  }
});

module.exports = router;
