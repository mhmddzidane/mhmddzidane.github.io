import { useState } from "react";
import { git, ig, linked, z } from "../../public/icon";
import ImageWrapper from "../molecules/ImageWrapper";

const Navsbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className=" top-0 sticky z-40 ">
      <div className="bg-black w-full flex text-white py-4 px-4">
        <a href="/">
          <ImageWrapper src={z} alt="logo" className="relative w-8 h-8" />
        </a>

        <div
          className="ml-auto flex cursor-pointer"
          onClick={() => setSidebar(!sidebar)}
        >
          <p>MENU </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>

      <div
        className={` ${
          sidebar ? "translate-x-0 " : "translate-x-full"
        }  ease-in-out duration-300 z-10 bg-black text-white top-14 right-0 w-3/4 md:w-1/4 flex flex-col pl-3 pb-3 h-[100vh] gap-3 text-xl fixed`}
      >
        <a href="#about">
          <p>About</p>
        </a>
        <a href="#portfolio">
          <p>Portfolio</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
        <a href="https://drive.google.com/file/d/1PvXfKp_s4A38Z1YrNgDZRu2Jwf6i8lek/view?usp=drivesdk">
          <p>Resume</p>
        </a>
        <hr className="my-6" />
        <p className="text-base">
          Muhammad Zidane is a 7th semester student at Mercu Buana University
          based in Tangerang, Indonesia.
        </p>
        <a href="mailto:muhammadzidane633@gmail.com">
          <p className="text-base md:text-lg">muhammadzidane633@gmail.com</p>
        </a>
        <div className="flex gap-x-3">
          <a href="https://www.instagram.com/mhmdd.zidane/">
            <ImageWrapper
              src={ig}
              alt="ig icon"
              className="relative h-10 w-10 bg-white"
            />
          </a>
          <a href="https://github.com/mhmddzidane">
            <ImageWrapper
              src={git}
              alt="git icon"
              className="relative h-9 w-9 bg-white rounded-full"
            />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-zidane-337bb4152/">
            <ImageWrapper
              src={linked}
              alt="linked in icon"
              className="relative h-10 w-10 bg-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navsbar;
