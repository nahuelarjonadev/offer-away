const { Pool } = require('pg');

const pool = new Pool({
  user: "xqtwqblw",
  host: "raja.db.elephantsql.com",
  database: "xqtwqblw",
  password: "HOn-ooZWg4SonxCxotW_5cBofitQIVAX",
  port: 5432,
  max: 100,
  idleTimeoutMillis: 30000,
  _connectionTimeoutMillis: 2000,
});

const DROP_TABLES = `DROP TABLE "Category", "Product";`;

const CREATE_CATEGORY = `CREATE TABLE "Category" (
  "category_id" integer NOT NULL,
  "category_name" varchar(255) NOT NULL,
  PRIMARY KEY ("category_id"));`;

const INSERT_CATEGORY = `INSERT INTO "Category" ("category_id", "category_name") VALUES 
  (1, 'Adidas'),
  (2, 'Nike'),
  (3, 'Puma'),
  (4, 'Air Jordan'),
  (5, 'Off-White');`;

const CREATE_PRODUCT = `CREATE TABLE "Product" (
  "SKU" serial,
  "category_id" int4 REFERENCES "Category"("category_id"),
  "product_name" varchar(255) NOT NULL,
  "size" int2 NOT NULL,
  "inventory" int8 NOT NULL,
  "price" decimal NOT NULL,
  PRIMARY KEY ("SKU"));`;

const INSERT_PRODUCT = `INSERT INTO "Product" ("category_id", "product_name", "size", "inventory", "price") VALUES 
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Off-White'), '2.0 Distressed Suede-Trimmed Leather Sneakers', 9, 3, 470),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Nike'), '+ Fear of God Nubuck, Suede and Canvas High-Top Sneakers', 9, 2, 190),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Adidas'), 'A.R. Leather Sneakers', 11, 13, 100),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Air Jordan'), 'Jordan 11 Retro Concord (2018)', 12, 18, 259),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Off-White'), 'Leather-Trimmed Shell And Suede Sneakers', 10, 4, 605),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Nike'), 'Air Max 720 Suede-Trimmed Mesh Sneakers', 8, 6, 190),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Puma'), 'Thunder Rive Dr Glacier Sneakers', 7, 8, 120),
  ((SELECT "category_id" FROM "Category" WHERE "category_name"='Adidas'), 'Yeezy Boost 700 Suede, Leather and Mesh Sneakers', 10, 4, 300);`;

const dropTables = () => {
  return new Promise((resolve, reject) => {
    pool.query(DROP_TABLES, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })
};

const createCategory = () => {
  return new Promise((resolve, reject) => {
    pool.query(CREATE_CATEGORY, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })
};

const insertCategory = () => {
  return new Promise((resolve, reject) => {
    pool.query(INSERT_CATEGORY, (err, result) => {
      if (err) reject(err);
      resolve(result)
    })
  }
)};

const createProduct = () => {
  return new Promise((resolve, reject) => {
    pool.query(CREATE_PRODUCT, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })
};

const insertProduct = () => {
  return new Promise((resolve, reject) => {
    pool.query(INSERT_PRODUCT, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })
};


dropTables()
  .then(createCategory)
  .then(insertCategory)
  .then(createProduct)
  .then(insertProduct)
  .catch((err) => {
    console.log(err)
  });
