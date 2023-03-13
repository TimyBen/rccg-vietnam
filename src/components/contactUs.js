import logo from "../assets/rccg_logo.png";
import React from "react";
import { Link } from "react-router-dom";
import WorshipBg from "../assets/worship-bg.jpeg";
import Card from "react-bootstrap/Card";
import { FaLandmark } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import Cont from "./cont";
import Brief from "./brief";


const ContactUs = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#002751] to-[#036871] ">
        <header className="w-full h-fit flex max-[420px]:flex-col items-center justify-between">
          <Link
            to={"/"}
            className="px-6 py-6 flex justify-center items-center h-fit"
          >
            <img className="w-28 h-28 max-[420px]:w-12 max-[420px]:h-12" src={logo} alt="" />
            <div className="text-xl justify-center pl-6 items-center  font-bold text-white leading-loose">
              <h1 className="text-3xl tracking-wider font-climate leading-normal font-Bold max-[420px]:text-base">
                Harvest Center Parish
              </h1>
              <h1 className="text-2xl tracking-wider font-serif font-Bold max-[420px]:text-xs">Vietnam</h1>
            </div>
          </Link>
          <nav className="lg:px-32 h-fit max-[420px]:w-full navbar navbar-expand-lg navbar-light">
            <ul className="max-[420px]:text-base w-full text-white justify-between content-center leading-normal font-serif font-medium text-xl lg:pr-4  lg:py-12 max-[420px]:p-2 flex navbar-nav mr-auto">
              <li className="p-3">
                <button className="ease-linear transform hover:scale-125 transition duration-300">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </button>
              </li>
              <li className="p-3">
                <button className="ease-linear transform hover:scale-125 transition duration-300">
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </button>
              </li>
              <li className="p-3">
                <button className="ease-linear transform hover:scale-125 transition duration-300">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </button>
              </li>
              <li className="p-3">
                <button className="ease-linear transform hover:scale-125 transition duration-300">
                  <Link to={"/lifeskill"} className="nav-link">
                    Training
                  </Link>
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="sm:h-full w-full">
        <div className="w-full lg:h-[30rem] h-[25vh] max-[420px]:h-[25vh] absolute z-10 ">
          <div className="w-full flex sm:h-[25vh]  justify-center items-center">
            <div className="flex justify-center content-center lg:h-[5rem] max-sm:h-12 max-lg:h-16 w-[60%] bg-[#154163] bg-opacity-90 rounded-tl-3xl rounded-br-3xl absolute bottom-0">
              <h1 className="justify-center flex self-center text-4xl max-sm:text-xl font-serif text-white tracking-wide font-Bold">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <img
          className="w-full h-[25vh] lg:h-[30rem] sm:h-[25vh] max-[420px]:h-[25vh] blur-sm bg-center bg-contain bg-no-repeat"
          src={WorshipBg}
          alt=""
        />
      </div>
      <div className="h-fit flex bg-[#0e485267] bg-opacity-30 flex-row w-full">
        <div className="lg:h-[80vh] w-full flex justify-center items-center lg:px-32 px-4 py-8">
          <div className="flex max-[420px]:flex-col max-lg:flex-row w-full justify-between items-center gap-2">
            <Card className="bg-[#073854e0] hover:bg-[#036871ea] flex flex-col justify-center text-white font-serif rounded-[8rem] lg:h-[30rem] lg:w-[20rem] w-72 items-center p-8 ease-linear transform hover:scale-125 transition duration-500">
              <FaLandmark className="pb-4 w-16 h-16 max-sm:w-10 max-sm:h-10 max-md:w-10 max-md:h-10" />
              <Card.Body>
                <Card.Title className="text-2xl max-[420px]:text-base max-lg:text-base font-semibold leading-relaxed">
                  Worship Center
                </Card.Title>
                <Card.Text className="text-xl max-[420px]:text-base max-lg:text-base font-normal leading-relaxed">
                  Q7, HCMC Vietnam
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-[#073854e0] hover:bg-[#036871ea] flex flex-col justify-center text-white font-serif rounded-[8rem] lg:h-[30rem] lg:w-[20rem]  w-72 items-center p-8 ease-linear transform hover:scale-125 transition duration-500">
              <TbPhoneCall className="pb-4 w-16 h-16 max-sm:w-10 max-sm:h-10 max-md:w-10 max-md:h-10" />
              <Card.Body>
                <Card.Title className="text-2xl max-[420px]:text-base max-lg:text-base font-semibold leading-relaxed">
                  Phone
                </Card.Title>
                <Card.Text className="text-xl max-[420px]:text-base max-lg:text-base font-normal leading-relaxed">
                  +84 077 375 5307
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-[#073854e0] hover:bg-[#036871ea] flex flex-col justify-center text-white font-serif rounded-[8rem] lg:h-[30rem] lg:w-[20rem] w-72 items-center p-8 ease-linear transform hover:scale-125 transition duration-500">
              <TbMail className="pb-4 w-16 h-16 max-sm:w-10 max-sm:h-10 max-md:w-10 max-md:h-10" />
              <Card.Body>
                <Card.Title className="text-2xl max-[420px]:text-base max-lg:text-base font-semibold leading-relaxed">
                  Email
                </Card.Title>
                <Card.Text className="text-xl max-[420px]:text-base max-lg:text-base font-normal leading-relaxed">
                  rccg.vietnam@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Cont className="" />
      <Brief />
    </>
  );
};

export default ContactUs;
