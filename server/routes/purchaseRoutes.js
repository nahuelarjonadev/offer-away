const express = require('express');
const router = express.Router();
const stripeCtrl = require('../controllers/stripe-controller');

// Get all products
router.get('/stripe', (req, res) => {
  res.status(200).json('Hit charge get endpoint');
});

router.post('/stripe', stripeCtrl.chargeUser, (req, res) => {
  res.status(200).json(res.locals.response)
});
 
module.exports = router;
