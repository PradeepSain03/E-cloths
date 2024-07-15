import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Famouse(){
    const [famous, setFamous] = useState([])
    useEffect(() => {
        const fetchFamous = async () => {
          const result = await axios.get("http://localhost:8080/productfamouse");
          console.log(result.data)
          setFamous(result.data)
        
        }
        fetchFamous()
       
      }, [])
    

    return(<>
     <div className="mt-10 mb-10">
        <h1 className="text-[45px] text-center font-bold text-[#7091E6]  ">FLAUNT ESSENTIALS</h1>
      </div>
      <div className="grid md:grid-cols-4 gap-8 md:ms-10 md:me-10 mb-10">
        {famous.map((item) => (
          <ProductCard img={item.img[0]} name={item.name} price={item.price} id={item.p_id}  _id={item._id} />
        ))}

      </div>
    
    </>)
}