import { faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faBicycle, faCar, faComputerMouse, faHammer, faHeadphones, faMobile, faMotorcycle, faScrewdriverWrench, faShoePrints, faToolbox, faTrowel, faTruck, faTShirt, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Catagories = () => {
    return (
        <>
            <div className="2xl:mx-auto 2xl:container py-6 lg:px-12 md:px-6 px-4 bg-gray-50 my-6">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center text-center space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">Shop by Catagories</h1>
                        
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7  justify-items-around gap-x-2 gap-y-4 xl:gap-x-2 mt-10">
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className=" h-12" />
                            <p className='font-bold pt-6 text-xl'>Tools</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faAnchor} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Anchor</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faHammer} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Hammer</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faToolbox} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Tool Box</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faTrowel} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Trowel</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faWrench} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Wrench</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faHeadphones} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Headphones</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faTShirt} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Tshirt</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faSpeakerDeck} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>SpeakerDeck</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faMobile} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Mobile</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faComputerMouse} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Mouse</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faCar} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Car</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faMotorcycle} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Motor Cycle</p>
                        </div>
                        <div className="hover:shadow-lg shadow w-full focus:outline-none border focus:border-gray-800 border-transparent bg-base-100 flex justify-center items-center flex-col text-center py-2 px-12 space-y-6">
                            <FontAwesomeIcon icon={faTruck} className="  h-12" />
                            <p className='font-bold pt-6 text-xl'>Truck</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Catagories;