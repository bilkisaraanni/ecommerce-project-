import React from 'react'
import Container from './Container'
import sideimg from '../assets/sideimg.png'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";
import Navbar from './NavBar';

const SignUp = () => {
  return (
    <>
      <Container>
        <Navbar hideIcon={true}/>
        <div className='mt-[140px] flex ' >
          <div className='absolute left-0 '>
            <img src={sideimg} alt="" className='h-[741px] hidden lg:block' />
          </div>
          <div className='ml-[129px] lg:ml-[749px] mt-[125px] '>
            <h4 className='text-[36px] font-medium '>Create an account</h4>
            <p className='taxt-base mt-6'>Enter your details below</p>
            <div className='mt-12 '>
              <input type="text" placeholder='Name' className='border-b-2 border-gray-400 w-[370px] h-[32px] py-2 focus:outline-none' />
            </div>
            <div className='mt-10  '>
              <input type="email" placeholder='Email or Phone Number' className='border-b-2 border-gray-400 w-[370px] h-[32px] py-2 focus:outline-none' />
            </div>
            <div className='mt-10 mb-10 '>
              <input type="password" placeholder='Password' className='border-b-2 border-gray-400 w-[370px] h-[32px] py-2 focus:outline-none' />
            </div>

            <div>
              <a href='#' className='!px-[132px] bg-[#DB4444] py-4'>
                Create Account
              </a>
            </div>
            <div className='mt-8'>

              <a href='#' className='!text-black !flex items-center gap-2 border-1 border-gray-400 hover:!text-white hover:bg-black !px-[88px] py-4'>
                <span className='text-2xl'><FcGoogle /></span>
                Sign up with Google
              </a>
            </div>
            <div className='flex gap-2 items-center mt-8 text-center justify-center '>
              <p>Already have account?</p>
              <NavLink to='/login' className='hover:border-b-2 hover:border-black text-[16p] font-medium'>Log in</NavLink>
            </div>


          </div>



        </div>


      </Container>
    </>
  )
}

export default SignUp