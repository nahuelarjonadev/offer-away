const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const { PORT } = process.env;
const app = express();

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})