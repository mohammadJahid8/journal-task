import React from 'react';
import sharee1 from '../../images/products/1.png'
import sharee2 from '../../images/products/2.png'
import sharee3 from '../../images/products/3.png'
import sharee4 from '../../images/products/4.png'
import sharee5 from '../../images/products/5.png'
import sharee6 from '../../images/products/6.png'
import hm from '../../images/products/hm.png'
import lo from '../../images/products/lo.png'
import lv from '../../images/products/lv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Womens = () => {
    return (
        <div className='bg-gray-50 py-12 px-6' id='fashion'>
            <h1 className='text-center text-gray-800 py-3 font-bold text-3xl'>Womens Collection</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-6 gap-x-4">
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee1} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee2} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee3} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee4} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee5} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee6} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee6} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
                <div className="hover:shadow-2xl rounded-md shadow-md bg-white text-gray-800 ">
                    <img src={sharee6} alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                    <div className="flex flex-col justify-between p-6 space-y-">
                        <div className="space-y-">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            <p>Price: 100$</p>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Add To Cart</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 rounded pt-14 gap-y-4'>
                <img src={lo} alt="" />
                <img src={hm} alt="" />
                <img src={lv} alt="" />
            </div>
        </div>
    );
};

export default Womens;