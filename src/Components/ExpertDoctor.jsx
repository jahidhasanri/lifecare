import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom';
const ExpertDoctor = () => {
    const [doctor,setDoctor]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/doctor')
        .then(response=>{
            setDoctor(response.data)
        })
        .catch((error)=>{
            console.log('error is',error);
        })
    },[])
    return (
        <div className='container mx-auto'>
           <h2 className='font-bold text-[40px] text-center mb-5'>Our Expert Doctors</h2>
            <Swiper
                   spaceBetween={10}
                   slidesPerView={1} 
                   breakpoints={{
                     640: { slidesPerView: 1 }, 
                     768: { slidesPerView: 2 },
                     1024: { slidesPerView: 4 }, 
                   }}
                 >
                   {doctor.map((data, index) => (
                     <SwiperSlide key={index} className="p-5">
                       <div className="border rounded-lg shadow-lg p-5 text-start hover:shadow-2xl  hover:bg-slate-50 transition transform duration-300 ">
                            <img 
                                src={data.image} 
                                alt={data.name} 
                                className="w-[324px] h-[200px] mx-auto border border-gray-300"
                            />
                            <h3 className="text-lg font-semibold mt-3">{data.name}</h3>
                            <p className="text-gray-600">{data.qualification}</p>

                            <div className="flex justify-start gap-1 mt-2">
                                {Array.from({ length: Math.round(data.rating) }).map((_, index) => (
                                    <span key={index} className="text-yellow-500 text-lg">★</span>
                                ))}
                            </div>

                            <p className="text-gray-500 mt-2">{data.location}</p>
                            <p className="text-gray-500">Available on {data.availability}</p>
                            <p className="text-gray-700 font-bold mt-2">${data.price}</p>

                            <Link to='/doctorProfile' className="mt-3 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                View Profile
                            </Link>
                        </div>
                     </SwiperSlide>
                   ))}
                 </Swiper>
        </div>
    );
};

export default ExpertDoctor;