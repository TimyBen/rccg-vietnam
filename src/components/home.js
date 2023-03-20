import logo from "../assets/rccg_logo.png";
import { Link } from "react-router-dom";
import Img_1 from "../assets/Img_11.JPG";
import Img_2 from "../assets/Img_2.jpg";
import Img_05 from "../compressed/IMG_05.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Cont from "./cont";
import Brief from "./brief";
// const fadeImages = [Img_1, Img_2];

function Home() {
  return (
    <div className="h-full bg-[#114e5b]">
      <div className="w-full h-full mx-auto">
        <div className="h-full w-full bg-gradient-to-r from-[#002751] to-[#036871] flex justify-between items-center">
          <header className="w-full h-fit flex max-[420px]:flex-col items-center justify-between">
            <Link
              to={"/"}
              className="px-6 py-6 flex justify-center items-center h-fit"
            >
              <img className="w-32 h-32 max-[420px]:w-20 max-[420px]:h-20" src={logo} alt="" />
              <div className="text-xl justify-center pl-6 items-center  font-bold text-white leading-loose">
                <h1 className="text-3xl tracking-wider font-climate leading-normal font-Bold max-[420px]:text-xl">
                  Harvest Center Parish
                </h1>
                <h1 className="text-2xl tracking-wider font-serif font-Bold max-[420px]:text-lg">Vietnam</h1>
              </div>
            </Link>
            <nav className="lg:px-16 h-fit max-[420px]:w-full navbar navbar-expand-lg navbar-light">
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
                {/* <li className="p-3">
                  <button className="ease-linear transform hover:scale-125 transition duration-300">
                    <Link to={"/gallery"} className="nav-link">
                      Gallery
                    </Link>
                  </button>
                </li> */}
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

        <div className="w-full sm:h-[45vh] lg:h-[85vh]">
          <div className="slide-container w-full">
            <Fade className="w-full h-full">
              <div className="each-fade sm:h-[35vh] lg:h-[85vh]">
                <img
                  className="w-full lg:h-[85vh] max-sm:h-[35vh] max-[420px]:h-[35vh] aspect-auto object-fill brightness-125 bg-center bg-contain bg-no-repeat blur-[2px]"
                  src={Img_1}
                  alt=""
                />
                <div className="absolute max-lg:h-[45vh] max-sm:h-[35vh] lg:h-[85vh] flex justify-center items-center top-0 w-full">
                  <div className="h-full font-serif font-medium w-full bg-[#24354512] text-[#f4faff] flex justify-center items-center ">
                    <h1 className="w-full animate-fade lg:h-[85vh] sm:h-[35vh] max-[420px]:h-[35vh] text-[4rem] font-extrabold max-[420px]:text-lg text-center rounded-lg uppercase leading-loose antialiased bg-[#0104062c] tracking-wide description flex justify-center items-center">
                      Live by Faith <br /> be known for Love <br /> & be a voice of Hope
                    </h1>
                    {/* <div className="w-full h-full blur-[10px] bg-black absolute"></div> */}
                  </div>
                </div>
              </div>
              <div className="each-fade sm:h-[45vh] lg:h-[85vh]">
                <img
                  className="w-full lg:h-[85vh] max-sm:h-[35vh] max-[420px]:h-[35vh] object-fill aspect-auto bg-center bg-contain bg-no-repeat brightness-150 blur-[0.5px]"
                  src={Img_2}
                  alt=""
                />
                <div className="absolute max-sm:h-[35vh] max-lg:h-[45vh] lg:h-[75vh] flex justify-center items-center top-0 w-full">
                  <div className="h-full font-serif font-medium w-full bg-[#24354512] text-[#f4faff] flex justify-center items-center ">
                    <h1 className="w-full animate-fade lg:h-[85vh] max-sm:h-[35vh] max-[420px]:h-[35vh] text-[4rem] font-extrabold max-[420px]:text-base text-center rounded-lg uppercase leading-loose antialiased bg-[#0104062c] tracking-wide description flex justify-center items-center">
                      Harvest Center Parish <br /> Football team
                    </h1>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <div className="w-full flex justify-between items-center pb-2 border border-cyan-500">
            <div className="bg-[#0a353c1a] w-full h-[60vh] max-[420px]:h-[70vh] max-[420px]:px-4 md:px-5 lg:px-7">
              <h1 className="description drop-shadow-2xl uppercase leading-loose tracking-widest text-white text-[3rem] font-serif text-center max-[420px]:text-xl font-semibold pb-2 pt-4">Nice to Meet You.</h1>
              <p className="description text-white text-2xl font-serif max-[420px]:text-lg px-2 text-left font- indent-7">
                We are committed to teaching the uncompromising word of God, serving all nations and generations.
                Harvest Center Parish, a parish of the Redeemed Christian Church of God (RCCG), is a dynamic church where praise is enthusiastic, prayer is steadfast, and the preaching is impactful.
                Harvest Center Parish is a love-filled environment, a place where people can come in and feel welcomed, loved and respected. A center of transformation where people are
                equipped to live abundantly in Christ and pleasing to God, Harvest Center Parish is a miracle ground where the Lord meets the needs of His people. Come fellowship with one
                another and with the Father of light. Talk to someone about Christ. Invite someone to church as well.
              </p>
            </div>
          </div>
          <div className="bg-[#0a353c1a] max-[420px]:h-[120vh] max-[420px]:px-4 md:px-10 lg:px-16 ">
            <div className="pt-4 px-2 flex max-[420px]:flex-col max-[420px]:h-full sm:flex-col md:flex-col lg:flex-row lg:gap-10  w-full justify-between items-center">
              <div className="w-fit h-fit flex justify-center items-center pb-3">
                <img className="w-[35vw] md:w-[35vw] max-lg:h-[35vh] bg-cover max-[420px]:w-[55vw] max-[420px]:h-[35vh] brighness-70 rounded-lg border border-opacity-60 border-cyan-700 " src={Img_05} alt="" />
              </div>
              <div className="pb-3  h-full max-[420px]:h-full flex justify-center lg:border-2 border-opacity-60 border-cyan-700 rounded-md items-center bg-[]">
                <p className="flex flex-col h-[65vh] max-lg:h-[70vh] gap-4 justify-center items-center text-left text-black font-sans font-xl antialiased">
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    We see the church as the body of jesus christ. Ephesians 1:23, Romans 12:5
                  </span>
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    We are members of one family. 1 Corinthians 12:12-13
                  </span>
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    You are not just a member but sons and daughters of the kingdom. Ephesians 2:14-22
                  </span>
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    We live and walk by faith. Romans 1:16-17
                  </span>
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    Our delight is in the word of god . Psalm 1:2, Colossians 3:16-17.
                  </span>
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    There is alienation to tribe and language, for we are all one in Christ. Galatians 3:26-29.
                  </span>
                  <span className="w-[30vw] max-[420px]:w-full md:w-full sm:w-full bg-white rounded-xl px-5 py-4">
                    Join family all you need is to accept the lordship and authority of jesus Christ over your life. Romans 10:9-10.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full pt-2">
            <Cont />
          </div>
        </div>
        <Brief />
      </div>
    </div>
  );
}

export default Home;
