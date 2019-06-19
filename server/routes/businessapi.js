const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');
const categoryCtrl = require('../controllers/category-controller');

router.post('/create-product', productCtrl.addProduct, (req, res) => {
  res.status(200).json(res.locals.response);
})

router.get('/categories', categoryCtrl.getCategories, (req, res) => {
  res.status(200).json(res.locals.response);
})

module.exports = router;
