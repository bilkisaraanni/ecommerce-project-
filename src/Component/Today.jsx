import React from 'react'
import Cart from './Cart'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import game from '../assets/game.png'
import star from '../assets/star.png'
import keyboat from '../assets/keyboat.png'
import desktop from '../assets/desktop.png'
import chair from '../assets/chair.png'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Container from './Container'
import Countdown from './Countdown'
import TopHead from './TopHead'




function SampleNextArrow({ onClick }) {
    return (
        <div
            className="absolute right-[10px] lg:top-[-30%] top-[-10%] transform -translate-y-1/2 z-10 cursor-pointer"
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
            className="absolute right-[80px] lg:top-[-30%] top-[-10%] transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
                <FaArrowLeft className="text-black hover:text-white" />
            </div>
        </div>
    );
}

const Today = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
                <div className='flex gap-6 '>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[170px] rounded-[4px]  '>
                    </div>
                    <div className='text-[#DB4444] font-semibold text-[16px] mt-[180px]'>Today’s</div>
                </div>
                <div className='lg:flex block mt-[24px] gap-[90px] '>
                    <div className='font-semibold text-[30px]'>
                        <h1>Flash Sales</h1>
                    </div>
                   

                    <Countdown showDot={true} />
                </div>
              



                <div className='mt-[80px]  '>
                    <Slider  {...settings}>
                        <Cart 
                            per="-40%"
                            show={true}
                            heart={heart}
                            eye={eye}
                            game={game}
                            black="Add To Cart"
                            head="HAVIT HV-G92 Gamepad"
                            pera="$120"
                            peraa="$160"
                            star={star}
                            pg="(88)"
                        />

                        <Cart 
                            per="-35%"
                            show={true}
                            heart={heart}
                            eye={eye}
                            game={keyboat}
                            black="Add To Cart"
                            head="AK-900 Wired Keyboard"
                            pera="$960"
                            peraa="$1160"
                            star={star}
                            pg="(75)"
                        />

                        <Cart 
                            per="-30%"
                            show={true}
                            heart={heart}
                            eye={eye}
                            game={desktop}
                            black="Add To Cart"
                            head="IPS LCD Gaming Monitor"
                            pera="$370"
                            peraa="$400"
                            star={star}
                            pg="(99)"
                        />

                        <Cart 
                            per="-25%"
                            show={true}
                            heart={heart}
                            eye={eye}
                            game={chair}
                            black="Add To Cart"
                            head="S-Series Comfort Chair "
                            pera="$375"
                            peraa="$400"
                            star={star}
                            pg="(99)"
                        />
                    </Slider>
                </div>
                <div>
                    <button className='px-6 py-3 bg-[#DB4444] text-white font-medium text-[10px] mt-[80px] ml-[520px]'>View All Products</button>
                </div>

            </Container>
        </>
    )
}

export default Today