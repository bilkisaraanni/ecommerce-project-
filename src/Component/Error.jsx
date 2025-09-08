import React from 'react'
import Container from './Container'
import Navbar from './NavBar'

const Error = () => {
  return (
    <>
      <Container>
        {/* <Navbar /> */}
        <div className='mt-10'>
          <h3>Home / 404 Error</h3>
        </div>

        <div>
          <div className='mt-10 text-center space-y-3'>
            <h2 className='font-medium text-[110px] '>404 Not Found</h2>
            <p>Your visited page not found. You may go home page.</p>
            <div className='mt-20'>
              <button className='w-[254px] h-[56px] rounded-xl bg-[#DB4444] text-white'>Send Massage</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Error