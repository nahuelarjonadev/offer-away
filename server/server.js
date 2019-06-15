const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const { PORT } = process.env;
const app = express();

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//return list of all the in stock items
app.get('/catalog', (req, res) => {

})

//purchase route
app.post('/purchase', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})