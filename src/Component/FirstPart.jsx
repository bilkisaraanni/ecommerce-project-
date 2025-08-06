import React, { useState } from 'react'
import Container from './Container'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router";

const FirstPart = () => {
    const [isenglish, setIsenglish] = useState(true)
    const toggleLanguage = () => setIsenglish(!isenglish);

    return (
        <>
            <div className='h-[48px] bg-black py-3 text-white relative overflow-hidden'>
                <Container>
                    <div className='relative '>
                        <h5 className='text-xs lg:text-base w-[75%] lg:w-full text-justify lg:text-center'>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <span className='text-[14px] font-semibold underline pl-2'>
                               <NavLink to='/shop'> ShopNow</NavLink>
                            </span>
                        </h5>

                       
                         <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 cursor-pointer' onClick={toggleLanguage}>
                            <p className='text-xs lg:text-base'>
                                {isenglish ? 'English' : 'Bangla'}
                            </p>
                            {isenglish ? (
                                <MdKeyboardArrowDown className='text-xl md:text-2xl' />
                            ) :
                                (
                                    <MdKeyboardArrowUp className='text-xl md:text-2xl' />
                                )
                            }
                        </div>
                      
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FirstPart
