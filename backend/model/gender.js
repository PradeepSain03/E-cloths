const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const GenderSchema = new Schema({
   
    gender_type:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('gender', GenderSchema);