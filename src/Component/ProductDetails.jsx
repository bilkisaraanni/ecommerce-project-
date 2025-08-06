import React from 'react'
import Container from './Container'
import Navbar from './NavBar'
import gamee1 from '../assets/gamee1.png'
import gamee2 from '../assets/gamee2.png'
import gamee3 from '../assets/gamee3.png'
import gamee4 from '../assets/gamee4.png'
import gamee from '../assets/gamee.png'
import bus from '../assets/bus.png'
import round from '../assets/round.png'
import { IoStar } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import Cart from './Cart'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import game from '../assets/game.png'
import star from '../assets/star.png'
import keyboat from '../assets/keyboat.png'
import desktop from '../assets/desktop.png' 
import box from '../assets/box.png' 




const ProductDetails = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div className='mt-10 '>
                    <h3>Account/ Gaming / Havic HV G-92 Gamepad</h3>
                </div>

                <div className='flex gap-6 mt-10'>
                    <div className=' space-y-4'>
                        <img src={gamee1} alt="" />
                        <img src={gamee2} alt="" />
                        <img src={gamee3} alt="" />
                        <img src={gamee4} alt="" />
                    </div>

                    <div className=''>
                        <img src={gamee} alt="" />
                    </div>

                    <div>
                        <div>
                            <h2 className='font-Poppins font-bold text-[28px] ml-[18px]'>Havic HV G-92 Gamepad</h2>
                        </div>

                        <div className='mt-4 flex  ml-[18px] gap-6'>
                            <div className='flex gap-2 text-[#FFAD33]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <div>
                                    <IoStar className='text-[#807b7b]' />
                                </div>
                            </div>

                            <div className='border-r-2  border-[#807b7b]  flex mt-[-18px] p-3'>
                                <h3 className='text-[#807b7b] font-Poppins text-[14px] mt-[5px]'>(150 Reviews)</h3>
                            </div>
                            <div className='mt-[-2px]'>
                                <h3 className='text-[#00FF66] font-Poppins text-[14px]'>In Stock</h3>
                            </div>
                        </div>
                        <div className='border-b-2 border-[#807b7b] p-2 '>
                            <h3 className='text-[24px]'>$192.00</h3>
                            <p className='mt-4'>PlayStation 5 Controller Skin High quality vinyl with air <br /> channel adhesive for easy bubble free install & mess <br /> free removal Pressure sensitive.</p>
                        </div>

                        <div className="flex items-center gap-4 p-4">
                            <span className="text-[20px] ">Colours:</span>

                            {/* Selected (blue) color */}
                            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-blue-300" />
                            </div>

                            {/* Not selected (red) color */}
                            <div className="w-6 h-6 rounded-full bg-rose-500" />
                        </div>

                        <div className='ml-[18px] '>
                            <div className='flex justify-between'>
                                <h3 className='text-[20px]'>Size:</h3>
                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>XS</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>S</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>M</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>L</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>XL</h3>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border border-gray-300 rounded-md overflow-hidden w-max text-lg font-medium mt-4">
                                {/* Minus button */}
                                <button className="w-10 h-10 border-r border-[#807b7b] hover:bg-[#DB4444]">−</button>

                                {/* Quantity number */}
                                <div className="w-10 h-10 flex items-center justify-center hover:bg-[#DB4444]">
                                    2
                                </div>

                                {/* Plus button */}
                                <button className="w-10 h-10 hover:bg-[#DB4444] text-white rounded-r-md">
                                    +
                                </button>

                            </div>
                            <div className='ml-[150px] mt-[-40px] flex gap-3 '>

                                <button className="w-[165px] h-[44px] bg-[#DB4444] text-white rounded-md  ">Buy Now</button>

                                <div className='w-[40px] h-[40px] border-2 border-[#807b7b] rounded-md '>
                                    <FiHeart className='mx-auto mt-[10px] ' />
                                </div>
                            </div>

                            <div className='w-[420px] h-[180px] border-2 border-[#807b7b] mt-6'>
                                <div className='flex gap-6 mt-4  border-b-2 w-[420px] border-[#807b7b] pb-4'>
                                    <div className='mt-[10px]'>
                                        <img src={bus} alt="" className='ml-[10px]'/>
                                    </div>
                                    <div className='space-y-1 border-b-2  border-[#807b7b]'>
                                        <h3 className='font-medium text-[16px]'>Free Delivery</h3>
                                        <p>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>

                                <div className='flex gap-6 mt-4 '>
                                    <div className='mt-[10px] '>
                                        <img src={round} alt=""  className='ml-[10px]'/>
                                    </div>
                                    <div className='space-y-1 '>
                                        <h3 className='font-medium text-[16px]'>Return Delivery</h3>
                                        <p>Free 30 Days Delivery Returns. Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='flex gap-6 '>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[170px] rounded-[4px]'>
                    </div>
                    <div className='text-[#DB4444] font-semibold text-[16px] mt-[180px]'>Related Item</div>
                </div>

                <div className='flex justify-between mt-10'>
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
                        game={box}
                        black="Add To Cart"
                        head="S-Series Comfort Chair "
                        pera="$375"
                        peraa="$400"
                        star={star}
                        pg="(99)"
                    />
                </div>
            </Container>
        </>
    )
}

export default ProductDetails