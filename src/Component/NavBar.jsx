// import React, { useState } from 'react'
// import Container from './Container'
// import Exclusive from '../assets/Exclusive.png'
// import { CiSearch } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { FaBarsStaggered } from "react-icons/fa6";





// const Navber = () => {

//     const [isOpen, setIsOpen] = useState(false);

//     const handelClick = () => {
//         setIsOpen = (!isOpen);

//     }

//     return (
//         <>
//             <nav className='border-b-[1px] border-[#E5E5E5] pb-[60px] relative'>
//                 <Container className="">

//                     <div className=' flex justify-between items-center  mt-8 lg:mt-[50px]'>
//                         <div>
//                             <img src={Exclusive} alt="" />
//                         </div>
//                         <div className= {`${isOpen ?  "block" :  "hidden" }lg:flex items-center`}>
//                             <div>
//                                 <ul className='flex gap-10 px-[80px]'>
//                                     <li>Home</li>
//                                     <li>Contact</li>
//                                     <li>About</li>
//                                     <li>Sign Up</li>
//                                 </ul>
//                             </div>


//                             <div className='flex items-center gap-5'>
//                                 <div className='relative'>
//                                     <input type="text"
//                                         placeholder='What are you looking for?'
//                                         className='text-xs py-[7px] pl-5 pr-3 w-[243px] bg-[#f5f5f5]' />

//                                     <CiSearch className='text-2xl absolute top-1 right-1' />
//                                 </div>

//                                 <div className=' text-[22px] flex gap-4'>
//                                     <FaRegHeart />
//                                     <IoCartOutline />
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <FaBarsStaggered className='block lg:hidden absolute top-1 right-2.5 text-2xl' onClick={handelClick} />

//                 </Container>
//             </nav>

//         </>
//     )
// }

// export default Navber


import React, { useState } from 'react';
import Container from './Container';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from 'react-redux'



const Navbar = ({ showUser,hideIcon }) => {

    const cart = useSelector((state) => state.allProduct.cart);

    const [menuOpen, setMenuOpen] = useState(false);

    const Menu = () => {
        setMenuOpen(!menuOpen);
    };
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-[#DB4444] font-semibold"
            : "text-[#000000] hover:text-[#DB4444]";


    return (
        <nav className="py-4 border-b border-gray-200 relative">
            <Container>
                <div className="flex items-center justify-between">

                    <NavLink to='/'
                        className="logo text-2xl font-bold ml-6 lg:ml-0">
                        Exclusive
                    </NavLink>


                    <ul className="hidden lg:flex items-center gap-12 text-[16px]">
                        <NavLink to='/' className={navLinkClass}>
                            Home
                        </NavLink>

                        <NavLink
                            className={navLinkClass}>
                            Contact
                        </NavLink>

                        <NavLink to="/about"
                            className={navLinkClass}
                        >
                            About
                        </NavLink>

                        <NavLink to="/signup"
                            className={navLinkClass}>
                            Sign Up
                        </NavLink>

                        
                    </ul>
                    <div className="hidden lg:flex  items-center gap-3">
                        <div className="flex items-center relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-[243px] h-[38px] text-[12px] bg-[#F5F5F5] pl-5 pr-10 rounded focus:outline-none"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[16px]">
                                <CiSearch />
                            </div>
                        </div>
                        {!hideIcon  ? (<div className='block'>
                            <div className="flex items-center gap-4 text-2xl relative">
                                 <NavLink to="/wishlist">
                                 <FaRegHeart />
                                 </NavLink>
                                
                                <NavLink to="/homecart">
                                    <MdOutlineShoppingCart />
                                    <div className='w-5 h-5 rounded-full bg-black text-white text-xs flex justify-center items-center absolute top-[-10px] right-[-12px]'>
                                        {cart.length}
                                    </div>
                                </NavLink>
                                {showUser && <FaRegUser />}
                            </div>
                        </div>) : (<div className='hidden'>
                            <div className="flex items-center gap-4 text-lg">
                                <FaRegHeart />
                                <MdOutlineShoppingCart />
                                {showUser && <FaRegUser />}
                            </div>
                        </div>)}
                    </div>


                    <div className="lg:hidden text-2xl cursor-pointer absolute top-5 right-10" onClick={Menu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </Container>
            {menuOpen && (
                <div className="flex flex-col items-center gap-6 mt-5">
                    <ul className="flex flex-col items-center gap-6 text-[16px]">
                        <NavLink to='/' className={navLinkClass}>
                            Home
                        </NavLink>
                        <NavLink className={navLinkClass}>
                            Contact
                        </NavLink>
                        <NavLink >
                            About
                        </NavLink>
                        <NavLink to="/signup" className={navLinkClass}>
                            Sign Up
                        </NavLink>
                    </ul>
                    <div className="lg:hidden flex  items-center gap-4 mt-4">
                        <div className="flex items-center relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-[243px] h-[38px] text-[12px] bg-[#F5F5F5] pl-5 pr-10 rounded focus:outline-none"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[16px]">
                                <CiSearch />
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
