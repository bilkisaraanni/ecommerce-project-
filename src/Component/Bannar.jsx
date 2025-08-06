import React from 'react'
import icon4 from '../assets/icon4.png'
import iphon from '../assets/iphon.png'
import icon from '../assets/icon.png'
import apple from '../assets/apple.png'
import bg from '../assets/bg.png'
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import BannerTwo from './BannerTwo'
import Container from './Container'






const Bannar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    
    
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '20px', right: '8%', }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
      
    ),
    customPaging: i => (
      <div className="w-3 h-3  rounded-full mx-1 transition-colors duration-300"></div>
    )
  };

  return (
    <>
      <Container>
        <div className=' lg:flex flex:wrap justify-between items-center '>
          <div className=' border-r-[1px] border-[#e5e5e5] '>
            <ul className=' w-[217px] space-y-4 mt-10 mr-4 mx-auto overflow-y-auto lg:h-[344px] h-[150px] lg:overflow-visible'>
              <li className='flex justify-between'>Woman’s Fashion <IoIosArrowForward /></li>
              <li className='flex justify-between'>Men’s Fashion <IoIosArrowForward /></li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries &  </li>
              <li>Health & Beauty</li>
            </ul>
          </div>

          <div className=' lg:w-full lg:ml-[40px] mt-[40px] overflow-hidden'>
            <Slider  {...settings}>
              
              <BannerTwo />
              <BannerTwo />
              <BannerTwo />
              <BannerTwo />
              <BannerTwo />
            </Slider>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Bannar







