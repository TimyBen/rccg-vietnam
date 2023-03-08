import logo from "../assets/rccg_logo.png";
import { Link } from "react-router-dom";
import Img_1 from "../assets/Img_11.JPG";
import Img_2 from "../assets/Img_2.jpg";
// import Img_3 from "../assets/Img_1.jpg";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Cont from "./cont";
import Brief from "./brief";
// const fadeImages = [Img_1, Img_2];

function Home() {
  return (
    <div className="h-full">
      <div className="w-full h-full mx-auto">
        <div className="h-full w-full bg-gradient-to-r from-[#002751] to-[#036871] flex justify-between items-center">
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

        <div className="w-full sm:h-[45vh] lg:h-[75vh]">
          <div className="slide-container w-full">
            <Fade className="w-full h-full">
              <div className="each-fade sm:h-[35vh] lg:h-[75vh]">
                <img
                  className="w-full lg:h-[75vh] max-sm:h-[35vh] max-[420px]:h-[35vh] aspect-auto object-fill bg-center bg-contain bg-no-repeat blur-[2px]"
                  src={Img_1}
                  alt=""
                />
                <div className="absolute max-lg:h-[45vh] max-sm:h-[35vh] lg:h-[75vh] flex justify-center items-center top-0 w-full">
                  <div className="h-full font-serif font-medium w-full lg:py-32 lg:px-20 bg-[#24354512] text-[#f4faff] flex justify-center items-center ">
                    <h1 className="w-[60rem] animate-fade lg:h-[75vh] sm:h-[35vh] max-[420px]:h-[25vh] text-[3rem] max-[420px]:text-base text-center rounded-lg uppercase leading-loose antialiased bg-[#01040622] tracking-wide description flex justify-center items-center">
                      Live by Faith <br /> be known for Love <br /> & be a voice of Hope
                    </h1>
                    {/* <div className="w-full h-full blur-[10px] bg-black absolute"></div> */}
                  </div>
                </div>
              </div>
              <div className="each-fade sm:h-[45vh] lg:h-[75vh]">
                <img
                  className="w-full lg:h-[75vh] max-sm:h-[35vh] max-[420px]:h-[35vh] object-fill aspect-auto bg-center bg-contain bg-no-repeat brightness-5 blur-[0.5px]"
                  src={Img_2}
                  alt=""
                />
                <div className="absolute max-sm:h-[35vh] max-lg:h-[45vh] lg:h-[75vh] flex justify-center items-center top-0 w-full">
                  <div className="h-full font-serif font-medium w-full lg:py-32 lg:px-20 bg-[#24354512] text-[#f4faff] flex justify-center items-center ">
                    <h1 className="w-[60rem] animate-fade lg:h-[75vh] max-sm:h-[35vh] max-[420px]:h-[25vh] text-[3rem] max-[420px]:text-base text-center rounded-lg uppercase leading-loose antialiased bg-[#01040622] tracking-wide description flex justify-center items-center">
                      Harvest Center Parish <br /> Football team
                    </h1>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="w-full h-32 flex bg-[#0e485267] bg-opacity-30 justify-center items-center pt-40 pb-10">
            <h1 className="description text-4xl drop-shadow-2xl uppercase leading-loose tracking-widest animate-bounce text-black text-[2rem] font-serif font-light text-center max-[420px]:text-base">how can we assist <br /> you today ?</h1>
          </div>
          <div className="w-full h-full">
            <Cont />
          </div>
        </div>
        <Brief />
      </div>
    </div>
  );
}

export default Home;
