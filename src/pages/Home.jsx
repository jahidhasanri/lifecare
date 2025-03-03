import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/banner';
import OurServices from '../Components/OurServices';
import OurInfo from '../Components/OurInfo';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <OurServices></OurServices>
            <OurInfo></OurInfo>
        </div>
    );
};

export default Home;