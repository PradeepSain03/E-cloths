const Product = require('../model/product');

exports.getCatagory = async (req, res, next) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const color = req.body.color;
        const img = req.body.img;
        const gender = req.body.gender;
        const catagory = req.body.catagory;
       const p_id=req.body.p_id;
       const p_name=req.body.p_name;
        const user = new Product({
            name,
            price,
            color,
            img,
            gender,
            catagory,p_id,p_name
        })
        const result = await user.save();
        res.json({ message: "successfully created" })
    }
    catch (err) {
        console.log(err)
        res.json(err);
    }
}