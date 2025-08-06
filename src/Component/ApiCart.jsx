import React from 'react'
import Container from './Container'
import star from '../assets/star.png'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'

const ApiCart = ({item}) => {
    return (
        <>
            <Container>
                <div className='w-[270px] h-[360px] bg-white '>
                    <div className='w-[270px] h-[250px] bg-[#F5F5F5] flex '>
                        <div className='w-[55px] h-[26px] bg-[#DB4444] mt-[20px] ml-[20px]'>{item.discountPercentage}</div>
                        <div className='ml-[150px] mt-[20px]'>
                            <img src={heart} alt="" />
                            <span></span>
                            <img src={eye} alt="" className='mt-[10px]' />
                        </div>
                    </div>
                    <div>
                        <img src={item.thumbnail} alt="" className='mx-auto mt-[-250px]' />
                        <div className='w-[270px] h-[41px] hover:bg-black text-white text-center font-medium text-[16px] mt-[10px] pt-[8px] flex items-center justify-center gap-2'>
                            
                            <h3>Add to cart</h3>
                        </div>
                    </div>
                    <div className='mt-[20px] space-y-2'>
                        <h3 className='font-medium text-[16px]'>{item.title}</h3>
                        <div className='flex gap-2'>
                            <p className='text-[#DB4444]'>{item.price}</p>
                            <p className='text-gray-500'></p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <p className='text-gray-500'></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ApiCart

