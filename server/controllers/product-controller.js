const Product = require('../models/product');
const productCtrl = {};

/**
* getAllProducts - returns all products
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback Function w signature (err, users)
*/
productCtrl.getAllProducts = (req, res, next) => {
  Product.getAll()
    .then(result => {
      console.log(result);
      res.locals.products = result.rows;
      next();
    })
    .catch(err => {
      return next(err);
    });
};

/**
* updateItems - updates items on the database based on purchases

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
productCtrl.updateItems = (req, res, next) => {

};


/**
* createNewOrderDetail - creates an order detail for each shoe purchased

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
productCtrl.createNewOrderDetail = (req, res, next) => {

};

/**
* createNewOrder - creates an aggregated collection of the orders placed

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
productCtrl.createNewOrder = (req, res, next) => {

};

module.exports = productCtrl;
