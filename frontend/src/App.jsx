import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home"
import RootLayout from "./components/layout/RootLayout";
import toast, { Toaster } from 'react-hot-toast';
import Login from "./page/Login";
import Signup from "./page/Signup";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import AddToCartPage from "./page/Cart";
import PaymentPage from "./page/payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/productdetail/:id",
          element: <ProductDetail />
        },
        {
          path: "/cart",
          element: <AddToCartPage />
        },
        {
          path: "/payment",
          element: <PaymentPage />
        }
       
      ],
    },
  ]);

  return (
    <>
       <RouterProvider router={router} />
       <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
