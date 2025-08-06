import React from 'react'



const Explore = ({ love, eyee, catt, black, like, link, imgg, pic,showDot,dotColor }) => {
    return (
        <>

            <div className='w-[270px] h-[400px] bg-white'>
                <div className='w-[270px] h-[250px] bg-[#F5F5F5]'>
                    <div className='py-[20px] ml-[200px]'>
                        <img src={love} alt="" />
                        <img src={eyee} alt="" className='mt-[10px]' />
                    </div>
                    <div className='mt-[-80px] ml-[20px]'>
                        <img src={catt} alt="" />
                    </div>
                    <div className='w-[270px] h-[41px] hover:bg-black text-white text-center font-medium text-[16px] mt-[10px] pt-[8px]'>{black}</div>
                    <div className='mt-[20px] space-y-2'>
                        <p>{like}</p>
                        <div className='flex gap-2'>
                            <p className='text-[#DB4444] text-[12px] pt-[8px]'>{link}</p>
                            <img src={imgg} alt="" />
                            <p>{pic}</p>
                        </div>

                        {showDot ? (<div className='block'>
                            <div className='flex gap-2'>
                                <div className="h-5 w-5 rounded-full bg-white border-2 border-black flex items-center justify-center">
                                    <div className={`h-3 w-3 rounded-full ${dotColor==='red' ? 'bg-dotred' : dotColor==='green' ? 'bg-dotgreen' : dotColor==='yellow' ? 'bg-dotyellow' : dotColor==='black' ? 'bg-black' : 'bg-amber-800'}`}></div>
                                </div>
                                <div className='w-[20px] h-[20px] bg-red-600 rounded-full'></div>
                            </div>
                        </div>) : (<div className='hidden'>
                            <div className='flex gap-2'>
                                <div className="h-5 w-5 rounded-full bg-white border-2 border-black flex items-center justify-center">
                                    <div className={`h-3 w-3 rounded-full ${dotColor==='red' ? 'bg-dotred' : dotColor==='green' ? 'bg-dotgreen' : dotColor==='yellow' ? 'bg-dotyellow' : 'bg-amber-300'}`}></div>
                                </div>
                                <div className='w-[20px] h-[20px] bg-red-600 rounded-full'></div>
                            </div>
                        </div>)}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Explore