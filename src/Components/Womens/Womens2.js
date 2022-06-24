import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import poster from "../../images/products/poster.png"

const Womens2 = () => {
    return (

        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-[1fr,4fr] px-4 md:px-8 2xl:px-0 bg-gray-50">

            <div className="relative mt-[90px]">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-blue-400">
                        Top Selling Product
                    </div>
                </div>
                <div className="relative pt-3">
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2525392/2022/3/31/686778a7-19c3-4021-94ff-5d4f460ecd031648716950163RAREBlueFloralPrintedMaxiDress1.jpg" alt="mobile" className='w-full h-[30rem]' />
                </div>
            </div>

            <div className="2xl:mx-auto 2xl:container  pt-8 pb-8 flex justify-center">
                <div className="fle flex-col justify-center items-center">
                    <div className="flex justify-start items-start border-b-4 border-blue-500">
                        <p className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">More Womens Collection</p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-6 gap-x-8">
                            <div className="    rounded-md shadow-md bg-white text-gray-800 ">
                                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg" alt="" className="object-cover object-center rounded-t-md h-48 w-full" />
                                <div className="flex flex-col justify-between  space-y-2">
                                    <div className="p-2">
                                        <h2 className="text-xl font-semibold tracking-wide">Donec lectus leo</h2>

                                        <p>Price: 100$</p>
                                    </div>
                                    <button type="button" className="flex items-center justify-center w-full  p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                        Add To Cart</button>
                                </div>
                            </div>
                            <div className="    rounded-md shadow-md bg-white text-gray-800 ">
                                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg" alt="" className="object-cover object-center  rounded-t-md h-48 w-full" />
                                <div className="flex flex-col justify-between  space-y-2">
                                    <div className="p-2">
                                        <h2 className="text-xl font-semibold tracking-wide">Donec lectus leo</h2>

                                        <p>Price: 100$</p>
                                    </div>
                                    <button type="button" className="flex items-center justify-center w-full  p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                        Add To Cart</button>
                                </div>
                            </div>
                            <div className="    rounded-md shadow-md bg-white text-gray-800 ">
                                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg" alt="" className="object-cover object-center h-48 w-full rounded-t-md " />
                                <div className="flex flex-col justify-between  space-y-2">
                                    <div className="p-2">
                                        <h2 className="text-xl font-semibold tracking-wide">Donec lectus leo</h2>

                                        <p>Price: 100$</p>
                                    </div>
                                    <button type="button" className="flex items-center justify-center w-full  p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                        Add To Cart</button>
                                </div>
                            </div>
                            <div className="    rounded-md shadow-md bg-white text-gray-800 ">
                                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13581134/2021/11/18/77d98e7f-75f2-4dcf-bea2-443a837e95b71637229080165-SASSAFRAS-Dusty-Pink-Self-Design-Dobby-Weave-Wrap-Dress--Bel-1.jpg" alt="" className="object-cover object-center h-48 w-full rounded-t-md " />
                                <div className="flex flex-col justify-between  space-y-2">
                                    <div className="p-2">
                                        <h2 className="text-xl font-semibold tracking-wide">Donec lectus leo</h2>

                                        <p>Price: 100$</p>
                                    </div>
                                    <button type="button" className="flex items-center justify-center w-full  p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                        Add To Cart</button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <img src={poster} alt="" className="mt-4 h-[150px]"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Womens2;