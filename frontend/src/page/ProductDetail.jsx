import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { setCount } from "../redux/Slice/countSlice";

export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const count = useSelector(state => state.count.count);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const isEmail = useSelector(state => state.email.email);
    const navigate = useNavigate();
    const dispatch=useDispatch();

    if (token === '' || token === null || token === undefined) {
        navigate('/');
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/productdetail/${id}`);
                setProduct(result.data);
                setSelectedImage(result.data.img[0]);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleIncrement = () => {
 
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = async () => {
       
      const cart={
        email:isEmail,
        _id:product._id,
        quantity:quantity
      }
      const result = await axios.post(`http://localhost:8080/cart`,cart)
      console.log(result)
      console.log(cart)
      if(result){
        toast.success("Add to cart successfully")
       }
      setQuantity(1)
      dispatch(setCount(count.count+1))
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex md:items-center md:justify-between p-6 md:p-8">
                    <div className="md:w-[50%] md:mr-6 mb-6 md:mb-0 relative">
                        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full transition-transform transform hover:scale-105 cursor-pointer"
                                onClick={() => handleImageClick(product.img[0])}
                            />
                        </div>
                        <div className="flex mt-4">
                            {product.img.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={product.name}
                                    className={`w-16 h-16 rounded-lg shadow-md mr-2 cursor-pointer border-2 border-transparent hover:border-[#FF3F6C] ${selectedImage === image ? "border-[#FF3F6C]" : ""}`}
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-xl text-[#FF3F6C] font-semibold">${product.price}</p>
                        <p className="text-lg font-bold mb-4">Color: {product.color}</p>
                        <div className="">
                            <div className="mx-auto rounded-lg">
                                <h2 className="text-xl font-bold text-gray-800 mb-6">Explore the Essence of Style</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Discover our exquisite collection of products designed to elevate your lifestyle.
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Uncompromising Quality</h3>
                                <p className="text-lg text-gray-700 mb-6">
                                    We take pride in offering products that combine superior craftsmanship with premium materials.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-6">
                            <div className="flex items-center">
                                <button
                                    onClick={handleDecrement}
                                    className="bg-[#3D52A0] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#FF3F6C] focus:outline-none focus:ring-2 focus:ring-[#FF3F6C] focus:ring-opacity-50"
                                >
                                    -
                                </button>
                                <span className="text-xl mx-2">{quantity}</span>
                                <button
                                    onClick={handleIncrement}
                                    className="bg-[#3D52A0] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#FF3F6C] focus:outline-none focus:ring-2 focus:ring-[#FF3F6C] focus:ring-opacity-50"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="bg-[#3D52A0] text-white py-3 px-20 rounded-md shadow-md hover:bg-[#FF3F6C] focus:outline-none focus:ring-2 focus:ring-[#FF3F6C] focus:ring-opacity-50"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
