const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const { PORT } = process.env;
const app = express();

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//return list of all the in stock items
app.get('/products', (req, res) => {
  //get all items from database
})

//TODO: make get route for catagory specific items
app.get('/products/categories', (req, res) => {

})

//purchase route
app.post('/purchase', (req, res) => {
  //update items in database
  //create new customer if not already in database
  //create order detail
  //create new order for the purchase
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})