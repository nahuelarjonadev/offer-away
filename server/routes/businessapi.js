const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');
const categoryCtrl = require('../controllers/category-controller');

router.delete('/delete', productCtrl.deleteProduct, (req, res) => {
  res.status(200).send(res.locals.deleted);
})

router.post('/create-product', productCtrl.addProduct, (req, res) => {
  res.status(200).json(res.locals.response);
})

// response.result will be an array of objects {col: value}
router.get('/categories', categoryCtrl.getCategories, (req, res) => {
  res.status(200).json(res.locals.response);
})

module.exports = router;
