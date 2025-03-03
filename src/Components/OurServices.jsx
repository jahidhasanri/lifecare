import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/service')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error("Error fetching services:", error);
            });
    }, []);

    return (
        <div className='mt-[80px] mb-[80px]'>
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center ">Our Services</h2>
            <div className='container mx-auto '>
            
                {/* <div className='col-span-4'>
                    <img className='h-[600px] ' 
                         src="https://i.ibb.co.com/5hWbGPKV/doctor-wrking-their-clinic.jpg" 
                         alt="Doctor Working in Clinic" />
                </div> */}

                
                <div className='col-span-8'>
                   
                    <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {services.map(service => (
                            <div key={service._id} className="bg-gray-100 p-4 transition-transform duration-300  rounded-lg shadow-md hover:animate-pulse hover:scale-105 hover:shadow-lg">
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <img className="w-full h-40  rounded-md mt-2" src={service.img} alt={service.title} />
                                <p className="text-gray-600 mt-2 mb-4">{service.short_description}</p>
                                <Link className='btn btn-primary text-center mx-auto'>More Details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
