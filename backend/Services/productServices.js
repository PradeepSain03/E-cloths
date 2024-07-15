const Product = require('../model/product');
const Category = require('../model/catagory'); 
const Gender = require('../model/gender');

async function getAllProductsByGender(genderType) {
  try {
    const results = await Product.find().populate('gender').populate('category'); 
    const filteredProducts = results.filter(item => item.gender.gender_type === genderType);
    return filteredProducts;
  } catch (err) {
    console.error("Error fetching products by gender:", err);
    throw err;
  }
}

async function getAllCategories() {
  try {
    const results = await Category.find();
    return results;
  } catch (err) {
    console.error("Error fetching categories:", err);
    throw err;
  }
}

async function getFilteredProductsByGenderAndCategory(genderType, categoryType) {
  try {
    const results = await Product.find().populate('gender').populate('category'); 
    let filteredProducts = results.filter(item => item.gender.gender_type === genderType);
    
    if (categoryType !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category.category_type === categoryType);
    }
    
    return filteredProducts;
  } catch (err) {
    console.error("Error fetching filtered products:", err);
    throw err;
  }
}

module.exports = {
  getAllProductsByGender,
  getAllCategories,
  getFilteredProductsByGenderAndCategory
};