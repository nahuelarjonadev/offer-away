const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');

//api route to return all items from catalog
router.get('/products', productCtrl.getAllProducts, (req, res) => {
  //send back dummy data found in controllers
  res.status(200).json(res.locals.products)
});

//api route to return subset of items from catalog based on category
router.get('/products/categories', (req, res) => {
  //controller.getFilteredItems
});

//api route for making a purchase
router.post('/purchase', (req, res) => {
  //controller.updateItems
  //controller.createNewOrderDetail
  //controller.createNewOrder

  //STRETCH FEATURE: authentication for customer
});

module.exports = router;
