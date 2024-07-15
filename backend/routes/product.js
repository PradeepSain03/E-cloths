const express = require('express');
const router=express.Router();
const prouctDetailController=require('../controller/productDetail')
const productController=require('../controller/product')

router.get('/product/:id',productController.getProduct);
router.get('/productdetail/:id',prouctDetailController.getDetailProduct);
router.get('/productfamouse',prouctDetailController.getFamousProduct);
router.get('/productcatagory',productController.getCatagory);
router.get('/productcatagory/:id',productController.getCatagoryFilter);
router.get('/allproduct',productController.getAllProduct);


module.exports = router;