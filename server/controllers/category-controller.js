const categoryDB = require('../models/category');
const categoryCtrl = {};

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
}

module.exports = categoryCtrl;
