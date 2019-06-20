const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');
const contactCtrl = require('../controllers/contactInfo-controller');
const multer = require('multer');
// configuration on how files get stored
// we will pass this function when a file is uploaded
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null,'./server/public/') // <- where to store
  },
  filename: function(req, file, cb){
    cb(null, 'logo.png') // <- set new name for uploaded image
  }
})
const upload = multer({storage: storage}); // <- implement 

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
router.post('/uploadImage', upload.single('image'), (req, res) => {
  res.status(200).json({message: 'completed'})
})

// route to modifyStock 
// expecting SKU and Inventory in req.body
router.put('/updateStock', productCtrl.modifyStock, (req,res) => {
  res.status(200).json(res.locals.modified);
})

module.exports = router;
