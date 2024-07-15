

exports.postPayment = async (req, res, next) => {
    try {
        const product = await stripe.products.create({
            name: "T-Shirt",
        });
  
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 100 * 100, 
            currency: 'inr',
        });
  
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:8080/success',
            cancel_url: 'http://localhost:8080/cancel',
            customer_email: 'demo@gmail.com',
        });
  
        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}