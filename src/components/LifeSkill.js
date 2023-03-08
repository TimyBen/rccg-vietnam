import logo from "../assets/rccg_logo.png";
import LifeSkillLogo from "../assets/lifeskill-bg.png";
import { Link } from "react-router-dom";

function LifeSkill() {
  return (
    <div className="">
      <div className="w-full h-full">
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
        <div className="h-fit w-full">
          <div className="w-full lg:h-[30rem] max-sm:h-[27vh] max-lg:h-[40.5vh] absolute z-10 ">
            <div className="w-full flex justify-center items-center">
              <div className="flex justify-center content-center lg:h-[5rem] max-sm:h-12 max-lg:h-16 w-[60%] bg-[#154163] bg-opacity-90 rounded-tl-3xl rounded-br-3xl absolute bottom-0">
                <h1 className="justify-center flex self-center text-4xl max-sm:text-2xl font-serif text-white tracking-wide font-Bold">
                  Life Skill Training
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-fit">
            <img
              className="w-full lg:h-[30rem] object-contain aspect-auto bg-center bg-contain bg-no-repeat"
              src={LifeSkillLogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeSkill;
