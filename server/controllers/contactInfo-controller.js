const Contact = require('../models/contactInfo');
contactCtrl = {};

// middleware to insert or update contact info
contactCtrl.contactYo = (req, res, next) => {
  Contact.insertContactInfo(req.body)
  .then(data => {
    res.locals.contact = {
      "success": true,
      "result": data
    }
    next()
  })
  .catch(err => {
    return next(err);
  })
}

module.exports = contactCtrl;