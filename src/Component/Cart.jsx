import React from 'react'
import { IoCartOutline } from "react-icons/io5";



const Cart = ({ star, game, eye, heart, per, black, head, pera, peraa, pg, delet, showicon, show, }) => {
  return (
    <>

      <div className='w-[270px] h-[360px] bg-white '>
        <div className='w-[270px] h-[250px] bg-[#F5F5F5] flex '>
          {show && (<div className='w-[55px] h-[26px] text-white text-center bg-[#DB4444] mt-[20px] ml-[20px]'>{per}</div>)}
          <div className='ml-[150px] mt-[20px]'>
            <img src={heart} alt="" />
           
            <span>{delet}</span>
            <img src={eye} alt="" className='mt-[10px]' />
          </div>
        </div>
        <div>
          <img src={game} alt="" className='mx-auto mt-[-200px]' />
          <div className='w-[270px] h-[41px] hover:bg-black text-white text-center font-medium text-[16px] mt-[10px] pt-[8px] flex items-center justify-center gap-2'>
            {showicon && <IoCartOutline />}
            <h3>{black}</h3>
          </div>
        </div>
        <div className='mt-[20px] space-y-2'>
          <h3 className='font-medium text-[16px]'>{head}</h3>
          <div className='flex gap-2'>
            <p className='text-[#DB4444]'>{pera}</p>
            <p className='text-gray-500'>{peraa}</p>
          </div>
          <div className='flex gap-2'>
            <img src={star} alt="" />
            <p className='text-gray-500'>{pg}</p>
          </div>
        </div>
         
      </div>

    </>
  )
}

export default Cart