import React from 'react';
import Banner from './Banner/Banner';
import Banner1 from './Banner/Banner1';
import Blogs from './Blogs';
import Catagories from './Catagories/Catagories';
import Coco from './Coco';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar/Navbar';
import Partner from './Partner';
import Products from './Products/Products';
import Products2 from './Products/Products2';
import SideBar from './Products/SideBar';
import Stat from './Stat';
import Watch from './Watch';
import Womens from './Womens/Womens';
import Womens2 from './Womens/Womens2';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            {/* <Banner1 /> */}
            <Stat />
            <Catagories />
            <Products />
            <Coco />
            <Partner />
            <Womens />
            <Watch />
            <Hero />
            <Womens2 />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;