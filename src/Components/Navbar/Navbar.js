import React, { useState } from 'react';

const Navbar = () => {
    const [open, setIsOpen] = useState(false);
    console.log(open);

    return (
        <>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>


            <nav className="bg-white shadow">
                <div className="container px-6 py-3 mx-auto md:flex">
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
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={open ? "w-full md:flex md:items-center md:justify-between" : "w-full md:flex md:items-center md:justify-between hidden"}>

                        <div className="relative ml-12">
                            <input type="text" className="w-full py-2 pl-10 pr-56 text-gray-700 bg-white border rounded-md focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                            <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                            <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">About</a>
                            <a href="#" className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;