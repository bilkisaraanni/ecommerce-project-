import React from 'react'



const Phon = ({ className, cell, pera }) => {
  return (
    <>
      
        <div>
          <div className={`${className} w-[170px] h-[145px]  border-2 border-gray mt-[50px] space-y-2 hover:bg-[#DB4444] `}>
            <img src={cell} alt="" className='mx-auto mt-[30px]' />
            <p className='text-center'>{pera}</p>
          </div>
        </div>
     
    </>
  )
}

export default Phon