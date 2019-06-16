const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');

// Get all products
router.get('/products', productCtrl.getAllProducts, (req, res) => {
  res.status(200).json(res.locals.products)
});

//
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
