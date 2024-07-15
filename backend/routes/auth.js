const express = require('express');
const router=express.Router();
const authController=require('../controller/auth');
const validation=require('../middleware/validation')

router.post('/signup',validation.validate,authController.postSignup)
router.post('/login',authController.postLogin);
router.get('/profile/:id',authController.getProfile)


module.exports = router;