import React from 'react'

import left from '../assets/left.png'
import right from '../assets/right.png'
import Explore from './Explore'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import cat from '../assets/cat.png'
import star from '../assets/star.png'
import digital from '../assets/digital.png'
import laptop from '../assets/laptop.png'
import cream from '../assets/cream.png'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Container from './Container'



function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-[10px] top-[-30%] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
        <FaArrowRight className="text-black hover:text-white" />
      </div>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute right-[80px] top-[-30%] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
        <FaArrowLeft className="text-black hover:text-white" />
      </div>
    </div>
  );
}


const Product = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
          <Container>
             <div className='flex gap-6'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[170px] rounded-[4px] '>
                    </div>
                    <div className='text-[#DB4444] font-semibold text-[16px] mt-[180px]'>Our Products</div>
                </div>
                <div className='font-semibold text-[30px] mt-[24px] flex '>
                    <h1>Explore Our Products</h1>
                </div>

                <div className=' mt-[50px]'>
                    <Slider {...settings}>
                        <Explore
                        love={heart} 
                        eyee={eye}
                        catt={cat}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />

                    <Explore
                        love={heart}
                        eyee={eye}
                        catt={digital}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />


                    <Explore
                        love={heart}
                        eyee={eye}
                        catt={laptop}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />


                    <Explore
                        love={heart}
                        eyee={eye}
                        catt={cream}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />

                    </Slider>
                </div>

                <div className=' mt-[80px]'>
                    <Slider {...settings}>
                        <Explore
                        love={heart}
                        eyee={eye}
                        catt={cat}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />

                    <Explore
                        love={heart}
                        eyee={eye}
                        catt={digital}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />


                    <Explore
                        love={heart}
                        eyee={eye}
                        catt={laptop}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />


                    <Explore
                        love={heart}
                        eyee={eye}
                        catt={cream}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />
                    </Slider>
                </div>

                <div>
                    <button className='px-4 py-2 bg-[#DB4444] text-white mt-[120px] ml-[500px]'>View All Products</button>
                </div>
          </Container>
        </>
    )
}

export default Product