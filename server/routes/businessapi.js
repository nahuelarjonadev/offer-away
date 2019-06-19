const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');
const contactCtrl = require('../controllers/contactInfo-controller');

// created a delete route
// will return an object {success: true, result: result} back to the client
const categoryCtrl = require('../controllers/category-controller');

router.delete('/delete', productCtrl.deleteProduct, (req, res) => {
  res.status(200).send(res.locals.deleted);
})

router.post('/create-product', productCtrl.addProduct, (req, res) => {
  res.status(200).json(res.locals.response);
})

// need to add a route to add contact info
router.post('/contact-info', contactCtrl.contactYo, (req, res) => {
  res.status(200).json(res.locals.contact);
})

// response.result will be an array of objects {col: value}
router.get('/categories', categoryCtrl.getCategories, (req, res) => {
  res.status(200).json(res.locals.response);
})

router.post('/categories', categoryCtrl.createCategory, (req, res) => {
  res.status(200).json(res.locals.response);
})

module.exports = router;
