const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const controllers = require('./controllers')

const { PORT } = process.env;
const app = express();

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api route to return all items from catalog
app.get('/products', (req, res) => {
  //controller.getAllItems
})

//api route to return subset of items from catalog based on category
app.get('/products/categories', (req, res) => {
  //controller.getFilteredItems
})

//api route for making a purchase
app.post('/purchase', (req, res) => {
  //controller.updateItems
  //controller.createNewOrderDetail
  //controller.createNewOrder

  //STRETCH FEATURE: authentication for customer
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})