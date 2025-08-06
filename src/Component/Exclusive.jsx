import React from 'react'

import ExclusiveLast from './ExclusiveLast'
import { IoSendOutline } from "react-icons/io5";
import qcode from '../assets/qcode.png'
import goole from '../assets/goole.png'
import applee from '../assets/applee.png'
import fb from '../assets/fb.png'
import tw from '../assets/tw.png'
import int from '../assets/int.png'
import ins from '../assets/ins.png'
import Container from './Container';

const Exclusive = () => {
    return (
        <>
            <div className='bg-black'>
                <Container>
                    <div className='  h-[440px]  mt-[150px] text-white ml-[-100px]'>

                        <div className='flex mt-[-50px]'>
                            <div className='mt-[150px] ml-[50px]'>
                                <h1 className='font-bold text-[24px]'>Exclusive</h1>
                                <p className='mt-[10px]'>Subscribe</p>
                                <p className='text-[13px] mt-[10px]'>Get 10% off your first order</p>

                                <input type="text" placeholder='Enter your email' className='border-2 border-white mt-[20px]' />
                                <IoSendOutline className='mt-[-20px] ml-[150px]' />

                            </div>
                            <ExclusiveLast
                                head="Support"
                                one="111 Bijoy sarani,"
                                two="Dhaka, DH 1515, Bangladesh."
                                three="exclusive@gmail.com"
                                four="+88015-88888-9999"
                            />

                            <ExclusiveLast
                                head="Account"
                                one="My Account"
                                two="Login / Register"
                                three="Cart"
                                four="Wishlist"
                                five="Shop"
                            />

                            <ExclusiveLast
                                head="Quick Link"
                                one="Privacy Policy"
                                two="Terms Of Use"
                                three="FAQ"
                                four="Contact"
                            />

                            <ExclusiveLast
                                head="Download App"
                                one="Save $3 with App New User Only"
                                img={qcode}
                                img1={goole}
                                img2={applee}
                                face={fb}
                                twn={tw}
                                inn={ins}
                                inst={int}
                            />
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Exclusive