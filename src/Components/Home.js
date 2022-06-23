import React from 'react';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Products2 from './Products/Products2';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Catagories />
            <Products />

        </div>
    );
};

export default Home;