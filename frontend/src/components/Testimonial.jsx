import React, { useRef } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from "../Data";

export default function Testimonial(){
    const sliderRef1 = useRef(null);
    const handleNextSlide1 = () => {
        if (sliderRef1.current) {
          sliderRef1.current.slickNext();
        }
      };
    
      const handlePrevSlide1 = () => {
        if (sliderRef1.current) {
          sliderRef1.current.slickPrev();
        }
      };
    
     
    
      const PrevArrow1 = () => {
    
        return (
          <div
            className="absolute top-1/2 left-0 transform hidden md:block lg:block  -translate-y-1/2 bg-[#7091E6] text-[#EDE8F5] bg-opacity-50  rounded-full p-2 z-10"
            style={{ left: '-50px' }}
            onClick={handlePrevSlide1}
          >
            <BsChevronLeft size={40} />
          </div>
        );
      };
    
      const NextArrow1 = () => {
    
        return (
          <button
            className="absolute top-1/2 right-0 transform hidden md:block lg:block -translate-y-1/2 bg-[#7091E6] text-[#EDE8F5] bg-opacity-50  rounded-full p-2 z-10"
            style={{ right: '-50px' }}
            onClick={handleNextSlide1}
          >
            <BsChevronRight size={40} />
          </button>
        );
      };
    
    
      
      const settings1 = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '60px',
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };


    return(<>
    
    <div className="mt-10">
        <h1 className="text-[45px] text-center font-bold text-[#7091E6] ">TESTIMONIAL</h1>
      </div>

      <div className="md:max-w-5xl  mx-auto mt-8">
        <Slider ref={sliderRef1} {...settings1}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-800 text-lg mb-4">{testimonial.quote}</p>
                <p className="text-gray-600">{testimonial.author}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div> 
    </>)
}