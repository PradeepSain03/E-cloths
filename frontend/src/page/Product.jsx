import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sortBy, setSortBy] = useState(""); 
    const [selectedCategory, setSelectedCategory] = useState(""); 
    const { id } = useParams();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const navigate=useNavigate();
    if(token=='' || token==null || token==undefined){
      navigate('/')
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/product/${id}`);
                setProducts(result.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const fetchCategories = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/productcatagory`);
                setCategories(result.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };



        fetchProducts();
        fetchCategories();
    }, [id]);


    const handleSortByPrice = (sortType) => {
        const sortedProducts = [...products];
        if (sortType === "lowToHigh") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortType === "highToLow") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
    };


    const handleCategoryFilter = async (category) => {
        setSelectedCategory(category);
        const result = await axios.get(`http://localhost:8080/productcatagory/${id}/?type=${category}`)
        setProducts(result.data);
    };
    console.log(products)

    return (
        <>
            <h1 className="text-4xl mt-5 mb-5 font-bold text-[#7091E6] text-center">
                {id} Buy Product From Here...
            </h1>

            <div className="flex justify-end mb-4 mr-10">
                <select
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value);
                        handleSortByPrice(e.target.value);
                    }}
                >
                    <option value="">Sort by Price</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>

            <div className="mt-5 md:grid md:grid-cols-4 gap-8 mb-10">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-4">Categories</h2>
                    <ul className="md:ml-6 space-y-2">
                        <li
                            className={`group cursor-pointer flex items-center justify-center py-2 px-4 rounded-md transition duration-300 ease-in-out bg-gray-100 hover:bg-gray-200`}
                            onClick={() => handleCategoryFilter("all")}
                        >
                            <span className="text-gray-800 group-hover:text-blue-600 font-semibold">
                                All
                            </span>
                        </li>
                        {categories.map((category) => (
                            <li
                                key={category._id}
                                className={`group cursor-pointer flex items-center justify-center py-2 px-4 rounded-md transition duration-300 ease-in-out bg-gray-100 hover:bg-gray-200`}
                                onClick={() => handleCategoryFilter(category.catagory_type)}
                            >
                                <span className="text-gray-800 group-hover:text-blue-600 font-semibold">
                                    {category.catagory_type}
                                </span>
                            </li>
                        ))}
                    </ul>


                </div>

                <div className="md:col-span-3  md:grid md:grid-cols-3 gap-8">
                    {products.length === 0 ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        products.map((item) => (
                            <ProductCard
                                key={item._id}
                                img={item.img[0]}
                                name={item.name}
                                price={item.price}
                                id={item.p_id}
                                _id={item._id}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
