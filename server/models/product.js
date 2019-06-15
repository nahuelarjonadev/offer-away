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

const GET_ALL = `SELECT * FROM "Product";`;

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
