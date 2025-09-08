import React, { useEffect, useState } from 'react';
import Container from './Container'
// import Cart from './Cart'
import Btn from './Btn'
import heart from '../assets/heart.png'
import eye from '../assets/eye.png'
import game from '../assets/game.png'
import star from '../assets/star.png'
import keyboat from '../assets/keyboat.png'
import desktop from '../assets/desktop.png'
import chair from '../assets/chair.png'
import Navbar from './NavBar'
import ApiCart from './ApiCart';
import Skeleton from './Skeleton';
import Pegination from './Pegination';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { productReducer, FilterReducer } from '../Slices/ProductSlice';
import Product from './Product';
import BreadCrumb from './BreadCrumb';






const Shop = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [optionValue, setOptionValue] = useState(6)
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch()

    


    async function getAllProducts() {
        let data = await axios.get('https://dummyjson.com/products');
        setProducts(data.data.products);
        dispatch(productReducer(data.data.products));
        setLoading(false);
    }


    useEffect(() => {
        // fetch("https://dummyjson.com/products")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setProducts(data.products);
        //         setLoading(false);
        //     });
        getAllProducts()
    }, []);

    const handelFilter = (item) => {
        const filterProduct = products.filter((CItem) => CItem.category == item);
        dispatch(FilterReducer(filterProduct));
    }

    useEffect(() => {
        const uniqueCategory = [...new Set(products.map((item) => item.category))];
        setCategory(uniqueCategory);
    }, [products])

    const handleAllProduct = () => {
        dispatch(productReducer(products));
    }


    return (
        <>
            <Container>
                {/* <Navbar showUser={true} /> */}
                <BreadCrumb />
                 
                <div className='flex mt-12'>
                    <div className='w-[25%px]'>
                        <h3 className='text-[20px] font-bold  w-[184px] mb-[15px]'>Shop by Category</h3>


                        <ul className='flex flex-col gap-y-4 mb-10'>
                            <li
                                onClick={handleAllProduct}
                                className='capitalize cursor-pointer select-none'
                            >All Products
                            </li>

                            {
                                category.map((item, id) => (
                                    <li
                                        key={id} onClick={() => handelFilter(item)} className='capitalize cursor-pointer select-none'>{item}
                                    </li>
                                ))
                            }
                            {/* <li><a href="#">Woman’s Fashion</a></li>
                            <li><a href="#">Men’s Fashion</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Home & Lifestyle</a></li>
                            <li><a href="#">Medicine</a></li>
                            <li><a href="#">Sports & Outdoor</a></li>
                            <li><a href="#">Baby’s & Toys</a></li>
                            <li><a href="#">Groceries & Pets</a></li>
                            <li><a href="#">Health & Beauty</a></li> */}
                        </ul>

                        <div>
                            <h3 className='text-[20px] font-bold mb-[15px]'>Shop by Color</h3>

                            <div>
                                <ul className='flex flex-col gap-y-4 mb-10'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[11px] h-[11px] rounded-full bg-black'></div>
                                        <li><a href="">Color 1</a></li>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
                                        <li><a href="">Color 2</a></li>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
                                        <li><a href="">Color 3</a></li>
                                    </div>
                                </ul>


                            </div>
                        </div>
                    </div>
                    <div className='w-[75%]'>
                        <div className='flex items-center gap-3 ml-[770px]'>
                            <span className=" ">Show :</span>

                            <select
                                value={optionValue}
                                onChange={(e) => setOptionValue(Number(e.target.value))}
                            >
                                <option value={6}>6</option>
                                <option value={9}>9</option>
                                <option value={12}>12</option>
                            </select>

                        </div>
                        <div >

                            {
                                loading ? (

                                    <div className='flex flex-wrap gap-6'>
                                        {Array.from({ length: optionValue }).map((_, idx) => (
                                            <Skeleton key={idx} />
                                        ))}

                                    </div>

                                ) : (

                                    <Pegination itemsPerPage={optionValue} />

                                )
                            }


                            {/* <Cart per="-40%"
                                heart={heart}
                                eye={eye}
                                game={game}
                                black="Add To Cart"
                                head="HAVIT HV-G92 Gamepad"
                                pera="$120"
                                peraa="$160"
                                star={star}
                                pg="(88)"
                            />

                            <Cart per="-35%"
                                heart={heart}
                                eye={eye}
                                game={keyboat}
                                black="Add To Cart"
                                head="AK-900 Wired Keyboard"
                                pera="$960"
                                peraa="$1160"
                                star={star}
                                pg="(75)"
                            />

                            <Cart per="-30%"
                                heart={heart}
                                eye={eye}
                                game={desktop}
                                black="Add To Cart"
                                head="IPS LCD Gaming Monitor"
                                pera="$370"
                                peraa="$400"
                                star={star}
                                pg="(99)"
                            />

                            <Cart per="-40%"
                                heart={heart}
                                eye={eye}
                                game={game}
                                black="Add To Cart"
                                head="HAVIT HV-G92 Gamepad"
                                pera="$120"
                                peraa="$160"
                                star={star}
                                pg="(88)"
                            />

                            <Cart per="-35%"
                                heart={heart}
                                eye={eye}
                                game={keyboat}
                                black="Add To Cart"
                                head="AK-900 Wired Keyboard"
                                pera="$960"
                                peraa="$1160"
                                star={star}
                                pg="(75)"
                            />

                            <Cart per="-30%"
                                heart={heart}
                                eye={eye}
                                game={desktop}
                                black="Add To Cart"
                                head="IPS LCD Gaming Monitor"
                                pera="$370"
                                peraa="$400"
                                star={star}
                                pg="(99)"
                            />

                            <Cart per="-40%"
                                heart={heart}
                                eye={eye}
                                game={game}
                                black="Add To Cart"
                                head="HAVIT HV-G92 Gamepad"
                                pera="$120"
                                peraa="$160"
                                star={star}
                                pg="(88)"
                            />

                            <Cart per="-35%"
                                heart={heart}
                                eye={eye}
                                game={keyboat}
                                black="Add To Cart"
                                head="AK-900 Wired Keyboard"
                                pera="$960"
                                peraa="$1160"
                                star={star}
                                pg="(75)"
                            />

                            <Cart per="-30%"
                                heart={heart}
                                eye={eye}
                                game={desktop}
                                black="Add To Cart"
                                head="IPS LCD Gaming Monitor"
                                pera="$370"
                                peraa="$400"
                                star={star}
                                pg="(99)"
                            /> */}
                        </div>


                    </div>
                </div>

            </Container>
        </>
    )
}


export default Shop

