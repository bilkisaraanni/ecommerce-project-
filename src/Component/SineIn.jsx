import React from 'react'
import Container from './Container'
import sideimg from '../assets/sideimg.png'
import Navbar from './NavBar'

const SineIn = () => {
  return (
    <>
     <Container>
      {/* <Navbar hideIcon={true}/> */}
            <div className='mt-[140px] pb-70 flex' >
              <div className='absolute left-0 '>
                <img src={sideimg} alt="" className='h-[700px] hidden lg:block ' />
              </div>
              <div className='ml-[129px] lg:ml-[749px] mt-[125px] '>
                <h4 className='text-[36px] font-medium '>Log in to Exclusive</h4>
                <p className='taxt-base mt-6'>Enter your details below</p>
                
                <div className='mt-10  '>
                  <input type="email" placeholder='Email or Phone Number' className='border-b-2 border-gray-400 w-[370px] h-[32px] py-2 focus:outline-none' />
                </div>
                <div className='mt-10 mb-10 '>
                  <input type="password" placeholder='Password' className='border-b-2 border-gray-400 w-[370px] h-[32px] py-2 focus:outline-none' />
                </div>
                <div className='flex gap-22 items-center'>
                    <a href="" className='px-12 py-4 bg-[#DB4444] text-white '>Log In</a>
                    <a href="" className='text-[#DB4444] '>Forget Password?</a>

                </div>
              </div>
    
            </div>
    
    
          </Container>
    </>
  )
}

export default SineIn