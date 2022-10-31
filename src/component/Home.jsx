import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { UserMode } from "../context/ModeContext";

const Home = () => {
  const { toggleMode } = UserMode();

  return (
    <>
      <section
        name="home"
        className="min-h-[94vh] dark:bg-inherit flex flex-col"
      >
        <nav className="flex justify-between sm:flex-row flex-col items-center py-8 px-2">
          <h1 className="text-md font-silksscreenRegular dark:text-white">
            Developed<span className="text-teal-400">by</span>Aubrey
          </h1>
          <ul className="flex items-center my-3">
            <li>
              <BsFillMoonStarsFill
                onClick={() => toggleMode()}
                className="cursor-pointer text-2xl dark:text-slate-400"
              />
            </li>
            {/* <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="hpp"
              >
                Resume/CV
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="text-center flex-1 flex flex-col justify-center">
          <h2 className="text-5xl text-teal-600 font-medium mx-auto">
            Aubrey Nkosi
          </h2>
          <h3 className="text-2xl py-5 dark:text-white capitalize">
            Developer and designer
          </h3>
          <p className="text-md sm:py-3 leading-8 text-gray-800 md:text-xl md:max-w-xl mx-auto dark:text-gray-500 px-10">
            Freelancer providing services for programming and design content
            needs. Get know me a bit better scroll down for more details.
          </p>
        </div>
        <div className="flex-1 text-5xl flex justify-center gap-14 text-gray-600 dark:text-gray-200">
          <ul className="flex gap-4 sm:gap-14 h-fit my-auto">
            <li>
              <a
                href="https://twitter.com/siznkocie"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTwitterCircle className="cursor-pointer" />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAP6OcGFkT42RGsHvD62YvA%3D%3D"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/siznkocy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillGithub className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCrrbXGJpmFZ7jh-nLU2MHUw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillYoutube className="cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <div className="flex-1 hidden sm:block mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden  w-56 h-56">
            <img src="/Sizwe_Nkosi_215026177.png" alt="profile" className="" />
          </div>
        </div>
      </section>
      {/* <section
        name="home"
        className=" min-h-[94vh] dark:bg-inherit flex flex-col"
      >
        <nav className=" flex justify-between sm:flex-row flex-col items-center my-8 mt-20 sm:mt-0">
          <h1 className="text-md font-silksscreenRegular dark:text-white">
            Developed<span className="text-teal-400">by</span>Aubrey
          </h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => toggleMode()}
                className="cursor-pointer text-2xl dark:text-slate-400"
              />
            </li>
            {/* <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="hpp"
            >
              Resume/CV
            </a>
          </li> 
          </ul>
        </nav>
        <div className="text-center flex-1 flex flex-col justify-center">
          <h2 className="text-5xl text-teal-600 font-medium mx-auto">
            Aubrey Nkosi
          </h2>
          <h3 className="text-2xl py-5 dark:text-white">
            Developer and designer
          </h3>
          <p className="text-md sm:py-3 leading-8 text-gray-800 md:text-xl md:max-w-xl mx-auto dark:text-gray-500">
            Freelancer providing services for programming and design content
            needs. Join me down below and get to know me a bit better.
          </p>
        </div>
        <div className="flex-1 text-5xl flex justify-center gap-14 text-gray-600 dark:text-gray-200">
          <ul className="flex gap-14 h-fit my-auto">
            <li>
              <a href="https://twitter.com/siznkocie">
                <AiFillTwitterCircle className="cursor-pointer" />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAP6OcGFkT42RGsHvD62YvA%3D%3D">
                <AiFillLinkedin className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://github.com/siznkocy">
                <AiFillGithub className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCrrbXGJpmFZ7jh-nLU2MHUw">
                <AiFillGithub className="cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-initial  hidden sm:block mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden  w-fit h-fit">
          <img src="/Sizwe_Nkosi_215026177.png" alt="profile" className="" />
        </div>
      </section> */}
    </>
  );
};

export default Home;
