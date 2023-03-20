import { Gallery } from "react-grid-gallery";
import logo from "../assets/rccg_logo.png";
import Img_01 from "../compressed/IMG_01.jpg";
import Img_02 from "../compressed/IMG_02.jpg";
import Img_03 from "../compressed/IMG_03.jpg";
import Img_04 from "../compressed/IMG_04.jpg";
import Img_05 from "../compressed/IMG_05.jpg";
import { Link } from "react-router-dom";

function GalleryImg() {
  const images = [
    {
      src: { Img_01 },
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: { Img_02 },
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "",
    },

    {
      src: { Img_03 },
      width: 320,
      height: 212,
    },
    {
      src: { Img_04 },
      width: 320,
      height: 212,
    },
    {
      src: { Img_05 },
      width: 320,
      height: 452,
    },
  ];

  return (
    <>
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
                  <Link to={"/gallery"} className="nav-link">
                    Gallery
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
      <Gallery>
      <img className="w-32 h-32 max-[420px]:w-20 max-[420px]:h-20" src={Img_01} alt="" />

      </Gallery>
    </>

  )
}

export default GalleryImg;