const Product =require('../model/product');



exports.getDetailProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Product.findOne({ p_id: id });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



exports.getFamousProduct = async (req, res, next) => {
   try {
     const results = await Product.find({ famouse:"true" });
 
     if (results.length > 0) {
       return res.json(results);
     } else {
       return res.json({ message: "No famous products found" });
     }
   } catch (error) {
     console.error("Error in getFamousProduct:", error);
     return res.status(500).json({ message: "Failed to fetch famous products" });
   }
 };