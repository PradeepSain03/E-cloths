const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const CatagorySchema = new Schema({
    catagory_type:{
        type:String,
        require:true
    },
  
});

module.exports = mongoose.model('catagory', CatagorySchema);