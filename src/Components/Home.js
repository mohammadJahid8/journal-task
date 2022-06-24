import React from 'react';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';
import Coco from './Coco';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Partner from './Partner';
import Products from './Products/Products';
import Products2 from './Products/Products2';
import SideBar from './Products/SideBar';
import Watch from './Watch';
import Womens from './Womens/Womens';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Catagories />
            <Products />
            <Coco />
            <Partner />
            <Womens />
            <Watch />
            <Hero />
        </div>
    );
};

export default Home;