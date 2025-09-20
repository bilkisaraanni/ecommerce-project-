import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Flex, Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { CartReducer, SubTotalReducer, wishlistReducer } from "../Slices/ProductSlice"
import { ToastContainer, toast, Bounce } from 'react-toastify';



const ApiCart = ({ img, discount, title, price, discountprice, rating, stock, id, productDetails }) => {

     const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.allProduct.cart);

    const handelProductDetails = () => {
        navigate(`/productdetails/${id}`);
    }

    const notify = (param) =>
        param == undefined
            ? toast.success('success add to cart', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            : toast.warn('Allredy add to cart', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

function handleAddCart(e) {
    e.preventDefault();

    dispatch(CartReducer({ ...productDetails, quan: 1 }));
    const matchItem = data.find((item) => item.id == id)
    notify(matchItem);
    dispatch(SubTotalReducer())
    
}

function handleWishlist() {
     dispatch(wishlistReducer(productDetails));
}


return (
    <>
        <div >
            
            <div className='group relative   w-[230px] h-[250px] bg-[#F5F5F5] overflow-hidden'>
                <img src={img} onClick={handelProductDetails} alt="" className='max-h-full object-contain mix-blend-multiply p-2 mx-auto w-[180px] pt-7' />

                <div onClick={handleAddCart} className='absolute bottom-[-48px] left-0 w-full  group-hover:bottom-0 duration-800'>
                    <a href="#" className='block text-center bg-[#000000] text-white py-[12px]'>
                        Add To Cart
                    </a>
                </div>
                <div className='absolute top-[20px] left-[12px] '>
                    <span className='text-white bg-[#DB4444] px-3'>{discount}%</span>
                </div>
                <div className='absolute top-[12px] right-[12px] '>
                    <div className='bg-[#ffffff] w-8 h-8 rounded-full mx-auto grid place-items-center'>
                        <FaRegHeart onClick={handleWishlist} className='cursor-pointer'/>
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