import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testomoniyal = () => {
  const datas = [
    {
        "name": "Awlad Hossain",
        "designation": "Product Designer",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        "name": "Sarah Johnson",
        "designation": "UI/UX Designer",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Passionate about crafting user-friendly and visually appealing digital experiences."
      },
      {
        "name": "Michael Smith",
        "designation": "Software Engineer",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Experienced in developing scalable web applications with modern technologies."
      },
      {
        "name": "Emily Davis",
        "designation": "Marketing Specialist",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Expert in digital marketing strategies and brand growth techniques."
      },
      {
        "name": "James Anderson",
        "designation": "Full Stack Developer",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Building robust applications using React, Node.js, and MongoDB."
      },
      {
        "name": "Olivia Brown",
        "designation": "Content Writer",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Specialized in crafting engaging and informative content for various industries."
      },
      {
        "name": "William Martinez",
        "designation": "SEO Expert",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Helping businesses rank higher and gain more organic traffic."
      },
      {
        "name": "Sophia Wilson",
        "designation": "Data Scientist",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Analyzing complex data sets to derive meaningful business insights."
      },
      {
        "name": "Benjamin Lee",
        "designation": "Cybersecurity Analyst",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Ensuring online safety through advanced security measures."
      },
      {
        "name": "Mia Thomas",
        "designation": "Graphic Designer",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Creating visually stunning designs that communicate brand stories."
      },
      {
        "name": "Ethan Clark",
        "designation": "Project Manager",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Leading teams to successfully complete projects on time and within budget."
      },
      {
        "name": "Charlotte White",
        "designation": "HR Specialist",
        "profile_image": "https://i.ibb.co.com/KxZ7xXJZ/medium-shot-doctor-desk.jpg",
        "description": "Managing human resources efficiently to build strong teams."
      }
  ];

  return (
    <div className="container mx-auto mb-[130px]">
      {/* Title */}
      <div className="mx-auto text-center w-[300px] md:w-[500px] lg:w-[900px]">
        <h2 className="font-semibold text-[40px] text-[#0A0808] mb-[20px]">
          What Our Patients Says
        </h2>
        <p className="mb-[50px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
        }}
      >
        {datas.map((data, index) => (
          <SwiperSlide key={index} className="p-5">
            <div className="bg-gray-100 rounded-xl p-5 shadow-md text-center">
              {/* Profile Image */}
              <img
                src={data.profile_image}
                alt={data.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              {/* Name & Designation */}
              <h3 className="text-lg font-bold">{data.name}</h3>
              <p className="text-gray-500">{data.designation}</p>
              {/* Description */}
              <p className="mt-3 text-gray-600">{data.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testomoniyal;
