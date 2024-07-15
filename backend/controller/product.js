const Product = require('../model/product');
const Category = require('../model/catagory'); 
const Gender = require('../model/gender'); 

exports.getProduct = async (req, res, next) => {
  try {
   const product=req.params.id
    const results = await Product.find().populate('gender').populate('catagory');
    const data=results.filter((item)=>item.gender.gender_type==product)
    res.json(data);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.getCatagory = async (req, res, next) => {
   try {
     const results = await Category.find();
     res.json(results);
   } catch (err) {
     console.error("Error fetching products:", err);
     res.status(500).json({ message: "Internal Server Error" });
   }
 };

 exports.getCatagoryFilter = async (req, res, next) => {
   try {
    const gender=req.params.id;
    const category=req.query.type;
     const results = await Product.find().populate('gender').populate('catagory');
     const data=results.filter((item)=>item.gender.gender_type==gender)
     if(category=='all'){
      return res.json(data)
     }
     const filteredProducts = data.filter((product) => product.catagory.catagory_type == category)
     res.json(filteredProducts);
   } catch (err) {
     console.error("Error fetching products:", err);
     res.status(500).json({ message: "Internal Server Error" });
   }
 };

 exports.getAllProduct = async (req, res, next) => {
  try {
 
    const results = await Product.find().populate('gender').populate('catagory');
    
    res.json(results);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};