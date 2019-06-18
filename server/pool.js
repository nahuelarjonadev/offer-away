const { Pool } = require('pg');

const { DB_USERNAME, DB_HOST, DB_NAME, DB_PWD, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PWD,
  port: DB_PORT,
  max: DB_MAX_CONNECTIONS,
  idleTimeoutMillis: 30000,
  _connectionTimeoutMillis: 2000,
});

module.exports = pool;