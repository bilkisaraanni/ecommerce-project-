import React from 'react'
import Container from './Container'
import Navbar from './NavBar'
import Bannar from './Bannar'
import Today from './Today'
import Catagories from './Catagories'
import Month from './Month'
import Music from './Music'
import Explore from './Explore'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import cat from '../assets/cat.png'
import star from '../assets/star.png'
import digital from '../assets/digital.png'
import laptop from '../assets/laptop.png'
import cream from '../assets/cream.png'
import carr from '../assets/carr.png'
import shoe from '../assets/shoe.png'
import remote from '../assets/remote.png'
import jecket from '../assets/jecket.png'
import NewArrivel from './NewArrivel'
import Serviceone from './Serviceone'
import TopHead from './TopHead'



const AccountDrop = () => {
    return (
        <>
            <Container>
                {/* <Navbar showUser={true} /> */}
                <Bannar />
                <Today />
                <Catagories />
                <Month />
                <Music />
                <div className='flex gap-6'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[170px] rounded-[4px] '>
                    </div>
                    <div className='text-[#DB4444] font-semibold text-[16px] mt-[180px]'>Our Products</div>
                </div>
                <div className='font-semibold text-[30px] mt-[24px] flex '>
                    <h1>Explore Our Products</h1>
                </div>

                <div className='mt-[50px] flex justify-between'>
                    <Explore
                        love={heart} 
                        eyee={eye}
                        catt={cat}
                        black="Add to cart"
                        like="Breed Dry Dog Food"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />

                     <Explore
                        love={heart} 
                        eyee={eye}
                        catt={digital}
                        black="Add to cart"
                        like="CANON EOS DSLR Camera"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />

                     <Explore
                        love={heart} 
                        eyee={eye}
                        catt={laptop}
                        black="Add to cart"
                        like="ASUS FHD Gaming Laptop"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />
                     <Explore
                        love={heart} 
                        eyee={eye}
                        catt={cream}
                        black="Add to cart"
                        like="Curology Product Set "
                        link="$100"
                        imgg={star}
                        pic="(35)"
                    />
                </div>

                <div className='mt-[50px] flex justify-between'>
                    <Explore
                        love={heart} 
                        eyee={eye}
                        catt={carr}
                        black="Add to cart"
                        like="Kids Electric Car"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                        showDot={true}
                        dotColor="red"
                    />

                     <Explore
                        love={heart} 
                        eyee={eye}
                        catt={shoe}
                        black="Add to cart"
                        like="Jr. Zoom Soccer Cleats"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                        showDot={true}
                        dotColor="yellow"
                    />

                     <Explore
                        love={heart} 
                        eyee={eye}
                        catt={remote}
                        black="Add to cart"
                        like="GP11 Shooter USB Gamepad"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                        showDot={true}
                        dotColor="black"
                    />
                     <Explore
                        love={heart} 
                        eyee={eye}
                        catt={jecket}
                        black="Add to cart"
                        like="Quilted Satin Jacket"
                        link="$100"
                        imgg={star}
                        pic="(35)"
                        showDot={true}
                        dotColor="green"
                        
                    />
                </div>

                 <TopHead 
                  subTitle="Featured"
                  Title="New Arrival"
                  className="mt-20"
                  />

                <NewArrivel/>
                <Serviceone/>

            </Container>
        </>
    )
}

export default AccountDrop