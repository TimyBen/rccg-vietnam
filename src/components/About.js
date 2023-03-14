import logo from "../assets/rccg_logo.png";
import WorshipBg from "../assets/worship-bg.jpeg";
import ChoirPic from "../assets/rccg-choir.jpeg";
import { Link } from "react-router-dom";
import Brief from "./brief";
// import ScrollBtn from "./ScrollBtn";

function About() {
  return (
    <div className="w-full h-full bg-black bg-opacity-70 scroll-smooth">
      <div className="w-full bg-gradient-to-r from-[#002751] to-[#036871] ">
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
                About Us
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
      <div className="">
      <div className="w-full h-full pb-2">
        <div className="w-full h-fit rounded-b-xl bg-white bg-opacity-90 lg:px-24 lg:p-16">
          <div className=" h-fit w-full flex flex-col justify-center items-center px-2 border-opacity-5">
            <h1 className="font-serif font-bold text-3xl self-center pt-4 leading-loose text-black">
              Who Are We ?
            </h1>
            <p className="font-serif text-2xl self-center leading-loose text-black max-[420px]:text-base lg:px-12 pb-8 ">
              Harvest Center Parish Vietnam is a Parish of the The Redeemed
              Christian Church of God ( RCCG ) VIETNAM. We have been in Vietnam
              since 2013 , ministering to the spiritual needs of those who are
              heavy burdened and desirous of a relationship with our Lord and
              Savior Jesus Christ.
            </p>
          </div>
        </div>
        <div className="w-full min-h-full flex max-[420px]:flex-col justify-between content-center gap-2 pb-3">
          <div className="pt-2 md:w-1/2">
            <div className="h-68 bg-gradient-to-r rounded-lg from-[#e51515] to-[#a80303]">
              <div className="relative w-full h-full bg-gradient-to-r rounded-lg from-[#166856] to-[#0a759cc8]">
                <div className="p-6 w-full">
                  <h1 className="font-serif text-white font-bold pt-8 text-3xl leading-loose text-center">
                    Our Roots
                  </h1>
                  <p className="font-sans text-white text-2xl max-[420px]:text-base leading-loose lg:px-10 pb-8 text-left">
                    Harvest Center was planted through the initiative of RCCG
                    Lagos Province 20 Lekki-Lagos under Pastor Okey Mofunanya.
                    We are presently under the group of churches in RCCG Asia
                    Continent. We began our missionary and soul lifting
                    assignment in 2013. To God be the glory , through this
                    mandate, lives have been liberated from the realm of
                    darkness, many have found their path in life and generally
                    so many have discovered that their citizenship is in the
                    kingdom of Our Lord And Savior Jesus Christ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-fit flex flex-col gap-2">
            <div className="w-full h-68 bg-gradient-to-r rounded-lg from-[#005158] to-[#00101b]">
              <div className="w-full h-full rounded-lg ">
                <div className="p-6">
                  <h1 className="font-serif text-white font-bold text-center pt-8 text-3xl self-center leading-loose">
                    Our Vision
                  </h1>
                  <p className="font-sans text-white text-2xl max-[420px]:text-base self-center leading-loose lg:px-4 pb-6 text-left">
                    Harvest Center was planted through the initiative of RCCG
                    Lagos Province 20 Lekki-Lagos under Pastor Okey Mofunanya.
                    We are presently under the group of churches in RCCG Asia
                    Continent
                  </p>
                </div>
              </div>
            </div>
            <img
              className="rounded-2xl blur-[2px] bg-center bg-contain bg-no-repeat"
              src={ChoirPic}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-fit rounded-t-3xl bg-transparent border-4 lg:px-24 lg:p-16">
          <div className=" h-fit w-full flex flex-col justify-center items-center px-4 border-opacity-5">
            <h1 className="font-serif font-bold text-3xl self-center pt-4 leading-loose text-white">
              Our Beliefs
            </h1>
            <p className="font-serif text-2xl max-[420px]:text-base self-center leading-loose text-white max-md:px-4 pb-8 text-left indent-5">
              As a Parish of the Redeemed Christian Church of God we stand by
              the original vision and mission statement of RCCG. We believe
              that Jesus Christ is Lord and that salvation and access to the
              Almighty God can only be obtained through Him. Acts 4:12, 1
              Timothy 2:5. As many therefore that come to Him , they shall
              obtain mercy and be accepted as beloved children of the Kingdom
              of our Lord and Savior . John 1:12-13, Romans 10:9-10
            </p>
          </div>
        </div>
        </div>
      </div>
      <Brief />
    </div>
  );
}

export default About;
