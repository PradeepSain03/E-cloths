import React,{useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        address: "",
        contact:"",
        password: "",
      });
    const navigate=useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8080/signup", formData);
          console.log("Server response:", response.data);
          if(response.data){
            toast.success("Signup Successfully Completed")
            navigate('/')
          }

        } catch (error) {
          console.error("Error while signing up:", error);
          error.response.data.errors.forEach(errorMessage => {
            toast.error(errorMessage.msg);
          });
        
        }
      };
      console.log(formData)
  return (
    <div className="mt-10 mb-10 items-center flex justify-center px-5 lg:px-0">
      <div className=" bg-white border md:ms-[10%] md:me-[10%] shadow sm:rounded-lg grid md:grid-cols-2 flex-1">
        <div>
            <img src="https://dennison.in/cdn/shop/files/COORDS_SETS_2.png?v=1711806241&width=1200"  alt="" />
        </div>
        <div className="w-full p-6 sm:p-12 md:mt-2">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                User Sign up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
              
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  name="contact"
                  placeholder="Enter your phone"
                  onChange={handleChange}
                />
                  <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  onChange={handleChange}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={handleSubmit}>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/">
                    <span className="text-blue-900 font-semibold">Log in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
