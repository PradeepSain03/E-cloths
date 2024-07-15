const Cart = require('../model/cart');

exports.cart = async (req, res, next) => {
    try {
        const { email, _id, quantity } = req.body;

        let cart = await Cart.findOne({ user_Email: email });

        if (!cart) {

            cart = new Cart({
                user_Email: email,
                items: [{ product: _id, quantity: quantity }]
            });
        } else {

            const existingItemIndex = cart.items.findIndex(item => item.product.equals(_id));

            if (existingItemIndex !== -1) {

                cart.items[existingItemIndex].quantity += quantity;
            } else {

                cart.items.push({ product: _id, quantity: quantity });
            }
        }
        await cart.save();
        return res.status(200).json({ message: 'Product added to cart or quantity updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



exports.getCart = async (req, res) => {
    const userEmail = req.params.id;

    try {
        const cart = await Cart.findOne({ user_Email: userEmail }).populate('items.product');
        console.log(cart)
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

