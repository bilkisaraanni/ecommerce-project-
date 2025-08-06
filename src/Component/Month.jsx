import React from 'react'

import ThisMonth from './ThisMonth'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import shirt from '../assets/shirt.png'
import star from '../assets/star.png' 
import bag from '../assets/bag.png' 
import box from '../assets/box.png' 
import table from '../assets/table.png' 
import Container from './Container'


const Month = () => {
    return (
        <>
           <Container>
            <div>
                    <div>
                        <div className='flex gap-6'>
                            <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[170px] rounded-[4px] '>
                            </div>
                            <div className='text-[#DB4444] font-semibold text-[16px] mt-[180px]'>This Month</div>
                        </div>

                        <div className='font-semibold text-[30px] mt-[24px] flex justify-between'>
                            <h1>Best Selling Products</h1>
                            <button className='px-4 py-2 bg-[#DB4444] text-white font-medium text-[10px]'>View All Products</button>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <ThisMonth
                            love={heart}
                            eyee={eye}
                            dress={shirt}
                            heading="The north coat"
                            pure="$260"
                            puree="$360"
                            img={star}
                            math="(65)"
                        />

                         <ThisMonth
                            love={heart}
                            eyee={eye}
                            dress={bag}
                            heading="Gucci duffle bag"
                            pure="$960"
                            puree="$1160"
                            img={star}
                            math="(65)"
                        />

                         <ThisMonth
                            love={heart}
                            eyee={eye}
                            dress={box}
                            heading="RGB liquid CPU Cooler"
                            pure="$160"
                            puree="$170"
                            img={star}
                            math="(65)"
                        />

                         <ThisMonth
                            love={heart}
                            eyee={eye}
                            dress={table}
                            heading="Small BookSelf"
                            pure="$360"
                            img={star}
                            math="(65)" 
                        />
                    </div>
                </div>
           </Container>
        </>
    )
}

export default Month