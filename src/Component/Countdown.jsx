import React, { useState, useEffect } from 'react';
import Semiclone from '../assets/Semiclone.png'
import { countDownDateAndTime } from 'countdown-date-time';
import { PiDotBold } from "react-icons/pi";

const Countdown = ({ className, margin, showDot }) => {
    const conduct_date = '2025-08-30 16:54:00';
    const [count, setCount] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown);
        }, 1000);

        return () => clearInterval(interval);
    }, []);




    return (
       <>
      
         <div className='flex gap-6 lg:mt-[-20px] mt-5'>
            <div className={className}>
                <h2 className={`font-medium text-xs font-Poppins ${margin}`}>Days</h2>
                <h2 className='font-bold text-[32px] font-inter'>{count.days}</h2>
            </div>
            <div className='flex gap-1 flex-col mt-5'>
                {showDot && <PiDotBold className='bg-[#E07575] w-2 h-2 rounded-full' />}
                {showDot && <PiDotBold  className='bg-[#E07575] w-2 h-2 rounded-full'/>}
            </div>
            

            <div className={className}>
                <h2 className={`font-medium text-xs font-Poppins ${margin}`}>Hours</h2>
                <h2 className='font-bold text-[32px] font-inter'>{count.hours}</h2>
            </div>
            <div className='flex gap-1 flex-col mt-5'>
                {showDot && <PiDotBold className='bg-[#E07575] w-2 h-2 rounded-full' />}
                {showDot && <PiDotBold  className='bg-[#E07575] w-2 h-2 rounded-full'/>}
            </div>
            

            <div className={className}>
                <h2 className={`font-medium text-xs font-Poppins ${margin}`}>Minutes</h2>
                <h2 className='font-bold text-[32px] font-inter'>{count.minutes}</h2>
            </div>
            <div className='flex gap-1 flex-col mt-5'>
                {showDot && <PiDotBold className='bg-[#E07575] w-2 h-2 rounded-full' />}
                {showDot && <PiDotBold  className='bg-[#E07575] w-2 h-2 rounded-full'/>}
            </div>
            

            <div className={className}>
                <h2 className={`font-medium text-xs font-Poppins ${margin}`}>seconds</h2>
                <h2 className='font-bold text-[32px] font-inter'>{count.seconds}</h2>
            </div>


        </div>

       
       </>
    );
};

export default Countdown;


