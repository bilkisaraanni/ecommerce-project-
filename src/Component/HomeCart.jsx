import React, {useState} from 'react'
import smmonitor from '../assets/smmonitor.png'

import gamepad from '../assets/gamepad.png'
import Navbar from './NavBar'
import { useSelector } from 'react-redux'
import Container from './Container'
import BreadCrumb from './BreadCrumb'
import Item from 'antd/es/list/Item'
import CartItem from './CartItem'


const HomeCart = () => {
   const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  
  const cartdata = useSelector((state) => state.allProduct.cart);     
  const subtotal = useSelector((state) => state.allProduct.subTotal);  
   
  
  return (
    <>

      <Container>
        {/* <Navbar showUser={true} /> */}
        <div>
          <div className='mt-10'>
            <BreadCrumb />
          </div>
          <div className='mt-[80px] flex justify-between items-center px-10'>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>

          </div>

         

             {
              cartdata.map((item,id)=>{
                return(
                    <CartItem
                    index={id}
                    quan={item.quan}
                    key={id}
                    id={item.id}
                    img={item.thumbnail}
                    titel={item.title}
                    price={item.price}
                    discountprice={Math.floor(Item.price / (1 - Item.discountPercentage / 100))}
                    />
                )
              })
             }




          {/* <div className='mt-10 flex justify-between items-center px-10'>
            <div className='flex gap-2 items-center' >
              <div className='relative '>
                <img src={gamepad} alt="" />
              </div>
              <div>
                <h3>LCD Monitor</h3>
              </div>
            </div>

            <div className='ml-[-100px]'>
              <h4>$550</h4>
            </div>
            <div>
              <input type="number" placeholder='02' className='w-[72px] h-[44px] border-[1px] border-[#E5E5E5] p-2' />
            </div>

            <div>
              <h3>$1100</h3>
            </div>
          </div> */}

          <div className='mt-[50px] flex justify-between  '>
            <div>
              <input type="text" placeholder='Return To Shop' className='w-[218px] h-[56px] border-[1px] border-[#DFDFDF] text-center' />
            </div>

            <div>
              <input type="text" placeholder='Update Cart' className='w-[218px] h-[56px] border-[1px] border-[#DFDFDF] text-center' />
            </div>
          </div>

          <div className='mt-[80px] flex justify-between '>
            <div className='flex gap-3'>
              <input type="text" placeholder='Coupon Code' className='w-[300px] h-[56px] border-[1px] border-[#BFBFBF] p-6' />
              <button className='w-[211px] h-[56px]  bg-[#DB4444] text-white text-center text-1xl rounded-[4px]'>Apply Coupon</button>

            </div>

            <div className='w-[470px] h-[324px] border-1 '>
              <div className='py-8 px-6'>
                <div className='pb-6 '>
                  <h3 className='text-[24px] font-medium font-Poppins'>Cart Total</h3>
                </div>
                <div className='flex justify-between border-b-1 border-[#D8D8D8D8] pb-2'>
                  <h3 className='text-[16px] font-Poppins'>Subtotal:</h3>
                  <h3 className='text-[16px] font-Poppins'>${Number(subtotal).toFixed(2)}</h3>
                </div>
                <div className='flex justify-between border-b-1 border-[#D8D8D8D8] pb-2 mt-4'>
                  <h3 className='text-[16px]  font-Poppins'>Shipping:</h3>
                  <h3 className='text-[16px] font-Poppins'>Free</h3>
                </div>
                <div className='flex justify-between  pb-6 mt-4'>
                  <h3 className='text-[16px]  font-Poppins'>Total:</h3>
                  <h3 className='text-[16px] font-Poppins'>${Number(subtotal).toFixed(2)}</h3>
                </div>
                <div className='text-center'>
                  <button className='w-[260px] h-[56px]  bg-[#DB4444] text-white text-center text-1xl text-[16px]  font-Poppins rounded-[4px]'>Procees to checkout</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default HomeCart