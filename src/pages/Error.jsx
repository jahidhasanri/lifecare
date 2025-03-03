import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
           <div className='text-center'>
            <h1 className='text-4xl font-semibold mb-2'>Sorry</h1>
            <h5 className='text-neutral font-medium mb-8'>This page is not found</h5>
           <img className='ml-[470px] mb-[40px]' src="https://i.ibb.co.com/XrPLtjsJ/Frame.png" alt="" />
           <Link to='/'  className='btn btn-primary'>Back to Home</Link>
           </div>
        </div>
    );
};

export default Error;