// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { FaLandmark } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

const Brief = () => {

  return (
    <>
      <div className="w-full">
        <div className="w-full min-h-[35rem] flex max-[420px]:flex-col max-lg:flex-col justify-between bg-gradient-to-r from-[#015c64] to-[#042549] items-center py-4 px-4 text-white">
          <div className="w-[25rem] border-4 h-[60vh] p-6  hover:bg-[#1e4b55a9] ease-linear transform transition duration-500 rounded-lg flex justify-center items-center flex-col">
            <h1 className="w-full font-climate font-semibold text-[2rem] text-center leading-loose tracking-wider max-[420px]:text-2xl border-b-2">About Our Church</h1>
            <p className="font-serif text-left indent-5 text-xl leading-relaxed max-[420px]:text-lg">Harvest Center Parish Vietnam is a Parish of the The Redeemed Christian Church of God ( RCCG ) VIETNAM. We have been in Vietnam since 2013 , ministering to the spiritual needs of those who are heavy burden and desirous of a relationship with our Lord and Savior Jesus Christ.</p>
          </div>
          <div className="w-[25rem] border-4 h-[60vh] p-6 hover:bg-[#1b3850c8] ease-linear transform  transition duration-500 rounded-lg flex justify-center items-center flex-col">
            <h1 className="w-full font-climate font-semibold text-[2rem] text-center leading-loose tracking-wider max-[420px]:text-2xl border-b-2">Our Service Times</h1>
            <p className="border-b-2 leading-relaxed flex flex-col font-serif text-xl py-2 max-[420px]:text-lg">
              <span>Services On Sundays</span>
              <span> <h1>Sunday School</h1>9:30AM - 10:30AM</span>
              <span> <h1>Worship Service</h1>9:30AM - 10:30AM</span>
            </p>
            <p className="border-b-2 leading-relaxed flex flex-col font-serif text-xl py-2 max-[420px]:text-lg">
              <span>Mid-week Services</span>
              <span><h1>Tuesdays</h1>Digging Deep<br /> 7:00PM -8:00PM</span>
              <span><h1>Thursdays</h1>Faith Clinic<br /> 7:00PM -8:00PM</span>
            </p>
          </div>
          <div className="w-[25rem] border-4 h-[60vh] p-6 hover:bg-[#1b3850c8] ease-linear transform transition duration-500 rounded-lg flex justify-center content-center pt-16 flex-col">
            <h1 className="font-climate font-semibold text-[2rem] text-center tracking-wider max-[420px]:text-2xl border-b-2">Worship Center</h1>
            <div className="h-72 flex flex-col justify-center items-center gap-2">
              <div className="px-8 pb-4 flex flex-col justify-between gap-2 items-center">
                <FaLandmark className="w-6 h-6" />
                <p className="font-serif text-xl text-left flex-grow max-[420px]:text-lg">Q7, HCMC Vietnam</p>
              </div>
              <div className="px-8 pb-4 flex flex-col justify-between items-center">
                <TbPhoneCall className="w-6 h-6" />
                <p className="font-serif text-xl text-left flex-grow max-[420px]:text-lg">+84 077 375 5307</p>
              </div>
              <div className="px-8 pb-4 flex flex-col justify-between items-center">
                <TbMail className="w-6 h-6" />
                <p className="font-serif text-xl text-left flex-grow max-[420px]:text-lg">rccg.vietnam@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brief;
