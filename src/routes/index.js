const router = app => {
  app.get('/', (request, response) => {
      response.send({
          message: 'Node.js and Express REST API'
      });
  });
  app.get('/products', (request, response) => {
    response.send(products);
});
}

const products = [{
  id: 1,
  name: "some product1",
  price: "100uah",
  category: "category1",
  provider: "provider1",
  expDate: "10-10-2020",
  measure: "kg",
  quantity: "10"
},
{
  id: 2,
  name: "some product2",
  price: "102uah",
  category: "category2",
  provider: "provider2",
  expDate: "10-10-2020",
  measure: "kg",
  quantity: "20"
}
];

module.exports = router;