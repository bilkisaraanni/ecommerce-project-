import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ApiCart from './ApiCart';
import { useSelector } from 'react-redux'


const Pegination = ({ itemsPerPage, products }) => {
    const ProductData = useSelector((state)=>state.allProduct.product);
    const items = ProductData;


    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((product,id) => {
                        return (
                            <ApiCart
                                key={id}
                                img={product.thumbnail}
                                discount={product.discountPercentage}
                                title={product.title}
                                price={product.price}
                                discountprice={Math.floor(product.price / (1 - product.discountPercentage / 100))}
                                rating={product.rating}
                                stock={product.stock}
                            />
                        )
                }

                    )}
            </>
        );
    }


    const [itemOffset, setItemOffset] = useState(0);


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>

            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className='flex gap-2.5 mt-[50px]'
                pageClassName='px-[25px] py-[2px] bg-black text-white'

            />
        </>
    )
}

export default Pegination