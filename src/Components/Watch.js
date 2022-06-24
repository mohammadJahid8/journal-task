import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Watch = () => {
    return (
        <div>
            <div className='bg-gray-50 py-8 px-6' id='electronics'>
                <h1 className='text-center text-gray-800 py-3 font-bold text-3xl'>Watch Collections</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-6 gap-x-4">
                    <div className=" hover:shadow-lg   rounded-md shadow-md bg-white text-gray-800 ">
                        <img src="https://static-01.daraz.com.bd/p/07082da2abee1b61c889cb6eb7fdb7ef.jpg" alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                        <div className="flex flex-col justify-between p-6 space-y-2">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                <p className='font-bold text-blue-300'>Price: 100$</p>
                            </div>

                        </div>
                    </div>
                    <div className=" hover:shadow-lg   rounded-md shadow-md bg-white text-gray-800 ">
                        <img src="https://static-01.daraz.com.bd/p/mdc/aec1f26f4689d029655399db89322a13.jpg" alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                        <div className="flex flex-col justify-between p-6 space-y-2">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                <p className='font-bold text-blue-300'>Price: 100$</p>
                            </div>

                        </div>
                    </div>
                    <div className="  hover:shadow-lg  rounded-md shadow-md bg-white text-gray-800 ">
                        <img src="https://static-01.daraz.com.bd/p/ab3bc2f073a2a4bb579ba5218bde0676.jpg" alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                        <div className="flex flex-col justify-between p-6 space-y-2">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                <p className='font-bold text-blue-300'>Price: 100$</p>
                            </div>

                        </div>
                    </div>
                    <div className="  hover:shadow-lg  rounded-md shadow-md bg-white text-gray-800 ">
                        <img src="https://static-01.daraz.com.bd/p/3dac5214dafb445d00d90fea7bcbee7b.jpg" alt="" className="object-cover object-center w-[2240%] rounded-t-md h-72" />
                        <div className="flex flex-col justify-between p-6 space-y-2">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                <p className="text-gray-700">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                <p className='font-bold text-blue-300'>Price: 100$</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;