
import device from '../assets/device.png'
import girl from '../assets/girl.png'
import bottel from '../assets/bottel.png'
import gucci from '../assets/gucci.png'
import Container from './Container'
import TopHead from './TopHead'

const NewArrivel = () => {
  return (
    <>
      <Container>
        <div>
          {/* <div className='flex gap-6 ml-[500px]'>
            <div className='w-[20px] h-[40px] bg-[#DB4444] mt-[80px] rounded-[4px] '>
            </div>
            <div className='text-[#DB4444] font-semibold text-[16px] mt-[80px]'>Featured</div>
            <div className='mt-[150px] ml-[-130px] font-semibold text-[30px]'>
              <h2 >New Arrival</h2>
            </div>
          </div> */}

          <div className='flex justify-center'>
            <TopHead
              subTitle="Featured"
              Title="New Arrival"
              className="mt-20"
            />
          </div>

          <div className='flex gap-[30px] mt-[80px]'>
            <div className='w-[570px] h-[600px] bg-black text-white'>
              <div className='py-[50px] space-y-2'>
                <img src={device} alt="" />
                <div className='mt-[-150px] ml-[50px]'>
                  <h3 className='text-[25px]'>PlayStation 5</h3>
                  <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </div>
            </div>

            <div className='w-[570px] h-[284px] bg-black text-white'>
              <div className='ml-[150px]'>
                <img src={girl} alt="" />
              </div>
              <div className='mt-[-150px] ml-[50px] space-y-2'>
                <h3 className='text-[25px]'>Women’s Collections</h3>
                <p>Featured woman collections that <br /> give you another vibe.</p>
                <p className='underline'>Shop Now</p>
              </div>
            </div>
          </div>

          <div>
            <div className='w-[270px] h-[284px] bg-[#000000] text-white  mt-[-290px] ml-[600px]'>
              <div className='pt-[30px] ml-[30px]'>
                <img src={bottel} alt="" />
              </div>
              <div className='mt-[-60px] ml-[20px]'>
                <h3 className='text-[20px]'>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <p className='underline'>Shop Now</p>
              </div>
            </div>

            <div className='w-[270px] h-[284px] bg-[#000000] text-white  mt-[-290px] ml-[900px]'>
              <div className='pt-[30px] ml-[30px]'>
                <img src={gucci} alt="" />
              </div>
              <div className='mt-[-60px] ml-[20px]'>
                <h3 className='text-[20px]'>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <p className='underline'>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default NewArrivel