const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static route to access images hosted in server
app.use('/static', express.static(path.join(__dirname, 'public')))

//express router
app.use('/api', routes);

//404 err handling
app.use(function (req, res, next) {
  res.locals.message = 'PAGE NOT FOUND';
  const err = new Error('RESOURCE NOT FOUND');
  err.status = 404;
  return next(err);
});

// Dedicated error handler
app.use(function (err, req, res, next) {
  res.status(404).json({
    success: false,
    err: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
