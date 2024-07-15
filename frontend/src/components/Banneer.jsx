import React, { useRef } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner(){

    const sliderRef = useRef(null);

    const handleNextSlide = () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      };
    
      const handlePrevSlide = () => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      };
      
      const NextArrow = () => (
        <div
          className="absolute right-0 z-10 cursor-pointer bg-[#7091E6] text-[#EDE8F5] bg-opacity-50 rounded-full p-2 mr-4 mt-10"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={handleNextSlide}
        >
          <BsChevronRight size={40} />
        </div>
      );
    
      const PrevArrow = () => (
        <div
          className="absolute left-0 z-10 cursor-pointer bg-[#7091E6] text-[#EDE8F5] bg-opacity-50 rounded-full p-2 ml-4 mt-10"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={handlePrevSlide}
        >
          <BsChevronLeft size={40} />
        </div>
      );
    

      const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    
    return (
        <>
        
        <div className="w-[100%]  mb-5">
        <Slider ref={sliderRef} {...settings}>
          <div className="flex-grow-1">
            <img src="https://dennison.in/cdn/shop/files/19.png?v=1714205934&width=1920" className="w-full" alt="" />
          </div>
          <div>
            <img src="https://dennison.in/cdn/shop/files/20.png?v=1714205933&width=1920" alt="" />
          </div>
          <div>
            <img src="https://dennison.in/cdn/shop/files/18_b951e276-249f-4a7e-b5f5-d7d1bd98ca38.png?v=1714205932&width=1920" alt="" />
          </div>
        </Slider>
      </div>
        </>
    )
}