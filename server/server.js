const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const businessRoutes = require('./routes/businessapi');
const purchaseRoutes = require('./routes/purchaseRoutes');
const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Static route to access images hosted in server
app.use('/static', express.static(path.join(__dirname, 'public')))

//express router
app.use('/api', apiRoutes);
app.use('/businessapi', businessRoutes);
app.use('/purchase', purchaseRoutes);

//404 err handling
app.use(function (req, res, next) {
  console.log(req.url, 'NOT FOUND');
  const err = new Error('RESOURCE NOT FOUND');
  err.status = 404;
  return next(err);
});

// Dedicated error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(404).json({
    success: false,
    err: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
