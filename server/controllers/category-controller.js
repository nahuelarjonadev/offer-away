const categoryDB = require('../models/category');
const categoryCtrl = {};

/**
 * getCategories - returns all categories
 * @param req - http.IncomingRequest
 * @param res - http.ServerResponse
 * @param next
 */
categoryCtrl.getCategories = (req, res, next) => {
  categoryDB.getCategories()
    .then((result) => {
      res.locals.response = {
        success: true,
        result: result.rows,
      };
      next();
    })
    .catch((err) => {
      next(err);
    })
};

/**
 * createCategory - creates a category based on req.body.categoryName
 * @param req - http.IncomingRequest
 * @param res - http.ServerResponse
 * @param next
 */
categoryCtrl.createCategory = (req, res, next) => {
  categoryDB.createCategory(req.body.categoryName)
    .then(() => {
      res.locals.response = {
        success: true,
        result: req.body,
      }
    })
    .catch((err) => {
      next(err);
    })
}

module.exports = categoryCtrl;
