import { faCube, faShare, faShieldAlt, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Stat = () => {
    return (
        <div>
            <div className=" bg-[#3a4754]">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 lg:px-8 px-4 py-12 lg:py-10 md:px-24 ">
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faTruckFast} className='h-7  p-4 text-[#e96631] border-blue-600 border-2 rounded-[100%] mr-3' />
                        <div className='mt-1.5'>
                            <h6 className="text-xl font-bold text-gray-300">
                                Free Shipping
                            </h6>
                            <p className="text-gray-400">Downloads</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faShare} className='h-7 rotate-180 p-4 text-[#e96631] border-blue-600 border-2 rounded-[100%] mr-3' />
                        <div className='mt-1.5'>
                            <h6 className="text-xl font-bold text-gray-300">
                                Free Returns
                            </h6>
                            <p className="text-gray-400">Hassle Free Returns</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-5 md:pt-0 pl-2 md:pl-0">
                        <FontAwesomeIcon icon={faShieldAlt} className='h-7  p-4 text-[#e96631] border-blue-600 border-2 rounded-[100%] mr-3' />
                        <div className='mt-1.5'>
                            <h6 className="text-xl font-bold text-gray-300">
                                Secure Shopping

                            </h6>
                            <p className="text-gray-400">Best security features</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-5 md:pt-0 pl-2 md:pl-0">
                        <FontAwesomeIcon icon={faCube} className='h-7  p-4 text-[#e96631] border-blue-600 border-2 rounded-[100%] mr-3' />
                        <div className='mt-1.5'>
                            <h6 className="text-xl font-bold text-gray-300">
                                Unlimited Blocks

                            </h6>
                            <p className="text-gray-400">Any content, any page</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stat;