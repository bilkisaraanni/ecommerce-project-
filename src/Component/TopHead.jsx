import React from 'react'

const TopHead = ({ subTitle, Title,className }) => {
    return (
        <>
            {/* <div className='flex gap-6 '>
            <div className='w-[20px] h-[40px] bg-[#DB4444]  rounded-[4px] '>
            </div>
            <div className='text-[#DB4444] font-semibold text-[16px] mt-[80px]'>
                {subTitle}
            </div>
            <div className='mt-5 font-semibold text-[30px]'>
              <h2 >{Title}</h2>
            </div>
          </div> */}

            <div className={className}>
                <div className='gap-x-4 items-center flex'>
                    <div className='w-5 h-10 bg-[#DB4444] rounded-[4px]'></div>
                    <h2 className='text-[16px] font-Poppins font-semibold text-[#DB4444]'>{subTitle}</h2>
                </div>
                <h2 className='text-[32px] font-Inter font-semibold text-[#000000] tracking-[4%]'>{Title}</h2>
            </div>

        </>
    )
}

export default TopHead