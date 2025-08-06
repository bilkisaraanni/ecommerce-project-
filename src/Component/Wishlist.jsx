import React from 'react'
import Container from './Container'
import Cart from './Cart'
import { RiDeleteBinLine } from "react-icons/ri";
import bag from '../assets/bag.png'
import box from '../assets/box.png'
import remote from '../assets/remote.png'
import jecket from '../assets/jecket.png'
import star from '../assets/star.png'
import laptop from '../assets/laptop.png'
import desktop from '../assets/desktop.png'
import game from '../assets/game.png'
import keyboat from '../assets/keyboat.png'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Navbar from './NavBar';





const Wishlist = () => {
  return (
    <>
      <Container>
        <Navbar  showUser={true}/>

        <div className=''>
          <div className='flex justify-between mt-10'>
            <h2 className=''>Wishlist (4)</h2>
            <button className='px-4 py-2 border-1'>Move All To Bag</button>
          </div>

          <div className='mt-[60px] flex gap-6'>
            <Cart
              per="-35%"
              delet={<RiDeleteBinLine />}
              showicon={true}
              show={true}
              game={bag}
              black="Add To Cart"
              head="Gucci duffle bag"
              pera="$960"
              peraa="$1160"
            />

            <Cart

              delet={<RiDeleteBinLine />}
              showicon={true}
              game={box}
              black="Add To Cart"
              head="RGB liquid CPU Cooler"
              pera="$960"
              peraa="$1160"
            />

            <Cart

              delet={<RiDeleteBinLine />}
              showicon={true}
              game={remote}
              black="Add To Cart"
              head="GP11 Shooter USB Gamepad"
              pera="$960"
              peraa="$1160"
            />

            <Cart

              delet={<RiDeleteBinLine />}
              showicon={true}
              game={jecket}
              black="Add To Cart"
              head="Quilted Satin Jacket"
              pera="$960"
              peraa="$1160"
            />
          </div>

          <div className='flex gap-6 '>
            <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[170px] rounded-[4px]  '>
            </div>
            <div className=' font-semibold text-[16px] mt-[180px]'>Just For You</div>
           
          </div>
          <div className='ml-[980px] mt-[-50px]'>
             <button className='px-4 py-2 border-1'>See All</button>
          </div>

          <div className='flex gap-6 mt-[80px]'>
            <Cart
              per="-35%"
              show={true}
              delet={<MdOutlineRemoveRedEye />}
              showicon={true}
              game={laptop}
              black="Add To Cart"
              head="ASUS FHD Gaming Laptop"
              pera="$960"
              peraa="$1160"
              star={star}
              pg="(88)"
             
            />

             <Cart
              
              delet={<MdOutlineRemoveRedEye />}
              showicon={true}
              game={desktop}
              black="Add To Cart"
              head="IPS LCD Gaming Monitor"
              pera="$1160"
              star={star}
              pg="(88)"
              
             
            />

             <Cart
              
              delet={<MdOutlineRemoveRedEye />}
              showicon={true}
              game={game}
              black="Add To Cart"
              head="HAVIT HV-G92 Gamepad"
              pera="$560"
              star={star}
              pg="(88)"
             
             
            />

             <Cart
              
              delet={<MdOutlineRemoveRedEye />}
              showicon={true}
              game={keyboat}
              black="Add To Cart"
              head="AK-900 Wired Keyboard"
              pera="$200"
              star={star}
              pg="(88)"
              
             
            />
          </div>

        </div>
      </Container>
    </>
  )
}

export default Wishlist