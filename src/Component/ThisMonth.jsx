import React from 'react'



const ThisMonth = ({ love, eyee, dress, heading, pure, puree, img, math }) => {
    return (
        <>
            
                <div>
                    <div className='w-[270px] h-[350px] bg-white  mt-[50px]'>
                        <div className='w-[270px] h-[250px] bg-[#F5F5F5] flex '>
                            <div className='ml-[200px] mt-[20px]'>
                                <img src={love} alt="" />
                                <img src={eyee} alt="" className='mt-[10px]' />
                            </div>
                        </div>
                        <div className='mt-[-210px] ml-[30px]'>
                            <img src={dress} alt="" />
                        </div>
                        <div className='mt-[40px] space-y-1'>
                            <h2 className='font-medium text-[16px]'>{heading}</h2>
                            <div className='flex gap-2'>
                                <p className='text-[#DB4444]'>{pure}</p>
                                <p>{puree}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={img} alt="" />
                                <p>{math}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default ThisMonth