import React from 'react';
import b1 from '../../images/products/b1.png'
import b2 from '../../images/products/b2.png'
import b3 from '../../images/products/b3.png'
import watch from '../../images/products/b4.png'
import computer from '../../images/products/b5.png'


const Banner = () => {
    return (
        <>
            <div className="mt-8 md:mt-2  grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 px-4 md:px-8 rounded">
                <div className="mb-8">
                    <div
                        style={{ backgroundImage: `url(${b2})` }}
                        className="h-[32rem] bg-no-repeat bg-cover bg-center flex justify-start items-center rounded-2xl">
                        <div className='pl-12'>
                            <p className='bg-blue-600 w-[68px] p-1 font-bold rounded text-white'>Layouts</p>
                            <h2 className='tracking-wider text-4xl pb-6 font-bold'>Sound That Goes <br /> Straight to Your heart</h2>
                            <a
                                href="/"
                                aria-label=""
                                className="btn btn-outline pb-8 pt-5 px-7 rounded-none "
                            >See Product</a>
                        </div>
                    </div>
                </div>


                


                <div className=" grid gap-x-8  items-center pb-5">


                    <div className="bg-gray-100 hover:bg-gray-300 bg-no-repeat bg-cover bg-center  mb-4 flex justify-start h-[16rem] rounded-2xl"
                        style={{ backgroundImage: `url(${watch})` }}>

                        <div className='pl-12 lg:pl-8 pt-12'>
                            <h2 className='tracking-wider pb-2 uppercase text-blue-500'>Wearables</h2>
                            <p className='font-bold text-2xl'>Intelligent
                                <br /> & Durable
                                <br /> Design</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 bg-no-repeat bg-cover bg-center  mb-4 flex justify-start h-[15rem] rounded-2xl"
                        style={{ backgroundImage: `url(${computer})` }}>
                        <div className='pl-12 lg:pl-8 pt-12'>
                            <h2 className='tracking-wider pb-2 uppercase text-blue-500'>Wearables</h2>
                            <p className='font-bold text-2xl'>Intelligent
                                <br /> & Durable
                                <br /> Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;