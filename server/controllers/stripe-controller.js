const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeCtrl = {
  chargeUser(req, res, next) {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) return next(stripeErr);
      res.locals.response = { success: true, result: stripeRes };
      next();
    });
  },
};

module.exports = stripeCtrl;