import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const isEmail = useSelector((state) => state.email.email);
  const data=useSelector(state=>state.data.data)
   console.log(data)
  const formData = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  };


  const handlePayment = (e) => {
    e.preventDefault();
    
    alert('Payment Successful!');
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Details</h2>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <img
            src="https://images.meesho.com/images/products/119619692/vptvf_512.webp"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Latest Trending Cat Hoodie Long Sleeve Sweat T-Shirt for Girls and Women
            </h3>
            <p className="text-gray-600">Price: $500</p>
            <p className="text-gray-600">Color: Pink</p>
          </div>
        </div>
        <form onSubmit={handlePayment}>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter card number"
            required
          />
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mt-4">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter cardholder name"
            required
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="CVV"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default PaymentPage;