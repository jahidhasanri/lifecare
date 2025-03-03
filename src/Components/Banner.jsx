import React from 'react';
import OurServices from './OurServices';

const Banner = () => {
    return (
        <div className="relative w-full h-[650px] bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('https://i.ibb.co/KpNSXYPp/pexels-tara-winstead-7722676.jpg')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-50">
                <h1></h1>
            </div>

            <div className="container mx-auto absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-20 mt-[150px] items-center text-white text-center px-6">
              {/* Text Section */}
              <div className="text-start">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold">Your Best Medical Help Center</h2>
                <p className="mt-4 text-lg md:text-xl">Welcome to Life Care, where your health is our top priority</p>
                <button className='btn mt-6 w-[200px]'>All Service</button>
              </div>
              
              {/* Image Section */}
              <div className='lg:relative lg:-mt-[350px]'>
                <img className='h-[200px] lg:absolute top-[35px] left-0 w-[200px] rounded-lg shadow-lg z-10' src="https://i.ibb.co/TBF0btFN/doctore1.jpg" alt="doctor1" />
                <img className='h-[200px] lg:absolute top-[100px] left-[165px] w-[200px] rounded-lg shadow-lg z-20' src="https://i.ibb.co/rR3jDMmr/doctore3.jpg" alt="doctor2" />
                <img className='h-[200px] lg:absolute top-[2px] left-[330px] w-[200px] rounded-lg shadow-lg z-30' src="https://i.ibb.co/3mxdzFbD/doctore2.jpg" alt="doctor3" />
                
              </div>
            </div>
        </div>
    );
};

export default Banner;
