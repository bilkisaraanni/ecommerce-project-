import React from 'react'
import crossicon from '../assets/crossicon.png'
import { useDispatch } from 'react-redux'
import { RemoveCartReducer,QuentityUpdate } from '../Slices/ProductSlice'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";




const CartItem = ({ img, titel, price,  id, quan , index}) => {

  const dispatch = useDispatch();

  

  function handleDelet() {
    dispatch(RemoveCartReducer(id));
    
  }

  function handelIncrement() {
    dispatch(QuentityUpdate({ id:index, quan, actionname: "increment"}));
  }

  function handleDectement() {
    dispatch(QuentityUpdate({ id:index, quan, actionname: "Decrement"}));
  }
  




  return (
    <>
      <div>
        
        <div className='mt-10 flex justify-between items-center px-10'>
          <div className='flex gap-2 items-center' >
            <div className='relative h-12 w-15'>
              <img src={img} alt="" />
              <img src={crossicon} alt="" className='absolute -top-1 -left-1' onClick={handleDelet} />
            </div>
            <div>
              <h3>{`${titel.slice(0, 20)}...`}</h3>
            </div>
          </div>

          <div className='ml-[-120px]'>
            <h4>{price}</h4>
          </div>
          <div className='flex items-center gap-4 px-3 py-1.5 border-1 border-gray-500 rounded-[4px]'>
           <div>
            {quan}
           </div>
           <div>
            <button>
            <IoIosArrowUp className='cursor-pointer' onClick={handelIncrement}/>
            <IoIosArrowDown className='cursor-pointer' onClick={handleDectement}/>
            </button>
           </div>
          </div>

          <div>
            <h3> {quan * price}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem