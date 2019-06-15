const controllers = {}

//DUMMY DATA - this isnt the right data format!! Just using it to send back to client :)
const dummyData = {
  'shoe1': '1',
  'shoe2': '2',
  'shoe3': '3',
}

/**
* getAllItems - returns all items from catalog
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback Function w signature (err, users)
*/
controllers.getAllItems = (req, res, next) => {
  res.locals.dummyData = dummyData
  next()
}

/**
* updateItems - updates items on the database based on purchases

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
controllers.updateItems = (req, res, next) => {

}


/**
* createNewOrderDetail - creates an order detail for each shoe purchased

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
controllers.createNewOrderDetail = (req, res, next) => {

}

/**
* createNewOrder - creates an aggregated collection of the orders placed

* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
controllers.createNewOrder = (req, res, next) => {

}

module.exports = controllers