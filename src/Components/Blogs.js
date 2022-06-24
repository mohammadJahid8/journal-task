import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-gray-50' id='blogs'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-9 lg:py-20 ">
                <h2 className='text-center font-bold text-3xl pb-5 underline decoration-blue-500'>Latest Blogs & News</h2>
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300  rounded shadow-sm bg-white">
                        <img
                            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            className="object-cover w-full h-64 transition duration-500 hover:scale-105"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Visit the East
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>

                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="btn w-full rounded-none bg-gray-500 border-none"
                        >
                            Read more
                        </a>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-64 transition duration-500 hover:scale-105"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Simple is better"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Simple is better
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>

                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="btn w-full rounded-none bg-gray-500 border-none"
                        >
                            Read more
                        </a>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-64 transition duration-500 hover:scale-105"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Film It!"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Film It!
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>

                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="btn w-full rounded-none bg-gray-500 border-none"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;