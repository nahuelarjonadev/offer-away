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
app.get('/products', controllers.getAllItems(), (req, res) => {

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

//error handling for 404
app.use(function (req, res, next) {
  res.locals.message = 'PAGE NOT FOUND';
  const err = new Error('RESOURCE NOT FOUND');
  err.status = 404;
  return next(err);
});

//general error handling to close out request
app.use(function (err, req, res, next) {
  return res.status(err.status || 500).json({
    success: false,
    message: res.locals.message,
    error: err || 500
  });
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})