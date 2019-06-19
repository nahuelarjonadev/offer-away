const pool = require('../pool');
const categoryModel = {}

// define queries
const GET_CATEGORIES = `SELECT * FROM "Category"`

// define DB functionality
categoryModel.getCategories = () => {
  return new Promise((resolve, reject) => {
    pool.query(GET_CATEGORIES, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

module.exports = categoryModel;
