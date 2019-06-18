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
      res.locals.products = result.rows;
      next();
    })
    .catch(err => {
      return next(err);
    });
};

/**
 * getCategory - returns all products in a specific category
 * @param req
 * @param res
 * @param next
 */
productCtrl.getCategory = (req, res, next) => {
  Product.getCategory(req.params.category)
    .then(result => {
      res.locals.category = result.rows;
      next();
    })
    .catch(err => {
      return next(err);
    })
};

/**
* updateItems - updates items on the database based on purchases

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
 * @param next
*/
productCtrl.updateInventory = (req, res, next) => {
  Product.updateInventory(req.body)
    .then(result => {
      res.locals.success = '"Congratulations on your new shoes!"';
      next()
    })
    .catch(err => {
      return next(err)
    })
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
