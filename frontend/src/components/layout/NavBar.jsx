import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from '../../redux/Slice/CheckAuthSlice';
import axios from "axios";
import { setCount } from "../../redux/Slice/countSlice";

export default function Navbar() {
  const isAuthenticated = useSelector(state => state.auth.authentication);
  const count = useSelector(state => state.count.count);
  const isEmail = useSelector(state => state.email.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cart/${isEmail}`);
        dispatch(setCount(response.data.items.length));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCart();
  },[count]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setAuth(true));
    } else {
      dispatch(setAuth(false));
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setAuth(false));
    navigate('/');
  };

  return (
    <nav className="bg-[#3D52A0] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-3xl font-bold text-white">V-sTORE</h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {isAuthenticated ? (
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product/Man"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Mens
                </Link>
              </li>
              <li>
                <Link
                  to="/product/Women"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Womens
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 relative"
                  aria-current="page"
                >
                  <LuShoppingCart className="text-[20px] font-bold" />
                  {count > 0 && (
                    <span className="absolute top-0 -right-5  bg-red-500 text-white rounded-full  p-1 text-xs">{count}</span>
                  )}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
