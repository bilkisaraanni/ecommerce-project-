import React from 'react'

import Container from './Container'

const Service = ({ img, head, pera }) => {
  return (
    <>
      <Container>
        <div>
          <div className='w-[249px] h-[161px] bg-white space-y-3 mt-[80px] pt-[30px] ml-[80px]'>
            <img src={img} alt="" className='ml-[70px]' />
            <h2 className='font-semibold text-[18px]'>{head}</h2>
            <p className='text-[14px]'>{pera}</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Service