import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
const OurInfo = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 mb-[130px]">
      <div className=" bg-[#07332F] w-[364px] h-[202px] rounded-xl mb-2">
        <div className="flex gap-5 w-[279px] ml-[50px] mt-[50px]  ">
        <div>
        <IoTimeOutline className="text-white mt-2" size={32} />

        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Opening Hours</h2>
          <p className="text-white">open 9:00 am to 12:00 pm in everyday</p>
        </div>
        </div>
      </div>

      <div className="flex bg-[#F7A582] w-[364px] h-[202px] rounded-xl mb-2">
        <div className="flex gap-5 w-[279px] ml-[50px] mt-[50px]">
        <div>
        <CiLocationOn className="text-white mt-2" size={32}/>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Our location</h2>
          <p className="text-white">Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
        </div>
        </div>
      </div>

      <div className="flex bg-[#07332F] w-[364px] h-[202px] rounded-xl">
        <div className="flex gap-5 w-[279px] ml-[50px] mt-[50px]">
        <div>
        <FaPhoneVolume className="text-white mt-2" size={32}/>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Contact Us</h2>
          <p className="text-white">+88 01750 00 00 00 <br />
          +88 01750 00 00 00</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
