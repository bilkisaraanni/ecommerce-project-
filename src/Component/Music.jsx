import React from 'react'

import music from '../assets/music.png'
import Container from './Container'
import Countdown from './Countdown'
const Music = ({ className , margin}) => {
    return (
        <>

            <Container>
                <div className='w-[1170px] h-[500px] bg-black mt-[140px] flex'>
                    <div className='pt-[80px] ml-[50px] space-y-10'>
                        <p className='text-[#00FF66]'>Categories</p>
                        <h2 className='text-white font-semibold text-[35px]'>Enhance Your <br /> Music Experience</h2>
                        <Countdown className="text-black w-[80px] h-[80px] rounded-full bg-white flex justify-between items-center flex-col-reverse " margin='mb-4' />


                        <div>
                            <button className='px-4 py-2 bg-[#00FF66] text-white'>Buy Now!</button>
                        </div>
                    </div>

                    <div className='mt-[80px] ml-[100px] relative'>
                        <img src={music} alt="" className='z-10'/>
                        
                    </div>
                </div>



            </Container>
        </>
    )
}

export default Music