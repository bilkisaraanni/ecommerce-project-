import React from 'react'
import Container from './Container'
import Navbar from './NavBar'
import girltwo from '../assets/girltwo.png'
import service from '../assets/service.png'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import man from '../assets/man.png' 
import man1 from '../assets/man1.png' 
import man2 from '../assets/man2.png' 
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import Serviceone from './Serviceone'



const About = () => {
    return (
        <>
            <Container>
                <Navbar />

                <div className='mt-10'>
                    <h3>Home / About</h3>
                </div>

                <div className='flex gap-12'>
                    <div className='mt-8'>
                        <h2 className='font-bold text-[54px]'>Our Story</h2>
                        <p className='mt-8'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions,<br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
                        <p className='mt-8'>Exclusive has more than 1 Million products to offer, growing at a<br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
                    </div>
                    <div>
                        <img src={girltwo} alt="" className='w-[650px] h-[600px]' />
                    </div>
                </div>

                <div className='flex justify-between mt-[80px] '>
                    <div className='w-[270px] h-[230px] border-2 border-black hover:bg-[#DB4444] flex flex-col justify-center items-center transition-all duration-300 ease-in-out'>
                        <img src={service} alt="" />
                        <h3 className='font-bold text-[32px]'>10.5k </h3>
                        <h3>Sallers active our site</h3>
                    </div>

                    <div className='w-[270px] h-[230px] border-2 border-black hover:bg-[#DB4444] flex flex-col justify-center items-center transition-all duration-300 ease-in-out'>
                        <img src={service1} alt="" />
                        <h3 className='font-bold text-[32px]'>10.5k </h3>
                        <h3>Sallers active our site</h3>
                    </div>


                    <div className='w-[270px] h-[230px] border-2 border-black hover:bg-[#DB4444] flex flex-col justify-center items-center transition-all duration-300 ease-in-out'>
                        <img src={service2} alt="" />
                        <h3 className='font-bold text-[32px]'> 45.5k </h3>
                        <h3>Customer active in our site</h3>
                    </div>


                    <div className='w-[270px] h-[230px] border-2 border-black hover:bg-[#DB4444] flex flex-col justify-center items-center transition-all duration-300 ease-in-out'>
                        <img src={service3} alt="" />
                        <h3 className='font-bold text-[32px]'>25k</h3>
                        <h3>Anual gross sale in our site</h3>
                    </div>
                </div>

                <div className='mt-[60px] flex justify-between'>
                    <div>
                        <div>
                            <img src={man} alt="" />
                            <h3 className='font-bold text-[32px] mt-8'>Tom Cruise</h3>
                            <p className='mt-2'>Founder & Chairman</p>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <CiTwitter />
                            <CiInstagram />
                            <TiSocialLinkedin />
                        </div>
                    </div>

                     <div>
                        <div>
                            <img src={man1} alt="" />
                            <h3 className='font-bold text-[32px] mt-8'>Emma Watson</h3>
                            <p className='mt-2'>Managing Director</p>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <CiTwitter />
                            <CiInstagram />
                            <TiSocialLinkedin />
                        </div>
                    </div>

                     <div>
                        <div>
                            <img src={man2} alt="" />
                            <h3 className='font-bold text-[32px] mt-8'>Will Smith</h3>
                            <p className='mt-2'>Product Designer</p>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <CiTwitter />
                            <CiInstagram />
                            <TiSocialLinkedin />
                        </div>
                    </div>
                </div>

                <div>
                    <Serviceone/>
                </div>

            </Container>
        </>
    )
}

export default About