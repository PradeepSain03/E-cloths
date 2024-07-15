const express = require('express');
const router=express.Router();
const cartController=require('../controller/cart')

router.post('/cart',cartController.cart)
router.get('/cart/:id',cartController.getCart)



module.exports = router;