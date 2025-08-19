// import React, { useState } from 'react'
// import { FaEye } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { Flex, Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// const CardShop = ({ product }) => {
//     const [value, setValue] = useState(3);
//     return (
//         <>
//             <div>
//                 <div className='group relative w-[230px] lg:w-[240px] xl:w-[270px] h-[250px] bg-[#F5F5F5] overflow-hidden'>
//                     <img src={product.thumbnail} alt="" className='max-h-full object-contain mix-blend-multiply p-2 mx-auto w-[180px] pt-7' />

//                     <div className='absolute bottom-[-48px] left-0 w-full  group-hover:bottom-0 duration-800'>
//                         <a href="#" className='block text-center bg-[#000000] text-white py-[12px]'>
//                             Add To Cart
//                         </a>
//                     </div>
//                     <div className='absolute top-[20px] left-[12px] '>
//                         <span className='text-white bg-[#DB4444] px-3'>{product.discountPercentage}%</span>
//                     </div>
//                     <div className='absolute top-[12px] right-[12px] '>
//                         <div className='bg-[#ffffff] w-8 h-8 rounded-full mx-auto grid place-items-center'>
//                             <FaRegHeart />
//                         </div>
//                         <div className='bg-[#ffffff] w-8 h-8 rounded-full mx-auto grid place-items-center mt-2'>
//                             <FaEye />
//                         </div>
//                     </div>
//                 </div>

//                 <div>

//                 </div>
//                 <h3 className='text-[16px] font-medium mt-4'>{product.title}</h3>
//                 <div className="flex items-center space-x-2 mt-2">
//                     <span className="text-[#DB4444] text-lg font-medium">${product.price}</span>
//                     <span className="text-gray-400 line-through">${Math.floor(product.price / (1 - product.discountPercentage / 100))}</span>
//                 </div>
//                 <div className='flex gap-2 mt-2'>
//                     <div>
//                         <Flex gap="middle" vertical>
//                             <Rate value={product.rating} />

//                         </Flex>
//                     </div>

//                     <p>({product.stock})</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CardShop