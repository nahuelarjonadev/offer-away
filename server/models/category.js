const pool = require('../pool');
const categoryModel = {}

// define queries
const GET_CATEGORIES = `SELECT * FROM "Category"`
const CREATE_CATEGORY = `INSERT INTO "Category" ("category_name") VALUES ($1)`

// define DB functionality
categoryModel.getCategories = () => {
  return new Promise((resolve, reject) => {
    pool.query(GET_CATEGORIES, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

categoryModel.createCategory = (categoryName) => {
  return new Promise((resolve, reject) => {
    const value = [categoryName];
    pool.query(CREATE_CATEGORY, value, (err, result) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = categoryModel;
