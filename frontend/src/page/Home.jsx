import React, { useEffect, useState } from "react";
import axios from 'axios'
import ProductCard from "../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Banner from "../components/Banneer";
import Testimonial from "../components/Testimonial";

export default function Home() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(()=>{
    if (token == '' || token == null || token == undefined) {
      navigate('/')
    }
  })
  const isEmail = useSelector(state => state.email.email);
  console.log(isEmail)


  const [famous, setFamous] = useState([])





  useEffect(() => {
    const fetchFamous = async () => {
      const result = await axios.get("http://localhost:8080/productfamouse");
      console.log(result.data)
      setFamous(result.data)

    }
    fetchFamous()
    if (token == null || token == undefined) {
      navigate('/')
    }
  }, [token])






  return (
    <>
      <div className="max-w-[100%]">
        <Banner />
        <div className="md:grid grid-cols-2 gap-10 md:ms-10 ms:me-10">
          <Link to="/product/Man">
            <img src="https://dennison.in/cdn/shop/files/1_0b07ffad-6353-4159-84cc-b4126bd02ed8.png?v=1710496651&width=720" alt="" />
          </Link>
          <Link to="/product/Women">
            <img src="https://dennison.in/cdn/shop/files/2_856467d6-257c-465f-b4af-da00dd598661.png?v=1710498858&width=720" alt="" />
          </Link>

        </div>
        <Testimonial />

        <div className="mt-10 mb-10">
          <h1 className="text-[45px] text-center font-bold text-[#7091E6]  ">FLAUNT ESSENTIALS</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-8 md:ms-10 md:me-10 mb-10">
          {famous.map((item) => (
            <ProductCard img={item.img[0]} name={item.name} price={item.price} id={item.p_id} _id={item._id} />
          ))}

        </div>


      </div>
    </>
  );
}