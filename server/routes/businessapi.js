const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');
const contactCtrl = require('../controllers/contactInfo-controller');

// created a delete route
// will return an object {success: true, result: result} back to the client
router.delete('/delete', productCtrl.deleteProduct, (req, res) => {
  res.status(200).send(res.locals.deleted)
})
router.post('/create-product', productCtrl.addProduct, (req, res) => {
  res.status(200).json(res.locals.response);
})

// need to add a route to add contact info
router.post('/contact-info', contactCtrl.contactYo, (req, res) => {
  res.status(200).json(res.locals.contact);
})

module.exports = router;
