const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');
const contactCtrl = require('../controllers/contactInfo-controller');
const imageCtrl = require('../controllers/imageController')
// configuration on how files get stored
// we will pass this function when a file is uploaded

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

// for logo
// create route post route for product image upload
// multer, just like body parser actually parses form data
router.post('/uploadImage', imageCtrl.saveProductImage, (req, res) => {
  res.status(200).json(res.locals.response)
})

// route to modifyStock
// expecting SKU and Inventory in req.body
router.put('/updateStock', productCtrl.modifyStock, (req,res) => {
  res.status(200).json(res.locals.modified);
})

// route to modify product
// expecting an SKU, category_id, product_name, size, inventory, price
router.put('/updateProduct', productCtrl.updateProduct, (req, res) =>{
  res.status(200).json(res.locals.updateProduct)
})
module.exports = router;
