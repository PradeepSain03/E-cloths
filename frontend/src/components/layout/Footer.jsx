import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer(){
    return (
        <>
   <footer className="bg-[#3D52A0] dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="https://flowbite.com/" className="flex items-center">
        <h1 className="text-3xl font-bold text-white">V-sTORE</h1>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
          <ul className="text-white dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
          <ul className="text-white dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
          <ul className="text-white dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        
        <a href="#" className="text-white text-2xl hover:text-gray-900 dark:hover:text-white ms-5">
        <CiLinkedin />
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-900 dark:hover:text-white ms-5">
        <FaDiscord />
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-900 dark:hover:text-white ms-5">
        <FaGithub />
        </a>
        <a href="#" className="text-white text-xl  hover:text-gray-900 dark:hover:text-white ms-5">
        <FaFacebook />
        </a>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}