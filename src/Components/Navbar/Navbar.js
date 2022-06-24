import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faComments, faPhone, faEnvelope, faHouse, faFilePrescription, faCircleQuestion, faCaretDown, faLanguage, faSignLanguage, faDollarSign, faRectangleList, faTruckFast, faShoppingCart, faUserPlus, faHeart, faArrowsLeftRight, faArrowRightArrowLeft, faBarsProgress, faBarChart, faBarsStaggered, faMessage } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [open, setIsOpen] = useState(false);
    console.log(open);

    return (
        <>
            <div class="navbar justify-between bg-base-100 -my-3.5 container px-6 md:px-1 mx-auto">
                <div>
                    <ul class=" menu-horizontal p-0">
                        <li><a className='px-2 py-1 text-sm  text-[#696973] transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faHouse} className='mr-1' />
                            Home</a></li>
                        <li><a className=' py-1 text-sm  text-[#696973] transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-1'>
                            <FontAwesomeIcon icon={faFilePrescription} className='mr-1' />
                            About Us</a></li>
                        <li><a className=' py-1 text-sm  text-[#696973] transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2.5'>
                            <FontAwesomeIcon icon={faEnvelope} className='mr-1' />
                            Email</a></li>
                        <li><a className=' py-1 text-sm  text-[#696973] transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-1'>
                            <FontAwesomeIcon icon={faCircleQuestion} className='mr-1' />
                            FAQ
                            <FontAwesomeIcon icon={faCaretDown} className='h-3 pt-1 ml-1' />

                        </a></li>
                    </ul>
                </div>
                <div class="">
                    <ul class=" menu-horizontal p-0">
                        <li><a href="#blogs" className='px-2 py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faLanguage} className='mr-1' />
                            English
                            <FontAwesomeIcon icon={faCaretDown} className='h-3 ml-1' />
                        </a></li>
                        <li><a className=' py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:ml-1'>
                            <FontAwesomeIcon icon={faDollarSign} className=' mr-1' />
                            US Dollar
                            <FontAwesomeIcon icon={faCaretDown} className='h-3 pt-1 ml-1' />

                        </a></li>
                    </ul>
                </div>
                <div class="">
                    <ul class=" menu-horizontal p-0">
                        <li><a href="#blogs" className='px-2 py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faRectangleList} className='mr-1' />
                            More Menus
                            <FontAwesomeIcon icon={faCaretDown} className='h-3 ml-1' />
                        </a></li>
                        <li><a className=' py-1 text-sm  text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faTruckFast} className='mr-1' />
                            Delivery</a></li>
                    </ul>
                </div>
            </div>


            <nav className="bg-gray-50 shadow mb-4">
                <div className="container px-6 md:px-2 py-3 mx-auto md:flex">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700 " href="#">
                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/logo/journal-logo1x-185x32.png.webp" alt="" className='w-44 lg:w-96 ' />
                            </a>
                        </div>
                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button onClick={() => setIsOpen(!open)} type="button" className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={open ? "w-full md:flex md:items-center md:justify-end" : "w-full md:flex md:items-center md:justify-end hidden"}>

                        <div className="relative ml-12">
                            <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-100 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer">
                                ALL
                                <FontAwesomeIcon icon={faCaretDown} className='h-3 ml-1' />
                            </span>
                            <input type="text" className="w-full py-1.5 pl-16 pr-80 text-gray-700 bg-white border rounded-md focus:border-blue-400  focus:outline-blue-600 " placeholder="Search Here.." />
                            <span className="absolute inset-y-0 right-0 flex items-center px-3 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer">
                                <svg className="w-5 h-5 text-gray-100" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={open ? "w-full md:flex md:items-center md:justify-end" : "w-full md:flex md:items-center md:justify-end hidden"}>


                        <div className="flex flex-col px-2 md:px-12 -mx-4 md:flex-row md:mx-0 md:py-2">
                            <a href="#" className="py-1 text-sm text-[#696973] transition-colors duration-200 transform rounded  hover:text-[#0d52d6] hover:text-gray-100 md:mx-2">
                                <FontAwesomeIcon icon={faCircleUser} className="h-6 pl-1" />
                                <p>Login</p>
                            </a>
                            <a href="#" className="py-1 text-sm text-[#696973] transition-colors duration-200 transform rounded  hover:text-[#0d52d6] hover:text-gray-100 md:mx-2">
                                <FontAwesomeIcon icon={faUserPlus} className="h-6 pl-3" />
                                <p>Register</p>
                            </a>
                            <a href="#" className="py-1 text-sm text-[#696973] transition-colors duration-200 transform rounded  hover:text-[#0d52d6] hover:text-gray-100 md:mx-2">
                                <FontAwesomeIcon icon={faHeart} className="h-6 pl-3" />
                                <p>Whishlist</p>
                            </a>
                            <a href="#" className="py-1 text-sm text-[#696973] transition-colors duration-200 transform rounded  hover:text-[#0d52d6] hover:text-gray-100 md:mx-2">
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} className="h-6 pl-3" />
                                <p>Compare</p>
                            </a>

                        </div>
                        <div>

                        </div>
                        <p className='mr-2 text-[#696973] text-sm hover:text-blue-600 hover:cursor-pointer'>0 Item(s)- $0.00</p>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-primary rounded-none w-12 h-6">

                                <FontAwesomeIcon icon={faShoppingCart} className='h-5' />
                            </label>
                            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">0 Items</span>
                                    <span class="text-info">Subtotal: $000</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>




            <div class="flex justify-between py-[10px] px-6 md:px-8 -my-4 bg-[#0d52d6] text-white uppercase font-medium mb-6 tracking-wide shadow-md">
                <div>
                    <ul class=" menu-horizontal ">
                        <li><a className='bg-[#fed430] pb-[12px] pt-[13px] px-6 pl-4 pr-9 text-sm   transition-colors duration-200 transform hover:bg-gray-100   hover:cursor-pointer  text-black'>
                            <FontAwesomeIcon icon={faBarsStaggered} className='mr-1' />
                            All Department</a></li>
                        <li><a className='hover:bg-gray-100 hover:text-black pb-[12px] pt-[13px] px-4 text-sm   transition-colors duration-200 transform   hover:text-blue-500 hover:cursor-pointer '>

                            Multi Level</a></li>
                        <li><a className='hover:bg-gray-100 hover:text-black pb-[12px] pt-[13px] px-4 text-sm   transition-colors duration-200 transform   hover:text-blue-500 hover:cursor-pointer '>

                            Mega Menu</a></li>
                        <li><a className='hover:bg-gray-100 hover:text-black pb-[12px] pt-[13px] px-4 text-sm   transition-colors duration-200 transform   hover:text-blue-500 hover:cursor-pointer '>

                            Full width
                            <FontAwesomeIcon icon={faCaretDown} className='h-3 pt-1 ml-1' />

                        </a></li>
                    </ul>
                </div>

                <div class="">
                    <ul class=" menu-horizontal p-0 text-white uppercase">
                        <li><a href="#blogs" className='px-4 text-sm transition-colors duration-200 transform  hover:bg-gray-100 hover:text-black pb-[12px] pt-[13px] hover:text-blue-500 hover:cursor-pointer '>
                            <FontAwesomeIcon icon={faPhone} className='mr-1' />
                            18005556789

                        </a></li>
                        <li><a className=' pb-[12px] pt-[13px] px-6 text-sm   transition-colors duration-200 transform hover:bg-gray-100 hover:text-black hover:text-blue-500 hover:cursor-pointer  text-black bg-[#fed430]'>
                            <FontAwesomeIcon icon={faMessage} className='mr-1' />
                            Blog</a></li>
                    </ul>
                </div>
            </div>




            {/* <div class="navbar -my-4 py-0  px-4 md:px-6 md:px-10  bg-blue-700">
                <div class="flex-1">
                    <ul class=" menu-horizontal p-0">
                        <li className='bg-yellow-300 py-6'><a className='px-2  text-sm font-medium text-gray-800 transition-colors duration-200 transform hover:text-white hover:cursor-pointer md:mx-2'>Top Products</a></li>
                        <li className=' py-6'><a href='#electronics' className='px-2 px-4 text-sm font-medium text-white transition-colors duration-200 transform   hover:text-yellow-300 hover:cursor-pointer md:mx-2'>Electronics</a></li>
                        <li className=' py-6'><a href='#tools' className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform   hover:text-yellow-300 hover:cursor-pointer md:mx-2'>Tools</a></li>
                        <li className=' py-6'><a href='#fashion' className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform   hover:text-yellow-300 hover:cursor-pointer md:mx-2'>Fashion</a></li>
                    </ul>
                </div>
                <div class="flex-none">
                    <ul class=" menu-horizontal p-0">
                        <li className=' py-6'><a className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform   hover:text-yellow-300 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faPhone} className="h-4 pr-1" />
                            
                            Phone
                        </a></li>
                        <li className=' py-6'><a className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded  hover:text-yellow-300 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faEnvelope} className="h-4 pr-1" />
                            Email
                        </a></li>
                    </ul>
                </div>
            </div> */}



        </>
    );
};

export default Navbar;