import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faComments, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [open, setIsOpen] = useState(false);
    console.log(open);

    return (
        <>
            <div class="navbar bg-base-100 -my-4 container px-6 md:px-2 mx-auto">
                <div class="flex-1">
                    <ul class=" menu-horizontal p-0">
                        <li><a className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>Top Products</a></li>
                        <li><a className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>Trendings</a></li>
                    </ul>
                </div>
                <div class="flex-none">
                    <ul class=" menu-horizontal p-0">
                        <li><a href="#blogs" className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>Blogs</a></li>
                        <li><a className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:text-blue-500 hover:cursor-pointer md:mx-2'>About Us</a></li>
                    </ul>
                </div>
            </div>


            <nav className="bg-gray-50 shadow mb-4">
                <div className="container px-6 md:px-2 py-3 mx-auto md:flex">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700 " href="#">JOURNAL</a>
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
                            <input type="text" className="w-full py-2 pl-12 pr-56 text-gray-700 bg-white border rounded-md focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                            <span className="absolute inset-y-0 left-0 flex items-center px-3 bg-blue-700">
                                <svg className="w-5 h-5 text-gray-100" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={open ? "w-full md:flex md:items-center md:justify-end" : "w-full md:flex md:items-center md:justify-end hidden"}>


                        <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                            <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">
                                <FontAwesomeIcon icon={faCircleUser} className="h-6 pl-1" />
                                <p>Login</p>
                            </a>
                            <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">
                                <FontAwesomeIcon icon={faComments} className="h-6 pl-3" />
                                <p>Chat Live</p>
                            </a>

                        </div>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-primary">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span class="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">8 Items</span>
                                    <span class="text-info">Subtotal: $999</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="navbar -my-4 py-0  px-4 md:px-6 md:px-10  bg-blue-700">
                <div class="flex-1">
                    <ul class=" menu-horizontal p-0">
                        <li className='bg-yellow-300 py-6'><a className='px-2  text-sm font-medium text-gray-800 transition-colors duration-200 transform hover:text-white hover:cursor-pointer md:mx-2 py-96'>Top Products</a></li>
                        <li className=' py-6'><a href='#electronics' className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded  hover:text-yellow-300 hover:cursor-pointer md:mx-2'>Electronics</a></li>
                        <li className=' py-6'><a href='#tools' className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded  hover:text-yellow-300 hover:cursor-pointer md:mx-2'>Tools</a></li>
                        <li className=' py-6'><a href='#fashion' className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded  hover:text-yellow-300 hover:cursor-pointer md:mx-2'>Fashion</a></li>
                    </ul>
                </div>
                <div class="flex-none">
                    <ul class=" menu-horizontal p-0">
                        <li className=' py-6'><a className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded  hover:text-yellow-300 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faPhone} className="h-4 pr-1" />
                            {/* <span>01633909408</span> */}
                            Phone
                        </a></li>
                        <li className=' py-6'><a className='px-2 py-1 text-sm font-medium text-white transition-colors duration-200 transform rounded  hover:text-yellow-300 hover:cursor-pointer md:mx-2'>
                            <FontAwesomeIcon icon={faEnvelope} className="h-4 pr-1" />
                            Email
                        </a></li>
                    </ul>
                </div>
            </div>

            <div class="  mx-auto bg-blue-700 mt-6 text-base-100 pl-2 md:block hidden">
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, maiores. Totam, quia quisquam nesciunt animi aliquid magnam fugiat optio, quo laboriosam assumenda ab fuga odio tenetur?</h2>
            </div>

        </>
    );
};

export default Navbar;