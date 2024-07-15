import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"; 
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { setData } from "../redux/Slice/addPaymentDataSlice";
import { setCount } from "../redux/Slice/countSlice";

const AddToCartPage = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const data=useSelector(state=>state.data.data)
  if(token=='' || token==null || token==undefined){
    navigate('/')
  }
  const isEmail = useSelector(state => state.email.email);
  useEffect(()=>{
    if(isEmail==''){
        localStorage.removeItem("token");
        navigate('/')
      }
  })
  useEffect(() => {

    const fetchcart = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cart/${isEmail}`);
        setProducts(response.data.items);
        console.log(response.data.items.length)
        dispatch(setCount(response.data.items.length));
       
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchcart();
  }, []);

  const handlePayment =(product)=>{
   dispatch(setData(product))
   navigate('/payment')
  }
console.log(data);
  return (
    <div className="container mx-auto mt-8 mb-10">
    <h1 className="text-3xl font-bold mb-4">Shopping Cart Summary</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-gray-200 shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.product._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={product.product.img[0]} alt={product.product.name} className="h-20 w-20 object-cover rounded-md" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold">{product.product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">${product.product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">${product.quantity * product.product.price}</td>
              <td>
              <button
          className="bg-[#3D52A0] md:ms-5 text-white py-3 px-6 rounded-md shadow-md hover:bg-[#FF3F6C] focus:outline-none focus:ring-2 focus:ring-[#FF3F6C] focus:ring-opacity-50"
        onClick={()=>handlePayment(product)}>Buy Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AddToCartPage;