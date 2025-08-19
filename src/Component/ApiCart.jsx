// import React from 'react'
// import Container from './Container'

// import star from '../assets/star.png'
// import heart from '../assets/heart.png'
// import eye from '../assets/eye.png' 
// import { Flex, Rate } from 'antd';

// const ApiCart = ({product}) => {
//     return (
//         <>
//             <Container>
//                 <div className='w-[270px]  bg-white '>
//                     <div className='w-[270px] h-[250px] bg-[#F5F5F5] flex '>
//                         <div className='w-[55px] h-[26px] bg-[#DB4444] mt-[50px] ml-[20px] text-white text-center'>{item.discountPercentage}</div>
//                         <div className='ml-[150px] mt-[20px]'>
//                             <img src={heart} alt="" />
//                             <span></span>
//                             <img src={eye} alt="" className='mt-[10px]' />
//                         </div>
//                     </div>
//                     <div>
//                         <img src={product.thumbnail} alt="" className='mx-auto mt-[-250px]' />
//                         <div className='w-[270px] h-[41px] hover:bg-black text-white text-center font-medium text-[16px]  flex items-center justify-center '>
                            
//                             <h3>Add to cart</h3>
//                         </div>
//                     </div>
//                     <div className='mt-[20px] space-y-2'>
//                         <h3 className='font-medium text-[16px]'>{item.title}</h3>
//                         <div className='flex gap-2'>
//                             <p className='text-[#DB4444]'>{item.price}</p>
//                             <p className='text-gray-500'></p>
//                             $ {Math.floor(item.price / (1-item.discountPercentage / 100))}
//                         </div>
//                         <div className='flex gap-2'>
//                             {/* <img src={star} alt="" /> */}
//                              <Rate  value={item.rating} />
//                             <p className='text-gray-500'></p>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </>
//     )
// }

// export default ApiCart


import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Flex, Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const ApiCart = ({ img,  discount, title, price, discountprice, rating, stock }) => {
  
    return (
        <>
            <div>
                <div className='group relative   w-[230px] h-[250px] bg-[#F5F5F5] overflow-hidden'>
                    <img src={img} alt="" className='max-h-full object-contain mix-blend-multiply p-2 mx-auto w-[180px] pt-7' />

                    <div className='absolute bottom-[-48px] left-0 w-full  group-hover:bottom-0 duration-800'>
                        <a href="#" className='block text-center bg-[#000000] text-white py-[12px]'>
                            Add To Cart
                        </a>
                    </div>
                    <div className='absolute top-[20px] left-[12px] '>
                        <span className='text-white bg-[#DB4444] px-3'>{ discount}%</span>
                    </div>
                    <div className='absolute top-[12px] right-[12px] '>
                        <div className='bg-[#ffffff] w-8 h-8 rounded-full mx-auto grid place-items-center'>
                            <FaRegHeart />
                        </div>
                        <div className='bg-[#ffffff] w-8 h-8 rounded-full mx-auto grid place-items-center mt-2'>
                            <FaEye />
                        </div>
                    </div>
                </div>

                <div>

                </div>
                <h3 className='text-[16px] font-medium mt-4'>{title}</h3>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-[#DB4444] text-lg font-medium">${price}</span>
                    <span className="text-gray-400 line-through">${discountprice}</span>
                </div>
                <div className='flex gap-2 mt-2'>
                    <div>
                        <Flex gap="middle" vertical>
                            <Rate value={rating} />

                        </Flex>
                    </div>

                    <p>({stock})</p>
                </div>
            </div>
        </>
    )
}

export default ApiCart