import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard({img,name,price,id,_id}){
  console.log(_id)
    return (<>
    
    <Link to={`/productdetail/${id}`} >
      <div className="bg-white border border-gray-200 rounded-lg shadow h-[100%] dark:bg-gray-800 dark:border-gray-700">
        <img className="h-[70%] w-[100%]" src={img} alt={name} />
        <div className="p-4">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-[#7091E6] dark:text-white">
            {name}
          </h5>
          <p className="mb-3 text-md text-[#7091E6] dark:text-gray-400">$ {price}</p>
        </div>
      </div>
    </Link>


    </>)
}