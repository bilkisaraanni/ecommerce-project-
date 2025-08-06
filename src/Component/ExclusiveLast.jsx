import React from 'react'

import send from '../assets/send.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const ExclusiveLast = ({ head, one, two, three, four, five, img, img1, img2, face, twn, inst, inn }) => {

    return (
        <>
            
                <div className='pt-[150px] ml-[50px] space-y-4'>
                    <div className='font-bold text-[24px]'>
                        <h2>{head}</h2>
                    </div>
                    <div className=''>
                        <ul className='space-y-3'>
                            <li><a href=""></a>{one}</li>
                            <li><a href=""></a>{two}</li>
                            <li><a href=""></a>{three}</li>
                            <li><a href=""></a>{four}</li>
                            <li><a href=""></a>{five}</li>
                        </ul>
                        <div className='flex gap-2 pt-[10px]'>
                            <img src={img} alt="" />
                            <div>
                                <img src={img1} alt="" />
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-8 pt-[10px]'>
                            <img src={face} alt="" />
                            <img src={twn} alt="" />
                            <img src={inst} alt="" />
                            <img src={inn} alt="" />
                        </div>
                    </div>
                </div>

          
        </>
    )
}

export default ExclusiveLast