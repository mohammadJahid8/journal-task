import React from 'react';
import sidepd from "../../images/products/sidepd.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div>
            <div className="shadow-md mt-16">
                <div className="">
                    <img className="w-full md:h-[400px]" src={sidepd} alt="mobile" />
                </div>
            </div>

            <div className="mt-6 relative p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-yellow-400">
                        Our Services
                    </div>
                </div>

                <div>
                    <FontAwesomeIcon icon={faTruckFast} />
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;