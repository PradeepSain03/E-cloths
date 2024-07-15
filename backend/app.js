const express = require('express');
const app = express();
const cors = require('cors') 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const stripe = require('stripe')('sk_test_51PHItWSCNIEKcEFlf4XY7eVSVhYLnQ3kemESzyGZvp867ltXgkbRN8yzV2L1VXKGaOkAuHpcAe3VYNsPRFh1O9i000F31C22dw');
const MONGODB_URI =
  'mongodb+srv://pradeepsen106533:U9YCmcLXmOITK8QX@cluster0.wkxpzo3.mongodb.net/eCloths';

const catagory=require('./routes/dummy')
const auth=require('./routes/auth')
const product=require('./routes/product')
const cart=require('./routes/cart')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8081',
  credentials: true 
}));

app.use(catagory);
app.use(auth);
app.use(product);
app.use(cart)
app.post('/payment', async (req, res) => {
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
});
mongoose
 .connect(MONGODB_URI)
 .then(result => {
    app.listen(8080);
  })
 .catch(err => {
    console.log(err);
  });