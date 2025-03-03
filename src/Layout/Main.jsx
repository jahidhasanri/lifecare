import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div className='bg-slate-50 flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-220px)]">
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;