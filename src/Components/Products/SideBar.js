import React from 'react';
import sidepd from "../../images/products/sidepd.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faComments, faMoneyBill, faRightLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div>
            <div className="shadow-md mt-16">
                <div className="">
                    <img className="w-full md:h-[400px]" src={sidepd} alt="mobile" />
                </div>
            </div>

            <div className="mt-[60px] relative p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-yellow-400">
                        Our Services
                    </div>
                </div>

                <div className='text-gray-700'>
                    <div className='flex gap-6 border-b-2 '>
                        <FontAwesomeIcon icon={faTruckFast} className='h-8 mt-2 ' />
                        <p className='font-bold pb-2'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex gap-6 border-b-2 '>
                        <FontAwesomeIcon icon={faComments} className='h-8 mt-2 ' />
                        <p className='font-bold pb-2'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex gap-6 border-b-2 '>
                        <FontAwesomeIcon icon={faMoneyBill} className='h-8 mt-2 ' />
                        <p className='font-bold pb-2'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex gap-6 border-b-2 '>
                        <FontAwesomeIcon icon={faRightLeft} className='h-8 mt-2 ' />
                        <p className='font-bold pb-2'>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>

            <div className="shadow-md relative mt-[60px]">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-yellow-400">
                        Top Selling Product
                    </div>
                </div>
                <div className="relative flex justify-center items-center  py-12 px-16 border-b-2">
                    <img src="https://s.alicdn.com/@sc01/kf/H06dd361e5db144629e3eaf95ca15d6e01.png_480x480.png" alt="mobile" />
                </div>

                <div className="flex justify-center mt-3 space-y-3">
                    <div>
                        <p className="text-lg font-medium leading-4 text-gray-800">Electric Drill</p>
                        <p className="text-lg leading-4 text-gray-600 text-center py-4 font-bold">$790</p>
                        <p className="text-lg leading-4 text-yellow-500 pb-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                </div>
            </div>


            <div className="shadow-md relative mt-6">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-yellow-400">
                        Customer Review
                    </div>
                </div>

                <div className=" mt-[60px] p-4">
                    <div className="h-full text-center">
                        <div class="avatar pt-4">
                            <div class="w-20 rounded-full  ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                        <p className="text-gray-500">Senior Product Designer</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SideBar;