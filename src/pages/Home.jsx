import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/banner';
import OurServices from '../Components/OurServices';
import OurInfo from '../Components/OurInfo';
import Testomoniyal from '../Components/Testomoniyal';
import Blog from '../Components/Blog';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <OurServices></OurServices>
            <OurInfo></OurInfo>
            <Testomoniyal></Testomoniyal>
            <Blog></Blog>
        </div>
    );
};

export default Home;