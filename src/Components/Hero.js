import React from 'react';
import speaker from '../images/products/spk.jpg'
import headphone from '../images/products/head.png'
import watch from '../images/products/wt.png'
import camera from '../images/products/camera.png'

const Hero = () => {
    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr,4fr,1fr] gap-4 px-6">

            <div
                style={{ backgroundImage: `url(${watch})` }}
                className="h-[27rem] md:w-80 bg-no-repeat bg-cover bg-center flex justify-start items-start rounded-xl w-full ">
                <div className='pl-10 pt-14'>
                    <h2 className='tracking-wider text-xl pb-1'>Smart Watch</h2>
                    <p className="font-bold text-3xl pb-2">Lorem ipsum
                        <br />
                        dolor.</p>
                    <a
                        href="/"
                        aria-label=""
                        className="btn btn-outline pb-3 pt-3 px-5  rounded-3xl"
                    >Explore</a>
                </div>
            </div>




            <div className=''>
                <div className="mb-3 uppercase ">
                    <div
                        style={{ backgroundImage: `url(${headphone})` }}
                        className="h-[13rem] bg-no-repeat bg-cover bg-center flex justify-start items-center rounded-xl">
                        <div className='pl-12'>
                            <h2 className='tracking-wider text-xl pb-2'>ZX7 Headphone</h2>
                            <p className="font-bold text-2xl pb-2">Lorem ipsum dol
                                <br />consectetur.</p>
                            <a
                                href="/"
                                aria-label=""
                                className="btn btn-outline pb-3 pt-3 px-5  rounded-3xl"
                            >Explore</a>
                        </div>

                    </div>
                </div>

                <div className="mb-8 uppercase ">
                    <div
                        style={{ backgroundImage: `url(${speaker})` }}
                        className="h-[13rem] bg-no-repeat bg-cover bg-center flex justify-start items-center rounded-xl">
                        <div className='pl-12'>
                            <h2 className='tracking-wider text-xl pb-2'>ZX7 Speaker</h2>
                            <p className="font-bold text-2xl pb-2">Lorem ipsum dol
                                <br />consectetur.</p>
                            <a
                                href="/"
                                aria-label=""
                                className="btn btn-outline pb-3 pt-3 px-5  rounded-3xl"
                            >Explore</a>
                        </div>

                    </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${camera})` }}
                className="h-[27rem] md:w-80 w-full bg-no-repeat bg-cover bg-center flex justify-start items-end  rounded-xl mb-44">
                <div className='pl-20 py-10 text-white'>
                    <h2 className='tracking-wider text-xl pb-1'>Canon Camera</h2>
                    <p className="font-bold text-3xl pb-2">Lorem ipsum
                        <br />
                        dolor.</p>
                    <a
                        href="/"
                        aria-label=""
                        className="btn btn-outline pb-3 pt-3 px-5  rounded-3xl text-white"
                    >Explore</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;