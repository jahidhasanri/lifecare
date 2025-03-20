import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/banner';
import OurServices from '../Components/OurServices';
import OurInfo from '../Components/OurInfo';
import Testomoniyal from '../Components/Testomoniyal';
import Blog from '../Components/Blog';
import ExpertDoctor from '../Components/ExpertDoctor';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <OurServices></OurServices>
            <OurInfo></OurInfo>
            <Testomoniyal></Testomoniyal>
            <Blog></Blog>
            <ExpertDoctor></ExpertDoctor>
        </div>
    );
};

export default Home;