import React from 'react';
import product1 from '../../images/products/pdrs1.jpg';
import product2 from '../../images/products/pdrs2.jpg';


const Products2 = () => {
    return (
        <div className=" grid grid-cols-1 gap-y-3 md:grid-cols-2 gap-x-8  items-center uppercase pb-5 pt-6">
            <div
                style={{ backgroundImage: `url(${product1})` }}
                className="h-[18rem]  bg-no-repeat bg-cover bg-center flex justify-start items-center ">
                <div className='pl-12 pt-14 text-white'>
                    <a
                        href="/"
                        aria-label=""
                        className="btn btn-outline pb-8 pt-5 px-7 rounded-none text-white hover:bg-yellow-500"
                    >Check Out</a>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${product2})` }}
                className="h-[18rem] bg-no-repeat bg-cover bg-center flex justify-start items-center">
                <div className='pl-12 pt-14 text-white'>
                    <a
                        href="/"
                        aria-label=""
                        className="btn btn-outline pb-8 pt-5 px-7 rounded-none text-white hover:bg-yellow-500"
                    >Check Out</a>
                </div>
            </div>
        </div>
    );
};

export default Products2;