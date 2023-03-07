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
        <header className="w-full h-fit flex items-center justify-between">
          <Link
            to={"/"}
            className="px-6 py-6 flex justify-center items-center h-fit"
          >
            <img className="w-28 h-28" src={logo} alt="" />
            <div className="text-xl justify-center pl-6 items-center  font-bold text-white leading-loose">
              <h1 className="text-3xl tracking-wider font-climate leading-normal font-Bold">
                Harvest Center Parish
              </h1>
              <h1 className="text-2xl tracking-wider font-serif font-Bold">Vietnam</h1>
            </div>
          </Link>
          <nav className="pr-20 h-fit w-[30%] navbar navbar-expand-lg navbar-light">
            <ul className="w-full text-white justify-between content-center leading-normal font-serif font-medium text-xl pl-2 pr-12 py-12 flex navbar-nav mr-auto">
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
      <div className="h-fit w-full bg-black bg-opacity-10">
        <div className="w-full bg-black h-[24rem] absolute bg-opacity-10 z-10 ">
          <div className="w-full h-[24rem] flex justify-center items-center">
            <div className="flex justify-center content-center h-[5rem] w-[60%] bg-[#154163] bg-opacity-90 rounded-t-3xl rounded-b-3xl absolute bottom-0">
              <h1 className="justify-center flex self-center text-4xl font-serif text-white tracking-wide font-Bold">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-fit">
          <img
            className="w-full h-[24rem] blur-sm bg-center bg-contain bg-no-repeat"
            src={WorshipBg}
            alt=""
          />
        </div>
      </div>
      <div className="h-fit flex bg-[#0e485267] bg-opacity-30 flex-row w-full">
        <div className="h-[100vh] w-full flex justify-center items-center px-16 py-8">
          <div className="flex flex-row w-full justify-between items-center">
            <Card className="bg-[#073854e0] hover:bg-[#036871ea] flex flex-col justify-center text-white font-serif rounded-[8rem] h-[40rem] w-[25rem] items-center p-8 ease-linear transform hover:scale-125 transition duration-500">
              <FaLandmark className="pb-4 w-16 h-16" />
              <Card.Body>
                <Card.Title className="text-xl font-semibold leading-relaxed">
                  Worship Center
                </Card.Title>
                <Card.Text className="text-xl font-normal leading-relaxed">
                  Q7, HCMC Vietnam
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-[#073854e0] hover:bg-[#036871ea] flex flex-col justify-center text-white font-serif rounded-[8rem] h-[40rem] w-[25rem] items-center p-8 ease-linear transform hover:scale-125 transition duration-500">
              <TbPhoneCall className="pb-4 w-16 h-16" />
              <Card.Body>
                <Card.Title className="text-xl font-semibold leading-relaxed">
                  Phone
                </Card.Title>
                <Card.Text className="text-xl font-normal leading-relaxed">
                  +84 077 375 5307
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-[#073854e0] hover:bg-[#036871ea] flex flex-col justify-center text-white font-serif rounded-[8rem] h-[40rem] w-[25rem] items-center p-8 ease-linear transform hover:scale-125 transition duration-500">
              <TbMail className="pb-4 w-16 h-16" />
              <Card.Body>
                <Card.Title className="text-xl font-semibold leading-relaxed">
                  Email
                </Card.Title>
                <Card.Text className="text-xl font-normal leading-relaxed">
                  rccg.vietnam@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Cont className=""/>
      <Brief />
    </>
  );
};

export default ContactUs;
