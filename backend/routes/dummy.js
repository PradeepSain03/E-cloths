const express = require('express');
const router=express.Router();
const catagory=require('../controller/dummy')

router.post('/catagory',catagory.getCatagory)


module.exports = router;