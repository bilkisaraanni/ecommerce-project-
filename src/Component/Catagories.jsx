import React from 'react'

import left from '../assets/left.png'
import right from '../assets/right.png'
import Phon from './Phon'
import phon from '../assets/phon.png'
import computar from '../assets/computar.png'
import watch from '../assets/watch.png'
import cemera from '../assets/cemera.png'
import headphon from '../assets/headphon.png'
import pad from '../assets/pad.png'
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
            className="absolute right-[80px] top-[-30%]  transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
                <FaArrowLeft className="text-black hover:text-white" />
            </div>
        </div>
    );
}




const Catagories = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    };

    return (
        <>
            <Container>
                <div>
                    <div>
                        <div className='flex gap-6'>
                            <div className='w-[20px] h-[40px] bg-[#DB4444] lg:mt-[170px] mt-[-50px] rounded-[4px] '>
                            </div>
                            <div className='text-[#DB4444] font-semibold text-[16px] lg:mt-[180px] mt-[-40px]'>Categories</div>
                        </div>
                        <div className='font-semibold text-[30px] mt-[24px] flex '>
                            <h1>Browse By Category</h1>

                        </div>

                    </div>
                    <div className='space-x-10 mt-[80px] '>
                        <Slider  {...settings}>
                            <Phon
                                cell={phon}
                                pera="Phones"
                            />

                            <Phon
                                cell={computar}
                                pera="Computers"
                            />

                            <Phon
                                cell={watch}
                                pera="SmartWatch"
                            />

                            <Phon
                                cell={cemera}
                                pera="Camera"
                            />

                            <Phon
                                cell={headphon}
                                pera="HeadPhones"
                            />

                            <Phon
                                cell={pad}
                                pera="Gaming"
                            />
                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Catagories