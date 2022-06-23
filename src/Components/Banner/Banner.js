import React from 'react';
import speaker from '../../images/home/headphone.jpg'
import earphone from '../../images/home/image-earphones-yx1.jpg'

const Banner = () => {
    return (
        <>
            <div className="mt-2 grid  grid-cols-[2fr,1fr] gap-4 px-2 rounded">

                <div className="mb-8 uppercase ">
                    <div
                        style={{ backgroundImage: `url(${speaker})` }}
                        className="h-[32rem] bg-no-repeat bg-cover bg-center flex justify-start items-center">
                        <div className='pl-12'>
                            <p className='bg-blue-600 w-36 p-1 font-bold rounded text-white'>ZX7 Headphone</p>
                            <h2 className='tracking-wider text-3xl pb-6 font-bold'>Sound That Goes <br /> Straight to Your heart</h2>
                            <a
                                href="/"
                                aria-label=""
                                className="btn btn-outline pb-8 pt-5 px-7 rounded-none "
                            >See Product</a>
                        </div>
                    </div>
                </div>



                <div className=" grid gap-x-8  items-center uppercase pb-5">
                    <img className=" w-full -mt-3" src={earphone} alt="sofa-3" />

                    <div className="bg-gray-100 pb-[114px] pt-[125px] h-[230px] flex justify-start items-center">
                        <div className='pl-12 lg:pl-12 '>
                            <h2 className='tracking-wider text-3xl pb-6 font-bold'>yx1 earphones</h2>
                            <a
                                href="/"
                                aria-label=""
                                className="btn btn-outline pb-8 pt-5 px-7 rounded-none "
                            >See Product</a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Banner;