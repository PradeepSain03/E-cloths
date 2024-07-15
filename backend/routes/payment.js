const express = require('express');
const router=express.Router();
const payment=require('../controller/payment')

router.post('/payment',payment.postPayment)


module.exports = router;