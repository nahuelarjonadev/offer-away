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
 * @param req - http.IncomingRequest
 * @param res - http.ServerResponse
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
      return next(err);
    })
};

/**
 * addProduct - adds a product to the database based on form input
 * @param req - http.IncomingRequest
 * @param res - http.ServerResponse
 * @param next
 */
 productCtrl.addProduct = (req, res, next) => {
   Product.addProduct(req.body)
    .then(() => {
      res.locals.response = {
        success: true,
        result: req.body,
      };
      next();
    })
    .catch(err => {
      return next(err);
    })
 }

module.exports = productCtrl;
