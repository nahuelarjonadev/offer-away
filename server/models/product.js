const { Pool } = require('pg');

const pool = new Pool({
  user: "xqtwqblw",
  host: "raja.db.elephantsql.com",
  database: "xqtwqblw",
  password: "HOn-ooZWg4SonxCxotW_5cBofitQIVAX",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  _connectionTimeoutMillis: 2000,
});

const GET_ALL = `SELECT "Product"."SKU", "Product"."product_name", "size", "inventory", "price", "Category"."category_name" from 
"Product" join "Category" on "Product"."category_id"="Category"."category_id";`;

const GET_CATEGORY = `SELECT "Product"."SKU", "Product"."product_name", "size", "inventory", "price", "Category"."category_name" from
"Product" join "Category" on "Product"."category_id"="Category"."category_id" WHERE "Category"."category_name"=`;

const UPDATE_INVENTORY = `UPDATE "Product" SET "inventory" = "inventory" - `;

const UPDATE_SKU = ` WHERE "SKU"=`;

const productModel = {
  getAll() {
    return new Promise((resolve, reject) => {
      pool.query(GET_ALL, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    })
  },
  getCategory(categoryName) {
    return new Promise((resolve, reject) => {
      pool.query(GET_CATEGORY + `'${categoryName}'` + ";", (err, result) => {
        if (err) return reject(err);
        resolve(result);
      })
    })
  },
  updateInventory(cart) {
    return new Promise((resolve, reject) => {
      const SKUs = Object.keys(cart);
      for (let i = 0; i < SKUs.length; i += 1) {
        pool.query(UPDATE_INVENTORY + cart[SKUs[i]] + " " + UPDATE_SKU + SKUs[i] + ";", (err, result) => {
          if (err) return reject(err);
          resolve(result);
        })
      }
    })
  }
};

module.exports = productModel;
