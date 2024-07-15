const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const sign_upSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('user', sign_upSchema);