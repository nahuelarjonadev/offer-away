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

const GET_ALL = `SELECT "Product"."product_name", "size", "inventory", "price", "Category"."category_name" from 
"Product" join "Category" on "Product"."category_id"="Category"."category_id";`;

const productModel =  {
  getAll() {
    return new Promise((resolve, reject) => {
      pool.query(GET_ALL, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    })
  }
};

module.exports = productModel;
