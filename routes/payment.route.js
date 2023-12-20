const express = require('express');
const router = express.Router();

const Stripe = require('stripe')('sk_test_51N0ioyHbnB7tBgZ5GDgJS2GCtfDsk7Unq93VTwYenlQuLx1l4v7drRk8hn29cjiuNPoM1m4qNQKO1iUfdMW4w2Vt00DUojo9rI');

router.post('/', async (req, res) => { console.log(req.body)
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });

module.exports = router;
