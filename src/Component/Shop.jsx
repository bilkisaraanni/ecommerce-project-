import React from 'react'
import Container from './Container'
import Cart from './Cart' 
import Btn from './Btn' 
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import game from '../assets/game.png'
import star from '../assets/star.png'
import keyboat from '../assets/keyboat.png'
import desktop from '../assets/desktop.png'
import chair from '../assets/chair.png'
import Navbar from './NavBar'

const Shop = () => {
    return (
        <>
            <Container>
                <Navbar showUser={true} />
                <div className='flex'>
                    <div>
                        <h3 className='text-[20px] font-bold mt-[151px] mb-[15px]'>Shop by Category</h3>
                        <ul className='flex flex-col gap-y-4 mb-10'>
                            <li><a href="#">Woman’s Fashion</a></li>
                            <li><a href="#">Men’s Fashion</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Home & Lifestyle</a></li>
                            <li><a href="#">Medicine</a></li>
                            <li><a href="#">Sports & Outdoor</a></li>
                            <li><a href="#">Baby’s & Toys</a></li>
                            <li><a href="#">Groceries & Pets</a></li>
                            <li><a href="#">Health & Beauty</a></li>
                        </ul>

                        <div>
                            <h3 className='text-[20px] font-bold mb-[15px]'>Shop by Color</h3>

                            <div>
                                <ul className='flex flex-col gap-y-4 mb-10'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[11px] h-[11px] rounded-full bg-black'></div>
                                        <li><a href="">Color 1</a></li>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
                                        <li><a href="">Color 2</a></li>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
                                        <li><a href="">Color 3</a></li>
                                    </div>
                                </ul>
                                

                            </div>
                        </div>
                    </div>
                    <div>
                       <div className='flex items-center gap-2 mt-[151px] ml-[795px]'>
                        <h4>Show:</h4> 
                        <input type="number" className='w-[97px] h-[29px] pl-[20px] border-1 border-[#f5f5f5] bg-[#f5f5f5] focus:outline-none ' />
                       </div>
                       <div className='grid grid-cols-3 ml-[107px] mt-15 gap-y-20 mb-[67px]'>
                        <Cart per="-40%"
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

                        <Cart per="-35%"
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

                        <Cart per="-30%"
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

                         <Cart per="-40%"
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

                        <Cart per="-35%"
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

                        <Cart per="-30%"
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

                         <Cart per="-40%"
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

                        <Cart per="-35%"
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

                        <Cart per="-30%"
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
                       </div>

                       <div className='flex gap-4 ml-[107px] mb-[104px] pt-[40px]'>
                        <Btn/> 
                        <Btn/> 
                        <Btn/> 
                        <Btn/> 
                       </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Shop