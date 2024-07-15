const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ProductSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
   img:[{
       type:String,
       require:true
   }],
    gender:{
        type: Schema.Types.ObjectId,
        ref: 'gender'
    },
    catagory:{
        type: Schema.Types.ObjectId,
        ref: 'catagory'
    },
    p_id:{
        type:Number,
        require:true
    },
    p_name:{
        type:String,
        require:true
    },
    famouse:{
        type:String
    
    },

});

module.exports = mongoose.model('product', ProductSchema);