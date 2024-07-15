const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user_Email: {
        type: String,
        required: true
    },
    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1 
        }
    }]
});

CartSchema.index({ user_Email: 1, 'items.product': 1 }, { unique: true });

module.exports = mongoose.model('cart', CartSchema);